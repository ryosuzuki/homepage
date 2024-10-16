---
id: pufferbot
name: PufferBot
description: Actuated Expandable Structures for Aerial Robots
title: 'PufferBot: Actuated Expandable Structures for Aerial Robots'
authors:
  - Hooman Hedayati
  - Ryo Suzuki
  - Daniel Leithinger
  - Daniel Szafir
year: 2020
booktitle: In Proceedings of the 2020 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS '20)
publisher: IEEE, New York, NY, USA
pages: 1-6
conference:
  name: IROS 2020
  fullname: The IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2020)
  url: https://www.iros2020.org/
pdf: iros-2020-pufferbot.pdf
video: https://www.youtube.com/watch?v=XtPepCxWcBg
embed: https://www.youtube.com/embed/XtPepCxWcBg
arxiv: https://arxiv.org/abs/2008.07615
pageCount: 6
slideCount: 0
---

# Abstract

We present PufferBot, an aerial robot with an expandable structure that may expand to protect a drone’s propellers when the robot is close to obstacles or collocated humans. PufferBot is made of a custom 3D-printed expandable scissor structure, which utilizes a one degree of freedom actuator with rack and pinion mechanism. We propose four designs for the expandable structure, each with unique characterizations for different situations. Finally, we present three motivating scenarios in which PufferBot may extend the utility of existing static propeller guard structures.


<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/pufferbot/video/top.mp4" type="video/mp4"></source>
</video>

<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-1-1.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-1-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-1-2.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-1-2.jpg" /></a>
  </div>
</div>


# Introduction

Aerial robots are increasingly used in a wide variety of applications, such as search and rescue, journalism, structural inspection, and environmental data collection. When used indoors, aerial robots have traditionally been isolated from humans through cages or operated in an entirely separated space, but they are increasingly entering into environments with collocated humans (e.g., construction sites). In such situations, there is an increasing demand to reduce the danger and unpredictability of robots, as well as increase safety for nearby people.

To address issues surrounding propeller damage/safety, many aerial robots use propeller guards—fixed structures that may prevent the propellers from hitting an obstacle or person in the event of a collision. However, many guards do not fully cover the robot’s propellers (for instance, only providing cover for the horizontal size of a propeller), leaving other parts of the propellers (e.g., the top) exposed and vulnerable to damage. On the other hand, guards that do provide full coverage surrounding the propellers, such as in the Zero Zero Robotics HoverCam and the Flyability GimBall, significantly increase the size and rigidity of the robot, potentially making the robot less maneuverable. This can pose a problem if the robot operates in narrow spaces (e.g., search and rescue in a collapsed building), as the robot cannot navigate tight spaces and can become stuck between obstacles.


<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/pufferbot/video/collision-1.mp4" type="video/mp4"></source>
</video>

<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-7-1.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-7-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-7-2.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-7-2.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-7-3.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-7-3.jpg" /></a>
  </div>
</div>


# PufferBot
In this paper, we introduce PufferBot, the concept of an ex- pandable aerial robot that can dynamically change its shape to reduce damage in the event of collisions with collocated humans and/or the environment. PufferBot consists of an aerial robot with a mounted expandable structure that can be actuated to expand in order to reduce the collision damage or create an enlarged buffer zone surrounding the robot. The PufferBot concept is inspired by both natural designs (e.g., pufferfish) and mechanical systems (e.g., vehicle airbags). When in danger, a pufferfish (Tetraodontidae) inflates its body by taking water or air into portions of its digestive tract to increase its size. Similarly, vehicle airbag systems also inflate to protect humans when crashes occur.

<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-2.png" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-2.png" /></a>
  </div>
</div>

By taking an inspiration from such metaphors, we propose an expandable structure for an aerial robot that may reduce the risk of crashing and protect the robot’s propellers when the robot is in danger of falling on the ground, crashing into an object, or navigating cluttered spaces. One advan- tage of our system is that the expandable structure can dynamically change its shape in order to reduce the overall size in the non-expanded state, making it easier for the robot to navigate in narrow spaces and avoid unnecessary contact with the surrounding environment. In addition, such expandable structures may open up a new design element for future work examining user interaction.

<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/pufferbot/video/human-2.mp4" type="video/mp4"></source>
</video>

<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-10-1.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-10-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-10-2.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-10-2.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-10-3.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-10-3.jpg" /></a>
  </div>
</div>



# Design and Implementation


## Aerial Robot
In this work, We used a DJI Flame Wheel F450 frame for our aerial robot. The base frame weight is 282 g. After mounting additional components (motors, battery, flight controller, etc.), the weight of the aerial robot accumulates to 1.2 Kg. Based on the specification document, the robot is capable of lifting up to 1.6 Kg of payload. which is enough for our expandable structure (in our setting, the weight of expandable structure and the actuator combined is 1.6 Kg). The diagonal length of the robot (motor to motor) is 45 cm. We used 4.5 inch propellers (11.43 cm), which make the total length of the aerial robot 70cm. We used a 4S Lithium-ion Polymer (LiPo) battery as the power source, which gives the robot a flight time of approximately 18 minutes. We built a plate on top of the aerial robot which gives us enough surface to mount and secure the expandable structure and actuator. The plate also allows us to avoid direct contact with the inertial measurement unit (IMU) and onboard sensors in the flight controller.


## Expandable Structure
The expandable structure is made of three parts: (1) actuator joints, (2) regular joints, and (3) scissor units. 74 pieces were used in total to make the expandable structure. Revolvable press fit joints are used for secure but rotatable connections


<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-3-1.png" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-3-1.png" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-3-3.png" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-3-3.png" /></a>
    <a href="/static/projects/pufferbot/figure-3-2.png" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-3-2.png" /></a>
  </div>
</div>


## Actuation

We actuate the expandable structure with a one degree of freedom actuation mechanism based on rack and pinion. The pinion gear located in the center rotates the four individual rack planes at the same time, so that the actuated racks can evenly apply the expansion force in four different directions at the same rate. The actuator joint attached to the end of the rack can expand and collapse the expandable structure by pushing and pulling the connected points. All the actuator parts are 3D printed with PLA. We laser cut the racks with 3mm plywood. We used plywood after testing with different materials (e.g., acrylic) and found that plywood was the most robust in terms of holding its shape against bending forces over time. We used a FeeTech FS5103R as a servo motor, controlled by a Wemos D1 mini ESP8266 micro-controller.


<div class="figures ui two column grid">
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-4-1.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-4-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-4-2.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-4-2.jpg" /></a>
  </div>
</div>

<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-5.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-5.jpg" /></a>
  </div>
</div>

<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/pufferbot/video/expand.mp4" type="video/mp4"></source>
</video>



## Control

There are two components that need to be controlled in the PufferBot: the aerial robot and the expandable structure actuator. Both can be controlled autonomously by a central computer or manually by a teleoperator. To implement au- tonomous control, we developed a linear PID controller that controls the position and altitude of the aerial robot. As the aerial robot we used lacks on-board sensing capabilities suf- ficient for accurate localization, our PID controller currently relies on a Vicon motion capture system with 200Hz motion tracking cameras embedded in the environment to track the physical robot. There is a trajectory planner built on top of the PID controller so the robot can traverse the space as planned. The local computer that runs the Vicon system also continuously detects nearby obstacles, and based on this information, it wirelessly communicates with the actuator’s microcontroller to programmatically control the size of the expandable structure. In the manual mode, a teleoperator is in charge of controlling the robot as well as the expandable structure.

## Performance

The Pufferfish weights 600 grams and can expand or collapse in 6 seconds (we tested the expanding structure 50 times and the number reported is the mean of the trials). PufferBot can handle 6-9 N of force: 6 N against the parts furthest from the actuation racks and up to 9 N applied to the links directly connected to the racks.


# Application Scenarios

<div class="figures ui one column grid">
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-6.png" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-6.png" /></a>
  </div>
</div>

## Protecting Humans / Human-Robot Communication

Aerial robots and humans are increasingly occupying shared spaces, whether through collaboration in the work- place or users partaking in leisure activities (e.g., a hobbyist piloting an aerial robot in their neighbourhood). While human safety is critical in these situations, developing autonomous/semi-autonomous systems capable of mitigating all risk of collisions remains an open problem, with some risks arising from humans themselves (e.g., a wandering human who is not paying attention or one who is attempting to test the robot’s behaviors might incite a collision with the robot). In these scenarios, PufferBot may reduce the risk of human injury in contacting the robot’s spinning propellers, disperse the force of the robot during a collision over a wider surface area, and provide a compliance mechanism that helps mitigate impact force.

<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/pufferbot/video/human.mp4" type="video/mp4"></source>
</video>

<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-11-1.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-11-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-11-2.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-11-2.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-11-3.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-11-3.jpg" /></a>
  </div>
</div>


## Protecting Drones

In recent years, there has been an increasing trend in utilizing aerial robots for inspecting bridges, powerlines, pipelines, and other infrastructure elements. For these tasks, aerial robots must operate close to the target of interest, increasing the chance of the robot hitting obstacles due to operator error, loss of power, and/or unexpected elements of weather like gusts of wind. In these situations, PufferBot may protect the robot from dangerous objects in the environment. In the worst case, PufferBot may reduce damage to the robot when in free-fall by expanding to leverage the scissor structure, which acts like a spring

<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/pufferbot/video/crash.mp4" type="video/mp4"></source>
</video>

<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-9-1.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-9-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-9-2.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-9-2.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-9-3.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-9-3.jpg" /></a>
  </div>
</div>


## Sensing and Navigating Complex Environments

When drones navigate in complex indoor environments, they usually rely on some form of perception (e.g., SLAM) to avoid colliding with walls and obstacles. However, many conditions may impair perception algorithms, including smoke, glare, dirty camera lenses, etc. We propose to use the expanding scissor structure as a guiding mechanism in collision-tolerant navigation, similar to the whiskers of a cat, the use of white canes by people who are blind or visually impaired, or the bumper bar of wheeled robots like Roomba. When the drone is in a complex environment, it may expand in order to locate obstacles by bumping into them. We can further mount sensors into the structure to enhance this navigation and even provide haptic feedback to a teleoperator to indicate when the presence of nearby obstacles.

<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/pufferbot/video/collision-2.mp4" type="video/mp4"></source>
</video>

<div class="figures ui three column grid">
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-8-1.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-8-1.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-8-2.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-8-2.jpg" /></a>
  </div>
  <div class="figure column">
    <a href="/static/projects/pufferbot/figure-8-3.jpg" data-lightbox="lightbox"><img src="/static/projects/pufferbot/figure-8-3.jpg" /></a>
  </div>
</div>


