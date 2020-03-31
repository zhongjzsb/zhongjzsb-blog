---
title:  "Mac Jekyll Note"
date: 2015-06-24T10:00:00Z
author: Jingyu Bao
draft: true
tags:
    - tools
---

## 1. A little problem

Learning from [youtube](https://www.youtube.com/watch?v=iWowJBRMtpc)

In terminal (using Python 2.7 instead of Python 3.4)

install vertualenv

```bash
pip install virtualenv
```

using Python 2.7 as temporary

```bash
virtualenv -p /usr/bin/python2.7 --distribute temp-python
```

active Python 2.7

```bash
source temp-python/bin/activate
```

stop using python2.7

```bash
deactivate
```

## 2. Start Jekyll

Then begin jekyll in your workspace

```bash
jekyll new blogname
jekyll serve
```
