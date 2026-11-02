---
title: "Two Distinct Orange Stacks"
date: 2026-10-20
link: https://www.linkedin.com/feed/update/urn:li:ugcPost:7518294351802822656/
tags:
  - linkedin
  - epstein zeta
  - many-body physics
excerpt: "On the transformation of crystals between close-packed lattices with near-identical lattice sums."
references:
  - authors: "Dewaele, A., Rosa, A. D., Guignot, N., Andrault, D., Rodrigues, J. E. F. S., & Garbarino, G."
    year: 2021
    title: "Stability and equation of state of face-centered cubic and hexagonal close packed phases of argon under pressure"
    venue: "Scientific Reports 11"
    doi: "10.1038/s41598-021-93995-y"
  - authors: "Robles-Navarro, A., Cooper, S., Hauser, A. W., Zehetmair, F., Smits, O. R., & Schwerdtfeger, P."
    year: 2026
    title: "Lattice instabilities along the transformation from hexagonal to cuboidal structures in hard- and soft-sphere models"
    venue: "Physical Review B 113, 024116"
    doi: "10.1103/319b-1fv5"
  - pressure-dependent-hcp-fcc-transition
  - computation-anisotropic-singular-sums
---
Imagine a bunch of equal-sized oranges on a table, all sides touching, where a slice of the top view is  
⚪⚪⚪⚪🟠⚪⚪⚪⚪⚪🟠⚪⚪⚪⚪  
⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪  
⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪  
⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪  
⚪🟠⚪⚪⚪⚪⚪🟠⚪⚪⚪⚪⚪🟠⚪  
with empty spaces ⚪ and where, in a healthy dose of imagination, we perceive the distances between the 🟠 as equilateral!

Now put a second sheet of now 🔵 oranges in the dips and we get the top-view slice  
⚪⚪⚪⚪🟠⚪⚪⚪⚪⚪🟠⚪⚪⚪⚪  
⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪  
⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪  
⚪⚪⚪⚪🔵⚪⚪⚪⚪⚪🔵⚪⚪⚪⚪  
⚪🟠⚪⚪⚪⚪⚪🟠⚪⚪⚪⚪⚪🟠⚪  
Repeating this alternating pattern with math-exercise-worthy amounts leads to what chemists call the **hexagonal close-packed** lattice (**hcp**), which, remarkably, achieves the maximal possible sphere packing density of 74%!

In contrast, putting the third layer of now 🟢 oranges in the dips  
⚪⚪⚪⚪🟠⚪⚪⚪⚪⚪🟠⚪⚪⚪⚪  
⚪🟢⚪⚪⚪⚪⚪🟢⚪⚪⚪⚪⚪🟢⚪  
⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪  
⚪⚪⚪⚪🔵⚪⚪⚪⚪⚪🔵⚪⚪⚪⚪  
⚪🟠⚪⚪⚪⚪⚪🟠⚪⚪⚪⚪⚪🟠⚪  
leads to the **face-centered cubic (fcc**) lattice which also achieves the maximum packing density.

Experiments [[1](#ref-1)] show that the prototypical crystal solid argon prefers the fcc lattice at low, and the hcp lattice at high pressure, but **characterizing that transition computationally** has been challenging, in particular since the relevant quantities associated, the lattice sums, agree up to over 99.99%!

A recent Phys. Rev. B paper by, among others, our New Zealand colleagues [Andrés Robles Navarro](https://www.linkedin.com/in/andr%C3%A9s-robles-navarro-941441162/) & [Peter Schwerdtfeger](https://www.linkedin.com/in/peter-schwerdtfeger-8b90ba26/), discovered a distinct **bifurcation point** on a smooth transformation between these lattices [[2](#ref-2)]. In our new preprint with Norwegian colleagues [Morten Hammer](https://www.linkedin.com/in/morten-hammer-35521a5b/) [Øivind Wilhelmsen](https://www.linkedin.com/in/%C3%B8ivind-wilhelmsen-698b312b8/) and first author [Tage Maltby](https://www.linkedin.com/in/tage-maltby-178a65211/), we investigate this transition at finite pressure and under the inclusion of **many-body interactions** [[3](#ref-3)], where [Andreas Alexander Buchheit](https://www.linkedin.com/in/andreas-alexander-buchheit/) and I contribute a general method for the treatment of the multi-atomic many-body lattice sums in terms of generalized zeta functions, the **anisotropic Epstein zeta functions**, introduced in our other new preprint [[4](#ref-4)] whose content has been the main project of my PhD.

In particular, the density functional theory treatment by our colleagues suggests that due to many-body interactions the path between hcp and fcc bypasses the body-centered cubic lattice (bcc), which is good since another oranges-visualization would exceed the LinkedIn post character limit.
