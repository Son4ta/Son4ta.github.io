---
layout: portfolio
title: News
permalink: /news/
description: Research, internships, and website updates.
---

<div class="container narrow">
  <header class="page-intro">
    <p class="eyebrow">Updates</p>
    <h1>News</h1>
    <p class="lede">Research, internships, and website updates.</p>
  </header>

  <div class="news-timeline">
    {% assign news_items = site.news | sort: 'date' | reverse %}
    {% for item in news_items %}
      <article class="news-item">
        <time datetime="{{ item.date | date_to_xmlschema }}">{{ item.date | date: '%d %B %Y' }}</time>
        <div>
          <h2><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h2>
          <div class="prose">{{ item.content | markdownify }}</div>
        </div>
      </article>
    {% endfor %}
  </div>
</div>
