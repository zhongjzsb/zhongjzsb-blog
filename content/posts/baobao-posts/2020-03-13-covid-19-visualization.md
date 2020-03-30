---
title: "COVID-19 Visualization"
author: "Jingyu Bao"
date: 2020-03-13T19:49:09-04:00
slug: covid-19-visualization
draft: false
toc: true
tags:
  - stats
---

We are living the history. COVID-19 has been spreading the world for more than 3 months. It originally started in China. At his moment, more than 100 countries has been affected by the virus.

We will use the following formula a lot in this post.

$$
Current + Recovered + Death = Confirmed
$$

## Flexdashboard

I create a shiny app in DigitalOcean with my own shiny server. It's saved [here](https://app.zhongjzsb.com/COVID-19-dashboard/).

[![covid-19-dashboard](https://raw.githubusercontent.com/zhongjzsb/COVID-19-dashboard/master/flexdashboard-screenshot.png)](https://app.zhongjzsb.com/COVID-19-dashboard/)

## Leaflet Plot

It's a 5-level leaflet plot.

The html file can be accessed from [here](/images/leaflet-plot.html).

Navigate the map in landscape mode in mobile device.

<div class='iframe-container'>
  <iframe src="/images/leaflet-plot.html" allowfullscreen></iframe>
</div>

<!-- | Marker    | Icon    | Min   | Max   |
| :-------- | :------ | :---- | :---- |
| lightblue | white   | 1     | 10    |
| orange    | white   | 11    | 100   |
| red       | white   | 101   | 1000  |
| black     | white   | 1001  | 10000 |
| black     | darkred | 10000 | Inf   | -->

## DataTable

The current state of COVID-19. Select the device to browse the table.

{{< tabs "covid-19-DT" >}}
{{< tab "Mobile" >}}
<div class='iframe-container iframe-r-dt'>
  <iframe src="/images/covid-19-DT-mobile.html" allowfullscreen></iframe>
</div>
{{< /tab >}}
{{< tab "PC" >}}
<div class='iframe-container iframe-r-dt'>
  <iframe src="/images/covid-19-DT.html" allowfullscreen></iframe>
</div>
{{< /tab >}}
{{< /tabs >}}

## Geo Plots for China, US and the World (ggplot + geom_sf)

Two types of geo plots here.

- Confirmed (Number of Cumulative Confirmed Cases): the total number of cases in the region, no matter what the current state is, effected, recovered or dead.
- Remaining (Number of Remaining Cases): it's the number of cumulative confirmed cases subtracts the numbers of recovered and dead cases.

{{< tabs "covid-19" >}}
{{< tab "Confirmed" >}}
| Cumulative Confirmed Cases                 |
| ------------------------------------------ |
| [![alt][china_confirmed]][china_confirmed] |
| [![alt][us_confirmed]][us_confirmed]       |
| [![alt][world_confirmed]][world_confirmed] |

[china_confirmed]: https://github.com/zhongjzsb/COVID-19/blob/master/static/images/china_confirmed.gif?raw=true
[us_confirmed]: https://github.com/zhongjzsb/COVID-19/blob/master/static/images/us_confirmed.gif?raw=true
[world_confirmed]: https://github.com/zhongjzsb/COVID-19/blob/master/static/images/world_confirmed.gif?raw=true

{{< /tab >}}
{{< tab "Remaining" >}}

| Remaining Cases                        |
| -------------------------------------- |
| [![alt][china_current]][china_current] |
| [![alt][us_current]][us_current]       |
| [![alt][world_current]][world_current] |

[china_current]: https://github.com/zhongjzsb/COVID-19/blob/master/static/images/china_current.gif?raw=true
[us_current]: https://github.com/zhongjzsb/COVID-19/blob/master/static/images/us_current.gif?raw=true
[world_current]: https://github.com/zhongjzsb/COVID-19/blob/master/static/images/world_current.gif?raw=true

{{< /tab >}}
{{< /tabs >}}

## HTML Plot (ggplotly)

Comparing China and outside of China.

The view experience in mobile device will be better if using landscape.

<div class='iframe-container'>
    <iframe src="/images/china-vs-outside.html" allowfullscreen></iframe>
</div>

## Top 20 Countries Facet Plot (ggplot + facet_wrap)

The plots are ranking from the most the the least of the top 20 countries.

[![alt][top20countries]][top20countries]

[top20countries]: https://github.com/zhongjzsb/COVID-19/blob/master/static/images/top20countries.png?raw=true

## Shiny App

This is a shinyapp locating [here](https://zhongjzsb.shinyapps.io/covid-19/). The app doesn't work in some cases. That's because I only use the free-tier [shinyapps.io](https://www.shinyapps.io/), whose monthly active hour is 25 hours. So I decided not spend too much time to optimize the view experience in this section.

{{< hint  warning >}}

This simple shiny doesn't work any more because JHU changed their data format. And I created new shiny app with flexdashboard [here](https://app.zhongjzsb.com/COVID-19-dashboard/).

```html
<div class='iframe-container'>
  <iframe src="https://zhongjzsb.shinyapps.io/covid-19/"></iframe>
</div>
```

{{< /hint >}}

## References

- The data source is from [JHU CSSE](https://github.com/CSSEGISandData/COVID-19)
- Code is saved in [github](https://github.com/zhongjzsb/COVID-19).
- The dashboard github is [here](https://github.com/zhongjzsb/COVID-19-dashboard).
- The contents are not scheduled to update daily any more because the change of JHU data format. However, you can go to the flexdashboard [here](https://app.zhongjzsb.com/COVID-19-dashboard/) to check the "latest" update of COVID-19 (maybe 1 day delay).

{{< expand "Code for this post" >}}

```batch
SET "fetch=source('https://raw.githubusercontent.com/zhongjzsb/COVID-19/master/R/01-fetch-data.R')"
SET "ggplotly=source('https://raw.githubusercontent.com/zhongjzsb/COVID-19/master/R/03-ggplotly-plot.R')"
SET "leaflet=source('https://raw.githubusercontent.com/zhongjzsb/COVID-19/master/R/06-leaflet-plot.R')"
SET "datatable=source('https://raw.githubusercontent.com/zhongjzsb/COVID-19/master/R/07-datatable.R')"
Rscript -e "%fetch%; %ggplotly%; %leaflet%; %datatable%"
```

{{< /expand >}}
