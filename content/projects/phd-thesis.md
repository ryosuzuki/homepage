---
id: phd-thesis
name: Collective Shape-changing Interfaces
description: Dynamic Shape Construction and Transformation with Collective Elements
title: 'Dynamic Shape Construction and Transformation with Collective Elements'
authors:
  - Ryo Suzuki
year: 2020
booktitle: PhD Dissertation
publisher: University of Colorado Boulder
pages: 1-287
conference:
  name: PhD Dissertation
  fullname: PhD Dissertation
pdf: phd-dissertation.pdf
slide: phd-defense-slide.pdf
talk: https://www.youtube.com/watch?v=FHmp7BIhXJI
pageCount: 252
slideCount: 200
related:
  title: Collective Shape-changing Interfaces
  authors:
    - Ryo Suzuki
  year: 2019
  booktitle: In Adjunct Proceedings of the 32nd Annual ACM Symposium on User Interface Software and Technology (UIST '19 Doctoral Consortium)
  publisher: ACM, New York, NY, USA
  pages: 154–157
  doi: https://doi.org/10.1145/3332167.3356877
  pdf: uist-2019-collective.pdf
  suffix: dc
  pageCount: 4

# image: phd-thesis.png
---

# Abstract
This thesis explores dynamic and collective shape construction as a new way to **physicalize** digital information for interactive physical displays --- i.e., **shape-changing displays** enabled by a swarm of collective elements. Through physical form of digital objects, the user can directly touch, grasp, and manipulate digital information through rich tangible and embodied interactions, but at the same time, such physical objects can dynamically change their shape for an interactive computer display and interface through collective shape construction and transformation with a swarm of elements. The goal of this thesis is to envision and illustrate how such an interface might support human activities by transforming physical forms at various sizes, from millimeter to meter scale.

<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-1.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-1.jpg" /></a>
  </div>
</div>

To achieve this goal, this thesis introduces **collective shape-changing interface**, a new type of shape-changing interfaces constructed by discrete, collective, physical elements. This proposed approach promises to address the current limitations of shape-changing interfaces --- wherein a swarm of modular elements enables us to decompose the large, monolithic shape-changing objects into a set of simple, distributed elements. At the same time, their swarm behaviors enable us to make an unbounded shape transformation for expressive representation. This thesis contributes to the first exploration of this new class of shape-changing interfaces and proposes two approaches: active and passive shape construction. In active shape construction, collective elements can dynamically move and reconfigure themselves to construct a three-dimensional shape. Passive shape construction instead leverages external actuation to assemble and transform collective passive objects for dynamic shape creation. I explore and demonstrate how active and passive collective shape construction can be used as a future of computer interfaces, by developing various prototypes built on top of novel hardware and software platforms. Given these investigations, I discuss the design implications and possible research directions towards the future of collective shape-changing user interfaces.


# Introduction

What if computer displays can represent information not only {\it graphically} but also *physically*? What if such physical forms of information could be as malleable and programmable as the pixels on a computer screen? If so, it could be used as a dynamic physical medium to interact with the digital world.

Ivan Sutherland, a founder of virtual and augmented reality, once envisioned that the future of computer displays would be *"a room within which the computer can control the existence of matter"*
This radical vision has inspired many researchers over the decades, as such technologies could open up a new
paradigm of human-machine interfaces.


<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-2.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-2.jpg" /></a>
  </div>
</div>

However, we are still far from this exciting future. Today's computer interfaces mostly focus on *screen-based* interaction, where the screens serve as a ``looking window'' of the digital world --- the user can see digital information through the glass, but a barrier between what is inside (digital world) and what is outside (physical world) confines how we interact with the digital world. Current technologies do not allow us to directly touch, feel, grasp, and manipulate digital objects, in the same way that humans have done with physical objects for hundreds of thousands of years.


# Thesis Statement

The goal of this thesis is to bring Sutherland's vision closer to reality by developing a new form of interactive and dynamic physical displays, and to illustrate how such an interface might support human activities by transforming physical forms and environments at various scales.

As a step toward this vision, this thesis explores dynamic and collective shape construction as a new way to **physicalize** digital information for interactive physical displays --- i.e., **shape-changing displays** enabled by a swarm of collective elements.
Collective elements refer to discrete physical objects that can construct a physical, three-dimensional shape.

<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-3.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-3.jpg" /></a>
  </div>
</div>

Each individual element can dynamically change its shape, position, and other physical properties through internal or external actuation, as to collectively construct and transform the overall physical shape.
This enables a new way of representing digital information.
Such physical shapes allow the user not only to see information, but to touch, feel, grasp, construct, and manipulate it, in the same way that interact with physical objects.
At the same time, these physical objects must also embody dynamic computation. Collective elements can dynamically and programmatically reconfigure themselves, as if they are rendered in an interactive computer display and interface.

In contrast to shape changes made of monolithic materials, constructing shapes out of discrete elements enables rich expressiveness in representing information.
Like pixels on a screen, they make shapes by collectively transforming the overall structure.
Additionally, their components can be simple and interchangeable, thus allowing for scale.
These elements can also interact with existing environments, and they make everyday objects and environments more dynamic, adaptive, and interactive by collectively actuating and reconfiguring them in a programmable fashion.

<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-4.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-4.jpg" /></a>
  </div>
</div>

Making shapes out of discrete collective elements is not a new idea.
There is a long history of modular self-reconfigurable robots and swarm robotics.
These areas of research have explored the idea of collective and general-purpose shape transformation for robotic applications, such as space exploration, rescue, and navigation.
However, there are many critical challenges when we apply this approach for **interactive interfaces**.

For example, the speed of transformation needs to be much faster than for robotic applications, as the interactive system must change and respond to the user in real-time (e.g., in seconds, not minutes or hours). Another consideration is scalability.
To display meaningful information, it may require a relatively large number of elements, which often introduces implementation problems.
Finally, unlike autonomous systems, interactive systems must consider the interaction between humans and objects --- there remains work to be done in understanding how we might interact with such collective elements and how these interfaces could support everyday human activities.

<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-5.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-5.jpg" /></a>
  </div>
</div>

This thesis addresses these questions by investigating how collective shape construction and transformation can be used for {\it interactive computer interfaces}.
To this end, this thesis introduces **collective shape-changing interfaces**, a new class of shape-changing interfaces constructed by a swarm of discrete physical elements.
The main contribution of this thesis is the first exploration of this new class of shape-changing interfaces in the following four domains:

1. **Shape representation**: <br/>
explore what types of shape representations are possible to display information


2. **Reconfiguration methods**: <br/>
explore how both active and passive elements can be used to construct a shape for interactive interfaces


3. **Interaction**: <br/>
explore how the user can interact with many collective elements through direct physical manipulation,


4. **Applications**: <br/>
explore, illustrate, and demonstrate what kind of applications are achievable for human-computer interaction.


<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-1.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-1.jpg" /></a>
  </div>
</div>
<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-2-1.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-2-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-9.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-9.jpg" /></a>
  </div>
</div>
<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-7.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-7.jpg" /></a>
  </div>
</div>

This new class of shape-changing interfaces promises to address some of the limitations of the current shape-changing interfaces. For example, a swarm of modular elements enables us to decompose the large, monolithic shape-changing objects into a set of simple, distributed elements. This significantly contributes to the deployability of the system in everyday environments. In addition, the swarm behaviors enable us to make unbounded shape transformations for expressive representation.
Through my explorations of various proof-of-concept prototypes, I demonstrate how we can push the boundary of the current shape-changing interfaces by leveraging the collective behaviors of both active and passive elements.
I also demonstrate how these dynamic shapes can support a range of application scenarios, such as interactive displays, adaptive environments, dynamic data physicalization, and accessibility support for people with visual impairments.
Finally, I discuss the challenges and opportunities for using this approach towards the future of dynamic physical media.

<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-6.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-6.jpg" /></a>
  </div>
</div>


# Thesis Contributions
This thesis makes contributions to the field of Human-Computer Interaction in the following areas:

1. A design space exploration of dynamic shape construction with collective elements


2. A new taxonomy and investigation of active and passive shape construction and transformation with collective elements


3. A novel technique for creating a dynamic shape with active shape-transformable swarm robots (e.g., ShapeBots, LiftTiles)


4. A novel technique for constructing 3D shapes with an assembly of passive magnetically connectable blocks (e.g., Dynablock)


5. A novel technique for actuating passive magnetic markers with scalable electro-magnetic actuation (e.g., FluxMarker, Reactile)


6. A novel technique for actuating existing objects to reconfigure spatial layouts (e.g., RoomShift)


7. A novel interaction technique for programming the dynamic shape construction on a 2D surface with direct physical manipulation (e.g., Reactile)


<br/>

<div class="figures ui four column grid">
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-10-1.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-10-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-10-2.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-10-2.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-10-3.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-10-3.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-10-4.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-10-4.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-10-5.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-10-5.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-10-6.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-10-6.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-10-7.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-10-7.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-10-8.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-10-8.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-10-9.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-10-9.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-10-10.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-10-10.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-10-11.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-10-11.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-10-12.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-10-12.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-10-13.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-10-13.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-10-14.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-10-14.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-10-15.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-10-15.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/phd-thesis/figure-10-16.jpg" data-lightbox="lightbox"><img src="/static/projects/phd-thesis/figure-10-16.jpg" /></a>
  </div>
</div>

# PhD Dissertation Defense

<div class="video-container" style="display: block">
  <iframe
    class="embed"
    width="100%"
    height="315"
    src="https://www.youtube.com/embed/FHmp7BIhXJI"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen={true}
    mozAllowFullScreen={true}
    msAllowFullScreen={true}
    oAllowFullScreen={true}
    webkitAllowFullScreen={true}
  ></iframe>
</div>

<br/>

Thesis Committee:

- **Daniel Leithinger** (CU Boulder, chair)


- **Mark Gross** (CU Boulder)


- **Tom Yeh** (CU Boulder)


- **Hiroshi Ishii** (MIT Media Lab)


- **Takeo Igarashi** (The University of Tokyo)

<br/>

Date: May 13th, 2020


