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

## Geo Plots for China, US and the World (ggplot + geom_sf)

Two types of geo plots here.

- Confirmed (Number of Cumulative Confirmed Cases): the total number of cases in the region, no matter what the current state is, effected, recovered or dead.
- Remaining (Number of Remaining Cases): it's the number of cumulative confirmed cases subtracts the numbers of recovered and dead cases.

<!-- | Cumulative Confirmed Cases                 | Remaining Cases                        |
| ------------------------------------------ | -------------------------------------- |
| [![alt][china_confirmed]][china_confirmed] | [![alt][china_current]][china_current] |
| [![alt][us_confirmed]][us_confirmed]       | [![alt][us_current]][us_current]       |
| [![alt][world_confirmed]][world_confirmed] | [![alt][world_current]][world_current] | -->

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

<div class='iframe-container'>
    <iframe src="/images/china-vs-outside.html"></iframe>
</div>

## Top 20 Countries Facet Plot (ggplot + facet_wrap)

The plots are ranking from the most the the least of the top 20 countries.

[![alt][top20countries]][top20countries]

[top20countries]: https://github.com/zhongjzsb/COVID-19/blob/master/static/images/top20countries.png?raw=true

## Shiny App

This is a shinyapp locating [here](https://zhongjzsb.shinyapps.io/covid-19/). In some cases, you might find the app doesn't work. That's because I only use the free-tier [shinyapps.io](https://www.shinyapps.io/), whose monthly active hour is 25 hours.

<div class='iframe-container'>
<iframe src="https://zhongjzsb.shinyapps.io/covid-19/"></iframe>
</div>


## References

- The data source is from [JHU CSSE](https://github.com/CSSEGISandData/COVID-19)
- Code are saved in [github](https://github.com/zhongjzsb/COVID-19).
- The contents is scheduled to update daily.

    ```r
    source('https://raw.githubusercontent.com/zhongjzsb/COVID-19/master/R/01-fetch-data.R')
    source('https://raw.githubusercontent.com/zhongjzsb/COVID-19/master/R/03-ggplotly-plot.R')
    ```
