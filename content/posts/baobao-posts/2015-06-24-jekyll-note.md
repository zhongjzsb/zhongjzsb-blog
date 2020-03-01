---
title:  "Mac Jekyll Note"
date:   2015-06-24
key: 2015-06-24T10:00:00Z
tags:
    - tools
---

## 1. A little problem

Learning from [youtube](https://www.youtube.com/watch?v=iWowJBRMtpc)

In terminal (using Python 2.7 instead of Python 3.4)

install vertualenv

{% highlight R %}
> pip install virtualenv
{% endhighlight R %}

using Python 2.7 as temporary

> virtualenv -p /usr/bin/python2.7 --distribute temp-python

active Python 2.7

> source temp-python/bin/activate

stop using python2.7

> deactivate

## 2. Start Jekyll

Then begin jekyll in your workspace

> jekyll new blogname

> jekyll serve

