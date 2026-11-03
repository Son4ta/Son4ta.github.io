---
layout: portfolio
permalink: /repositories/
title: Code
description: Research code, experiments, and projects from my academic work.
nav: false
---

<div class="container">
  <section class="page-intro">
    <p class="eyebrow">06 / Code archive</p>
    <h1>Code &amp; repositories</h1>
    <p class="lede">Research implementations, coursework, and software projects. My public repositories are available on <a href="{{ site.data.profile.github }}" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>.</p>
  </section>
  <div class="repository-grid">
    {% for repository in site.data.repositories.github_repos %}
    <article class="repository-card">
      <p class="eyebrow">Repository / {% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}</p>
      <h2><a href="https://github.com/{{ repository }}" target="_blank" rel="noopener noreferrer">{{ repository | split: '/' | last }}</a></h2>
      {% case repository %}
      {% when 'Son4ta/TIDE-Net' %}<p>Research code for Carbon-ECS and physics-aware East China Sea carbon-flux prediction.</p>
      {% when 'Son4ta/ForesightNav' %}<p>Semantic-geometric planning for zero-shot goal-oriented navigation.</p>
      {% when 'Frieda73/SHNet' %}<p>A lightweight network for printed circuit board defect detection.</p>
      {% when 'Son4ta/Intelligent-Computing-Exercise' %}<p>Exercises and project files from my earlier intelligent-computing coursework.</p>
      {% when 'Son4ta/Picture-Processing-with-GUI' %}<p>An earlier image-processing project with a graphical user interface.</p>
      {% when 'Son4ta/Vue-Learning-Project' %}<p>A project from my earlier work learning Vue and web development.</p>
      {% when 'Son4ta/Son4ta.github.io' %}<p>Source for this academic homepage, built with Jekyll.</p>
      {% else %}<p>Project files from my earlier coursework and software development.</p>
      {% endcase %}
      <a class="text-link" href="https://github.com/{{ repository }}" target="_blank" rel="noopener noreferrer">{{ repository }} <span aria-hidden="true">↗</span></a>
    </article>
    {% endfor %}
  </div>
</div>
