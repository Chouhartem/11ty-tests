---
title: main page
layout: layouts/base.njk
---

# Home

This is a test page for eleventy + mermaid.

Here follows a mermaid diagram:

{% mermaid %}
graph LR
Document --> A[K<sub>A</sub> ] & B[K<sub>B</sub> ]
A --> K_C1[K<sub>C1</sub>]
B --> K_C2[K<sub>C2</sub>]
{% endmermaid %}
