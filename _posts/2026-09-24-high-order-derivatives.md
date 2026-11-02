---
title: "Analytical Differentiation is Easy, Numerical Differentiation is Hard"
date: 2026-09-24
link: https://www.linkedin.com/feed/update/urn:li:ugcPost:7508926521642840065/
tags:
  - linkedin
  - mathematics
  - derivatives
excerpt: "On the development of an algorithm for absurdly high-order Epstein zeta derivatives."
---
Over the past three years I have had many conversations along the lines of:  
"How is the PhD project going?"  
"Great, but I'm still 𝘭𝘰𝘴𝘪𝘯𝘨 𝘱𝘳𝘦𝘤𝘪𝘴𝘪𝘰𝘯 for >𝘧𝘰𝘶𝘳𝘵𝘦𝘦𝘯𝘵𝘩-𝘰𝘳𝘥𝘦𝘳 𝘥𝘦𝘳𝘪𝘷𝘢𝘵𝘪𝘷𝘦𝘴." This then invites the obvious response that no physicist needs more than 𝘧𝘰𝘶𝘳 anyway, which did not deter me. Now I can present our new preprint with benchmarks up to 𝟲𝟬𝘁𝗵-𝗼𝗿𝗱𝗲𝗿 𝗱𝗲𝗿𝗶𝘃𝗮𝘁𝗶𝘃𝗲𝘀 𝗶𝗻 𝟯𝗗 🏋️  
  
The story of our new preprint begins with [1] where we aimed to establish the core underlying analytic object, the Epstein zeta function, as a new standard function; there we derive its analytic properties, present efficiently computable representations and showcase applications to quantum systems ⚛️ With the convenient implementation [2], one may efficiently evaluate many expressions containing Epstein zeta functions, e.g. integrals of Epstein zeta functions that appear in theoretical chemistry [3] 🧪  
  
Such integrals over Epstein zeta functions are computable because powerful machinery for numerical integration exists! Of course the devil is in the details, and some work needs to be done to efficiently evaluate such singular integrals which correspond to so-called many-body zeta functions [4] (and a whole lot more work when considering the very recent generalization to graphs [5]).  
  
Now, the computation of lattice sums with anisotropic interaction kernels, which appear, among other places, when taking derivatives of isotropic interaction kernels, is not covered by the aforementioned discussion. Taking mid- to high-order derivatives from point values is numerically unstable and even exact analytic representations such as in [6] suffer from 𝘶𝘯𝘢𝘷𝘰𝘪𝘥𝘢𝘣𝘭𝘦 𝘭𝘰𝘴𝘴 𝘰𝘧 𝘱𝘳𝘦𝘤𝘪𝘴𝘪𝘰𝘯 in floating-point arithmetic for high-order derivatives 🖥️  
  
In other words, unlike integration, numerical differentiation is hard ❌ So I'm very proud we discovered an algorithm based on a 𝗵𝗮𝗿𝗺𝗼𝗻𝗶𝗰 𝗱𝗲𝗰𝗼𝗺𝗽𝗼𝘀𝗶𝘁𝗶𝗼𝗻 𝗼𝗳 𝘁𝗵𝗲 𝗱𝗲𝗿𝗶𝘃𝗮𝘁𝗶𝘃𝗲 𝗼𝗽𝗲𝗿𝗮𝘁𝗼𝗿, benchmarked up to (absurdly) high-order derivatives ⛰️

𝗥𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗲𝘀:  
[1] [**https://doi.org/10.1093/imanum/drag057**](https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fdoi%2Eorg%2F10%2E1093%2Fimanum%2Fdrag057&urlhash=QhNN&mt=wAnljHXKSJCLbELH53uWVW0WnuV1NKr-3BJohyde-QIGugeejxG6RtLCAObZIpk7OSM30UvfllNeJR5m9HOT0acoDbDm2BkOyv8-zuoRZPkNE05h8ybSYfybATDkaRwqB9nen9Q16jviqcq5I4AsZVzhWoUSYZVsp6p4YC-Dv3FgU7yi7295570qghhl0a96w32ctX_Ov5rUZtHbYXfw8DfliM6pwabNJxtJ9bH8rlUofPI&isSdui=true)  
[2] [**https://github.com/epsteinlib/epsteinlib**](https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fgithub%2Ecom%2Fepsteinlib%2Fepsteinlib&urlhash=jP3L&mt=GEsfqK3cI2E-hjeexBJIX_0xnyGpv2w56omZXIc7BCuyqatyiKxEPLaNBUl4gv1K8nnFGhAPMyOxG4v7RB2j8b1bhpW5_L5Wh4RyWYl6Z5J00XXN11qufJVAFlAMheT8jxlG6j7dcd1CHx492_pQSdQeHHIBCuq6--8SoMYrWr7hN4IKZewqJ7E2qm03hqgyHkmQxzjVgMaEzWy61ej0DlzrZsvEhJ3hgiZvldNY-dKHdgk&isSdui=true)  
[3] [**https://doi.org/10.1063/5.0276677**](https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fdoi%2Eorg%2F10%2E1063%2F5%2E0276677&urlhash=qHiq&mt=PBowsUa9qOVfPUQAOiLlw-2cDrbREWlImN1ZXUhBhMnxUcnqKxwCTh9D_iX41_mCT2Aa6ktfER-Jb02xD2ToKtr-iqtDzGy4wePoL29WjXiHcVfY7AW3usqwM_VyJVj7bmpTVaFc1NI3pMySMM5-VWLEsoBhWFxteI2saK3idIqKstxQC8YDS4xrJmagR7nP-oWEoUuKBuw6RMW3aZwe2nMUXr5ChFZQeqjWCNmJEygxrWc&isSdui=true)  
[4] [**https://doi.org/10.1007/s00211-026-01558-y**](https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fdoi%2Eorg%2F10%2E1007%2Fs00211-026-01558-y&urlhash=OMMI&mt=o6v_MAk8wVof2eceiCC6Skm8t_kSZAqK2hWGyTyHMSkWmxPtIm_Ki8pr_J234bHjK-_2clEg49WBBM8ZCpvi7Mh6HZneVN3M8oqskvZ7PbnMl_TVMQGBnKXW38YTpmhzerXwj-WwiJbGs3eVQtPDe9oNdY8Zrt1MIO8lxEhag2HhPRUgrzoiLKBprpJwVfx3PqIVQnRqIEz4roLFUUK07FiZqUWRaEYGJUltuEbe5o3JLcE&isSdui=true)  
[5] [**https://arxiv.org/abs/2609.18918**](https://www.linkedin.com/safety/go/?url=https%3A%2F%2Farxiv%2Eorg%2Fabs%2F2609%2E18918&urlhash=zFL5&mt=p4gfpL7dv4cqh0yqBqpRo8IQ_Yq-7p_wSfPSgAbkXrLmvB035_AUbU46Is7nbYgyjNri8dCmpJzjklrCDyZRsQ-53KkpAFvN_7PJK_Dq0MdHikHO9z6i_9hB2SUc2G0wbnXJeyetH98iH_xrP-zNtquqfOsrxFQ6NrzejANRmEH7Nao6vMJAf9RhEToBCvW6vtmYSrWNPBahZjKVKbHM6SgiUgzd5-xI0x3Aa7WOsUUxsvY&isSdui=true)  
[6] [**https://doi.org/10.1016/j.jcp.2026.114885**](https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fdoi%2Eorg%2F10%2E1016%2Fj%2Ejcp%2E2026%2E114885&urlhash=-kTE&mt=S3aerMFOH8cS17Z1vjOFot0G__NtNARM5Z3gVTvz8e1v0w6FmLiR7_MuB-RdnlgZRby0BEeb5813kSzWnMUsCh-qSLOUo2gKYc86XuZmF9Q-H6zv-suGVdHyQUS0tUtuMh2_0GuuRpid3KsiufXqrKF7truKq6Y4NtIZpA9bXx7ZCwxB7gd8mjm7BOFahO7hOl8jQXMlX7yRib9e-4-Nc4s31lu5GwNY89PWF_u_EfNB6kA&isSdui=true)  
[7] [**https://arxiv.org/abs/2609.28282v1**](https://www.linkedin.com/safety/go/?url=https%3A%2F%2Farxiv%2Eorg%2Fabs%2F2609%2E28282v1&urlhash=PA8n&mt=wn5qakdZPe1keJEWziyAnW6LmtZSSlb-s7sKhjq4g_Kg7F_Ia43EifteHxxhWIJGteRATPs0q8q_KPPaP0gn9Ab8l1Wlgc1cGd0ffck0TFa_bB-S4PZQNXJqXmCx-_-fQ9E9hUhnEcJpcyvYyuXmZOAp1zEXmmz1iP6XYDB_MaYy_CKTov4uhEkjui145qSu0OHIxRTBgvVwvpSWAWC75MFRPNdA4Tr0aLiFYhF_6dlD13w&isSdui=true)