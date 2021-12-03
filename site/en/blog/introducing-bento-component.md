---
title: <bento-fit-text>Hello World!</bento-fit-text>
author: Alan Orozco · Bento Engineering · Google
date: 2021-12-03
read_time: 5
image: ./assets/img/og.jpg
excerpt: Hello World! Today we’re excited to fully launch our Bento components.
layout: layouts/post.njk
tags: posts
permalink: blog/introducing-bento-components/index.html
---

{% heroexample 'bento-intro' %}

Hello World! Today we’re excited to fully launch our [Bento components](https://bentojs.dev). What are Bento components you ask? They are performant components with great user experience baked into them! We hope you try them out and give us feedback!

Bento components are the result of a project by the AMP team that started [2 years](https://blog.amp.dev/2021/01/28/bento/) ago to address feedback from publishers. Bento components enable you to use AMP components on non-AMP pages. They offer similar performance benefits as AMP components, but provide much more flexibility, as they can be combined with any other library or framework. You can read more about Bento and the future of AMP on the official AMP blog.

## Why Bento Components?

Building accessible, performant web pages is hard. And this goes beyond building your own features. It’s also often a challenge to integrate third-party embeds without hurting the performance of your page.

The good news is that many web pages need similar features and that there is a rich ecosystem of web components solving these problems. But this leads to a new problem: now you have to decide which components to pick from the many that are available. You have to check whether it is safe to use a component or if it potentially hurts your [Core Web Vitals](https://web.dev/vitals/). You need to check whether the component works in all browsers and whether there are unwanted side effects of mixing different components on the same page.

Bento components are here to help. Bento components are designed with three goals in mind:

1. Great page experience
2. Framework independence (but with great framework support)
3. Component isolation

Let’s take a closer look at what this means.

### Page Experience

The first one is straightforward: **Page Experience**. In August 2021, [Google Search introduced a new set of signals](https://developers.google.com/search/docs/advanced/experience/page-experience) that measure how users perceive the experience of interacting with a web page beyond its pure information value. An important part of the page experience ranking signals are [Core Web Vitals](https://web.dev/vitals/). Bento components can help you achieve good core web vitals scores.

For example, Bento components feature a small bundle size so that you only have to pick the ones that you need. For example, if you want to add a carousel to your page, you can only use the bento-carousel component.

Bento components may help with [Core Web Vitals](https://web.dev/vitals/) as well. For example, Bento components always respect their container's dimensions. This prevents [Content Layout Shift](https://web.dev/cls/) that may otherwise occur when an embed is inserted dynamically.

Another benefit of Bento components is that resources are loaded lazily by default. Requests to external URLs occur only as the embed approaches the user's position on the page. This is particularly useful for third-party embeds, such as Facebook or Twitter \*.

Tip: Resources are loaded lazily on browsers that support the <code>[loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)</code> attribute. We're working on bringing support to other browsers.

### Framework independence

The next one is: **framework independence with great framework support**. Bento components do not make any assumptions about the underlying framework and can be used with any framework or CMS.

Bento components are packaged as **React** or **Preact components **for seamless integration with those frameworks, but they're also provided as **Web Components**, so that they can be used anywhere.

Here is a web components example:

```html
<!DOCTYPE html>
<html>
  <head>
    <script async src="https://cdn.ampproject.org/bento.js"></script>
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
    <bento-fit-text style="max-width: 200px; height: 60px">
      Hello world!
    </bento-fit-text>
  </body>
</html>
```

Note that we did not write or bundle any JavaScript in the previous example. We can paste this code into an `.html` file and call it a day! This makes Bento components a great fit for CMSs, such as WordPress, Drupal or Eleventy, which heavily rely on server-side rendering.

Bento components are self-managing and mutable. This means that they respond the same way as you’d expect from any HTML element. If you modify an element's attributes or its subtree, the changes are reflected in its rendered state.

```html
<script>
  // <bento-fit-text> responds to mutations.
  // Changing its content re-calculates its optimal font size.
  const element = document.querySelector('bento-fit-text');
  element.textContent = 'Longer text, smaller font size';
</script>
```

This is a simple yet versatile model. Most frameworks know how to interact with DOM elements, so Bento components are a great fit.

Here is another example, a Bento component used in a React application:

```html
import React from 'react';
import {BentoLightbox} from '@bentoproject/lightbox/react';
import '@bentoproject/lightbox/styles.css';

function MyLightbox({ref}) {
  return (
   <BentoLightbox ref={ref} closeButtonAs={(props) => (
     <button {...props} aria-label="Close my fancy lightbox">
       Close!
     </button>
   )}>
     <h1>Hello World</h1>
   </BentoLightbox>
 );
}

function App() {
  const lightboxRef = useRef();
  return (
    <>
      <MyLightbox ref={ref} />
      <button onClick={() => lightboxRef.current.open()}>
        Open
      </button>
    </>
  );
}
```

The good thing about using Bento components in React (or Preact) is: the React version is not just a simple wrapper around the web component. Bento components, in this case, are actually implemented using React. This means they behave like any other React component, which makes them very easy to integrate into your React application.

### Component Isolation

Finally, component isolation, which is an often-overlooked topic. There are two cases in which this is important. Bento encapsulates everything at the component level, rather than at the document level.

When using web components, the contents of a component are rendered inside a Shadow Root. This encapsulates styling, so that your own defined styles are not clobbered by the component's implementation and vice-versa.

Third-party embeds typically require including a script from a vendor's URL. These scripts may act unexpectedly. They may push elements around the page, load additional resources too early, or negatively affect the host document's performance in other ways. In cases when they're required, untrusted scripts from a third-party URL **never **run on the document that holds the embed. They run inside a "proxy frame" which prevents them from interacting with the layout and data on your page. Scripts load lazily since they respect the component's <code>[loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)</code> property.

## What’s in the box?

The goal of Bento components is to provide out-of-the-box solutions for common website features. We can roughly split Bento components into three categories:

**User Experience**

Implementing a carousel is easy, but implementing [a carousel that avoids content shifts](https://bentojs.dev/components/bento-carousel/), is accessible, and supports many different kinds of content, such as images, videos, iframes, can be tricky to get right. Here are few more examples for Bento’s UI components:

- [bento-lightbox-gallery](https://bentojs.dev/en/components/bento-lightbox-gallery/): add the `lightbox` attribute to any image on your page to add it to a great looking lightbox gallery.
- [Bento-sidebar](https://bentojs.dev/en/components/bento-sidebar/): a flexible hamburger menu.
- [bento-inline-gallery:](https://bentojs.dev/en/components/bento-lightbox-gallery/) an image carousel with optional pagination dots and thumbnails.

**3rd Party Embeds**

Third party embeds are often very heavy and can negatively affect the performance of your page. Bento components provide wrappers for common third party embeds that are properly sandboxed and implement performance best practices such as lazy loading. Checkout [bento-twitter](https://bentojs.dev/en/components/bento-twitter) or [bento-instagram](https://bentojs.dev/en/components/bento-instagram) to get an idea.

**Utilities**

Finally, it’s often the simple things that take time. Bento components provide many small helpers that can be surprisingly tricky to implement, but are extremely useful. A few examples are:

- [bento-fit-text](https://bentojs.dev/en/components/bento-fit-text): automatically resize text to fit the available space.
- [bento-timeago](https://bentojs.dev/en/components/bento-timeago): count up to, or away from, a specified date and time with a fuzzy timestamp, such as in 30 years or 3 hours ago.
- [bento-selector](https://bentojs.dev/en/components/bento-youtube): radio buttons on steroids.

But these are just a few examples, you can find the full list of components in the [Bento developer documentation](https://bentojs.dev/documentation/).

## Try Bento now!

Read the [getting started guide](https://bentojs.dev/get-started/) to try out Bento components or check out [all the available components](https://bentojs.dev/documentation/)! The team encourages and welcomes developer feedback through [GitHub](https://github.com/ampproject/bento.dev/discussions).
