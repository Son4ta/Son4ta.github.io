---
layout: portfolio
title: Experience
permalink: /experience/
description: Research internships and academic training.
nav: true
nav_order: 4
---

<div class="container">
  <section class="page-intro">
    <p class="eyebrow">04 / Experience</p>
    <h1>Research experience</h1>
    <p class="lede">Industry research in autonomous agents, scientific workflows, and forecasting, alongside my academic training.</p>
  </section>
  <section class="section-block" aria-labelledby="internships-heading">
    <div class="section-head"><span class="section-id">01</span><h2 id="internships-heading">Industry internships</h2></div>
    {% for experience in site.data.profile.experience %}
      {% include portfolio_experience.liquid experience=experience %}
    {% endfor %}
  </section>
  <section class="section-block" aria-labelledby="education-heading">
    <div class="section-head"><span class="section-id">02</span><h2 id="education-heading">Education</h2></div>
    {% for education in site.data.profile.education %}
    <article class="education-row">
      <span>{{ education.period }}</span>
      <div>
        <h3><a href="{{ education.url }}" target="_blank" rel="noopener noreferrer">{{ education.school }} <span aria-hidden="true">↗</span></a></h3>
        <p><strong>{{ education.degree }}</strong></p>
        <p>{{ education.unit }}</p>
        <p>{{ education.detail }}</p>
      </div>
    </article>
    {% endfor %}
  </section>
</div>
