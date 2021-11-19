---
layout: layouts/guide.njk
tags: guides
title: How to create WordPress Gutenberg blocks with Bento
description: Why Bento components are a fantastic fit for creating Gutenberg blocks in WordPress and how it works.
---

In this guide, we’re going to explain why Bento components are a fantastic fit for creating Gutenberg blocks and how it works.

[Gutenberg](https://wordpress.org/gutenberg/) is the React-based block editor that powers [WordPress](https://wordpress.org). In addition to the core blocks available natively in Gutenberg, developers can create custom blocks for use in the editor. Typically, with Gutenberg you have to implement the same functionality twice, first by creating a block’s Edit component in React and then by re-implementing the same look and feel without React for the frontend. This causes a lot of duplicate work and additional maintenance burden, and potentially even some disparity between the two versions.

This is where Bento comes into play.

Bento offers well-tested, cross-browser compatible and accessible web components (aka custom elements) that can be used on any website. They are highly performant and contribute to an excellent page experience. Bento components are not only available as custom elements, but also as React and Preact components with the same features and API. That makes them an ideal candidate for use in Gutenberg.

In this guide, you’ll learn how to create a Bento-powered Gutenberg block that uses the [Bento Carousel component](https://github.com/ampproject/amphtml/blob/main/extensions/amp-base-carousel/1.0/README.md). You may also skip this part and jump straight to the [GitHub repository](https://github.com/swissspidy/awesome-carousel) containing the final code.

## Building a Bento Gutenberg Block

For this guide, we’ll use <code>[@wordpress/create-block](https://www.npmjs.com/package/@wordpress/create-block)</code>, which is an officially supported way to create a WordPress plugin registering a custom block. It generates PHP, JS, CSS code, and everything else you need to start the project. You can think of it as the <code>[create-react-app](https://create-react-app.dev/docs/getting-started)</code> for Gutenberg blocks.

Let’s get started by creating a new plugin, called `awesome-carousel`. To do this, run the following command within your `wp-content/plugins` folder:

```bash
$ npx @wordpress/create-block awesome-carousel
$ cd awesome-carousel
$ npm start
```

After that, you can then go to your WordPress admin and activate the newly created `awesome-carousel` plugin right away!

The result is a simple block that can already be inserted in the block editor:

{% image "./assets/img/guides/using-bento-components-for-gutenberg-block-development/image-1.png", "Block Editor" %}

## Creating the Edit component

Next, let’s install the `@bentoproject/base-carousel` package from npm. Like all Bento components, this Base Carousel one is available from npm and contains the web component, any required CSS file(s), as well as the Preact and React versions.

We’re only interested in the React version and the CSS for now, so run the following command in the block directory:

```bash
$ npm install --save @bentoproject/base-carousel
```

After that, the component can be imported in `src/edit.js`, which holds the block’s Edit component.

```js
import {BentoBaseCarousel} from '@bentoproject/base-carousel/react';
import '@bentoproject/base-carousel/styles.css';
```

**Note:** See that `styles.css` import? Thanks to `@wordpress/create-block`, this CSS file will automatically be loaded in the editor for us.

Next, let’s render the `BentoBaseCarousel` React component and interact with it. For the purposes of this guide, we’re going to display a set of predefined images and render custom buttons to go to the next/previous slide in the carousel.

### Rendering the Carousel

Rendering the Base Carousel component works like any other React component. [All the attributes](https://github.com/ampproject/amphtml/blob/main/extensions/amp-base-carousel/1.0/README.md#attributes) supported by it can be passed as props.

Let’s update our Edit component accordingly:

```jsx
export default function Edit() {
  return (
    <div {...useBlockProps()}>
      <div className="awesome-carousel-wrapper">
        <BentoBaseCarousel autoAdvance={false} loop={false} snap={true}>
          <img
            src="https://source.unsplash.com/random/1200x800?1"
            width={1200}
            height={800}
            alt=""
          />
          <img
            src="https://source.unsplash.com/random/1200x800?2"
            width={1200}
            height={800}
            alt=""
          />
          <img
            src="https://source.unsplash.com/random/1200x800?3"
            width={1200}
            height={800}
            alt=""
          />
          <img
            src="https://source.unsplash.com/random/1200x800?4"
            width={1200}
            height={800}
            alt=""
          />
        </BentoBaseCarousel>
      </div>
    </div>
  );
}
```

We’re also going to add the following CSS to the `src/style.scss` file to set the carousel’s dimensions. It will automatically be applied on the front of the site as well as in the editor, which is super convenient!

```css
.wp-block-create-block-awesome-carousel .awesome-carousel-wrapper,
.wp-block-create-block-awesome-carousel .awesome-carousel-wrapper > * {
  aspect-ratio: 1200/800;
}
```

**Note:** Only use class names in the CSS selectors. The `bento-base-carousel` tag name will only be used in the frontend component as part of the custom element (see below), whereas in the React editor context a `div` will be used instead.

The result is a fully functional carousel in the block editor, without any style interference from other components or plugins:

{% image "./assets/img/guides/using-bento-components-for-gutenberg-block-development/image-2.png", "Carousel inside Gutenberg" %}

Of course ideally the images would be editable by the user and stored as attributes. You can learn more about that in the [Block Editor handbook](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/introducing-attributes-and-editable-fields/).

### Adding Interactivity

Bento components are highly interactive [through their API](https://bentojs.dev/en/components/bento-carousel/#interactivity-and-api-usage-1). The `BentoBaseCarousel` component API is accessible by passing a ref:

```jsx
import {createRef} from '@wordpress/element';

// …

function Edit() {
  const ref = createRef();
  return <BentoBaseCarousel ref={ref}>{/* … */}</BentoBaseCarousel>;
}
```

Then, we can render two custom buttons to handle previous/next navigation:

```jsx
import { Button } from '@wordpress/components';

// …

const goToNextSlide = () => ref.current.next();
const goToPreviousSlide = () => ref.current.prev();

// …
<Button isSecondary onClick={goToPreviousSlide}>{'Previous'}</Button>
<Button isSecondary onClick={goToNextSlide}>{'Next'}</Button>
```

That’s it! The result will look like this:

{% image "./assets/img/guides/using-bento-components-for-gutenberg-block-development/image-3.png", "Carousel with controls" %}

With the Edit component handled, let’s change our focus to the blocks’ `save` function, which is responsible for generating the frontend output. This is where we’re going to use the `<bento-base-carousel>` web component.

## Creating the Frontend Component

For the frontend, we’re going to implement a similar experience to what we built in the Edit component: a simple carousel with two custom buttons to interact with it.

### Rendering the Carousel

The `save` function itself is pretty simple and is only responsible for printing the web component markup. It is defined in `src/save.js`.

```jsx
export default function save() {
  // …

  return (
    <div {...useBlockProps.save()}>
      <div className="awesome-carousel-wrapper">
        <bento-base-carousel auto-advance="false" loop="false" snap="true">
          <img
            src="https://source.unsplash.com/random/1200x800?1"
            width={1200}
            height={800}
            alt=""
          />
          <img
            src="https://source.unsplash.com/random/1200x800?2"
            width={1200}
            height={800}
            alt=""
          />
          <img
            src="https://source.unsplash.com/random/1200x800?3"
            width={1200}
            height={800}
            alt=""
          />
          <img
            src="https://source.unsplash.com/random/1200x800?4"
            width={1200}
            height={800}
            alt=""
          />
        </bento-base-carousel>
      </div>
      <div className="awesome-carousel-buttons">
        <button className="awesome-carousel-prev">{'Previous'}</button>
        <button className="awesome-carousel-next">{'Next'}</button>
      </div>
    </div>
  );
}
```

For the web component to be defined and styled we also need to load the Bento JavaScript and CSS from the CDN. To do that, we need to switch to PHP for registering those assets. Let’s add the following code to `awesome-carousel.php`:

```js
/**
 * Registers the scripts and styles for Bento components.
 *
 * @return void
 */
function create_block_awesome_carousel_register_assets() {
        wp_register_script( 'bento-runtime', 'https://cdn.ampproject.org/bento.js', array(), false, true );
        wp_register_script( 'bento-base-carousel', 'https://cdn.ampproject.org/v0/bento-base-carousel-1.0.js', array( 'bento-runtime' ), false, true );
        wp_register_style( 'bento-base-carousel', 'https://cdn.ampproject.org/v0/bento-base-carousel-1.0.css', array() );

        wp_register_script( 'awesome-carousel-view', plugin_dir_url( __FILE__ ) . 'build/view.js', array( 'bento-base-carousel' ) );
}

add_action( 'init', 'create_block_awesome_carousel_register_assets' );
```

As you can see, this also registers a custom `awesome-carousel-view` script, which is where we can put in any frontend-only interactivity later.

It’s worth noting that this only _registers_ the JS & CSS in WordPress, but does not _enqueue_ (load) it. We only want to do that when the block is actually rendered on the frontend to avoid loading unnecessary scripts. This can be achieved using the block’s render callback, which we can configure by updating `create_block_awesome_carousel_block_init` in `awesome-carousel.php` as follows:

```js
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_awesome_carousel_block_init() {
        register_block_type(
                __DIR__,
                array(
                        'render_callback' => 'create_block_awesome_carousel_render_block',
                )
        );
}

add_action( 'init', 'create_block_awesome_carousel_block_init' );

/**
 * Render callback for the carousel block.
 *
 * @param array  $attributes Block attributes.
 * @param string $content Block content.
 *
 * @return string Block content.
 */
function create_block_awesome_carousel_render_block( $attributes, $content ) {
        if ( ! is_admin() ) {
                wp_enqueue_script( 'awesome-carousel-view' );
                wp_enqueue_style( 'bento-base-carousel' );
        }

        return $content;
}
```

**Note:** [this will get a bit easier](https://github.com/WordPress/gutenberg/pull/32977) in the future when support for a dedicated `viewScript` is added, removing the need for a custom render callback.

Now, the only remaining task is to make those previous/next buttons work on the frontend as well.

### Adding Interactivity

The <code>[bento-base-carousel component API](https://github.com/ampproject/amphtml/blob/main/extensions/amp-base-carousel/1.0/README.md#interactivity-and-api-usage)</code> is accessible in a similar way to the React version and enables us to add interactivity to these buttons.

To use it, we first need to wait for the custom element to be defined:

```js
await customElements.whenDefined('bento-base-carousel');
```

Then we can access the API like this:

```js
const carousel = document.querySelector('bento-base-carousel');
const api = await carousel.getApi();
```

Then we can use it to listen to clicks on the custom buttons to control the carousel ourselves. The final code looks as follows and can be put into a new `src/view.js` file:

```js
(async () => {
  await window.customElements.whenDefined('bento-base-carousel');

  const carousels = document.querySelectorAll(
    '.wp-block-create-block-awesome-carousel'
  );

  for (const carousel of carousels) {
    const bentoComponent = carousel.querySelector('bento-base-carousel');
    const api = await bentoComponent.getApi();

    carousel
      .querySelector('.awesome-carousel-prev')
      .addEventListener('click', () => {
        api.prev();
      });
    carousel
      .querySelector('.awesome-carousel-next')
      .addEventListener('click', () => {
        api.next();
      });
  }
})();
```

Now, for our setup to recognize this new `src/view.js` file, we need to slightly update the `package.json` configuration file, specifically the `scripts` section:

```json
{
  "scripts": {
    "build": "wp-scripts build src/index.js src/view.js",
    "start": "wp-scripts start src/index.js src/view.js",
    "packages-update": "wp-scripts packages-update"
  }
}
```

After that, we can run `npm run start` again to build our script.

That’s it! The result will look like this:

{% image "./assets/img/guides/using-bento-components-for-gutenberg-block-development/image-4.png", "Finished carousel" %}

## Summary

In this guide we have now successfully created a Gutenberg block using the Bento Carousel component. The block uses the component’s React version in the editor and the custom element on the frontend, and custom buttons have been added to show the Bento component’s API in action.

If you’d like to see all the pieces put together, [you can find the complete code on GitHub](https://github.com/swissspidy/awesome-carousel).

**Tip:** There is also a second, [more advanced version](https://github.com/swissspidy/gutenberg-bento) of this which shows how Bento-powered Gutenberg blocks could be used on AMP-first WordPress sites, and how one could self-host the Bento JS/CSS in favor of using the CDN.
