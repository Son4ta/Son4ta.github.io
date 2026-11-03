# Four-size typography system

The portfolio uses exactly four fixed font sizes. The same values apply to desktop, tablet, phone, and print layouts. Responsive layouts must reflow their content instead of reducing the text size.

| Role | CSS token | Size | Use |
| --- | --- | --- | --- |
| Large | `--type-large` | 56 px | Page titles, the hero name, major research counts, decorative numerals |
| Medium | `--type-medium` | 28 px | Section headings, company names, prominent identity labels, selected icons |
| Small | `--type-small` | 16 px | Body copy, biography, education descriptions, paper titles and summaries, navigation, card titles |
| Detail | `--type-detail` | 12 px | Dates, author lists, venue badges, labels, buttons, figure captions, archive metadata, code, decorative annotations |

All four tokens are defined once in `assets/css/portfolio.css`. Every explicit `font-size` declaration and every size component in a `font` shorthand references one of these tokens. The inherited form-control font is the only size-free shorthand. Existing font families, weights, and line heights are retained.

Headings, `small`, `sup`, `sub`, `code`, `kbd`, and `samp` have explicit size roles so browser defaults cannot introduce an additional relative size. Standard form controls inherit the surrounding typography.

Do not add another font-size number, a responsive size token override, a `clamp()` font size, or a percentage/em-based font-size adjustment. Keep important text in the 16 px role or above; use the 12 px role for secondary information only. Use weight, color, letter spacing, and layout to distinguish emphasis within a size role. Any new responsive rule should preserve the element's existing role.
