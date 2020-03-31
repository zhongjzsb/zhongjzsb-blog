---
title: "Nugget Effect"
date: 2013-11-22
author: Jingyu Bao
slug: nugget-effect
draft: true
tags:
    - stats
---

Model:

$$Y(x)=Z(x)+\epsilon(x)$$

if there is nugget effect. $Z(x)$ is a Guassian random field with autocovariance function $K_Z(x)$.

$$K_Y(x)=K_Z(x)+\sigma^2$$

when $x=0$, and

$$K_Y(x)=K_Z(x)$$

when $x \ne 0$.

So that if screening effect for $Z$ holds,

$$\frac{E_Y(N_{\epsilon}\cup F)^2}{E_Y(N_{\epsilon})^2}=\frac{E_Z(N_{\epsilon}\cup F)^2+\sigma^2}{E_Z(N_{\epsilon})^2+\sigma^2}$$

Local Model is based on screening effect on the global.
