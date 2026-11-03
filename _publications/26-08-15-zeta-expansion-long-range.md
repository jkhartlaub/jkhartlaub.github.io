---
title: "Zeta expansion for long-range interactions under periodic boundary conditions with applications to micromagnetics"
collection: publications
category: manuscripts
permalink: /publication/zeta-expansion-long-range-micromagnetics
redirect_from:
  - /publication/2025-09-30-zeta-expansion-long-range
  - /publication/2026-03-24-zeta-expansion-long-range
  - /publication/26-08-15-zeta-expansion-long-range
excerpt: 'This paper addresses the efficient computation of power-law-based interaction potentials of homogeneous n-dimensional bodies with an infinite d-dimensional array of copies, including their higher-order derivatives.'
date: 2026-08-15
venue: 'Journal of Computational Physics'
link: 'https://doi.org/10.1016/j.jcp.2026.114885'
arxiv: '2509.26274'
arxiv_version: 3
arxiv_date: 2026-06-16
citation: 'Buchheit, A. A., Busse, J. K., Keßler, T., & Rybakov, F. N. (2026). "Zeta expansion for long-range interactions under periodic boundary conditions with applications to micromagnetics." <i>Journal of Computational Physics</i> 559, 114885. DOI: <a href="https://doi.org/10.1016/j.jcp.2026.114885">10.1016/j.jcp.2026.114885</a>'
---

We address the efficient computation of power-law-based interaction potentials of homogeneous d-dimensional bodies with an infinite n-dimensional array of copies, including their higher-order derivatives. This problem forms a serious challenge in micromagnetics with periodic boundary conditions and related fields. Nowadays, it is common practice to truncate the associated infinite lattice sum to a finite number of images, introducing uncontrolled errors. We show that, for general interacting geometries, the exact infinite sum for both dipolar interactions and generalized Riesz power-law potentials can be obtained by complementing a small direct sum by a correction term that involves efficiently computable derivatives of generalized zeta functions. We show that the resulting representation converges exponentially in the derivative order, reaching machine precision at a computational cost no greater than that of truncated summation schemes. In order to compute the generalized zeta functions efficiently, we provide a superexponentially convergent algorithm for their evaluation, as well as for all required special functions, such as incomplete Bessel functions. Magnetic fields and related quantities can thus be evaluated to machine precision in arbitrary cuboidal domains periodically extended along one or two dimensions. We benchmark our method against known formulas for magnetic interactions and against direct summation for Riesz potentials with sufficiently large exponents, consistently achieving full precision. In addition, we identify new corrections to the asymptotic limit of the demagnetization field and tabulate high-precision benchmark values that can be used as a reliable reference for micromagnetic solvers. The techniques developed are broadly applicable, with direct impact in other areas such as molecular dynamics.
