# Chengjie Fang's academic homepage

Personal research website at **https://son4ta.github.io**, built with the repository's existing **Jekyll** pipeline. The current design takes visual inspiration from the research-institution aesthetic of Arknights' Rhine Lab: pale laboratory tones, precise rules, condensed type, archive numbering, and restrained signal colors.

The English site includes a current biography, seven published or accepted papers with original method figures, two manuscripts under review, a two-card education section, two industry internships, research projects, a printable CV, twelve technical notes, and the original friends/news content. Publications appear before education on the homepage. The header uses a simple F mark; background rules, orbital outlines, and color strips are static.

## Editing content

- `_pages/about.md`: biography and homepage sections.
- `_data/profile.json`: education, internships, awards, skills, and manuscripts.
- `_data/research_papers.json`: titles, authors, publication status, venue labels, figures, and research summaries.
- `_layouts/portfolio*.liquid` and `_includes/portfolio*.liquid`: current page layouts and reusable components.
- `assets/css/portfolio.css`, `assets/js/portfolio.js`: design, responsive behavior, search, and figure enlargement.
- `_posts/`, `_projects/`, `_news/`: existing Jekyll content collections, with original URLs retained.
- `_pages/friend/`: English introductions to friends and peers.
- `assets/papers/`, `assets/research/`: paper PDFs, citations, and method figures.
- `assets/brand/`: verified official ByteDance and Baidu wordmarks used as translucent internship backgrounds.

The original al-folio source remains available for historical reference, while current pages select the portfolio layouts. The CV is rendered directly from the shared profile and publication data to avoid divergent content.

## Build

Follow the original [installation guide](INSTALL.md) for Ruby/Bundler dependencies, then run:

```sh
bundle install
bundle exec jekyll serve
```

The existing GitHub Actions workflow builds Jekyll and deploys to `gh-pages`. No JavaScript build system replaces it.

## Sources and design

- [Research verification](docs/research-verification.md)
- [Method-figure sources](docs/asset-sources.md)
- [Visual references and company marks](docs/design-references.md)
- [Editorial decisions](docs/refresh-notes.md)

No scholarship applications, private contact numbers, transcripts, or unsupported acceptance claims are included in the site.
