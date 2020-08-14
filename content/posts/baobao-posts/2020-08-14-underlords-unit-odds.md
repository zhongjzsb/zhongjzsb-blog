---
title: Underlords Unit Odds
slug: 2020-08-14-underlords-unit-odds
draft: false
author: Jingyu Bao
date: 2020-08-14T14:56:17-04:00
location: >
    47 York Mills Rd
    Toronto ON M2P 1B6
    Canada
longitude: -79.40351753907835
latitude: 43.74372370681631
weather: 29 °C and Clear
tags:
    - thought
---

The general question is:

> ___What is the odd that my unit will show up in the next roll?___

## Assumptions

There are several assumptions here. It might change due to future updates.

|                              |   1-cost    |   2-cost    |   3-cost    |   4-cost    |   5-cost   |
| :--------------------------: | :---------: | :---------: | :---------: | :---------: | :--------: |
|    Number of Unique Unit     |     15      |     15      |     15      |     11      |     7      |
|  Number of Copies per Unit   |     30      |     20      |     18      |     12      |     10     |
|    Total Number of Units     | 450 $(C_1)$ | 300 $(C_2)$ | 270 $(C_3)$ | 180 $(C_4)$ | 70 $(C_5)$ |
|          Shop Odds           |    $p_1$    |    $p_2$    |    $p_3$    |    $p_4$    |   $p_5$    |
| Total numbers of exist units[^note] |    $o_1$    |    $o_2$    |    $o_3$    |    $o_4$    |   $o_5$    |

[^note]: This includes all the units on the board, bench and shop.

## Odds

Assume you want a $i$-cost unit. And you know there are $x$ units left in the pool.

First we need to know what is the probably the unit occurs in one slot of the shop.

If there is no blacklist for the roll, that is

$$P_{single} = p_i * \frac{x}{C_i - o_i}$$

If there is a blacklist for the roll, it will become a bit complex since we need to know the number of units left for the blacklisted units. Assume it's $b$. The formula for $P_{single}$ will become

$$
P_{single} = p_i * \frac{x}{C_i - o_i - b}
$$

Finally, the target unit occurs in the next shop (at least one) would be

$$
P = 1 - (1 - P_{single})^5
$$

## Spreadsheet

A spreadsheet for the calculation: [google sheet](https://docs.google.com/spreadsheets/d/1wpbQRhJELqM2gdfJxH_AuM421U1MPGg7cFqjyGBQjEg/edit?usp=sharing).

Some general odds:

Roll 1-cost unit at level 4
![2020-08-14-underlords-unit-odds-1](https://user-images.githubusercontent.com/2069165/90294792-4afe7d00-de55-11ea-8754-b84d885fbda5.png)

Roll 2-cost unit at level 5
![2020-08-14-underlords-unit-odds-2](https://user-images.githubusercontent.com/2069165/90294790-4a65e680-de55-11ea-94b6-9375c8f19fab.png)

Roll 3-cost unit at level 7
![2020-08-14-underlords-unit-odds-3](https://user-images.githubusercontent.com/2069165/90294791-4a65e680-de55-11ea-9403-b0ed3f8e8918.png)

## Acknowledgment

Thank you Grey and Amorian for the implementation of the `left` command in [17kmmrbot](https://github.com/Fortify-Labs/Fortify).

KEKW
