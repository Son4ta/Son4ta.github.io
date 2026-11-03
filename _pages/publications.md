---
layout: portfolio
permalink: /publications/
title: Publications
description: Publications by Chengjie Fang, with method figures, authorship, and venue information.
nav: true
nav_order: 3
---
<div class="container">
<section class="page-intro"><p class="eyebrow">02 / PUBLICATION ARCHIVE</p><h1>PUBLICATIONS<span>.</span></h1><p class="lede">Seven published or accepted papers, including five with first or co-first authorship. My name is highlighted in each author list; * denotes equal contribution.</p><div class="archive-status"><span><i class="status-indicator"></i> 05 PUBLISHED</span><span>02 ACCEPTED</span><span>02 UNDER REVIEW</span></div></section>
<div class="publication-toolbar"><div class="filter-buttons" role="group" aria-label="Filter publications by topic"><button type="button" data-filter="all" aria-pressed="true">All work</button><button type="button" data-filter="Scientific AI" aria-pressed="false">Scientific AI</button><button type="button" data-filter="Embodied AI" aria-pressed="false">Embodied AI</button><button type="button" data-filter="Visual perception" aria-pressed="false">Visual perception</button></div><label class="search-field"><span class="sr-only">Search publications</span><input type="search" id="publication-search" placeholder="Search title, venue, or topic"></label></div>
<div id="publication-list" class="publication-list">{% for paper in site.data.research_papers %}{% include portfolio_paper.liquid paper=paper %}{% endfor %}</div><p id="filter-result" class="filter-result" role="status" aria-live="polite">Showing 7 publications</p>
<p class="source-note">Conference classifications follow the <a href="https://www.ccf.org.cn/Academic_Evaluation/AI/">CCF AI list</a> and <a href="https://www.ccf.org.cn/Academic_Evaluation/CGAndMT/">CCF multimedia list</a>. Journal metric: <a href="https://ieeeaccess.ieee.org/about/bibliometrics/">IEEE Access IF 4.2 (2025)</a>.</p>
<section class="section-block"><div class="section-head"><div><span class="section-id">IN PROGRESS / MANUSCRIPTS</span><h2>Under review<span>.</span></h2></div></div>{% include portfolio_manuscripts.liquid %}</section>
</div>
