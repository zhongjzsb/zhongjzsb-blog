import fs from "node:fs";
import path from "node:path";

const imageDirectory = process.argv[2] ?? "static/images";
const allowedApplicationMarkers = new Set([0xe0, 0xe2, 0xee]);
const standaloneMarkers = new Set([
  0x01,
  0xd0,
  0xd1,
  0xd2,
  0xd3,
  0xd4,
  0xd5,
  0xd6,
  0xd7,
  0xd8,
  0xd9,
]);

function containsMetadata(buffer) {
  if (buffer[0] !== 0xff || buffer[1] !== 0xd8) {
    throw new Error("Not a JPEG file");
  }

  let offset = 2;

  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      throw new Error(`Invalid JPEG marker at byte ${offset}`);
    }

    let markerOffset = offset;
    while (buffer[markerOffset] === 0xff) {
      markerOffset += 1;
    }

    const marker = buffer[markerOffset];
    if (marker === 0xda || marker === 0xd9) {
      return false;
    }

    if (standaloneMarkers.has(marker)) {
      offset = markerOffset + 1;
      continue;
    }

    const lengthOffset = markerOffset + 1;
    const segmentLength = buffer.readUInt16BE(lengthOffset);
    const segmentEnd = lengthOffset + segmentLength;

    if (segmentEnd > buffer.length) {
      throw new Error(`Invalid JPEG segment length at byte ${offset}`);
    }

    const isApplicationSegment = marker >= 0xe0 && marker <= 0xef;
    if (
      marker === 0xfe ||
      (isApplicationSegment && !allowedApplicationMarkers.has(marker))
    ) {
      return true;
    }

    offset = segmentEnd;
  }

  return false;
}

const imagePaths = fs
  .readdirSync(imageDirectory)
  .filter((name) => /\.jpe?g$/i.test(name))
  .map((name) => path.join(imageDirectory, name));

const unsafeImages = imagePaths.filter((imagePath) =>
  containsMetadata(fs.readFileSync(imagePath)),
);

if (unsafeImages.length > 0) {
  process.stderr.write(
    `JPEG metadata found:\n${unsafeImages.map((imagePath) => `- ${imagePath}`).join("\n")}\n`,
  );
  process.exitCode = 1;
} else {
  process.stdout.write(`Checked ${imagePaths.length} JPEG files: no metadata found\n`);
}
