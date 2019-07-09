# [umi-plugin-md](#) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chiaweilee/umi-plugin-md/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/umi-plugin-md.svg?style=flat)](https://www.npmjs.com/package/umi-plugin-md) [![npm downloads](https://img.shields.io/npm/dm/umi-plugin-md.svg)](https://npmcharts.com/compare/umi-plugin-md?minimal=true) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

Markdown(\*.md) component plugin for umi. 

*Create your website with umi and markdown only. Convenient and powerful for blog, documentation site and GitBook.*

* **markdown-it:** powered by markdown-it
* **highlight:** highlight render
* **xss:** protect by [xss](https://www.npmjs.com/package/xss)

![Example](https://raw.githubusercontent.com/chiaweilee/umi-plugin-md/master/Screenshot%202019-07-08%20at%2021.15.41.png)

## Installation

```
npm install umi-plugin-md
```

## Usage

```js
// .umirc.js
export default {
  plugins: [
    [
      `umi-plugin-md`,
      {
        // option
        wrapper: 'section',
        className: 'markdown-body',
      },
    ],
  ],
};
```

That's it!
Try create a markdown file under `pages`, and `npm start` then

## Stylize

*wanna style for markdown?*

Suggest, [github-markdown-css](https://www.npmjs.com/package/github-markdown-css)

```css
// global.css
@import "~github-markdown-css/github-markdown.css";
```

and set plugin option `className: 'markdown-body'`

## Layout

*Wanna layout for markdown?*

Read this, [umijs#different-global-layout](https://umijs.org/guide/router.html#different-global-layout)

## todo

- abandon 'patch.js', gonna to be graceful. [addrouterimport](https://umijs.org/plugin/develop.html#addrouterimport) / [modifyroutes](https://umijs.org/plugin/develop.html#modifyroutes)
