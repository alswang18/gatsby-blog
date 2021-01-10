---
title: "Building React with Django"
date: "2021-01-10"
description: "In my attempts to get better at a React Frontend, I noticed it was immensely cumbersome to translate some of my old Django Projects to use a React frontend. These are my early findings (read: opinions)."
---

In my attempts to get better at a React Frontend, I noticed it was immensely cumbersome to translate some of my old Django Projects to use a React frontend.

The first thing I noticed immediately was how little gain I got as a solo full-stack developer as well as how complex everything needed to be in order to achieve the same baseline functionality.

Here are some findings that stood out to me:

1. Querying data from the backend to frontend components:

Because Django is batteries included, I would normally just use the defaults models.py file and pass the queries directly into the page context. With React, I had to create a REST API endpoint, which had quite a learning curve for being implemented in Django in addition to the wall of state management debates found on stack overflow. I settled with redux for context management throughout the app, and pushed onwards after having learned endpoint testing on Postman.

Django's REST Framework had a pretty similar philosophy to using default Django. It comes with a lot out of the box, and much of the functionality is achieved when you know what you want due to the rich set of defaults to inherit from.

2. Authentication:

As a junior Django developer, implementing session-based authentication seemed to be the easiest way to get things moving. I could just check the request session by default if I wanted to with Django.

Being forced to look outside Django modules to figure the tasks needed to be done allowed me to appreciate the fact that Authentication is hard, and there are so many different permutations for how to implement it.

I was thrust into the debate of session-based authentication vs token-based authentication. The token-based arguments seemed to fit my use-case more as I tend to appreciate not having to force users to login every time they re-enter from a different tab.

These are all the preliminary findings I had so far on how implementing React has been somewhat more cumbersome than base Django and Jinja. Hopefully, I can come back on these points in the future to either appreciate Django's defaults more or to see how I once was quite ignorant of React's many benefits either in a team setting or down the line in a larger code repository.
