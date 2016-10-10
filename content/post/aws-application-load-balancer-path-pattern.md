+++
categories = []
date = "2016-09-30T21:27:12+08:00"
description = ""
draft = true
tags = []
title = "aws application load balancer path pattern"

+++

https://forums.aws.amazon.com/thread.jspa?messageID=743702#743702

Hello,

Working with an ALB and creating path based rules to route traffic.

"Path pattern" sounds like it accepts regular expressions however on testing it doesn't seem to.

I've struggled to find any documentation on what types of values are accepted here.

Ideally, I'd like to be able to match multiple paths for a particular target group. For example, authentication paths such as /auth, /signin, /logout I'd like to input:

/(signin|login|auth)?

But this is reported as invalid by the console UI.

Is there any functionality to allow this? 10 rules per load balancer is not going to be sufficient if it's 1 path per rule.

Thanks

...

Hello, thanks for posting.

To answer your question directly, regular expressions are not currently supported for ALB paths, and you are correct that separate path entries would be needed in each of your examples.

However, I do appreciate you bringing up the lack of documentation in this area, as it's something we'd like to work on improving. I've submitted both your request for additional clarity in this area and to support regular expressions to the appropriate teams.

Please keep an eye on our blog for any updates to ALB functionality: https://aws.amazon.com/blogs/aws/

Best regards,

David B.
