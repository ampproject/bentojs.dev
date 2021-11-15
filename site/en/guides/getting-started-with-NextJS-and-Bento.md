---
layout: layouts/guide.njk
tags: guides
title: Getting Started with Next.js and Bento
description: How to use Bento components for building a Next.js application.
---

This guide is to help get developers started with Next.js and Bento.  All Bento components provide a React (and Preact) API. This makes them very easy to use in Next.js apps.  This guide assumes you have some familiarity with modern front end development like ReactJS, NodeJS, Javascript, and JSX.

## Starting up a Next.js app

For a more complete guide to getting started with Next.js; see the [get started guide](https://nextjs.org/docs/getting-started) at nextjs.org. The first step is to create a new Next.js app via:

```bash
npx create-next-app@latest
```

Using the `npx` command to execute `creat-next-app` is the quickest way to scaffold a working app. Follow the CLI, it'll prompt you to name your project. By default it uses `my-app`. Once you `cd` into your app's directory you can start a local development environment.

```bash
`npm run dev`
```

Go to `http://localhost:3000` to see a simple welcome page. You can edit the content of this page at `pages/index.js`. Let’s see if we can't enhance this welcome page with some Bento components.

## Adding a Bento Component

How about adding the `bento/accordion` to for a bit of extra functionality to the page. First we need to install it.

```bash
npm install @bentoproject/accordion
```

The accordion component defines multiple components that make up an accordion.  We'll need to import `BentoAccordion`, `BentoAccordionSection`, `BentoAccordionHeader`, `BentoAccordionContent`, and some CSS.

```jsx
import {
  BentoAccordion,
  BentoAccordionSection,
  BentoAccordionHeader,
  BentoAccordionContent,
} from "@bentoproject/accordion/react";
import "@bentoproject/accordion/styles.css";
```

Now we can use the Bento accordion component:

{% raw %}
```jsx
<BentoAccordion expandSingleSection animate style={{ width: "100%" }}>
  <BentoAccordionSection>
    <BentoAccordionHeader>
      <h2>Documentation &rarr;</h2>
    </BentoAccordionHeader>
    <BentoAccordionContent>
      <a href="https://nextjs.org/docs">
        <p>Find in-depth information about Next.js features and API.</p>
      </a>
    </BentoAccordionContent>
  </BentoAccordionSection>

  <BentoAccordionSection>
    <BentoAccordionHeader>
      <h2>Learn &rarr;</h2>
    </BentoAccordionHeader>
    <BentoAccordionContent>
      <a href="https://nextjs.org/learn">
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>
    </BentoAccordionContent>
  </BentoAccordionSection>

  <BentoAccordionSection>
    <BentoAccordionHeader>
      <h2>Examples &rarr;</h2>
    </BentoAccordionHeader>
    <BentoAccordionContent>
      <a href="https://github.com/vercel/next.js/tree/master/examples">
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </a>
    </BentoAccordionContent>
  </BentoAccordionSection>

  <BentoAccordionSection>
    <BentoAccordionHeader>
      <h2>Deploy &rarr;</h2>
    </BentoAccordionHeader>
    <BentoAccordionContent>
      <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
      </a>
    </BentoAccordionContent>
  </BentoAccordionSection>
</BentoAccordion>
```
{% endraw %}

For more details on how to customize the Bento accordion component with different attributes, checkout the [docs](https://bentojs.dev/en/components/bento-accordion/).

## Controlling Bento Components with Ref

Most Bento Components allow developers to control the component's behavior and state through their API. You can access the component API using a [React Ref](https://reactjs.org/docs/refs-and-the-dom.html). Let's move the Accordion into a Sidebar component that we'll make a button to open and close the sidebar using a ref. First we need to install the Bento sidebar component:

```bash
npm install @bentoproject/sidebar
```

...and import the component into the file.

```jsx
import { BentoSidebar } from "@bentoproject/sidebar/react";
import "@bentoproject/sidebar/styles.css";
```

Unlike the Accordion this one only requires one component to be imported.


{% raw %}
```jsx
<BentoSidebar>
  <BentoAccordion expandSingleSection animate style={{ width: "100%" }}>
    ...
  </BentoAccordion>
</BentoSidebar>
```
{% endraw %}

#### Using Bento APIs via refs

You'll need to pass a ref to the sidebar using the `ref` prop. From there you'll have access to the API to `open`, `close`, or `toggle` the sidebar.

{% raw %}
```jsx
import { useRef } from "react";
...

export default function Home() {
  const sidebarRef = useRef();

  return (
    <div className={styles.container}>
      ...
      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.js</code>
        <button onClick={() => sidebarRef.current.open()}>
        Open Doc Sidebar
        </button>
      </p>
      ...
      <main className={styles.main}>
        ...
        <BentoSidebar ref={sidebarRef} style={{ width: "350px" }}>
          <button onClick={() => sidebarRef.current.close()}>X</button>
          <BentoAccordion expandSingleSection animate style={{ width: "100%" }}>
            ...
          </BentoAccordion>
        </BentoSidebar>
      </main>
      ...
    </div>
  );
}
```
{% endraw %}

And of course if you need a bit more customizability checkout the [docs for the Sidebar component](https://bentojs.dev/en/components/bento-sidebar/).

# Summary

In this guide we’ve created a new Next.js app from scratch using Bento components. If you want to learn more about Bento, check out the full list of our components. You can find a working copy of this example on Github: https://github.com/dethstrobe/BentoNextJSExample.
