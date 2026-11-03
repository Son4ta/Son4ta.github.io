# Rhine Lab-inspired academic portfolio

The visual direction was researched before implementation, using public official Arknights material. The design adapts its visual language to a personal academic website; the profile, research, publications, and employment history remain Chengjie Fang's real content.

## First-party references

- [Rhodes Island's Records of Originium — Rhine Lab](https://comic.hypergryph.com/terra-historicus/comic/1421), Hypergryph's Terra Historicus: pale laboratory environments, black geometric details, small yellow-green signals, and institutional document styling.
- [Lone Trail official event announcement](https://arknights.global/news/344): cream geometric display type, concentric orbital lines, thin instrument-like marks, and a segmented brick-red / amber / pale-teal stripe.
- [Dorothy's Vision official event announcement](https://arknights.global/news/372): light grey research facilities, greenhouse imagery, subtle grids and targeting marks.
- [Official video archive](https://ak.hypergryph.com/archive/video): the Lone Trail event teaser, dated April 22, 2023, was identified in the [official archive API](https://ak.hypergryph.com/api/archive/video?page=12). The research checked its title, description, cover, and available HLS playlist; it did not download or claim to have watched the complete film.

Reference images were retained only in the task's research folder. The website does not use character illustrations as backgrounds. Its simple F brand mark and static geometric details identify a personal website rather than the fictional organization. The researcher's name, UCAS affiliation, and personal-archive label remain explicit.

## Layout and typography

The website uses a warm grey-white base, near-black structure, olive and yellow-green signals, restrained three-color strips, condensed geometric headings, and monospaced record labels. The home page presents publications before education. Other pages cover research directions, experience, technical notes, and CV. Friends, code, and news remain accessible from the footer; existing blog and project URLs are preserved by Jekyll.

The portrait is presented as a personal research record with restrained static geometry. Publication cards use real extracted method figures and separate venue/year, classification, authorship, and acceptance status. Large company wordmarks sit behind internship text at low opacity, preserve their proportions, and do not intercept input.

## Company marks

- ByteDance: the transparent SVG is the official horizontal wordmark extracted from [ByteDance's English website](https://www.bytedance.com/en/). No third-party logo reconstruction was used.
- Baidu: the transparent 550 × 176 PNG is served by [Baidu's official CDN](https://psstatic.cdn.bcebos.com/basics/2025_wiseindex/wiseindex-logo_1756889417000.png) and is referenced by [Baidu's mobile homepage](https://m.baidu.com/).

The original logos are not recolored or distorted. Reduced opacity is applied by CSS to place them behind the respective employment record. They identify the organizations named in the user's CV.

## Implementation

The site continues to use its original Jekyll build and GitHub Pages deployment. The new design is implemented through `portfolio` layouts and scoped `portfolio.css` / `portfolio.js`; publication and profile facts remain in `_data`. Original English rewrites, citation evidence, technical notes, and undergraduate research background are preserved.

## Self-hosted font licenses

The Latin WOFF2 files for Barlow Condensed, Inter, and IBM Plex Mono are self-hosted in `assets/fonts/portfolio/`. Each family is licensed under the SIL Open Font License 1.1. The following official Google Fonts license files were retrieved and checked on November 4, 2026; their full copyright notices and license text accompany the fonts:

- Barlow Condensed: [`LICENSE-Barlow.txt`](../assets/fonts/portfolio/LICENSE-Barlow.txt); source: https://raw.githubusercontent.com/google/fonts/main/ofl/barlowcondensed/OFL.txt
- Inter: [`LICENSE-Inter.txt`](../assets/fonts/portfolio/LICENSE-Inter.txt); source: https://raw.githubusercontent.com/google/fonts/main/ofl/inter/OFL.txt
- IBM Plex Mono: [`LICENSE-IBM-Plex-Mono.txt`](../assets/fonts/portfolio/LICENSE-IBM-Plex-Mono.txt); source: https://raw.githubusercontent.com/google/fonts/main/ofl/ibmplexmono/OFL.txt


## Readability and static decoration

The portrait uses the user-supplied color photograph, with no grayscale filter or blend mode. Responsive WebP variants are approximately 44 KB and 103 KB, with a JPEG fallback. The home page now has an explicit two-card Education module, and the biography highlights academic affiliations, research themes, and industry experience using bold text and accessible dark olive, teal, and rust accents.

Typography is restricted to four fixed sizes (56 / 28 / 16 / 12 px) across desktop, phone, and print; see [typography.md](typography.md). The header restores the earlier simple F mark. Thin rules, orbital outlines, and restrained color strips remain static; the assembling and separating background graphics and their motion controller have been removed. See [static decoration notes](motion-design.md).

## University marks

The two Education cards also use low-opacity official marks, with original colors and aspect ratios:

- **University of Chinese Academy of Sciences:** the complete university mark comes from the [official standard-logo download page](https://onestop.ucas.edu.cn/home/info/6b9e95dc-5785-4eee-b25f-1f884698cfc3), [official ZIP](https://onestop.ucas.edu.cn/Content/Upload/2020/9/1.zip), entry `国科大标准Logo横式二（蓝色）.png`. The Chinese and English university names are retained with the roundel; a standalone CAS roundel would not identify the university. The delivered transparent PNG is 591 × 328 pixels.
- **Wuhan Institute of Technology:** the transparent 350 × 348 circular emblem is referenced by the [official admissions site](https://zsb.wit.edu.cn/) and served from its [school-icon provider](https://img.zhinengdayi.com/imgServer/XPBQXC/2017-05-18/1495089264453.png). Identity is corroborated by the university's [visual-identity notice](https://news.wit.edu.cn/info/1161/92381.htm). Lossless PNG recompression preserves decoded pixels and the original color profile.

CSS positions these images behind the record at 6.5–8.5% opacity. They are decorative, hidden from assistive technology, and do not intercept clicks. The university names remain explicit foreground text.
