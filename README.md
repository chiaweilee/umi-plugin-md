# [umi-plugin-md](#) &middot;

Markdown(\*.md) component plugin for umi.

## todo

- abandon 'patch.js', try https://umijs.org/plugin/develop.html#addrouterimport / https://umijs.org/plugin/develop.html#modifyroutes

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
      },
    ],
  ],
};
```
