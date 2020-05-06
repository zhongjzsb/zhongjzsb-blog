---
title: Best Linear Predictor
slug: 2020-05-03-best-linear-predictor
draft: true
author: Jingyu Bao
date: 2020-05-03T06:25:07-04:00
location: >
    45 York Mills Rd
    Toronto ON M2P 1B6
    Canada
longitude: -79.40349908374226
latitude: 43.74388504511769
weather: 9 °C and Clear
tags:
---

Suppose we have some geographic information about $n$ different locations $(x_1, x_2, ..., x_n)$.
Here $x_i$ could be the longitude and latitude of the city $i$.
Assume the temperature of location $x_i$ is a random variable $Z(x_i)$.
Now we try to predict the temperature $Z(x_0)$ of a new location $x_0$.

The simplest way to predict the temperature is to check the weather website :smile:.
But we are not going to do that in our case.
Instead, we will only based on the knowledge of $Z(x_1), Z(x_2), ..., Z(x_n)$.
We can first check the distance between the new location and the other $n$ placed.
To calculate the distance, we need to define a distance measure.

## Covariances

## Optimization

What we need to solve is following least square problem.

$$
\big(Z(x_0) - \hat{Z}(x_0)\big)^2 = \big(Z(x_0) - a_1Z(x_1) - a_2Z(x_2) - ... - a_nZ(x_n)\big)^2
$$

