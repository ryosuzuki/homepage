---
id: morphio
name: MorphIO
description: Entirely Soft Sensing and Actuation Modules for Programming Shape Changes through Tangible Interaction
title: 'MorphIO: Entirely Soft Sensing and Actuation Modules for Programming Shape Changes through Tangible Interaction'
authors:
  - Ryosuke Nakayama*
  - Ryo Suzuki*
  - Satoshi Nakamaru
  - Ryuma Niiyama
  - Yoshihiro Kawahara
  - Yasuaki Kakehi
note: (the first two authors equally contributed)
year: 2018
booktitle: In Proceedings of the 2019 on Designing Interactive Systems Conference (DIS '19)
publisher: ACM, New York, NY, USA
pages: 975-986
doi: https://doi.org/10.1145/3322276.3322337
conference:
  name: DIS 2019
  fullname: The ACM conference on Designing Interactive Systems (DIS 2019) - Best Paper Award
  url: https://dis2019.com/
pdf: dis-2019-morphio.pdf
slide: dis-2019-morphio-slide.pdf
video: https://www.youtube.com/watch?v=ZkCcazfFD-M
embed: https://www.youtube.com/embed/ZkCcazfFD-M
acm-dl: https://dl.acm.org/citation.cfm?id=3322337
pageCount: 12
slideCount: 52
# image: morphio.png
---

<video poster="/static/projects/morphio/video-poster/top.png" preload="metadata" autoplay loop muted playsinline webkit-playsinline="">
  <source src="/static/projects/morphio/webm/top.webm" type="video/webm"></source>
  <source src="/static/projects/morphio/video/top.mp4" type="video/mp4"></source>
</video>


# Abstract

We introduce **MorphIO, entirely soft sensing and actuation modules** for programming by demonstration of soft robots and shape-changing interfaces. MorphIO’s hardware consists of a **soft pneumatic actuator containing a conductive sponge sensor**. This allows both input and output of three-dimensional deformation of a soft material. Leveraging this capability, MorphIO enables a user to **record and later playback physical motion** of programmable shape-changing materials. In addition, the modular design of MorphIO’s unit allows the user to construct various shapes and topologies through magnetic connection. We demonstrate several application scenarios, including tangible character animation, locomotion experiment of a soft robot, and prototyping tools for animated soft objects. Our user study with six participants confirms the benefits of MorphIO, as compared to the existing programming paradigm.

<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/morphio/figure-1-1.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-1-1.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-1-2.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-1-2.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-1-3.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-1-3.png" /></a>
  </div>
</div>


<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/morphio/figure-1-4.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-1-4.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-1-5.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-1-5.png" /></a>
  </div>
</div>

# Introduction

**Programmable soft materials** have a great potential for many application domains, such as soft robotics, material interfaces, accessibility, and haptic interfaces.
**However, programming of such materials is hard.**
The dominant programming paradigm of soft robots and material interfaces is largely confined within a digital screen, leaving little room for users to interactively explore physical motion through tangible interaction. In such a workflow—compiling code on a digital screen then trans- ferring it into the physical object—users need to repeatedly switch between the digital and physical worlds. This leaves a large gulf of execution in their programming experiences.
Thus, the traditional programming paradigm significantly limits the user’s ability to experiment with the design of expressive motion. Moreover, due to this barrier, such an opportunity is largely limited to highly skilled programmers and researchers who are proficient in hardware programming.


# MorphIO

This paper introduces **MorphIO, entirely soft sensing and actuation modules** for programming by demonstration of soft robots and shape-changing interfaces.
MorphIO’s hardware consists of a soft pneumatic actuator containing a conductive sponge sensor. This allows for integrated and entirely soft shape-changing modules that can both sense and actuate a variety of three-dimensional deformations. Leveraging this capability, MorphIO enables the user to program behaviors by **recording and later playing back physical motions** through tangible interaction. In addition, the modular design of MorphIO’s unit allows the user to construct various shapes and topologies through magnetic connection, then **synthesize multiple recorded motions to achieve more complex behaviors**, such as bending, gripping, and walking.


<video poster="/static/projects/morphio/video-poster/module.png" preload="metadata" autoplay loop muted playsinline webkit-playsinline="">
  <source src="/static/projects/morphio/webm/module.webm" type="video/webm"></source>
  <source src="/static/projects/morphio/video/module.mp4" type="video/mp4"></source>
</video>

<br/>

<video poster="/static/projects/morphio/video-poster/bear.png" preload="metadata" autoplay loop muted playsinline webkit-playsinline="">
  <source src="/static/projects/morphio/webm/bear.webm" type="video/webm"></source>
  <source src="/static/projects/morphio/video/bear.mp4" type="video/mp4"></source>
</video>


# System Overview

The programming workflow with MorphIO is the following:

- **Step 1:** A user starts manipulating the MorphIO unit.

- **Step 2:** The demonstrated motion is detected and recorded through internal sensors, and the recorded sensor values are stored in the software.

- **Step 3:** Once the user clicks play in the graphical user interface, the pneumatic pump starts supplying air.

- **Step 4:** By controlling the air flow through switching on and off the solenoid valves, the system can control the behavior of the pneumatic actuator as it plays back the recorded motion.

The MorphIO system consists of the following components: A sensor and actuation unit, a sensing and actuation control unit, a microcontroller, software to control these units, and a visual interface for users to control behaviors. Figure illustrates the overview architecture of MorphIO.

<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/morphio/figure-6-1.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-6-1.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-6-2.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-6-2.png" /></a>
  </div>
</div>


# Entirely Soft Sensing and Actuation Modules

Our main contribution is a design and fabrication method for **a conductive sponge sensor** that can be embedded into an air chamber in the pneumatic actuator. The conductive sponge sensor leverages the porous structure to **sense the three-dimensional deformation by measuring the internal resistance value**; when contracted, the resistance value be- tween the top and bottom surfaces drops, and when extended, it increases. In contrast to existing sensing techniques, an elastic sponge allows for a higher degree of freedom in sensing capability (e.g., stretching, bending, and compression) without sacrificing the softness of the interface.

<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/morphio/figure-2-1.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-2-1.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-2-2.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-2-2.png" /></a>
  </div>
</div>


<video poster="/static/projects/morphio/video-poster/mechanism.png" preload="metadata" autoplay loop muted playsinline webkit-playsinline="">
  <source src="/static/projects/morphio/webm/mechanism.webm" type="video/webm"></source>
  <source src="/static/projects/morphio/video/mechanism.mp4" type="video/mp4"></source>
</video>


<br />

Moreover, our **modular design** and **graphical interface** allows for easy experiments involving multiple units. For example, the system can visualize multiple recorded sensor values, so that the user can see, customize, and synthesize recorded motion to construct more complex behaviors. These hardware and software designs were informed by our formative study, wherein we interviewed five experienced researchers from the robotics and HCI communities.


<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/morphio/figure-3-1.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-3-1.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-3-2.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-3-2.png" /></a>
  </div>
</div>

<video poster="/static/projects/morphio/video-poster/unit-x2.png" preload="metadata" autoplay loop muted playsinline webkit-playsinline="">
  <source src="/static/projects/morphio/webm/unit-x2.webm" type="video/webm"></source>
  <source src="/static/projects/morphio/video/unit-x2.mp4" type="video/mp4"></source>
</video>

<video poster="/static/projects/morphio/video-poster/unit-x3.png" preload="metadata" autoplay loop muted playsinline webkit-playsinline="">
  <source src="/static/projects/morphio/webm/unit-x3.webm" type="video/webm"></source>
  <source src="/static/projects/morphio/video/unit-x3.mp4" type="video/mp4"></source>
</video>


<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/morphio/figure-4-1.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-4-1.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-4-2.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-4-2.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-4-3.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-4-3.png" /></a>
  </div>
</div>




# Fabrication Process

The fabrication process follows three steps: 1) Fabricate an elastic sponge, 2) impregnate into conductive ink, and 3) attach electrodes and wires.
To fabricate an elastic sponge, we first prepare 6.0 g of elastomer prepolymer solution and 29.1 g of sodium-chloride, then mix them together by using a planetary centrifugal mixer. The mixed solution is injected into a 3D printed cylindrical mold (16mm diameter, 40mm height). Then we dry the material with an oven at 100 C degrees for one hour. Once dried, we immerse the sponge in water, so that the sodium chloride can melt, leaving a porous structure within the elastomer sponge.

<video poster="/static/projects/morphio/video-poster/fabrication.png" preload="metadata" autoplay loop muted playsinline webkit-playsinline="">
  <source src="/static/projects/morphio/webm/fabrication.webm" type="video/webm"></source>
  <source src="/static/projects/morphio/video/fabrication.mp4" type="video/mp4"></source>
</video>

<div class="figures ui four column grid">
  <div class="figure column">
    <a href="/static/projects/morphio/figure-5-1.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-5-1.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-5-2.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-5-2.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-5-3.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-5-3.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-5-4.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-5-4.png" /></a>
  </div>
</div>


<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/morphio/figure-5-5.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-5-5.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-5-6.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-5-6.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-5-7.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-5-7.png" /></a>
  </div>
</div>



# Applications

We demonstrate several possible applications scenarios with MorphIO. 1) Tangible character animation, 2) Animating existing soft objects, 3) Remote manipulation of soft grippers, 4) Locomotion experimentation with soft robots.

<div class="figures ui four column grid">
  <div class="figure column">
    <a href="/static/projects/morphio/figure-10-1.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-10-1.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-10-2.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-10-2.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-10-3.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-10-3.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-10-4.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-10-4.png" /></a>
  </div>
</div>

<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/morphio/figure-11-1.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-11-1.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-11-2.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-11-2.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-11-3.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-11-3.png" /></a>
  </div>
</div>

<video poster="/static/projects/morphio/video-poster/locomotion.png" preload="metadata" autoplay loop muted playsinline webkit-playsinline="">
  <source src="/static/projects/morphio/webm/locomotion.webm" type="video/webm"></source>
  <source src="/static/projects/morphio/video/locomotion.mp4" type="video/mp4"></source>
</video>


# Evaluation

We conducted a user evaluation study to understand the bene- fits and limitations of MorphIO. In this study, we focused on answering the following research questions:

- **RQ1:** Does MorphIO save time and reduce the number of iterations to program the target behavior, compared to the existing approach?

- **RQ2:** Does MorphIO increase the expressiveness of the physical motion?

To answer these questions, we conducted a controlled experiment where we compared MorphIO (left) with the current programming approach. We chose Arduino IDE (right) as a base condition for the comparison, as this is the most common programming approach identified through our formative study. We provide three basic tasks to construct a program. For each task, the participants were asked to program three differ- ent emotions—happiness, anger, and sadness—of an animated character. We chose these emotions based on Ekman’s basic emotions for communication.

<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/morphio/figure-12-1.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-12-1.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-12-2.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-12-2.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/morphio/figure-12-3.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-12-3.png" /></a>
  </div>
</div>

The average time of task completion time of MorphIO was 2m 19s, compared to 5m 21s with the control condition. The average number of iterations of MorphIO was 4.4 times, compared to 6.4 with the control condition, which confirms that MorphIO is significantly efficient in terms of task completion time and the number of iterations. When asked about the achievement of the expressions using a 9-point Likert scale, the average score with MorphIO was 6.5, compared to 6.3 with the control condition. We did not find differences between the two conditions. Thus, we conclude the result of our study as follows: **RQ1: Yes, RQ2: No**.

Based on our post interviews, we discuss the benefits and limitations of our approach: **1) tangible interactions are suitable for sculpting rough motion**, **2) programming allows for fine-tuning more precise adjustments**. Thus, for future research, systems might allow users to quickly make a rough motion, which can automatically be converted into digital parameters so that the user can also precisely control and adjust the motion. The same human- computer cooperation approach can be applied to other design domains: For example, when designing an object, the user can quickly make rough shapes with clay, while letting a machine finish the details. We believe this insight can lead the HCI community to further explore design approaches wherein users and machines cooperate for enhanced interaction design.


# Future Vision
We believe this approach’s potential for lowering the barrier and opening new opportunities for a larger community to begin designing, prototyping, and exploring soft material motion—not by coding on a screen, but by sculpting behaviors in the physical world.
We envision the future where people can interactively explore various behaviors through tangible interactions, **just like sculpting behaviors with clay**.


<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/morphio/figure-14.png" data-lightbox="lightbox"><img src="/static/projects/morphio/figure-14.png" /></a>
  </div>
</div>



