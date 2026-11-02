---
title: "Curse of Dimensionality and the Abundance of Computational Resources on Modern Machines"
date: 2026-04-11
link: https://www.linkedin.com/feed/update/urn:li:activity:7448713898192666624/
tags:
  - linkedin
  - conference
  - scientific computing
  - epstein zeta
excerpt: "On the effort of the scientific computing community to fight the curse of dimensionality by drastically reducing the effort needed to simulate physical systems."
---
Do you know the incredibly frustrating feeling when you want to open a native note-taking app on Windows and immediately your machine slows down, you are asked to sign in to your Microsoft account, accept some cookies and update your machine to give you the pleasure of the latest AI features with questionable privacy practices 🙃  
  
I hardly know all the reasons for such software design decisions, but I can guess at least one: the abundance of computational resources on modern machines.  
  
In contrast, the 𝗦𝘄𝗶𝘀𝘀 𝗡𝘂𝗺𝗲𝗿𝗶𝗰𝘀 𝗗𝗮𝘆 yesterday, generously hosted by the Seminar for Applied Mathematics [****ETH Zürich****](https://www.linkedin.com/school/eth-zurich/) 🏛️ highlighted among other things the advances by the scientific computing community in drastically reducing the effort needed to simulate physical systems ⚡  
  
This need arises for example due to the sheer volume & variety of today's data as highlighted by Kristin Kirchner (KTH Stockholm & TU Delft) in their presentation bridging functional calculus and statistical numerical methods*. Physicists might call this 𝘵𝘩𝘦 𝘤𝘶𝘳𝘴𝘦 𝘰𝘧 𝘥𝘪𝘮𝘦𝘯𝘴𝘪𝘰𝘯𝘢𝘭𝘪𝘵𝘺 🌀 as the large amounts of degrees of freedom (DOFs) in realistic physical systems (say, the geometry, boundary conditions, velocity, pressure etc. in fluid flow) lead to even larger problem spaces, as presented by [****Stephan Simonis****](https://www.linkedin.com/in/stephan-simonis-563713168/) , highlighting their group's effort in computing statistical solutions of Navier-Stokes equations 🌊 It was a pleasure to learn about their results, their poster framed right next to ours in the picture.  
  
The two columns of our poster are complementary: on the left we 𝘳𝘦𝘥𝘶𝘤𝘦 𝘵𝘩𝘦 𝘳𝘶𝘯𝘵𝘪𝘮𝘦 by orders of magnitude without sacrificing precision, on the right we 𝘪𝘯𝘤𝘳𝘦𝘢𝘴𝘦 𝘵𝘩𝘦 𝘱𝘳𝘦𝘤𝘪𝘴𝘪𝘰𝘯 without runtime cost.  
  
On the left, [****Andreas Alexander Buchheit****](https://www.linkedin.com/in/andreas-alexander-buchheit/) and I employ integrals over so-called Epstein zeta functions to compute many-body lattice sums [1], which are of central interest in theoretical chemistry [2]. Such sums are difficult to compute because the many-body interactions make them high-dimensional. Integrals over sufficiently well-behaved functions, however, are manageable due to powerful numerical machinery.  
  
This reduces the runtime from 𝗺𝗼𝗻𝘁𝗵𝘀 𝘁𝗼 𝗺𝗶𝗻𝘂𝘁𝗲𝘀 on a single core, meaning we can now explore phase diagrams of such crystals on a laptop ⚛️ without having to expend time and money on cluster computations!  
  
The right column focuses on computing micromagnetic textures, where we provide a correction term of negligible additional computational cost to the usual direct summation approach [3].  
  
We hope to enable discoveries of new physical phenomena by drastically reducing the resources needed to compute quantities associated to large physical systems 🔭  
  
This only works if our methods get faster and more precise, which in turn reduces their energy consumption 🌱 something I personally very much care about! 

𝗥𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗲𝘀:  
[1] [**https://arxiv.org/abs/2504.11989**](https://www.linkedin.com/safety/go/?url=https%3A%2F%2Farxiv%2Eorg%2Fabs%2F2504%2E11989&urlhash=oor2&mt=aF6eNSD8iMVhpIe1pbTpWlswGV4LAHNpRLEVlM2Ydk_jSoMlHyMt8ov__BxMTxvifK7LlaUmBvXyzI-CYGEN7RHjDcdP7F6f5eoF2OQJJm9lrw8INE7l-rmA6JDkRpM0-aVNrFrK_UVOpl9Tu-q1h0zwZY56uhI7aigsYV3S6OTgB9JLhZG2uTLnprHM8BTvG2GEq6iA_CVPu6U03f4-SxD8DTV0FWGKeqrNjXaYt8igvgQ&isSdui=true) (arXiv)  
[2] [**https://doi.org/10.1063/5.027667**](https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fdoi%2Eorg%2F10%2E1063%2F5%2E027667&urlhash=zPKx&mt=9empRQ_kA6mudPtlMiWxrYuWvApwp_ojYqBsaP7aQDEtZarG6Qbf0MO50SYailX9eQyvYIpsmNCqI1Vfq4BrGCkpNHs1uO8mAUC7Dsig9ca6h1LNpMYawGWn85wFKBHuq8UPEW4JtXzL67pKGmH_u2b1rrPgJhRoX2a8cduwxp4q15b7g-3EhHwdKLFWyK_Ca1JjZhAZwnzE7KBZvx8Ma4RrjNX4NJGzz31Kt2J7gZ1oV8Q&isSdui=true) (J. Chem. Phys)  
[3] [**https://doi.org/10.1016/j.jcp.2026.114885**](https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fdoi%2Eorg%2F10%2E1016%2Fj%2Ejcp%2E2026%2E114885&urlhash=-kTE&mt=keRpyzjOqL1Ez9cPkA49_fWgwpZQbhrNIIaYACdrKvoECe2HXMVg0FNVRDzPh8sJpqM8E_R4xqz5_5-YkVkLxV5fnUAmcKwGOHZqgT8s2UR7iDN1hO5Whf4ISSuyJxPFQhVm53s_cVCMS7FcsaCRQCns1WnKkCI5XJ3RaTWMB_7EyDoGRbYbOajSQSgRYc8GZxg-rpYCfvBqzXu1WtENeE9lJX93aR-KFMv-gFodXofSE08&isSdui=true) (J. Comp. Phys)  
[4] [**https://www.kth.se/lediga-jobb/904789?l=en**](https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww%2Ekth%2Ese%2Flediga-jobb%2F904789%3Fl%3Den&urlhash=zhfy&mt=8th1yHJgV5HTV_lg5HnGd7dlJ2Iyh9M93HxyXvBhFodrZ-JBIOaXMiYzWQjncRmhbzhT7gUhxr_qmiEMAMLh9Z0OhKne3lsu4OHNkAr8Rnpp5qoZuUV4r-1PUihum40vtUtTscESgN-aCIjC7U8szHKyyKx5OthjaJxS_JxgxPRcLPjBBitoCEpv91A5kPCA4NA8X-Qi0cspWzKua87-v4GD-y-mjegpIzzpe6uLl7JHz2o&isSdui=true) (open PhD position at [****KTH Royal Institute of Technology****](https://www.linkedin.com/school/kth/) )