---
id: shapebots
name: ShapeBots
description: Shape-changing Swarm Robots
title: 'ShapeBots: Shape-changing Swarm Robots'
authors:
  - Ryo Suzuki
  - Clement Zheng
  - Yasuaki Kakehi
  - Tom Yeh
  - Ellen Yi-Luen Do
  - Mark D. Gross
  - Daniel Leithinger
year: 2019
booktitle: In Proceedings of the 32nd Annual ACM Symposium on User Interface Software and Technology (UIST '19)
publisher: ACM, New York, NY, USA
pages: 1-13
doi: https://doi.org/10.1145/3332165.3347911
conference:
  name: UIST 2019
  fullname: The ACM Symposium on User Interface Software and Technology (UIST 2019)
  url: http://uist.acm.org/uist2019
pdf: uist-2019-shapebots.pdf
slide: uist-2019-shapebots-slide.pdf
video: https://www.youtube.com/watch?v=cwPaof0kKdM
embed: https://www.youtube.com/embed/cwPaof0kKdM
github: https://github.com/ryosuzuki/shapebots
poster: uist-2019-shapebots-poster.pdf
demo: https://ryosuzuki.github.io/shapebots-simulator/
pageCount: 13
slideCount: 42
# image: dynablock.jpg
---

# Abstract

We introduce *shape-changing swarm robots*. A swarm of self-transformable robots can both individually and collectively change their configuration to display information, actuate objects, act as tangible controllers, visualize data, and provide physical affordances. ShapeBots is a concept prototype of shape-changing swarm robots. Each robot can change its shape by leveraging small linear actuators that are thin (2.5 cm) and highly extendable (up to 20cm) in both horizontal and vertical directions. The modular design of each actuator enables various shapes and geometries of self-transformation. We illustrate potential application scenarios and discuss how this type of interface opens up possibilities for the future of ubiquitous and distributed shape-changing interfaces.

<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/shapebots/video/top.webm" type="video/webm"></source>
  <source src="/static/projects/shapebots/video/top.mp4" type="video/mp4"></source>
</video>


<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-1-2.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-1-2.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-1-1.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-1-1.jpg" /></a>
  </div>
</div>

<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-2-1.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-2-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-2-2.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-2-2.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-2-3.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-2-3.jpg" /></a>
  </div>
</div>


# Shape-changing Swarm Robots

This paper introduces **shape-changing swarm robots** for dis- tributed shape-changing interfaces. Shape-changing swarm robots can both **individually** and **collectively** change their shape, so that they can collectively present information, act as controllers, actuate objects, represent data, and provide dynamic physical affordances.

<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-3.png" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-3.png" /></a>
  </div>
</div>

This paper specifically focuses on the user interface aspect of such systems, which we refer to shape-changing swarm user interfaces. We identified three core aspects of shape-changing swarm robots: 1) locomotion, 2) self-transformation, and 3) collective behaviors of many individual elements.

<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-4.png" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-4.png" /></a>
  </div>
</div>

# ShapeBots

**ShapeBots are self-transformable swarm robots** with modular linear actuators. To enable a large deformation capability of tiny swarm robots, we developed a miniature reel-based linear actuator that is thin (2.5 cm) and fits into the small footprint (3 cm x 3 cm), while able to extend up to 20 cm in both horizontal and vertical directions.

<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/shapebots/video/unit.webm" type="video/webm"></source>
  <source src="/static/projects/shapebots/video/unit.mp4" type="video/mp4"></source>
</video>

<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-5-1.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-5-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-5-2.png" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-5-2.png" /></a>
  </div>
</div>

<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-6-1.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-6-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-6-2.png" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-6-2.png" /></a>
  </div>
</div>

The modular design of each linear actuator unit enables the construction of various shapes and geometries of individual shape transformation (e.g., horizontal lines, vertical lines, curved lines, 2D area expan- sion, and 3D volumetric change). Based on these capabilities, we demonstrate application scenarios showing how a swarm of distributed self-transformable robots can support everyday interactions.

<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/shapebots/video/transformation.webm" type="video/webm"></source>
  <source src="/static/projects/shapebots/video/transformation.mp4" type="video/mp4"></source>
</video>


# Tracking and Control

To track the position and orientation of the swarm robots, we used computer vision and a fiducial marker attached to the bottom of the robot. We used the ArUco fiducial marker printed on a sheet of paper and taped to the bottom of the robot. Our prototype used a 1.5 cm x 1.5 cm size marker with a 4 x 4 grid pattern, which can provide up to 50 unique patterns. For tracking software, we used the OpenCV library and ArUco python module. It can track the position of the markers at 60 frames per second.

<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/shapebots/video/tracking.webm" type="video/webm"></source>
  <source src="/static/projects/shapebots/video/tracking.mp4" type="video/mp4"></source>
</video>

<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-7-1.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-7-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-7-2.png" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-7-2.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-7-3.png" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-7-3.png" /></a>
  </div>
</div>

To enable the user to easily specify a target shape, we created a web-based interface where users draw a shape or upload an SVG image (Figure 10). The user draws a set of lines, then the main computer calculates target positions, orientations, and actuator lengths to start sending commands.

<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-8.png" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-8.png" /></a>
  </div>
</div>


We can use the same mechanism to track user input. The system supports four different types of user interaction that our system supports: place, move, orient, and pick-up.
The system recognizes as user inputs movement or rotation of a marker that it did not generate.



# Applications: Robots as Dynamic Physical Media
We explore potential application scenarios for the future of human-robot interactions.
One interesting application area is to use these **robots as dynamic physical media**, such as showing **data visualization in the physical world**.
For example, ShapeBots on the USA map physicalize map data; each robot changes its height to show the population of the state it is on. Users can interact with the dataset by placing a new robot or moving a robot to a different state, and the robots update their physical forms to represent the respective population.

<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/shapebots/video/dataphys.webm" type="video/webm"></source>
  <source src="/static/projects/shapebots/video/dataphys.mp4" type="video/mp4"></source>
</video>

<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-9-1.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-9-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-9-2.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-9-2.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-9-3.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-9-3.jpg" /></a>
  </div>
</div>

Similarly, ShapeBots can provide a physical preview of a CAD design. ShapeBots physicalizes the actual size of the box. The design and physical rendering are tightly coupled; as the user changes the height of the box in CAD software, the ShapeBots change heights accordingly. The user can change the parameters of the design by moving robots in the physical space, and these changes are reflected in the CAD design.

<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/shapebots/video/cad.webm" type="video/webm"></source>
  <source src="/static/projects/shapebots/video/cad.mp4" type="video/mp4"></source>
</video>


<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-9-4.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-9-4.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-9-5.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-9-5.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-9-6.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-9-6.jpg" /></a>
  </div>
</div>

<!--
<div>
ShapeBots can also act as an interactive physical display. The following figures show how ShapeBots can render different shapes.
We highlight the advantage of ShapeBots for rendering contours compared to non self-transformable swarm robots. Using a software simulation, we demonstrate how ShapeBots renders an SVG input at different swarm sizes. You can also [**play with the explorable online simulator (https://ryosuzuki.github.io/shapebots-simulator/)**](https://ryosuzuki.github.io/shapebots-simulator/) to see how these robots can render the shape.

<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/shapebots/video/explorable.mp4" type="video/mp4"></source>
</video>
</div>
 -->


# Applications: Robots as Ambient Assistants

Another practical aspect of ShapeBots is the ability to actuate objects and act as physical constraints. As an example, the video shows two robots extending their linear actuators to wipe debris off a table, clearing a workspace for the user.
In these scenarios, these robots can help as an **ambient assistant for everyday life**.

<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/shapebots/video/cleaning.webm" type="video/webm"></source>
  <source src="/static/projects/shapebots/video/cleaning.mp4" type="video/mp4"></source>
</video>

<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-11-1.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-11-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-11-2.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-11-2.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-11-3.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-11-3.jpg" /></a>
  </div>
</div>

By leveraging the capability of locomotion and height change of each robot, ShapeBots can create a dynamic fence to hide or encompass existing objects for affordances. For example, when the user pours hot coffee into a cup, the robots surround the cup and change their heights to create a vertical fence. The vertical fence visually and physically provides the affordance to indicate that the coffee is too hot and not ready to drink. Once it is ready, the robots start dispersing and allow the user to grab it. These scenarios illustrate how the distributed shape-changing robots can provide a new type of affordance, which we call **distributed dynamic physical affordances**.

<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/shapebots/video/affordance.webm" type="video/webm"></source>
  <source src="/static/projects/shapebots/video/affordance.mp4" type="video/mp4"></source>
</video>


<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-10-1.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-10-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-10-2.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-10-2.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-10-3.jpg" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-10-3.jpg" /></a>
  </div>
</div>



# Future Work

ShapeBots is just a single example of shape-changing swarm robots.
There is a broader design space of shape- changing swarm user interfaces.
As future work, we are interested in exploring the different aspct of shape-changing swarm robots.

<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/shapebots/figure-12.png" data-lightbox="lightbox"><img src="/static/projects/shapebots/figure-12.png" /></a>
  </div>
</div>

<!--
# Appendix

<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/shapebots/video/fabrication.mp4" type="video/mp4"></source>
</video>


<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/shapebots/video/explorable.mp4" type="video/mp4"></source>
</video>
 -->




