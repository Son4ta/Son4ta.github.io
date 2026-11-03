---
layout: portfolio
permalink: /Friend/
title: Friends
description: Friends and peers from my academic journey.
nav: false
profiles:
  - name: Xiaoyu Sun
    initials: XS
    school: Stevens Institute of Technology
    content: friend/about_sxy.md
  - name: Zixiong Zhang
    initials: ZZ
    school: Central China Normal University
    content: friend/about_zzx.md
  - name: Jiangqi Ye
    initials: JY
    school: Beijing Electronic Science and Technology Institute
    content: friend/about_yjq.md
  - name: Ziyu Sun
    initials: ZS
    school: University of Chinese Academy of Sciences
    content: friend/about_szy.md
  - name: Kaizhan Yang
    initials: KY
    school: China University of Geosciences
    content: friend/about_ykz.md
  - name: Zhijiang Tang
    initials: ZT
    school: University of Chinese Academy of Sciences
    content: friend/about_tzj.md
  - name: Ye Tao
    initials: YT
    school: Huazhong University of Science and Technology
    content: friend/about_ty.md
---

<div class="container">
  <section class="page-intro">
    <p class="eyebrow">07 / People</p>
    <h1>Friends &amp; peers</h1>
    <p class="lede">Friends from my academic journey. These introductions reflect the affiliations and interests recorded when this page was first written.</p>
  </section>
  <div class="friends-grid">
    {% for friend in page.profiles %}
    <article class="friend-card">
      <div class="friend-initial" aria-hidden="true">{{ friend.initials }}</div>
      <div>
        <h2>{{ friend.name }}</h2>
        <p class="friend-school">{{ friend.school }}</p>
        {% capture friend_content %}{% include_relative {{ friend.content }} %}{% endcapture %}
        <div class="prose">{{ friend_content | markdownify }}</div>
      </div>
    </article>
    {% endfor %}
  </div>
</div>
