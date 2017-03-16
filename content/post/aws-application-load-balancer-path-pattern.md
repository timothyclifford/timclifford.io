+++
categories = ["aws", ]
date = "2016-12-19T21:27:12+08:00"
description = "Figuring out how the ALB Path Pattern field works"
draft = false
tags = ["aws", "alb"]
title = "Path Pattern and the AWS Application Load Balancer"

+++

Recently configuring an ALB (Application Load Balancer) in AWS.

Found the field "path pattern" which I was hoping allowed regular expression path matching for a target group. However, when I tried regex, the UI displayed an error.

Unsure if it was a case of [PEBKAC](https://en.wikipedia.org/wiki/User_error#PEBKAC) or actual AWS limitation, I decided to ask on the forum.

## From Tim

> Hi AWS,
>
>Working with an ALB and creating path based rules to route traffic.
>
>"Path pattern" sounds like it accepts regular expressions however on testing it doesn't seem to.
>
>I've struggled to find any documentation on what types of values are accepted here.
>
>Ideally, I'd like to be able to match multiple paths for a particular target group. For example, authentication paths such as /auth, /signin, /logout I'd like to input:
>
>`/(signin|login|auth)?`
>
>But this is reported as invalid by the console UI.
>
>Is there any functionality to allow this? 10 rules per load balancer is not going to be sufficient if it's 1 path per rule.

## From AWS

>Hello, thanks for posting.
>
>To answer your question directly, regular expressions are not currently supported for ALB paths, and you are correct that separate path entries would be needed in each of your examples.
>
>However, I do appreciate you bringing up the lack of documentation in this area, as it's something we'd like to work on improving. I've submitted both your request for additional clarity in this area and to support regular expressions to the appropriate teams.