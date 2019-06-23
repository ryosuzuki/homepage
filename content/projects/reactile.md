---
id: reactile
name: Reactile
description: Programming Swarm User Interfaces through Direct Physical Manipulation
title: "Reactile: Programming Swarm User Interfaces through Direct Physical Manipulation"
authors: Ryo Suzuki, Jun Kato, Mark D. Gross, Tom Yeh
image: reactile.jpg
conference:
  name: CHI 2018
  url: https://chi2018.acm.org/
pdf: chi-2018-reactile.pdf
video: https://www.youtube.com/watch?v=Gb7brajKCVE
short-video: https://www.youtube.com/watch?v=YT7vMJZjohU
slide: chi-2018-reactile-slide.pdf
acm-dl: https://dl.acm.org/citation.cfm?id=3173773
github: https://github.com/ryosuzuki/reactile
---

# Reactile: Programming Swarm User Interfaces through Direct Physical Manipulation

**Ryo Suzuki**, Jun Kato, Mark D. Gross, Tom Yeh

[**The ACM CHI Conference on Human Factors in Computing Systems (CHI 2018)**](https://chi2018.acm.org/)

Links:
[**[PDF](http://ryosuzuki.org/publications/chi-2018-reactile.pdf)**]
[**[ACM DL](https://dl.acm.org/citation.cfm?id=3173773)**]
[**[Video](https://www.youtube.com/watch?v=Gb7brajKCVE)**]
[**[Slide](http://ryosuzuki.org/publications/chi-2018-reactile-slide.pdf)**]
[**[GitHub](https://github.com/ryosuzuki/reactile)**]

<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/reactile/top.mp4" type="video/mp4"></source>
</video>

## Abstract

We explore a new approach to programming swarm user interfaces (Swarm UI) by leveraging direct physical manipulation. Existing Swarm UI applications are written using a robot programming framework: users work on a computer screen and think in terms of low-level controls. In contrast, our approach allows programmers to work in physical space by directly manipulating objects and think in terms of high- level interface design. Inspired by current UI programming practices, we introduce a four-step workflow—create elements, abstract attributes, specify behaviors, and propagate changes—for Swarm UI programming. We propose a set of direct physi- cal manipulation techniques to support each step in this work- flow. To demonstrate these concepts, we developed Reac- tile, a Swarm UI programming environment that actuates a swarm of small magnets and displays spatial information of program states using a DLP projector. Two user studies—an in-class survey with 148 students and a lab interview with eight participants—confirm that our approach is intuitive and understandable for programming Swarm UIs.

<div class="figures ui stackable three column grid">
  <div class="figure column">
    <a href="/static/projects/reactile/figure-1-1.png" data-lightbox="lightbox"><img src="/static/projects/reactile/figure-1-1.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/reactile/figure-1-2.png" data-lightbox="lightbox"><img src="/static/projects/reactile/figure-1-2.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/reactile/figure-1-3.png" data-lightbox="lightbox"><img src="/static/projects/reactile/figure-1-3.png" /></a>
  </div>
</div>


<div class="figures ui stackable three column grid">
  <div class="figure column">
    <a href="/static/projects/reactile/figure-2-1.png" data-lightbox="lightbox"><img src="/static/projects/reactile/figure-2-1.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/reactile/figure-2-2.png" data-lightbox="lightbox"><img src="/static/projects/reactile/figure-2-2.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/reactile/figure-2-3.png" data-lightbox="lightbox"><img src="/static/projects/reactile/figure-2-3.png" /></a>
  </div>
</div>


# Introduction

In recent years, **Swarm User Interfaces** have emerged as a new paradigm of human-computer interaction. While the idea of coordinated miniature robots was originally proposed in the literature of swarm and micro-robotic systems, HCI researchers have explored the use of these robots as a user interface.
However, this opportunity is currently limited to highly skilled programmers who are proficient in robot programming. For typical programmers inexperienced in robot programming who wish to build a Swarm UI application, it is unclear if the robot programming approach is the most appropriate for UI programming. To design interactive UI applications, pro- grammers often must think in terms of higher-level design for user interaction, whereas robot programming tends to focus on low-level controls of sensors and actuators. Historically, a novel UI platform is adopted only after the advent of an effective programming tool that empowers a larger developer community, and even end-users, to create many applications for the platform; for example, HyperCard for interactive hyper- media, Phidgets for physical interfaces, and Interface Builder for GUI applications. We stipulate that current approaches to programming Swarm UI are too robot-centric to be effec- tive for building rich and interactive applications. Then, what would be a better alternative?


# Reactile

This paper introduces Reactile, a programming environment for Swarm UI applications.
The goal of Reactile is to explore a new approach to programming Swarm UI applications. To design an appropriate workflow for Swarm UI programming, we look into existing UI programming paradigm for inspiration. The common workflow of UI programming can be decomposed into four basic steps: create elements, abstract attributes, specify behaviors, and propagate changes. Based on these insights, we propose the following four-step workflow for Swarm UI programming: 1) creates shapes, 2) abstracts shape attributes as variables, 3) specifies data-bindings be- tween dynamic attributes, and 4) the system changes shapes in response to user inputs. With this workflow, a programmer can think in terms of high-level interface and interaction design to build interactive Swarm UI appli- cations, compared to existing, low-level, robot programming approaches.


<div class="figures ui stackable one column grid">
  <div class="figure column">
    <a href="/static/projects/reactile/figure-3.png" data-lightbox="lightbox"><img src="/static/projects/reactile/figure-3.png" /></a>
  </div>
</div>

The workflow of Swarm UI programming is inspired by the existing UI programming paradigm. We first review the common workflow of UI programming and decompose it into four basic elements that represent high-level steps. Then we discuss how to apply this workflow to Swarm UI programming.
As we see in well-known design patterns for interactive UI ap- plications such as reactive programming paradigm, the Model-View-Controller, and the observer pattern, they share a com- mon workflow consisting of four basic elements: 1) create elements, 2) abstract attributes, 3) specify behaviors, and 4) propagate changes.


<div class="figures ui stackable three column grid">
  <div class="figure column">
    <a href="/static/projects/reactile/figure-1-4.png" data-lightbox="lightbox"><img src="/static/projects/reactile/figure-1-4.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/reactile/figure-1-5.png" data-lightbox="lightbox"><img src="/static/projects/reactile/figure-1-5.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/reactile/figure-1-6.png" data-lightbox="lightbox"><img src="/static/projects/reactile/figure-1-6.png" /></a>
  </div>
</div>

<div class="figures ui stackable three column grid">
  <div class="figure column">
    <a href="/static/projects/reactile/figure-2-4.png" data-lightbox="lightbox"><img src="/static/projects/reactile/figure-2-4.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/reactile/figure-2-5.png" data-lightbox="lightbox"><img src="/static/projects/reactile/figure-2-5.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/reactile/figure-2-6.png" data-lightbox="lightbox"><img src="/static/projects/reactile/figure-2-6.png" /></a>
  </div>
</div>

# Implementation

Reactile actuates a swarm of small magnetic markers to move on a 2D canvas with electromagnetic force. We designed and fabricated a board of electromagnetic coil arrays (3,200 coils), which covers an 80 cm x 40 cm area. Reactile tracks the marker positions and detects interactions between a user and swarm markers using a standard RGB camera and computer vision techniques. The system displays spatial information using a DLP projector to allow a programmer to see program states in the same physical context.

<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/reactile/coil.mp4" type="video/mp4"></source>
</video>

<br />

In Reactile, a user interface consists of a swarm of passive magnetic markers which move on a 2D workspace driven by electromagnetic forces. Reactile uses a grid of electromagnetic coils to actuate these magnetic markers. Running current through the circuit coils generates a local magnetic field so that each coil can attract a single magnet located within its area. Each coil is aligned with a certain offset in both horizontal and vertical direction with an effective area overlap, which allows the coil to attract the magnet located in the adjacent coil. We design electromagnetic coil arrays to be fabricated with a standard printed circuit board (PCB) manufacturing. This reduces the cost and fabrication complexity, making it easy for the actuation area to scale up.

Our PCB design is a 4-layer board, and each layer contains a set of coils, each of which has an identical circular shape with a 15 mm diameter and a 2.5 mm overlap between nearby coils. Each coil has 15 turns with 0.203 mm (8 mils) spacing between lines, and the distance between centers of two coils is approximately 10 mm, which makes a 10 mm grid for attractive points. The final prototype covers an 80 cm x 40 cm area with 80 x 40 coils by aligning five identical boards horizontally. The fabrication of each board costs approximately $80 USD, including manufacturing of PCB and electronic components.

<br />


<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/reactile/mechanism.mp4" type="video/mp4"></source>
</video>




# Video Preview

<div class="video-container">
  <iframe class="embed" width="100%" height="315" src="https://www.youtube.com/embed/Gb7brajKCVE?autoplay=1&mute=1&rel=0&loop=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


