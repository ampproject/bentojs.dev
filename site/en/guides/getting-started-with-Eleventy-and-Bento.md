---
layout: layouts/guide.njk
tags: guides
title: Using Bento components in Eleventy
description: How to use Bento components in your static website built with Eleventy.
thumbnail: ./assets/img/guides/eleventy.png
permalink: /documentation/guides/bento-eleventy-guide/index.html
---

This guide explains how to use Bento components for building a website with [Eleventy](https://www.11ty.dev/). Jump straight to the [Bento component shortcut](#bento-component-shortcut) section if you're only interested in the solution.

## Introduction

Before you can use a Bento component, you need to load the Bento runtime script + component scripts and their styles in the `head` of your pages (usually in your [layout files](https://www.11ty.dev/docs/layouts/)). Then you can use the components in your templates or partials:

```html
<head>
  <script src="https://cdn.ampproject.org/bento.js"></script>
  <script
    async
    src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.js"
  ></script>
  <link
    rel="stylesheet"
    href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css"
  />
</head>
<body>
  <bento-fit-text>Hello World.</bento-fit-text>
</body>
```

However, this approach has one disadvantage: if you are not using the same Bento components on all your pages, you have to make sure that you're only importing the component scripts and styles when they're really needed, to avoid that users download JS they don't actually need.

In this guide we're going to describe an approach that makes it very easy to only import Bento components when you really need them.

## Using `eleventy-plugin-head`

We are going to use the [`eleventy-plugin-head` plugin](https://www.npmjs.com/package/eleventy-plugin-head), which allows us to add elements to `head` from anywhere in our templates. The good thing about this plugin is, that it helps avoid duplicate imports (e.g. when the same component is used multiple times on the same page)

First we need to install the plugin via NPM:

```shell
npm install eleventy-plugin-head --save-development`
```

And add it to the Eleventy configuration file `.eleventy.js` in the project root directory:

```js
const pluginHead = require('eleventy-plugin-head ');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginHead);
};
```

Now we can use the `head` shortcut to import the Bento component whenever we need it. The `key` ensures that elements with the same key are only added once to the `head`.

{% raw %}

```html
{% head 'bento-fit-text', '
<script src="https://cdn.ampproject.org/bento.js"></script>
<script
  async
  src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.js"
></script>
<link
  rel="stylesheet"
  href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css"
/>' %} <bento-fit-text>Hello World.</bento-fit-text>
```

{% endraw %}

Note: we've been using Nunjucks templates here, but this works for all Eleventy supported templating languages.

This approachs solves the problem of avoiding duplicate imports, but still requires us to import the component script and styles whenever we're using the component. This potentially means a lot of copy pasting. We can avoid this by creating a custom shortcode for importing Bento components.

## Bento component shortcut

[Eleventy shortcodes](https://www.11ty.dev/docs/shortcodes/) enable reusing functionality across your templates. We're going to create such a shortcode for importing Bento components. We're again using the `eleventy-plugin-head` plugin, but this time we have to use the API `pluginHead.head.add('path', 'key', 'value')` to add elements to the `head`, as shortcodes don't work inside of other shortcodes.

We use our shortcode to register the required Bento runtime and component scripts in the head. The name of the Bento component gets passed via parameter. We also have to pass the input path of the current document for the plugin to be able to track which page needs which Bento components:

```js
const pluginHead = require('eleventy-plugin-head');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginHead);

  eleventyConfig.addShortcode("importBento", function (componentName) {
    pluginHead.head.add(
      this.page.inputPath,
      "bento-runtime",
      `<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>`
    );
    pluginHead.head.add(
      this.page.inputPath,
      "bento-" + componentName,
      `<script type="module" src="https://cdn.ampproject.org/v0/bento-${componentName}-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-${componentName}-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-${componentName}-1.0.css" crossorigin="anonymous">`
    );
    return "";
};
```

Now we can import Bento components from anywhere in our templates with `importBento` followed by the component name:

{% raw %}

```html
{% importBento 'fit-text' %} <bento-fit-text>Hello World</bento-fit-text>
```

{% endraw %}

This works even inside markdown files:

{% raw %}

```md
# Bento carousel

Checkout the carousel:

{% importBento 'base-carousel' %}
<bento-base-carousel style="aspect-ratio: 4/3;" >
<img src="https://picsum.photos/id/237/640/480" alt="example image 1">
<img src="https://picsum.photos/id/238/640/480" alt="example image 2">
<img src="https://picsum.photos/id/239/640/480" alt="example image 2">
</bento-base-carousel>
```

{% endraw %}

And that's it. A simple way to use Bento components in Eleventy.

## Summary

Bento components are great way to enrich Eleventy sites with client-side functionality. By creating a Bento specific shortcode, we can ensure that Bento scripts and styles are only imported when needed. You can find a [fully working example on Github](https://github.com/ampproject/bento.dev/tree/main/examples/eleventy).
