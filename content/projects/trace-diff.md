---
id: trace-diff
name: TraceDiff
description: Debugging Unexpected Code Behavior Using Trace Divergences
title: 'TraceDiff: Debugging Unexpected Code Behavior Using Trace Divergences'
authors:
  - Ryo Suzuki
  - Gustavo Soares
  - Andrew Head
  - Elena Glassman
  - Ruan Reis
  - Melina Mongiovi
  - Loris D’Antoni
  - Bjöern Hartmann
year: 2017
booktitle: In Proceedings of 2017 IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC '17)
publisher: IEEE Press, Piscataway, NJ, USA
pages: 107-115
doi: https://doi.org/10.1109/VLHCC.2017.8103457
conference:
  name: VL/HCC 2017
  fullname: IEEE Symposium on Visual Languages and Human-Centric Computing (VL/HCC 2017)
  url: https://sites.google.com/site/vlhcc2017/
pdf: vlhcc-2017-tracediff.pdf
slide: vlhcc-2017-tracediff-slide.pdf
github: https://github.com/ryosuzuki/trace-diff
demo: https://ryosuzuki.github.io/trace-diff/
ieee: http://ieeexplore.ieee.org/document/8103457/
arxiv: https://arxiv.org/abs/1708.03786a
related:
  title: Exploring the Design Space of Automatically Synthesized Hints for Introductory Programming Assignments
  authors:
    - Ryo Suzuki
    - Gustavo Soares
    - Elena Glassman
    - Andrew Head
    - Loris D'Antoni
    - Björn Hartmann
  year: 2017
  booktitle: In Proceedings of the 2017 CHI Conference Extended Abstracts on Human Factors in Computing Systems (CHI EA '17)
  publisher: ACM, New York, NY, USA
  pages: 2951-2958
  doi: https://doi.org/10.1145/3027063.3053187
  pdf: chi-2017-lbw.pdf
  suffix: lbw
  pageCount: 6
pageCount: 9
slideCount: 77
# image: tracediff.png
---


<video preload="metadata" autoPlay loop muted playsInline webkit-playsinline="">
  <source src="/static/projects/trace-diff/top.mp4" type="video/mp4"></source>
</video>

# Abstract

Recent advances in program synthesis offer means to automatically debug student submissions and generate personalized feedback in massive programming classrooms. When automatically generating feedback for programming assignments, a key challenge is designing pedagogically useful hints that are as effective as the manual feedback given by teachers. Through an analysis of teachers’ hint-giving practices in 132 online Q&A posts, we establish three design guidelines that an effective feedback design should follow. Based on these guidelines, we develop a feedback system that leverages both program synthesis and visualization techniques. Our system compares the dynamic code execution of both incorrect and fixed code and highlights how the error leads to a difference in behavior and where the incorrect code trace diverges from the expected solution. Results from our study suggest that our system enables students to detect and fix bugs that are not caught by students using another existing visual debugging tool.

