---
id: hapticbots
name: HapticBots
description: Distributed Encountered-type Haptics for VR with Multiple Shape-changing Mobile Robots
title: 'HapticBots: Distributed Encountered-type Haptics for VR with Multiple Shape-changing Mobile Robots'
authors:
  - Ryo Suzuki
  - Eyal Ofek
  - Mike Sinclair
  - Daniel Leithinger
  - Mar Gonzalez-Franco
year: 2021
booktitle: In Proceedings of the 34th Annual ACM Symposium on User Interface Software and Technology (UIST '21)
publisher: ACM, New York, NY, USA
pages: 1-13
doi: https://doi.org/10.1145/3472749.3474821
conference:
  name: UIST 2021
  fullname: The ACM Symposium on User Interface Software and Technology (UIST 2021)
  url: http://uist.acm.org/uist2021
pdf: uist-2021-hapticbots.pdf
slide: uist-2021-hapticbots-slide.pdf
acm-dl: https://doi.org/10.1145/3472749.3474821
video: https://www.youtube.com/watch?v=s5NVJMYhfjk
short-video: https://www.youtube.com/watch?v=HTiZgOESJyQ
embed: https://www.youtube.com/embed/s5NVJMYhfjk
github: https://github.com/ryosuzuki/hapticbots
arxiv: https://arxiv.org/abs/2108.10829
pageCount: 13
slideCount: 21
# image: dynablock.jpg
---

# Abstract

HapticBots introduces a novel encountered-type haptic approach for Virtual Reality (VR) based on multiple tabletop-size shape-changing robots. These robots move on a tabletop and change their height and orientation to haptically render various surfaces and objects on-demand. Compared to previous encountered-type haptic approaches like shape displays or robotic arms, our proposed approach has an advantage in deployability, scalability, and generalizability---these robots can be easily deployed due to their compact form factor. They can support multiple concurrent touch points in a large area thanks to the distributed nature of the robots. We propose and evaluate a novel set of interactions enabled by these robots which include: 1) rendering haptics for VR objects by providing just-in- time touch-points on the user’s hand, 2) simulating continuous surfaces with the concurrent height and position change, and 3) enabling the user to pick up and move VR objects through graspable proxy objects. Finally, we demonstrate HapticBots with various ap- plications, including remote collaboration, education and training, design and 3D modeling, and gaming and entertainment.

<video poster="/static/projects/hapticbots/video-poster/top.jpg" preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/hapticbots/video/top.mp4" type="video/mp4"></source>
</video>


<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-1.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-1.jpg" /></a>
  </div>
</div>


# Introduction

Efective haptic feedback promises to enrich Virtual Reality (VR) experiences in many application domains [17], but supporting general-purpose haptic feedback is still a difcult challenge. A common approach to providing haptic feedback for VR is to use a hand-held or wearable device. However, these wearable hand- grounded devices are inherently limited in their ability to render a world grounded force, such as surfaces that can be touched or pushed with the user’s hand.

To fll this gap, **encountered-type haptics** are introduced as an alternative approach. In contrast to hand-held or wearable devices, the encountered-type haptics provide haptic sensations through actuated physical environments by dynamically moving physical objects or transforming the physical shape when the user encounters the virtual object.


<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-2-1.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-2-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-2-2.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-2-2.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-2-4.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-2-4.jpg" /></a>
  </div>
</div>

Diferent approaches have been developed for encountered-type haptics: from grounded robotic arms (e.g., Snake Charmer, VR- Robot) to shape displays (e.g., shapeShift, Feelex, inForce). However, the current approaches still face a number of challenges and limitations. For example, shape displays often require large, heavy, and mechanically complex devices, reducing reliability and deployability of the system for use outside research labs. Also, the resolution fdelity and the display’s size are still limited, making it difcult to render smooth and continuous surfaces across a large interaction area. Alternately, robotic arms can bring a small piece of a surface to meet the user hand on demand, but the speed at which humans move challenges the ability to cover just in time large interaction spaces with a single device. Scaling the number of robotic arms is also a challenge as complex 3D path planning is required to avoid unnecessary collision with both the user and the other arms.


# Distributed Encountered-type Haptics


<video poster="/static/projects/hapticbots/video-poster/surface.jpg" preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/hapticbots/video/surface.mp4" type="video/mp4"></source>
</video>

<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-3-1.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-3-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-3-2.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-3-2.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-3-3.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-3-3.jpg" /></a>
  </div>
</div>



This paper introduces a novel encountered-type haptics approach, which we call **distributed encountered-type haptics**. Distributed encountered-type haptics employ multiple shape-changing mobile robots to simulate a consistent physical object that the user can encounter through hands or fngers. By synchronously controlling multiple robots, these robots can approximate diferent objects and surfaces distributed in a large interaction area.


<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-4-1.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-4-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-4-2.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-4-2.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-4-3.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-4-3.jpg" /></a>
  </div>
</div>



Our proposed approach enables deployable, scalable, and general- purpose encountered-type haptics for VR, providing a number of advantages compared to the existing approaches, including shape displays, robotic arms, and non-transformable mobile robots.

1. **Deployable**: Each mobile robot is light and compact, making the system portable and easy to deploy.

2. **Scalable**: Since each robot is simple and modular, it can scale to increase the number of touch-points and covered area. Moreover, the use of multiple robots can reduce the average distance that a robot needs to travel, which reduces the robots’ speed requirements.

3. **General-purpose**: Finally, the shape-changing capability of each robot can signifcantly increase the expressive- ness of haptic rendering by transforming itself to closely match with the virtual object on-demand and in real-time. This allows for greater fexibility needed for general-purpose applications.


<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-6.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-6.jpg" /></a>
  </div>
</div>


<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-5-1.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-5-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-5-2.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-5-2.jpg" /></a>
  </div>
</div>



# HapticBots

To demonstrate this idea, we built HapticBots, an open source 1 tabletop shape- changing mobile robots that are specifcally designed for distributed encountered-type haptics. HapticBots consists of of-the-shelf mo- bile robots (Sony TOIO), and custom height-changing mechanisms to haptically render general large surfaces with varying normal directions (-60 to 60 degrees). It can cover a large space (55 cm × 55 cm) above the table (a dynamic range of 24 cm elevation) at high speed (24 cm/sec and 2.8 cm/sec for horizontal and vertical speed, respectively). Each robot is compact (4.7 × 4.7 × 8 cm, 135 g) and its tracking system consists of an expandable, pattern-printed paper mat; thus, it is portable and deployable.

Our HapticBots’ hardware design is inspired by ShapeBots, but as far as we know, our system is the frst exploration of using multiple tabletop shape-changing robots for VR haptics. Apply- ing to VR haptics introduces a set of challenging requirements, which led to a new distributed haptics system design as well as to new hardware for each of the robots: 1) Efcient path planning integrated with real-time hand tracking: The system coordinates the movements of all robots with the user’s hand. We track and anticipate potential touch points at a high frame rate (60 FPS) and guide the robots to encounter the user’s hands in a just in time fashion. 2) Precise height and tilt control: In contrast to ShapeBots’ open-loop system, HapticBots enables more precise height and tilt control with embedded encoders and closed-loop control system to render surfaces with varying normal angles. 3) Actuator robust- ness: We vastly improved actuator force by around 70x (21.8N vs. 0.3N holding force of ShapeBots) to provide meaningful force feedback. In addition to these technical contributions, we developed various VR applications to demonstrate the new possibilities for encoun- tered haptics, including remote collaboration, medical training, 3D modeling, and entertainment.


<video poster="/static/projects/hapticbots/video-poster/robot.jpg" preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/hapticbots/video/robot.mp4" type="video/mp4"></source>
</video>

<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-7-2.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-7-2.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-7-1.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-7-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-7-4.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-7-4.jpg" /></a>
  </div>
</div>


Our HapticBots linear actuator is designed to achieve all of these requirements with reasonable force capabilities. Figure 5 illustrates the mechanical design of a linear actuator. In our design, the two retractable metal tapes on motorized reels occupy a small footprint but extend and hold their shape while resisting modest loads in certain directions. Our reel-based linear actuator uses compact DC motors (Pololu 1000:1 Micro Metal Gearmotor HP 6V, Product No. 2373). This motor has a cross-section of 1.0 × 1.2 cm and its length is 2.9 cm. The no-load speed of the geared motor is 31 rpm, which extends the metal tape at 2.8 cm/sec. The motor’s maximum stall torque is 12 kg·cm. We accommodate two motors placed side by side to minimize the overall footprint size.

For the reel, we use an of-the-shelf metal tape measure reel (Crescent Lufkin CS8506 1/2 x 6 inch metal tape measure). The material choice of this reel is one of the key design considerations as it determines the vertical load-bearing capability. On the other hand, a strong material makes it more difcult for this small DC motor to successfully rotate and rotate the reel. After the test of eight diferent tape measures devices with various materials, stifnesses, thicknesses, and widths, we determined the Crescent Lufkin CS8506 tape measure to work most reliably in our setting. The tape has 0.15 mm thickness and is 1.2 cm (1/2 inch) width wide, and slightly curved to avoid buckling. We cut this tape measure to 36 cm and drilled a 3 mm hole at the end to fx it to the shaft with an M3 screw.


<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-11-1.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-11-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-11-2.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-11-2.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-11-3.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-11-3.jpg" /></a>
  </div>
</div>

<video poster="/static/projects/hapticbots/video-poster/surface-3.jpg" preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/hapticbots/video/surface-3.mp4" type="video/mp4"></source>
</video>

<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-12-1.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-12-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-12-2.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-12-2.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-12-3.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-12-3.jpg" /></a>
  </div>
</div>

Our system consists of multiple coordinated height-changing robots and the associated VR software. Each robot is made of 1) custom-built shape-changing mechanisms with reel-based actuators, and 2) an off-the-shelf mobile robot (Sony Toio) that can move on a mat printed with a pattern for position tracking. For the VR system, we used Oculus Quest HMD and its hand tracking capability for interaction. The software system synchronizes virtual scenes with physical environment (e.g., each robot’s position, orientation, and height), so that the robots can provide a haptic sensation in a timely manner. This section describes the design and implementation of the both hardware and software systems, then provides technical evaluation of HapticBots prototype.


<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-9-1.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-9-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-9-2.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-9-2.jpg" /></a>
  </div>
</div>

For the virtual reality environment and gestural tracking, we use an Oculus Quest HMD with its built- in hand tracking mechanism. The main computer (MacBook Pro 16 inch, Core i9, 32GB RAM) runs as the Node.js server. The server controls and communicates with the linear actu- ators and the Unity application on an Oculus Quest through Wi-Fi (with UDP and Websocket protocol, respectively) and Toio robots through Bluetooth. The host computer communicates with seven Toio robots through Bluetooth V4.2 (Bluetooth Low Energy). The HapticBots computer operates at 60 FPS for tracking and control.

We use the Unity game engine to render a virtual environment. As each robot moves along the planar surface, it constantly changes its height and orien- tation to best ft the virtual surface above it. To obtain the target height and surface normal of the robot, the system uses a vertical ray casting to measure the height of the virtual contact point given its position on the desk.


<video poster="/static/projects/hapticbots/video-poster/control.jpg" preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/hapticbots/video/control.mp4" type="video/mp4"></source>
</video>

<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-8-1.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-8-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-8-2.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-8-2.jpg" /></a>
  </div>
</div>



# Applications

VR is an accessible way to create realistic training setups to improve skills or prepare for complex situations before they happen in real life. With its fast encounter-type approach, users of HapticBots can train their muscle memory to learn where diferent physical elements such as the interface of a fight cockpit are located (Figure 2). HapticBots can simulate continuous surfaces, and the robots can follow the user’s fngers as they move and even elevate them during palpation diagnostics. These features could be relevant for medical education and surgery training.


<video poster="/static/projects/hapticbots/video-poster/applications.jpg" preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/hapticbots/video/applications.mp4" type="video/mp4"></source>
</video>



### Design and 3D Modeling
In addition to its continuous shape rendering capabilities, the design of HapticBots being based on dual actuators makes the system robust to lateral bending and provides the ability to control diferent tilts to render topography of a terrain surface. This enables activities like map and city exploration or terrain simulation, which can be necessary for architectural design or virtual scene/object modeling


<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-14-1.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-14-1.jpg" /></a>
  </div>
</div>

### Remote Collaboration
Tangible interfaces can enrich remote collaboration through shared synchronized physical objects [7]. Using two connected HapticBots setups, we can reproduce remote physical objects, or introduce shared virtual objects. Figure 17 shows an example of a chess game application where the user moves the chess fgures phys- ically through robots. As a user is replacing an opponent piece from the board, she can feel the robots at the correct place on the board. This interaction could extend to multiple end points to create shared, distributed multi-user spaces.

<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-14-2.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-14-2.jpg" /></a>
  </div>
</div>

### Gaming and Entertainment
World-building games like Minecraft often rely on players con- structing terrains and objects. However the lack of haptics distracts from the immersive experience. HapticBots can augment the game experience during construction or game play in these VR games. Apart from the previously mentioned interactions to grab, push, and encounter, multiple robots can act in coordinated ways to simulate larger objects. They can also provide proxy objects that interact with additional props and game controllers, such as an axe in Minecraft

<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/hapticbots/figure-14-3.jpg" data-lightbox="lightbox"><img src="/static/projects/hapticbots/figure-14-3.jpg" /></a>
  </div>
</div>



