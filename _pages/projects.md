---
layout: portfolio
title: Research
permalink: /projects/
description: Scientific machine learning, embodied intelligence, and autonomous research agents.
nav: true
nav_order: 2
---

<div class="container">
  <section class="page-intro">
    <p class="eyebrow">03 / Research programs</p>
    <h1>Research directions</h1>
    <p class="lede">I study learning systems that use physical structure, task representations, and feedback to model the world and act within it.</p>
  </section>

  <section class="research-program section-block" id="scientific-ai">
    <div class="program-heading"><span class="program-number">01</span><div><p class="eyebrow">Physics-aware learning / Spatiotemporal modeling</p><h2>Scientific machine learning</h2></div></div>
    <div class="prose">
      <p>My work on ocean carbon dynamics studies how learning systems can represent the different processes that shape a complex physical system. <strong>Carbon-ECS</strong> combines transport modeling with local detail refinement. <strong>REM-MoE</strong> uses hierarchical experts to separate environmental regimes from physical mechanisms.</p>
      <p>My current work also investigates how temporal reaction search can be separated from spatial physical response for ocean carbon-flux forecasting.</p>
    </div>
    <div class="paper-grid">
      {% assign scientific_ids = 'carbon-ecs,rem-moe' | split: ',' %}
      {% for paper_id in scientific_ids %}{% assign paper = site.data.research_papers | where: 'id', paper_id | first %}{% include portfolio_paper.liquid paper=paper compact=true %}{% endfor %}
    </div>
  </section>

  <section class="research-program section-block" id="embodied-intelligence">
    <div class="program-heading"><span class="program-number">02</span><div><p class="eyebrow">Robot navigation / Reinforcement learning</p><h2>Embodied intelligence</h2></div></div>
    <div class="prose">
      <p>I study how agents represent task progress, verify intermediate states, and recover from failure in long-horizon navigation. <strong>StageNav</strong> explores geometric verification and state-aligned reinforcement learning, while <strong>ForesightNav</strong> combines semantic understanding with geometric exploration.</p>
    </div>
    <div class="paper-grid">
      {% assign embodied_ids = 'stagenav,foresightnav' | split: ',' %}
      {% for paper_id in embodied_ids %}{% assign paper = site.data.research_papers | where: 'id', paper_id | first %}{% include portfolio_paper.liquid paper=paper compact=true %}{% endfor %}
    </div>
    <article class="panel prose">
      <p class="eyebrow">Earlier work / Undergraduate robotics</p>
      <h3>Humanoid perception and robotic manipulation</h3>
      <p>At <a href="https://www.wit.edu.cn/" target="_blank" rel="noopener noreferrer">Wuhan Institute of Technology</a>, I worked with <a href="https://cs.wit.edu.cn/info/1026/5517.htm" target="_blank" rel="noopener noreferrer">Tongzhou Zhao</a> and <a href="https://cs.wit.edu.cn/info/1026/8528.htm" target="_blank" rel="noopener noreferrer">Xun Li</a>. I joined the university's <a href="https://robot.wit.edu.cn/" target="_blank" rel="noopener noreferrer">robotics laboratory</a> in my second year, working on image processing and control for humanoid robots.</p>
      <p>In my third year, I led a robotic-arm project for board-game playing using deep learning and reinforcement learning. The project was entered in national student competitions. These experiences shaped my interest in the connection between perception, decision-making, and robot behavior.</p>
      <a class="text-link" href="{{ '/projects/undergraduate_robotics/' | relative_url }}">Undergraduate project background <span aria-hidden="true">↗</span></a>
    </article>
  </section>

  <section class="research-program section-block" id="research-agents">
    <div class="program-heading"><span class="program-number">03</span><div><p class="eyebrow">Autonomous planning / Scientific experimentation</p><h2>Autonomous research agents</h2></div></div>
    <div class="prose">
      <p>I build systems that coordinate planning, context-state management, experimentation, and model refinement. My internships at <strong>Baidu</strong> and <strong>ByteDance</strong> connect these ideas to scientific workflows and forecasting.</p>
      <p>My current manuscripts investigate scientific-state representations for autonomous PDE modeling and structured ocean prediction. Both remain under review.</p>
    </div>
    {% include portfolio_manuscripts.liquid %}
    <p><a class="text-link" href="{{ '/experience/' | relative_url }}">Industry research experience <span aria-hidden="true">↗</span></a></p>
  </section>

  <section class="research-program section-block" id="visual-perception">
    <div class="program-heading"><span class="program-number">04</span><div><p class="eyebrow">Supporting work / Computer vision</p><h2>Visual perception</h2></div></div>
    <div class="prose"><p>My collaborative work also covers lightweight defect detection, remote-sensing forgery perception, and zero-shot template matching. These projects explore visual representations across different scales and imaging conditions.</p></div>
    <div class="paper-grid">
      {% assign perception_ids = 'shnet,fg-moe,anytemplate' | split: ',' %}
      {% for paper_id in perception_ids %}{% assign paper = site.data.research_papers | where: 'id', paper_id | first %}{% include portfolio_paper.liquid paper=paper compact=true %}{% endfor %}
    </div>
  </section>
</div>
