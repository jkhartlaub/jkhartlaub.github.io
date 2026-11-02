---
title: "Computation and properties of the Epstein zeta function with applications to quantum systems"
collection: publications
category: manuscripts
permalink: /publication/computation-properties-epstein-zeta
redirect_from:
  - /publication/2024-12-10-epstein-zeta-computation
  - /publication/26-07-01-computation-properties-epstein-zeta
excerpt: 'This paper establishes the Epstein zeta function as a powerful tool in numerical analysis by rigorously investigating its analytical properties and enabling its efficient computation.'
date: 2026-07-01
venue: 'IMA Journal of Numerical Analysis'
link: 'https://doi.org/10.1093/imanum/drag057'
arxiv: '2412.16317'
open_access: false
arxiv_version: 2
arxiv_date: 2026-06-12
citation: 'Buchheit, A. A., Busse, J. K., & Gutendorf, R. (2026). "Computation and properties of the Epstein zeta function with applications to quantum systems." <i>IMA Journal of Numerical Analysis</i>, drag057. DOI: <a href="https://doi.org/10.1093/imanum/drag057">10.1093/imanum/drag057</a>'
---

The Epstein zeta function generalizes the classical Riemann zeta function to oscillatory lattice sums in higher dimensions and has recently emerged as a key tool in the simulation of long-range interacting classical and quantum many-body systems. Its computation and analytic properties are therefore of significant interest, yet a rigorous and comprehensive treatment has been lacking. We address this gap by introducing a superexponentially convergent algorithm, complete with error bounds, for computing the Epstein zeta function in any dimension with arbitrary real parameters. Our approach is accompanied by a detailed analysis of the analytic properties of the Epstein zeta function. We first present a concise reformulation of its meromorphic continuation, functional equation and symmetries. We then establish, for the first time, its joint holomorphic continuation in all parameters and offer a complete characterization of the resulting complex singularity structure, which governs convergence rates in numerical algorithms based on the function. Recognizing that the function can be decomposed into power-law singularities and a regularized analytic part we provide an algorithm for removing singularities without cancellation error. This facilitates the evaluation of integrals involving the Epstein zeta function and enables fast precomputations through interpolation methods. It also enables the robust treatment of general Wood-type anomalies in wave scattering problems while avoiding catastrophic cancellation. Finally, it serves as the foundation for a new algorithm for efficiently computing magnetic interactions between arrays of solid bodies. We present the first high-performance implementation for arbitrary real arguments in EpsteinLib, a C library with Python and Julia bindings, and rigorously benchmark its performance and accuracy, achieving full-precision evaluation against known analytic results in dimensions 1, 2, 3, 4, 6 and 8 and against an arbitrary precision implementation across the entire parameter range. Finally, we apply our methods to the computation of quantum dispersion relations in three-dimensional spin systems and Casimir energies in three-dimensional geometries.
