# [umi-plugin-md](#) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chiaweilee/umi-plugin-md/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/umi-plugin-md.svg?style=flat)](https://www.npmjs.com/package/umi-plugin-md) [![npm downloads](https://img.shields.io/npm/dm/umi-plugin-md.svg)](https://npmcharts.com/compare/umi-plugin-md?minimal=true) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

Markdown(\*.md) component plugin for umi. 

*Create your website with umi and markdown only. Convenient and powerful for blog, documentation site and GitBook.*

* **Convert markdown into component:** loaded by `markdown-it` and translate into React component.
* **Auto routes create:** auto create markdown routes from dir.
* **Auto anchor:** auto create anchor for `h1`, `h2` and `h3`.
* **XSS protect:** by [xss](https://www.npmjs.com/package/xss).

![Example](https://raw.githubusercontent.com/chiaweilee/umi-plugin-md/master/Screenshot%202019-07-08%20at%2021.15.41.png)

## Installation

```
npm install umi-plugin-md
```

## Usage

```js
// .umirc.js
export default {
  plugins: ['umi-plugin-md'],
};
```

## Options

option | intro | type |  default  
-|-|-|-
anchor | Auto Anchor `^0.2.0` | string[], falsy to disable | ['h1', 'h2', 'h3'] |
wrapper | HTMLElementTagName | string | section |
className | React className | string | |
style | React style | object | |
html | markdown-it option | boolean | true |
xhtmlOut | markdown-it option | boolean | true |
breaks | markdown-it option | boolean | true |
linkify | markdown-it option | boolean | true |
typographer | markdown-it option | boolean | true |
highlight | markdown-it option | function | highlight.js |

**tips**: `route of markdown will have higher priority, so route might be covered.`

e.g, `index.md` will cover `index.jsx`.

## Anchor

![Example](https://raw.githubusercontent.com/chiaweilee/umi-plugin-md/master/Screenshot%202019-07-16%20at%2022.56.20.png)

#### Get anchor id?

```js
import { slug } from 'umi-plugin-md';

var text = $('h2').text();
var id = slug(text);
```

Or copy `umi-plugin-md/lib/helpers/slug.js` to your repo.

#### Anchor Stylize

```css
// global.css
@import "~umi-plugin-md/anchor.css";
```

Or, write yourself.

tips: we do not support `scroll to anchor on did mount` this moment.

## Markdown Stylize

[github-markdown-css](https://www.npmjs.com/package/github-markdown-css)

```css
// global.css
@import "~github-markdown-css/github-markdown.css";
@import "~highlight.js/styles/github.css";
```

```js
// .umirc.js
export default {
  plugins: [['umi-plugin-md', { className: 'markdown-body' }]],
};
```

## Layout

Try `_layout.js`.

## Example

See [pages](https://github.com/chiaweilee/umi-plugin-md/tree/master/src/pages)
