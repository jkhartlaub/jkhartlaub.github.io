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
talks:
  - 2026-04-10-zeta-expansion-lattice-systems
references:
  - epstein-zeta-method-many-body
  - exact-lattice-summations-lennard-jones
  - zeta-expansion-long-range-micromagnetics
  - authors: "KTH Royal Institute of Technology"
    year: 2026
    title: "Open PhD position"
    venue: "KTH Royal Institute of Technology"
    url: "https://www.kth.se/lediga-jobb/904789?l=en"
---
Do you know the incredibly frustrating feeling when you want to open a native note-taking app on Windows and immediately your machine slows down, you are asked to sign in to your Microsoft account, accept some cookies and update your machine to give you the pleasure of the latest AI features with questionable privacy practices 🙃

I hardly know all the reasons for such software design decisions, but I can guess at least one: the abundance of computational resources on modern machines.

In contrast, the **Swiss Numerics Day** yesterday, generously hosted by the Seminar for Applied Mathematics [ETH Zürich](https://www.linkedin.com/school/eth-zurich/) 🏛️ highlighted among other things the advances by the scientific computing community in drastically reducing the effort needed to simulate physical systems ⚡

This need arises for example due to the sheer volume & variety of today's data as highlighted by Kristin Kirchner (KTH Stockholm & TU Delft) in their presentation bridging functional calculus and statistical numerical methods\*. Physicists might call this *the curse of dimensionality* 🌀 as the large amounts of degrees of freedom (DOFs) in realistic physical systems (say, the geometry, boundary conditions, velocity, pressure etc. in fluid flow) lead to even larger problem spaces, as presented by [Stephan Simonis](https://www.linkedin.com/in/stephan-simonis-563713168/) , highlighting their group's effort in computing statistical solutions of Navier-Stokes equations 🌊 It was a pleasure to learn about their results, their poster framed right next to ours in the picture.

The two columns of our poster are complementary: on the left we *reduce the runtime* by orders of magnitude without sacrificing precision, on the right we *increase the precision* without runtime cost.

On the left, [Andreas Alexander Buchheit](https://www.linkedin.com/in/andreas-alexander-buchheit/) and I employ integrals over so-called Epstein zeta functions to compute many-body lattice sums [[1](#ref-1)], which are of central interest in theoretical chemistry [[2](#ref-2)]. Such sums are difficult to compute because the many-body interactions make them high-dimensional. Integrals over sufficiently well-behaved functions, however, are manageable due to powerful numerical machinery.

This reduces the runtime from **months to minutes** on a single core, meaning we can now explore phase diagrams of such crystals on a laptop ⚛️ without having to expend time and money on cluster computations!

The right column focuses on computing micromagnetic textures, where we provide a correction term of negligible additional computational cost to the usual direct summation approach [[3](#ref-3)].

We hope to enable discoveries of new physical phenomena by drastically reducing the resources needed to compute quantities associated to large physical systems 🔭

This only works if our methods get faster and more precise, which in turn reduces their energy consumption 🌱 something I personally very much care about!
