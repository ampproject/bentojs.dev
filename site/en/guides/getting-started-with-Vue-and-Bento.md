---
layout: layouts/guide.njk
tags: guides
title: Getting Started with Vue.js and Bento
description: How to use Bento components for building a Vue.js application.
---

This guide is to help you get started with using Bento components in your Vue.js application. All Bento components are provided as web components, which makes them easy to use with Vue.js.

## Bento Accordion with Vue.js

In this guide we are going to create a simple Vue app that will use the Bento accordion component. We'll start with a barebones HTML page. First we'll add a `div` with an `id` of `demo` where Vue will render the component.

```html
<html>
  <head> </head>
  <body>
    <div id="demo"></div>
  </body>
</html>
```

Then we add script tags that import Vue (version 3.x) and Bento Accordion. We use `type="module" `so we can use the `import` statement.

```html
<html>
  <head>
  </head>
  <body>
    <div id="demo">
    </div>
    <script type="module">
      import {createApp} from 'https://unpkg.com/vue@next/dist/vue.esm-browser.prod.js';
      import {defineElement as defineBentoAccordion} from 'https://unpkg.com/@bentoproject/accordion?module';
    </script>
</body>
</html>
```

To setup our app, we'll call Vue's `createApp` and configure it to exclude all `bento` components since they are defined outside of Vue and should not be controlled by it (see [here](https://v3.vuejs.org/guide/migration/custom-elements-interop.html#_3-x-syntax) for more information).

```html
<html>
  <head>
  </head>
  <body>
    <div id="demo">
    </div>
    <script type="module">
      import {createApp} from 'https://unpkg.com/vue@next/dist/vue.esm-browser.prod.js';
      import {defineElement as defineBentoAccordion} from 'https://unpkg.com/@bentoproject/accordion?module';

      const app = createApp({});
      app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('bento-');
    </script>
</body>
</html>
```

Now , we can create our `accordion-demo` Vue component. The template for this component template wraps `bento-accordion`. We also `mount` the Vue component in the div container with `id="app"`.

```js
const app = createApp({});
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('bento-');

defineBentoAccordion();

app.component('accordion-demo', {
  template: `
    <bento-accordion>
      <section>
        <h2>Section 1</h2>
        <div>Lorem ipsum</div>
      </section>
      <section>
        <h2>Section 2</h2>
        <div>Lorem ipsum</div>
      </section>
      <section>
        <h2>Section 3</h2>
        <div>Lorem ipsum</div>
      </section>
    </bento-accordion>`,
});

app.mount('#demo');
```

Finally, we include the bento accordion styles to prevent layout shifts on load:

```html
  <head>
    <link rel="stylesheet" type="text/css"
          href="https://cdn.ampproject.org/v0/bento-accordion-1.0.css">
  </head>
```

To view this page in a browser, run `npx serve` in the directory where this file is located (or any other local webserver). Open up a browser and go to http://localhost:5000/accordion.

## Summary

In this guide we’ve created a new Vue.js page from scratch using Bento accordion. If you want to learn more about Bento, check out the [full list of our components](/documentation/#all). You can find a working copy of this example on Github: https://github.com/ampproject/bento.dev/tree/main/examples/vue.
