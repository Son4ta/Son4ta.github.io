---
layout: portfolio
permalink: /blog/
title: Field notes
description: Notes on robotics, machine learning, and research tooling.
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

<div class="container">
  <header class="page-intro">
    <p class="eyebrow">Research notebook</p>
    <h1>Field notes</h1>
    <p class="lede">Notes on robotics, machine learning, and research tooling.</p>
  </header>

  {% if site.display_tags.size > 0 or site.display_categories.size > 0 %}
    <nav class="post-archive-links" aria-label="Browse field notes">
      {% for tag in site.display_tags %}
        <a href="{{ tag | slugify | prepend: '/blog/tag/' | append: '/' | relative_url }}">#{{ tag }}</a>
      {% endfor %}
      {% for category in site.display_categories %}
        <a href="{{ category | slugify | prepend: '/blog/category/' | append: '/' | relative_url }}">{{ category }}</a>
      {% endfor %}
    </nav>
  {% endif %}

  {% if paginator %}
    {% assign postlist = paginator.posts %}
  {% else %}
    {% assign postlist = site.posts %}
  {% endif %}

  <div class="blog-grid">
    {% for post in postlist %}
      {% assign post_href = post.url | relative_url %}
      {% if post.redirect contains '://' %}
        {% assign post_href = post.redirect %}
      {% elsif post.redirect != blank %}
        {% assign post_href = post.redirect | relative_url %}
      {% endif %}
      <article class="note-card">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%d %B %Y' }}</time>
        <h2><a href="{{ post_href }}">{{ post.title }}</a></h2>
        {% if post.description %}<p>{{ post.description }}</p>{% endif %}
        <a class="text-link" href="{{ post_href }}" aria-label="Read {{ post.title | escape }}">Read note <span aria-hidden="true">&nearr;</span></a>
      </article>
    {% endfor %}
  </div>

  {% if paginator.total_pages > 1 %}
    <nav class="pagination" aria-label="Field notes pages">
      {% if paginator.previous_page %}
        <a class="pagination-link" href="{{ paginator.previous_page_path | relative_url }}" rel="prev">&larr; Newer</a>
      {% else %}
        <span class="pagination-link" aria-disabled="true">&larr; Newer</span>
      {% endif %}
      {% for page_number in (1..paginator.total_pages) %}
        {% if page_number == 1 %}
          {% assign pagination_path = '/blog/' %}
        {% else %}
          {% assign pagination_path = page_number | prepend: '/blog/page/' | append: '/' %}
        {% endif %}
        <a class="pagination-link" href="{{ pagination_path | relative_url }}"{% if page_number == paginator.page %} aria-current="page"{% endif %} aria-label="Page {{ page_number }}">{{ page_number }}</a>
      {% endfor %}
      {% if paginator.next_page %}
        <a class="pagination-link" href="{{ paginator.next_page_path | relative_url }}" rel="next">Older &rarr;</a>
      {% else %}
        <span class="pagination-link" aria-disabled="true">Older &rarr;</span>
      {% endif %}
    </nav>
  {% endif %}
</div>
