---
title: Dota Underlords Unit Odds
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
    - game
---

The general question is:

> ___What is the odd that my unit will show up in the next roll?___

## Assumptions

There are several assumptions here. It might change due to future updates. (Updated based on the 2020-08-27 patch)

|                                     |   1-cost    |   2-cost    |   3-cost    |   4-cost    |   5-cost   |
| :---------------------------------: | :---------: | :---------: | :---------: | :---------: | :--------: |
|        Number of Unique Unit        |     16      |     14      |     13      |     12      |     7      |
|      Number of Copies per Unit      |     30      |     20      |     18      |     12      |     10     |
|        Total Number of Units        | 480 $(C_1)$ | 280 $(C_2)$ | 234 $(C_3)$ | 144 $(C_4)$ | 70 $(C_5)$ |
|              Shop Odds              |    $p_1$    |    $p_2$    |    $p_3$    |    $p_4$    |   $p_5$    |
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

A simpler way to think about the blacklist is: it reduces the number of unique units. For example, if we want a 1-cost unit and the current shop has 2 different 1-cost units. If we hit reroll, the number of unique 1-cost units become 14 instead of 16. In this case, the calculation of $o_1$ needs to exclude these 2 1-cost units in the shop.

Finally, the target unit occurs in the next shop (at least one) would be

$$
P = 1 - (1 - P_{single})^5
$$

## Spreadsheet

A spreadsheet for the calculation: [google sheet](https://docs.google.com/spreadsheets/d/1wpbQRhJELqM2gdfJxH_AuM421U1MPGg7cFqjyGBQjEg/edit?usp=sharing).

Some general odds:

Roll 1-cost unit at level 4
![2020-08-14-underlords-unit-odds-1](https://user-images.githubusercontent.com/2069165/93388916-6d5f2e00-f839-11ea-9b44-87e60a54a750.png)

Roll 2-cost unit at level 5
![2020-08-14-underlords-unit-odds-2](https://user-images.githubusercontent.com/2069165/93388922-6f28f180-f839-11ea-8986-fe34187164b4.png)

Roll 3-cost unit at level 7
![2020-08-14-underlords-unit-odds-3](https://user-images.githubusercontent.com/2069165/93388923-70f2b500-f839-11ea-94e2-c8525b6c6e64.png)

## Tips for rolling

1. Go for un-contested units
2. The more existing units of the same costs, the better odds you have. If you are going for un-contested units and in good health, you can be patient.
3. Assuming you are rolling for 3-cost unit, you will definitely roll if you see 3 different non-target 3-cost units in the shop. That will blacklist 3 3-cost unit. This will improve the odds a lot.

## Acknowledgment

Thank you Grey and Amorian for the implementation of [fortify](https://fortify.gg/) and the `left` command in [17kmmrbot](https://github.com/Fortify-Labs/Fortify).

KEKW
