# zhongjzsb-blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/f0111f58-fcf4-451f-9a3d-4062b9ab619d/deploy-status)](https://app.netlify.com/sites/zhongjzsb/deploys)

Source for [zhongjzsb.com](https://zhongjzsb.com), built with Hugo and deployed
by Netlify.

## Local development

Requirements:

- Git
- Hugo Extended 0.164.0
- R with `blogdown` only when editing R Markdown posts

Clone the repository with its theme:

```sh
git clone --recurse-submodules https://github.com/zhongjzsb/zhongjzsb-blog.git
cd zhongjzsb-blog
```

Start the local site:

```sh
hugo server
```

Run the same production build used in CI:

```sh
hugo --gc --minify --printPathWarnings --panicOnWarning
```

The generated `public/` and `resources/_gen/` directories are intentionally
ignored. Netlify recreates them for every deployment.

## Create content

Create a Markdown post:

```sh
hugo new -k posts /posts/baobao-posts/my-post.md
```

Create an R Markdown post:

```sh
hugo new -k rmd /posts/baobao-posts/my-post.Rmd
```

Render one R Markdown file from R:

```r
blogdown:::build_rmds("content/posts/path/filename.Rmd")
```

## Security

Raw HTML in Markdown is disabled. Use the repository shortcodes for embedded
content; the `embed` shortcode rejects hosts that are not explicitly allowed.
JPEG files in `static/images/` must not contain EXIF or other personal metadata;
CI checks this on every change.
See [the security policy](.github/SECURITY.md) for private vulnerability
reporting.

## Acknowledgements

The site uses
[hello-friend-ng](https://github.com/rhazdon/hugo-theme-hello-friend-ng) with
local layout and style customizations inspired by
[Hermit](https://github.com/Track3/hermit) and
[hello-friend](https://github.com/panr/hugo-theme-hello-friend).
