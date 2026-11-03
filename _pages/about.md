---
layout: portfolio
title: Chengjie Fang
description: Scientific machine learning, embodied intelligence, and autonomous research agents. Master's student at UCAS, advised by Prof. Jungang Xu.
permalink: /
---
<div class="container">
  <section class="hero">
    <div class="hero-main"><div class="hero-register"><span class="eyebrow">01 / RESEARCHER PROFILE</span><span class="record-id">CF — 2026</span></div><h1>CHENGJIE<br><span>FANG</span><i aria-hidden="true">.</i></h1><div class="hero-position"><span class="signal-square" aria-hidden="true"></span> MASTER'S STUDENT · ARTIFICIAL INTELLIGENCE</div>
      <div class="hero-bio">
        <p>I am a master's student in Artificial Intelligence at the Hangzhou Institute for Advanced Study, <strong class="emphasis-academic"><a href="https://www.ucas.ac.cn/">University of Chinese Academy of Sciences</a></strong>, advised by <strong class="emphasis-academic">Prof. Jungang Xu</strong>. I expect to graduate in June 2027. I received my bachelor's degree in Intelligent Science and Technology from <strong class="emphasis-academic"><a href="https://www.wit.edu.cn/">Wuhan Institute of Technology</a></strong> in 2024.</p>
        <p>My research brings together <strong class="emphasis-research">scientific machine learning, embodied intelligence, and autonomous research agents</strong>. I develop physics-aware models for ocean carbon-flux forecasting and study how navigation agents can assess their progress and recover from mistakes. Across these projects, I am interested in systems that use physical structure and feedback to make better predictions and decisions. I also explore agents that plan experiments, interpret results, and iteratively improve scientific models.</p>
        <p>I am currently an LLM Algorithm Intern at <strong class="emphasis-industry">ByteDance</strong>, applying research agents to logistics and supply-chain forecasting for cross-border e-commerce. Previously, I developed an Auto Research framework at <strong class="emphasis-industry">Baidu</strong>. My earlier work on humanoid robots and a board-game-playing robotic arm shaped my interest in connecting perception, learning, and action—an interest that continues to guide my research today.</p>
      </div>
      <div class="hero-actions"><a class="button button-primary" href="{{ '/publications/' | relative_url }}">VIEW PUBLICATIONS <span>↗</span></a><a class="button button-outline" href="{{ '/cv/' | relative_url }}">CURRICULUM VITAE <span>→</span></a></div>
    </div>
    <aside class="researcher-card" aria-label="Researcher profile photograph"><div class="dossier-top"><span>PERSONNEL RECORD</span><span>2024—2027</span></div><div class="orbital-field" aria-hidden="true"><span class="orbit-label orbit-label-top">LEARNING / DYNAMICS</span><span class="orbit-cross">+</span><span class="orbit-label orbit-label-bottom">PERCEPTION → REASONING → ACTION</span></div><div class="portrait-frame"><picture><source type="image/webp" srcset="{{ '/assets/portraits/chengjie-fang-color-480.webp' | relative_url }} 480w, {{ '/assets/portraits/chengjie-fang-color.webp' | relative_url }} 800w" sizes="(max-width: 760px) 240px, 288px"><img src="{{ '/assets/portraits/chengjie-fang-color.jpg' | relative_url }}" alt="Chengjie Fang outdoors in a bamboo grove" width="800" height="1067" fetchpriority="high" decoding="async"></picture><span class="portrait-marker" aria-hidden="true">+</span></div><div class="dossier-caption"><strong>CHENGJIE FANG</strong><span>Hangzhou Institute for Advanced Study</span><div><span>UCAS / CHINA</span><i class="tricolor" aria-hidden="true"></i></div></div></aside>
  </section>
  <div class="research-strip"><div><strong>07</strong><span>PUBLISHED &<br>ACCEPTED PAPERS</span></div><div><strong>05</strong><span>FIRST / CO-FIRST<br>AUTHOR PAPERS</span></div><div><strong>02</strong><span>INDUSTRY RESEARCH<br>INTERNSHIPS</span></div><div class="strip-index"><span>RESEARCH AREAS</span><p>Scientific AI<br>Embodied intelligence<br>Autonomous research agents</p></div></div>
  <section class="section-block"><div class="section-head"><div><span class="section-id">02 / PUBLICATIONS</span><h2>Selected research<span>.</span></h2></div><a class="text-link" href="{{ '/publications/' | relative_url }}">ALL PUBLICATIONS ↗</a></div><div class="paper-grid">{% for paper in site.data.research_papers %}{% if paper.selected %}{% include portfolio_paper.liquid paper=paper compact=true %}{% endif %}{% endfor %}</div></section>
  <section class="section-block education-section" id="education">
    <div class="section-head"><div><span class="section-id">03 / EDUCATION</span><h2>Education<span>.</span></h2></div><span class="section-note">FOUNDATIONS FOR RESEARCH</span></div>
    <div class="education-grid">
      <article class="education-card education-card-ucas"><img class="university-watermark" src="{{ '/assets/brand/ucas-emblem.png' | relative_url }}" alt="" aria-hidden="true" width="591" height="328" loading="lazy">
        <div class="education-card-head"><span class="education-kicker">GRADUATE STUDY</span><span class="education-period">SEP 2024 — JUN 2027 · EXPECTED</span></div>
        <h3><a href="https://www.ucas.ac.cn/">University of Chinese Academy of Sciences</a></h3>
        <p class="education-degree">Master's student in Artificial Intelligence</p>
        <p class="education-unit">Hangzhou Institute for Advanced Study</p>
        <p class="education-detail">Advised by Prof. Jungang Xu.</p>
        <div class="education-tags"><span>National Scholarship</span></div>
      </article>
      <article class="education-card education-card-wit"><img class="university-watermark" src="{{ '/assets/brand/wit-emblem.png' | relative_url }}" alt="" aria-hidden="true" width="350" height="348" loading="lazy">
        <div class="education-card-head"><span class="education-kicker">UNDERGRADUATE STUDY</span><span class="education-period">SEP 2020 — JUN 2024</span></div>
        <h3><a href="https://www.wit.edu.cn/">Wuhan Institute of Technology</a></h3>
        <p class="education-degree">Bachelor's degree in Intelligent Science and Technology</p>
        <p class="education-unit">School of Computer Science and Engineering</p>
        <p class="education-detail">Admitted to UCAS through the graduate recommendation pathway.</p>
        <div class="education-tags"><span>Outstanding Graduate</span></div>
      </article>
    </div>
  </section>
  <section class="section-block"><div class="section-head"><div><span class="section-id">04 / INDUSTRY EXPERIENCE</span><h2>Research in practice<span>.</span></h2></div><a class="text-link" href="{{ '/experience/' | relative_url }}">FULL EXPERIENCE ↗</a></div><div class="experience-stack">{% for experience in site.data.profile.experience %}{% include portfolio_experience.liquid experience=experience %}{% endfor %}</div></section>
  <section class="section-block background-section"><div class="section-head"><div><span class="section-id">05 / BACKGROUND</span><h2>From robotics to research<span>.</span></h2></div></div><div class="background-grid"><div class="background-copy"><p>My interest in embodied intelligence began at <a href="https://www.wit.edu.cn/">Wuhan Institute of Technology</a>, where I worked with <a href="https://cs.wit.edu.cn/info/1026/5517.htm">Tongzhou Zhao</a> and <a href="https://cs.wit.edu.cn/info/1026/8528.htm">Xun Li</a>.</p><p>In the university's <a href="https://robot.wit.edu.cn/">robotics laboratory</a>, I worked on humanoid robot vision and control and later led a robotic-arm project for board-game playing using deep learning and reinforcement learning. Those hands-on experiences continue to inform my work on perception, learning, and decision-making.</p><a class="text-link" href="{{ '/projects/undergraduate_robotics/' | relative_url }}">UNDERGRADUATE ROBOTICS →</a></div><div class="robotics-focus"><article><span class="education-kicker">PERCEPTION & CONTROL</span><h3>Humanoid robots</h3><p>Vision and control in the university robotics laboratory.</p></article><article><span class="education-kicker">LEARNING & ACTION</span><h3>Board-game-playing robotic arm</h3><p>Project lead · Deep learning and reinforcement learning.</p></article></div></div></section>
  <section class="section-block"><div class="section-head"><div><span class="section-id">06 / RECENT UPDATES</span><h2>Research log<span>.</span></h2></div><a class="text-link" href="{{ '/news/' | relative_url }}">ALL UPDATES ↗</a></div><div class="home-news">{% assign latest_news = site.news | sort: 'date' | reverse %}{% for item in latest_news limit:3 %}<article><time datetime="{{ item.date | date: '%Y-%m-%d' }}">{{ item.date | date: '%Y.%m' }}</time><div><h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3><div>{{ item.content }}</div></div><a class="news-arrow" href="{{ item.url | relative_url }}" aria-label="Read {{ item.title }}">↗</a></article>{% endfor %}</div></section>
</div>
