---
title: When Will the Next Light Bulb Go Out?
author: Jingyu Bao
date: 2020-02-29
slug: light-bulb-go-out
tags:
  - life
  - stats
comments: no
images:
  - /images/special-bulb-york-mills.jpg
---

Today our :bulb: bulb in the second floor went out. It looks like this:

![special bulb](/images/special-bulb-york-mills.jpg)

<!-- <center>
![special bulb](/images/special-bulb-york-mills.jpg){width=400px height=300px}
</center> -->

This is a special light so that we cannot buy a general bulb to replace the old one. The only option left to us is to buy a new whole light.
Jackie and I was discussing about how many lights we need to buy.

So first thing comes to my mind is that the lifetime of a bulb is exponentially distributed. It comes out so natural but Jackie asked me why it is the case? So I did some search and this [math stackexchange](https://math.stackexchange.com/questions/2478820/exponential-bulbs) has some explanation about this. I think the essential assumption is that

> If a used item has no better (or worse) life expectancy than a new one, then it is a candidate for an exponential lifetime model.

Since exponential distribution is memory-less. I guess it should be a good fit to that if we assume an random old bulb is as good as a new one.

Once we agreed on this exponential assumption. It linked to [Poisson Distribution wiki](https://en.wikipedia.org/wiki/Poisson_distribution):

> If for every $t > 0$ the number of arrivals in the time interval $[0, t]$ follows the Poisson distribution with mean $\lambda t$, then the sequence of inter-arrival times are independent and identically distributed exponential random variables having mean $1/\lambda$.

In this case, the bulb is installed in 2017 and the best estimate of this bulb is 3 years as we only have one sample. We will then expect the next light bulb will go out in 3 years.

We don't need to buy two lights if we think 3 years is long time. :smile: