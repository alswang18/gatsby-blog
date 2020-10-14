---
title: "Nasa SpaceApps 2020"
date: "2020-10-13"
description: "I have been spending the better part of the last 3 months training and developing a casual dev group of non-technical college students that I can implement hobby projects with. The fruits of this labor were proven recently when I entered us in an international hackathon organized by NASA called SpaceApps where we implemented what we later found out would be the winning entry of the competition."
featuredimage:
  src: "./image1.jpg"
  alt: "Space_Apps_Description"
---
## Introduction

The weekend of October 2 2020 was one of the most hectic in recent memory. Within a 48 hour span, I decided to get less than 7 hours of sleep, compete in a 36-hour hackathon, and take 2 midterm exams. 

I have been spending the better part of the last 3 months training and developing a casual dev group of non-technical college students that I can implement hobby projects with. The fruits of this labor were proven recently when I entered us in an international hackathon organized by NASA called SpaceApps where we implemented what we later found out would be the winning entry of the competition. My hobby group teammates: [Jibril Espanola](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fjibril-espa%C3%B1ola-9588541b9%3Ffbclid%3DIwAR3e19-6VZNfJLZn0uUhdR3P8LLzjCzI_nruD8gm6GlKwKyYPYq-1tRCaxE&h=AT1M8QcfLQeyZwh0lXN7rKu5XxrYubVURtoxVenSSgRggc7ny9FlCpX0hTciYwV1lmycPzdyB4pgcHUthrKWraVdaapC-45i4Pxo6WnuIsOpsQ-ETlyNI0pwOC_THpDDdWuiwA) and [Lorenzo Mercado](https://www.linkedin.com/in/enzomercadoph/), and a local tech student we recruited, [Tanzell Go](https://www.linkedin.com/in/tanzell-go-5b46b3181/), all stayed up for the 36 hours coding this project to fruition.  

![image1.jpg)

We joined the Observe challenge category, which called for digital applications and products that utilize NASA's earth observation technology to create a solution to an existing problem related to biodiversity. 

## Our Solution:

- [Github Link to our project](https://github.com/alswang18/BakodAI)

My team and I scoped, designed, and implemented a web app that uses Pytorch (a Deep Learning library) to create a satellite image classifier. 

The idea is that since satellites similar to ones used by Google Earth take aerial images of forests over time. Our insight was that if we could automate the annotation of these images, we'd basically have a nearly cost-free tool to spot signs of deforestation on areas that don't currently have full monitoring coverage by existing government and NGO entities. 

Within the given 36-ish hour deadline, we were able to churn out a multi-class classifier using transfer learning on the Resnet-18 models hosted by the Pytorch organization, which were pre-trained on the imagenet database. Transfer learning allowed our model to quickly gain an over 90% accuracy on multi-class predictions of over 12 classes of satellite images collected from the Landsat program.

Activities that can be detected by our proof of concept are:

- Wildfires
- Slash and Burn Operations
- Agriculture
- Mining (Large Industrial Mines and Artisanal Mines have their own separate classes)
- Weather (Hazy, Cloudy, Foggy, etc.) [This is most likely the output if the day happens to be overcast or foggy, since we can't get a good aerial picture if aerial visibility is too low]
- Logging (Both selective limited logging and large-scale logging have their own classes)

We then wrote up the web application in Django as it came with a lot of templates for the things we needed to implement out-of-the-box; in-line with its motto of being *"the framework for perfectionists with deadlines".* (cheeky, but it's not wrong)

We named our solution BakodAI. Bakod is a Cebuano word for grids or fences, which fit well with our methodology of monitoring a large-scale forest area by dividing it into standardized boxes and making predictions on these slices over time. This method was inspired by the quadrats ecologists use to collect data about plant life in a given area developed in the late 19th and early 20th century. 

![image2.jpg)

The idea of the quadrat and our satellite imaging technology ultimately comes from the same place, but instead of PVC pipes and wires, we're using NASA satellites. We truly are living in the future.

Within a week, we got an email that we won the Manila regionals of the competition, and as this article deploys, we are going to be receiving our awards from a Zoom call with the organizers. By the way, in case anyone is wondering, I aced those midterms that I took with a proverbial foot in the grave from overwork.