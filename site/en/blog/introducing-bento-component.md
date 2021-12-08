---
title: <bento-fit-text>Hello World!</bento-fit-text>
author: Alan Orozco · Bento Engineering · Google
date: 2021-12-08
read_time: 5
image: ./assets/img/posts/bento-announcement.png
excerpt: Hello World! Today we’re excited to fully launch the Bento components library.
layout: layouts/post.njk
tags: posts
permalink: blog/introducing-the-bento-components-library/index.html
---

{% image "./assets/img/posts/bento-announcement.png" , "Unboxing the Bento components library" %}

Hello World! Today we’re excited to launch our [Bento components](https://bentojs.dev). What are Bento components, you ask? They are performant components with great user experience baked into them! We hope you try them out and give us feedback!

Bento components are the result of a project by the AMP team that started [2 years](https://blog.amp.dev/2021/01/28/bento/) ago to address feedback from publishers. They offer similar performance benefits as AMP components, but provide much more flexibility, as they can be combined with any other library or framework. You can read more about Bento and the future of AMP on the [official AMP blog](https://blog.amp.dev/2021/12/08/introducing-bento/).

<style>
  .demo-container {
    margin-top: 2rem;
    background: #ecf1f3;
  }
  .demo-container button {
    margin: auto;
    display: block;
    padding: 8px;
    font-weight: bold;
    text-transform: uppercase;
  }
  .demo-accordion {
    margin: 1rem 0;
    overflow: hidden;
    max-height: 380px;
  }
  .demo-accordion.show-more {
    max-height: unset;
  }
  .demo-accordion.show-more + button {
    display: none;
  }
  .demo-accordion > section {
    border-radius: 0.5rem;
    margin: 1rem;
    background: white;
    background-repeat: no-repeat;
    background-position: right 1rem top 1rem;
  }
  .demo-accordion h2 {
    background: white;
    padding: 1rem;
    border: none;
    background: none;
    font-size: var(--font-size-18);
  }
  .demo-accordion div {
    padding: 2rem;
    padding-top: 0;
  }
  .demo-accordion section[expanded] {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='%23000000'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z'/%3E%3C/svg%3E%0A");
  }

  .demo-accordion section:not([expanded]) {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px' fill='%23000000'%3E%3Cpath d='M24 24H0V0h24v24z' fill='none' opacity='.87'/%3E%3Cpath d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z'/%3E%3C/svg%3E%0A");
  }
  @media only screen and (max-device-width: 480px) {
    .demo-accordion div {
      padding: .5rem;
      padding-top: 0;
    }
     .demo-accordion {
        margin: 0;
        overflow: hidden;
        max-height: 380px;
      }
      .demo-accordion > section {
    margin: .5rem;
      }
  }
</style>
<div class="demo-container">
<bento-accordion id="demo-accordion" class="demo-accordion">
{% for example in heroExamples %}
  <section>
    <h2>{{ example.name }} </h2>
    <div>
    <div style="position: relative; padding-bottom: 56.25%; /* 16:9 */ padding-top: 25px; height: 0;">
    <iframe src="{{ example.path }}" loading="lazy" title="{{ example.name }}"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
    </div>
    </div>
  </section>
{% endfor %}
</bento-accordion>
<button onclick="document.querySelector('#demo-accordion').classList.add('show-more')">Show More</button>
</div>

## Why Bento components?

Building accessible, performant web pages is hard. And this goes beyond building your own features. It’s also often a challenge to integrate third-party embeds without hurting the performance of your page. 

The good news is that there is a rich ecosystem of web components solving these problems, as many web pages need similar features. But this leads to a new problem: now you have to decide which of the many available components is best. You need to check whether the component works in all browsers or whether there are unwanted side effects of mixing different components on the same page. They should also not negatively impact your [Core Web Vitals](https://web.dev/vitals/) score.

Bento components are here to help. They are designed with three goals in mind:



1. Great Page Experience
2. Framework independence (but with great framework support)
3. Component isolation

Let’s take a closer look at what this means.


### Page Experience

The first one is straightforward: **Page Experience**. In August 2021, [Google Search introduced a new set of signals](https://developers.google.com/search/docs/advanced/experience/page-experience) that measure how users perceive the experience of interacting with a web page beyond its pure information value.  An important part of the page experience ranking signals are [Core Web Vitals](https://web.dev/vitals/). Bento components can help you achieve good core web vitals scores.

Bento components feature a small bundle size and you only have to load the ones that you need. You don't need an entire framework just to add a carousel to your site - you can just use the bento-carousel-component!

Bento components may help with [Core Web Vitals](https://web.dev/vitals/) as well. For example, Bento components always respect the size of their container and only change it when triggered by a user interaction. This prevents [Content Layout Shift](https://web.dev/cls/) that may otherwise occur, e.g. when an embed is inserted dynamically.

Another benefit of Bento components is that resources are loaded lazily by default. Requests to external URLs occur only as the embed approaches the user's position on the page. This is particularly useful for third-party embeds, such as Facebook or Twitter.


### Framework independence

The next one is: **framework independence with great framework support**. Bento components can be used with any framework or CMS. 

Bento components are packaged as **Web Components** and **React/Preact components**. This way, Bento components offer seamless integration with React and Preact, but can also be used anywhere else by using the Web Component version.

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

Bento components respond the same way as you’d expect from any HTML element. If you modify an element's attributes or its subtree, the changes are reflected in its rendered state.


```html
<script>
  // <bento-fit-text> responds to mutations.
  // Changing its content re-calculates its optimal font size.
  const element = document.querySelector('bento-fit-text');
  element.textContent = 'Longer text, smaller font size';
</script>
```


This makes Bento is a great fit for any framework that can interact with vanilla DOM elements.

Here is another example, a Bento component used in a React application: 


```jsx
import React, {useRef, forwardRef} from "react";
import {BentoLightbox} from '@bentoproject/lightbox/react';
import '@bentoproject/lightbox/styles.css';

const MyLightbox = forwardRef((_, ref) => {
  return (
    <BentoLightbox
      ref={ref}
      closeButtonAs={(props) => (
        <button {...props} aria-label="Close my fancy lightbox">
          Close!
        </button>
      )}
    >
      <h1>Hello World</h1>
    </BentoLightbox>
  );
});

function App() {
  const lightboxRef = useRef();
  return (
    <>
      <MyLightbox ref={lightboxRef} />
      <button onClick={() => lightboxRef.current.open()}>
        Open
      </button>
    </>
  );
}
```


A good thing about using Bento components in React is the React version is not just a simple wrapper around the web component. Bento components are actually implemented using React. They behave like any other React component, making them very easy to integrate into your React application. 


### Component isolation

Finally, component isolation, an often-overlooked topic. Bento encapsulates everything at the component level, rather than at the document level. 

When using web components, the contents of a component are rendered inside a [Shadow Root](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM). This encapsulates styling, so that your own defined styles are not clobbered by the component's implementation and vice-versa.

Third-party embeds, such as for embedding a Tweet or an Instagram post, typically require including a script from a vendor's URL. These scripts may act unexpectedly. They may push elements around the page, load additional resources too early, or negatively affect the host document's performance in other ways. In cases when they're required, untrusted scripts from a third-party URL **never** run on the document that holds the embed. They run inside a "proxy frame" which prevents them from interacting with the layout and data on your page. Scripts load lazily since they respect the component's <code>[loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)</code> property.


## What’s in the box?

The goal of Bento components is to provide out-of-the-box solutions for common website features. We can split Bento components into three categories:

**User experience**

Implementing a carousel isn't hard, but implementing [a carousel that avoids content shifts](https://bentojs.dev/components/bento-carousel/), is accessible, and supports many different kinds of content, such as images, videos, iframes, can be tricky to get right. Here are few more examples for Bento’s UI components:



*   [bento-lightbox-gallery](https://bentojs.dev/en/components/bento-lightbox-gallery/): add the `lightbox` attribute to any image on your page to add it to a great looking lightbox gallery.
*   [Bento-sidebar](https://bentojs.dev/en/components/bento-sidebar/): a flexible hamburger menu.
*   [bento-inline-gallery:](https://bentojs.dev/en/components/bento-lightbox-gallery/) an image carousel with optional pagination dots and thumbnails.

**3rd party embeds**

Third party embeds are often very heavy and can negatively affect the performance of your page. Bento components provide wrappers for common third party embeds that are properly sandboxed and implement performance best practices such as lazy loading. Checkout [bento-twitter](https://bentojs.dev/en/components/bento-twitter) or [bento-instagram](https://bentojs.dev/en/components/bento-instagram) to get an idea. 

**Utilities**

It’s often the simple things that take time. Bento components provide many small helpers that can be surprisingly tricky to implement, but are extremely useful. A few examples are:

*   [bento-fit-text](https://bentojs.dev/en/components/bento-fit-text): automatically resize text to fit the available space.
*   [bento-timeago](https://bentojs.dev/en/components/bento-timeago): count up to, or away from, a specified date and time with a fuzzy timestamp, such as in 30 years or 3 hours ago.
*   [bento-selector](https://bentojs.dev/en/components/bento-youtube): radio buttons on steroids. 

But these are just a few examples, you can find the full list of components in the [Bento developer documentation](https://bentojs.dev/documentation/).


## Try Bento now!

Read the [getting started guide](https://bentojs.dev/get-started/) to try out Bento components or check out [all the available components](https://bentojs.dev/documentation/)! The team encourages and welcomes developer feedback through [GitHub](https://github.com/ampproject/bento/discussions).
