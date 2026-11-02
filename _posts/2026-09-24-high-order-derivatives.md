---
title: "Analytical Differentiation is Easy, Numerical Differentiation is Hard"
date: 2026-09-24
link: https://www.linkedin.com/feed/update/urn:li:ugcPost:7508926521642840065/
tags:
  - linkedin
  - mathematics
  - derivatives
excerpt: "On the development of an algorithm for absurdly high-order Epstein zeta derivatives."
references:
  - computation-properties-epstein-zeta
  - epsteinlib
  - exact-lattice-summations-lennard-jones
  - epstein-zeta-method-many-body
  - authors: "Buchheit, A. A., & Rupp, A."
    year: 2026
    title: "Graph lattice sums and graph zeta functions for long-range interacting quantum lattice models"
    venue: "arXiv"
    doi: "10.48550/arXiv.2609.18918"
  - zeta-expansion-long-range-micromagnetics
  - computation-anisotropic-singular-sums
---
Over the past three years I have had many conversations along the lines of:  
"How is the PhD project going?"  
"Great, but I'm still *losing precision* for >*fourteenth-order derivatives*." This then invites the obvious response that no physicist needs more than *four* anyway, which did not deter me. Now I can present our new preprint with benchmarks up to **60th-order derivatives in 3D** 🏋️

The story of our new preprint begins with [[1](#ref-1)] where we aimed to establish the core underlying analytic object, the Epstein zeta function, as a new standard function; there we derive its analytic properties, present efficiently computable representations and showcase applications to quantum systems ⚛️ With the convenient implementation [[2](#ref-2)], one may efficiently evaluate many expressions containing Epstein zeta functions, e.g. integrals of Epstein zeta functions that appear in theoretical chemistry [[3](#ref-3)] 🧪

Such integrals over Epstein zeta functions are computable because powerful machinery for numerical integration exists! Of course the devil is in the details, and some work needs to be done to efficiently evaluate such singular integrals which correspond to so-called many-body zeta functions [[4](#ref-4)] (and a whole lot more work when considering the very recent generalization to graphs [[5](#ref-5)]).

Now, the computation of lattice sums with anisotropic interaction kernels, which appear, among other places, when taking derivatives of isotropic interaction kernels, is not covered by the aforementioned discussion. Taking mid- to high-order derivatives from point values is numerically unstable and even exact analytic representations such as in [[6](#ref-6)] suffer from *unavoidable loss of precision* in floating-point arithmetic for high-order derivatives 🖥️

In other words, unlike integration, numerical differentiation is hard ❌ So I'm very proud we discovered an algorithm based on a **harmonic decomposition of the derivative operator**, benchmarked up to (absurdly) high-order derivatives ⛰️
