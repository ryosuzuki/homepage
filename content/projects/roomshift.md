---
id: roomshift
name: RoomShift
description: Room-scale Dynamic Haptics for VR with Furniture-moving Swarm Robots
title: 'RoomShift: Room-scale Dynamic Haptics for VR with Furniture-moving Swarm Robots'
authors:
  - Ryo Suzuki
  - Hooman Hedayati
  - Clement Zheng
  - James Bohn
  - Daniel Szafir
  - Ellen Yi-Luen Do
  - Mark D Gross
  - Daniel Leithinger
year: 2020
booktitle: In Proceedings of the ACM CHI Conference on Human Factors in Computing Systems (CHI '20)
publisher: ACM, New York, NY, USA
pages: Paper 396, 11 pages
doi: https://doi.org/10.1145/3313831.3376523
conference:
  name: CHI 2020
  fullname: The ACM CHI Conference on Human Factors in Computing Systems (CHI 2020)
  url: https://chi2020.acm.org/
video: https://www.youtube.com/watch?v=6_PAirnlDnk
embed: https://www.youtube.com/embed/6_PAirnlDnk
short-video: https://www.youtube.com/watch?v=4OWU60gTOFE
pdf: chi-2020-roomshift.pdf
# poster: uist-2019-lift-tiles-poster.pdf
arxiv: https://arxiv.org/abs/2008.08695
pageCount: 11
slideCount: 0

# image: dynablock.jpg
---


# Abstract

This paper presents RoomShift, a room-scale dynamic haptic environment for virtual reality, using a small swarm of robots that can move furniture. RoomShift consists of nine shape-changing robots: Roombas with mechanical scissor lifts. These robots drive beneath a piece of furniture to lift, move and place it. By augmenting virtual scenes with physical objects, users can sit on, lean against, place and otherwise interact with furniture with their whole body; just as in the real world. When the virtual scene changes or users navigate within it, the swarm of robots dynamically reconfigures the physical environment to match the virtual content. We describe the hardware and software implementation, applications in virtual tours and architectural design and interaction techniques.

<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/roomshift/video/top.mp4" type="video/mp4"></source>
</video>

<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-1-1.jpg" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-1-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-1-2.jpg" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-1-2.jpg" /></a>
  </div>
</div>

# Introduction

There is a clear need to provide haptic sensations in virtual environments. Recent advances in display and tracking technologies promise immersive experience in virtual reality, but objects seen in VR such as walls and furniture are only visual: the user cannot touch, feel, sit on, or place objects on them. This limits the sense of full immersion in the virtual world. To overcome these limitations, various haptic interfaces have been explored. In the previous work, most haptic interfaces focus on finger-tip haptic feedback with actuated controllers or on-body haptic sensations with wearable devices. In contrast, encountered-type haptic feedback with a dynamic environment promises to increase the immersion of virtual experiences, which are difficult to achieve using an only handheld or wearable haptic devices. Through a dynamic haptic environment, users can touch and interact with the whole virtual scene with their bodies --- they can walk, sit on, and lean against objects in the VR environment. Existing approaches for actuated environments, however, are often limited in speed of transformation (e.g., slow transformation with inflatables) and the range of supported interactions (e.g., only walking).

<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/roomshift/video/wall.mp4" type="video/mp4"></source>
</video>



<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-9-1.jpg" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-9-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-9-2.jpg" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-9-2.jpg" /></a>
  </div>
</div>

This paper introduces RoomShift, a room-scale dynamic haptic environment for virtual reality. RoomShift provides haptic sensations by reconfiguring physical environments using a small swarm of robot assistants. Inspired by shelf-moving robots that are used in robotic warehouses, we developed a swarm of shape-changing robots that can move a range of existing furniture. Each robot has a mechanical lift that extends from 30 cm to 100 cm to pick up, carry, and place objects such as chairs, tables, and walls. This way, users can touch, sit, place, and lean against objects in the virtual environment.


<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-2-1.png" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-2-1.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-2-2.png" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-2-2.png" /></a>
  </div>
</div>


# RoomShift: Furniture-moving Robots

RoomShift consists of a small swarm of shape-changing robots; each robot uses a Roomba as a mobile base. On this base is mounted a custom mechanical scissor lift made of two linear actuators and a metal drying rack. As the mechanical lift is compact in its closed state, the robot can move under a table or chair with 30 cm clearance, and extend the scissor lift to pick it up.


<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/roomshift/video/carry.mp4" type="video/mp4"></source>
</video>

<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-3-1.jpg" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-3-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-3-2.jpg" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-3-2.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-3-3.jpg" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-3-3.jpg" /></a>
  </div>
</div>

RoomShift comprises nine shape-changing swarm robots based on the Roomba Create 2. For the mechanical lift structure, we repurposed an off-the-shelf expandable laundry rack (Room Essentials Compact Drying Rack) and attached two linear actuators (Homend DC12V 8 inch Stroke Linear Actuator, which extends from 32 cm to 52 cm) at the base of the rack. The linear actuators are fixed to the endpoints of the scissor structure with 8 mm steel rods, so that when the actuator contracts, the mounted scissor structure extends vertically (from 30 cm to 100 cm). The scissor structure moves at a speed of 1.3 cm / sec. To mount the scissor structure, we fixed a 6mm acrylic bottom plate (35 cm x 35 cm) and four omni-directional casters (Dorhea Ball Transfer Bearing Unit) to relieve the Roomba of most of the weight that the robot carries. Each robot moves at 20 cm / sec. Figure 3 illustrates the mechanical design of each RoomShift robot.

<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-4-1.jpg" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-4-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-4-2.png" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-4-2.png" /></a>
  </div>
</div>

One advantage of our approach is that the robot need not support the weight of the user. Once the robot places the furniture, it serves as a static object. Thus, when a user sits on or puts weight on it, all of the weight goes to the furniture, instead of the robot, which significantly reduces the possibility of a mechanical breakdown.
Although the maximum load for the Roomba is 9 kg, the corner-mounted casters distribute and carry heavier loads. Thus, our robots can lift and carry heavier objects than an unmodified Roomba. The maximum weight the robot can lift and carry is 22 kg. When we put a heavier object than 23 kg, we observed the scissor structure started to break. The strength of the scissor structure suffices to lift lightweight chairs and tables, such as the IKEA honeycomb furniture used in our prototypes. The weight of the furniture we have tested (depicted in Figure) ranges from 3.5 to 11.2 kg. For heavier objects, multiple robots can also coordinate to lift a piece together if there is sufficient space under the furniture. Also, with a more robust scissor structure, we can carry heavier objects, as we observed the Roomba base itself (with the corner-mounted casters) can carry up to 30 kg load.

<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-5-1.jpg" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-5-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-5-2.jpg" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-5-2.jpg" /></a>
  </div>
</div>

This approach also increases flexibility because different types of furniture can be actuated with the height-adjustable scissor lift. For example, Figure illustrates various static props that the RoomShift robot can actuate. These objects include furniture such as a desk, a long table, different chairs, and a side table. Note that due to the robot’s minimum collapsed size, objects must have at least 30 cm clearance below them, and enough horizontal space to fit the robot. A designer can also create custom props for specific applications, for instance, the styrofoam wall mounted to a side table seen in the Figure.


# Tracking and Control

To accurately control the RoomShift robots, we require precise motion tracking that can cover the play area in which a user walks. We use an optical tracking system with 20 IR cameras (Qualisys Miqus 5) that can track objects in a 10 m × 10 m space. The system tracks six degrees of freedom (DOF) position of the objects
with retro-reflective spherical markers at 60 FPS frame rate.
To track the robots as well as physical props, we attached five 30 mm spherical retroreflective markers. For the robot, we attached markers to a pair of parallel bars, so that the markers’ relative positions remain constant regardless of the height of the scissor lift. We can also estimate the height of the scissor structure by measuring the orientation of the marker pattern (the pink plane surface depicted in the Figure).


<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/roomshift/video/tracking.mp4" type="video/mp4"></source>
</video>

<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-7-3.jpg" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-7-3.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-7-1.jpg" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-7-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-7-2.jpg" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-7-2.jpg" /></a>
  </div>
</div>

To control the robots’ movements, we use a simple path planning algorithm. The input is 1) the current positions of the robots, 2) the positions of obstacles (e.g., furniture, other robots, and users), and 3) the target locations. The algorithm outputs the goal of each robot at the next time step. The system continuously updates the path and drives them to their target locations. The main server continuously tracks the robot positions, calculates their wheel speeds, and sends commands at 30 Hz over WiFi.

To pick up and place these, the robot follows a predefined sequence, approaching the object from an angle where it will not collide with the object’s legs. To avoid the collision with the legs of furniture, each object has a user-defined entry and exit point (Figure 8). We also register the height of target furniture before the system starts (e.g., 70 cm for Table_A, 40 cm for Chair_B), so that it can extend the scissor lift to certain target height. We could also put a simple sensor on top of the scissor structure to make it a closed-loop system.

<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-6-1.png" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-6-1.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-6-2.png" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-6-2.png" /></a>
  </div>
</div>

The main computer runs a Node.js server and the Qualisys tracking software. The 6DOF tracking data that the Qualisys tracking system captures is streamed to the Node.js server through the WebSocket protocol. Based on the tracking data, a web browser client renders the VR scene with A-Frame. The user experiences the VR scene using an Oculus Go head mounted display and its built-in VR browser. We synchronize the desktop computer and the Oculus Go browser with real-time communication through WebSocket. When the virtual scene changes, the system moves the robots to dynamically reconfigure the physical scene. First, the system computes the types of props and each target position based on the relative position from the user.


# Interactions and Applications

In this paper, we specifically focus on architectural application scenarios, such as rendering physical room interiors for virtual real estate tours and collaborative architectural design, two increasingly common application areas for VR. Virtual real estate tours reduce the time and cost compared to on-site viewings, but currently lack the bodily experience of being able to touch surfaces and sit down. In architectural design, VR aids the communication between architects and clients, where proposed designs can be experienced, discussed and modified before building them. We are motivated by how RoomShift can enable people with various physical abilities to experience, test and co-design these environments with their bodies. Most of the elements in these applications can be covered with a finite set of furniture and props (e.g., chairs, desks, and walls). We discuss some of the basic interactions to support these applications.

<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-8.png" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-8.png" /></a>
  </div>
</div>

To support these scenarios, we propose four types of basic interactions RoomShift can support, with the spectrum between embodied interactions and controller-based interactions, as illustrated in the Figure.

1. Experiencing Architectural Spaces: Walking and Touching

2. Architectural Co-Design: Physically Moving Furniture

3. Navigating Large Spaces: Teleporting in VR

4. Virtual Scene Editing: Virtually Moving Furniture

Embodied interactions refer to interaction with virtual scenes through physical movements and manipulation. The user can implicitly interact with the system by walking around or explicitly interact with the virtual scene by physically moving furniture. On the other hand, the user can also interact with the virtual scene with controller-based gestural interactions. An example is when the user relocates a distant piece of furniture or remove the wall in the room. The user can also virtually teleport their location to navigate through space.

<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-10-1.jpg" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-10-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-10-2.jpg" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-10-2.jpg" /></a>
  </div>
</div>

<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-11-1.jpg" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-11-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/roomshift/figure-11-2.jpg" data-lightbox="lightbox">
      <img src="/static/projects/roomshift/figure-11-2.jpg" /></a>
  </div>
</div>

For example, the most basic interaction is to render an architectural space that the user can walk around in and touch.  As the user walks around the space, the robots move the props to maintain the illusion of a larger number of objects.
In addition, the system can mimic larger objects with a single moving robot. For example, when the user is interacting with a large table, either new physical table segments can be added or a single robot can continually move the current table according to the user’s position to simulate touching a larger one.

Also, RoomShift supports teleportation by reconfiguring the room layout to match the new view location. When the user teleports to a new location in the VR scene, the system calculates the positions of the virtual objects relative to the new location and moves the furniture and robots in and out of the play area to enable a fast scene reconfiguration and to avoid collisions with the user and each other.