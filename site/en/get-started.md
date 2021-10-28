---
layout: pages/get-started.njk
permalink: /get-started/index.html
i18n:
  stage:
    headline: Getting started with Bento
    text: Bento is a set of mix and matchable highly performant web components that are easily customizable to meet your site functionality needs. Bento components are well-tested, compatible across modern browsers, and work in many development environments. You can use one, some or all Bento components on your site! And, since Bento components are self-maintaining, they work with any other framework or components library.
  steps:
    headline: 'Start using Bento Components in your site by following these easy steps:'
    items:
      - Identify which path fits your site’s environment. If you’re using React or Preact to render your pages, go with the React version, in all other cases, try the Web Components version.
      - Choose a component that fits your needs and install or import it.
      - Use the component’s API to customize functionality.
      - Sit back, relax, and enjoy your out-of-the-box component!
  react:
    headline: React and Preact
    text: |
      Bento components are fundamentally React functional components, released as Preact or React, and in regular or minified builds. Install each Bento component as needed, via npm, then import it as desired. The shown example uses the React `<BentoAccordion>` in regular build.

      And that’s it! Read more about React vs Preact and minified vs regular builds in our Importing and using Bento components guide.
    all: All bento components
  web_components:
    headline: Web Components
    text_1: 'There are two options to integrate Bento components into an HTML document:'
    strong_1: 1. Install and import the element using `npm`.
    strong_2: 2. Include the component `<script>` in the head of your document.
    text_2: You must include each Bento component's required CSS library before adding custom styles to avoid layout shifts on load. To guarantee best loading performance, it’s best to inline the light-weight pre-upgrade styles directly into the page. See each component's section on layout and style for further details.
    all: All bento components
  discover:
    headline: Discover all available Bento components inside the documentation.
    discover: Discover the documentation
  browser_support:
    headline: Browser Support
    text: |
      Bento components support the latest two versions of most major browsers like Chrome, Firefox, Edge, Safari, Opera and UC Browser. We support desktop, phone, tablet and the web view version of these respective browsers.

      **Important&#58;** If you’re targeting browser versions <2017, please make sure to include the custom element polyfill&#58;
  contribute:
    headline: Contribute to Bento
    text: Need a component but don’t see it listed? Come across a bug you know how to fix? Great news! Bento is open source under the AMP Project, and we couldn’t do it without our amazing community. Join us and start contributing today!
    cta: Join us today
---
