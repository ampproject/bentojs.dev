**Changelog**

- Changed headline hierarchy. The smallest headline is now an h5 instead of a bold body text.
- Restructured the "Props"-Section by using tables.
- Added a comment, where to place the header demo component.
- Added a comment, where to place the anchor-link component.
- Added a seperator line between WebComponents and React section.

**Gerneral guidelines**

- Sentences like "See below for example." or "The examples below demonstrate use of the `<bento-accordion>` web component." are not necessary. It is obvious. You also do not need to explain, what the user will sees. Point out if you have added extras to the example that have not yet been explained.
- If you want to use bulletlists, the list should have at least 3 entries. Otherwise just use a new paragraph for the information.
- Avoid nested bulletlists.
- Use manual breaks carefully. Do not use blank lines to separate sections of body text. A paragraph is enough. The system automatically sets a space there.
- Reduce redundancies. For example: "Install via npm" in the body text, while the heading above it is "Example: Import via npm".
- Each heading should have at least a short body text or content.
- The document hierarchy should contain maximum of 5 hierarchy (h1-h5) levels.
- Thank you very much.

# Bento Component

A brief description of the component and why you should use it.

[comment]: # 'Add hero example here'

Explain the general usage of the component.

- If you want to use bulletlists, the list should have at least 3 entries. Otherwise please do not use lists.
- Please avoid nested bulletlists as far as possible.
- Please be careful with manual breaks.

[comment]: # 'Add anchor link-component here'

## Web Component

Example text: You must include each Bento component's required CSS library to guarantee proper loading and before adding custom styles. Or use the light-weight pre-upgrade styles available inline. See [Layout and style](#layout-and-style).

#### Example: Import via npm

{% example %}

```bash
npm install @bentoproject/bento-component
```

```javascript
import '@ampproject/bento-component';
```

{% endexample %}

#### Example: Include via `<script>`

Example text: The example below contains an `bento-accordion` with three sections. The `expanded` attribute on the third section expands it on page load.

{% example %}

```html
Example
<head>
  <script async src="https://cdn.ampproject.org/example.js"></script>
</head>
```

{% endexample %}

### Interactivity and API usage

Example text: Bento enabled components in standalone use are highly interactive through their API. The `bento-accordion` component API is accessible by including the following script tag in your document:

```javascript
Example;
await customElements.whenDefined('bento-component');
const api = await accordion.getApi();
```

#### Actions

Explain what are the actions for?

##### toggle()

Example text: The `toggle` action switches the `expanded` and `collapsed` states of `bento-accordion` sections. When called with no arguments, it toggles all sections of the accordion. To specify a specific section, add the `section` argument and use its corresponding `id` as the value.

```html
Example code
<bento-component id="myBento">
  <section id="section1">
    <h2>Section 1</h2>
    <p>Bunch of awesome content</p>
  </section>
  <section>
    <h2>Section 2</h2>
    <div>Bunch of awesome content</div>
  </section>
  <section>
    <h2>Section 3</h2>
    <div>Bunch of awesome content</div>
  </section>
</bento-component>
```

#### Events

Example text: The `bento-accordion` API allows you to register and respond to the following events.

##### collapse

Example text: This event is triggered when an accordion section is collapsed and is dispatched from the collapsed section.
In the example below, `section 1` listens for the `expand` event and expands `section 2` when it is expanded. `section 2` listens for the `collapse` event and collapses `section 1` when it is collapsed.

```html
Example code
<bento-component id="myBento">
  <section id="section1">
    <h2>Section 1</h2>
    <p>Bunch of awesome content</p>
  </section>
  <section>
    <h2>Section 2</h2>
    <div>Bunch of awesome content</div>
  </section>
  <section>
    <h2>Section 3</h2>
    <div>Bunch of awesome content</div>
  </section>
</bento-component>
```

#### Layout and style

Example text: Each Bento component has a small CSS library you must include to guarantee proper loading without [content shifts](https://web.dev/cls/). Because of order-based specificity, you must manually ensure that stylesheets are included before any custom styles.

```html
Example
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/amp-accordion-1.0.css"
/>
```

Alternatively, you may also make the light-weight pre-upgrade styles available inline:

```html
Example code
<bento-component id="myBento">
  <section id="section1">
    <h2>Section 1</h2>
    <p>Bunch of awesome content</p>
  </section>
  <section>
    <h2>Section 2</h2>
    <div>Bunch of awesome content</div>
  </section>
  <section>
    <h2>Section 3</h2>
    <div>Bunch of awesome content</div>
  </section>
</bento-component>
```

### Attributes

Short text about attributes.

#### animate

Example text: Include the `animate` attribute in `<bento-accordion>` to add a "roll down" animation when the content is expanded and "roll up" animation when collapsed. This attribute can be configured to based on a [media query](./../../../docs/spec/amp-html-responsive-attributes.md).

{% example %}

```html
<bento-accordion animate>
  <section>
    <h2>Section 1</h2>
    <p>Content in section 1.</p>
  </section>
  <section>
    <h2>Section 2</h2>
    <div>Content in section 2.</div>
  </section>
  <section>
    <h2>Section 3</h2>
    <div>Content in section 2.</div>
  </section>
</bento-accordion>
```

{% endexample %}

---

## Preact/React Component

The examples below demonstrates use of the `<BentoAccordion>` as a functional component usable with the Preact or React libraries.

#### Example: Import via npm

{% example %}

```bash
Example
npm install @bentoproject/bento-accordion
```

```html
Example code
<bento-component id="myBento">
  <section id="section1">
    <h2>Section 1</h2>
    <p>Bunch of awesome content</p>
  </section>
  <section>
    <h2>Section 2</h2>
    <div>Bunch of awesome content</div>
  </section>
  <section>
    <h2>Section 3</h2>
    <div>Bunch of awesome content</div>
  </section>
</bento-component>
```

{% endexample %}

#### Interactivity and API usage

Example text: Bento components are highly interactive through their API. The `BentoAccordion` component API is accessible by passing a `ref`:

```html
Example code
<bento-component id="myBento">
  <section id="section1">
    <h2>Section 1</h2>
    <p>Bunch of awesome content</p>
  </section>
  <section>
    <h2>Section 2</h2>
    <div>Bunch of awesome content</div>
  </section>
  <section>
    <h2>Section 3</h2>
    <div>Bunch of awesome content</div>
  </section>
</bento-component>
```

#### Actions

Example text: The `BentoAccordion` API allows you to perform the following actions:

##### toggle()

Example text: The `toggle` action switches the `expanded` and `collapsed` states of
`bento-accordion` sections. When called with no arguments, it toggles all sections
of the accordion. To specify a specific section, add the `section` argument and
use its corresponding `id` as the value.

```javascript
Example;
ref.current.toggle();
ref.current.toggle('section1');
```

#### Events

Example text: The Bento Accordion API allows you to respond to the following events:

##### onCollapse

Example text: This event is triggered on a section when an accordion section is collapsed and is dispatched from the collapsed section.
In the example below, `section 1` listens for the `expand` event and expands `section 2` when it is expanded. `section 2` listens for the `collapse` event and collapses `section 1` when it is collapsed.

```html
Example code
<bento-component id="myBento">
  <section id="section1">
    <h2>Section 1</h2>
    <p>Bunch of awesome content</p>
  </section>
  <section>
    <h2>Section 2</h2>
    <div>Bunch of awesome content</div>
  </section>
  <section>
    <h2>Section 3</h2>
    <div>Bunch of awesome content</div>
  </section>
</bento-component>
```

### Layout and style

Example text about Layout and Style.

##### Container type

Example text: The `BentoAccordion` component has a defined layout size type. To ensure the component renders correctly, be sure to apply a size to the component and its immediate children via a desired CSS layout (such as one defined with `height`, `width`, `aspect-ratio`, or other such properties). These can be applied inline:

```jsx
<BentoAccordion style={% raw %}{{width: '300px', height: '100px'}}{% endraw %}>
  ...
</BentoAccordion>
```

Or via `className`:

```jsx
<BentoAccordion className="custom-styles">...</BentoAccordion>
```

```css
.custom-styles {
  background-color: red;
}
```

### Props

Text about Props.

#### BentoAccordion

| Property            | Description                                                                                            | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| animate             | If true, then uses "roll-down" / "roll-up" animation during the expansion and collapse of each section | `false` |
| expandSingleSection | If true, then expanding 1 section will automatically collapse all other sections.                      | `false` |

#### BentoAccordionSection

| Property            | Description                                                                                                                                                          | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| animate             | If true, then uses "roll-down" / "roll-up" animation during the expansion and collapse the section                                                                   | `false` |
| expanded            | If true, expands the section.                                                                                                                                        | `false` |
| onExpandStateChange | Callback to listen for expand state changes. Takes a boolean flag as parameter indicating whether the section was just expanded (`false` indicates it was collapsed) | `false` |

#### BentoAccordionHeader

Example text: This component supports the [common props](../../../docs/spec/bento-common-props.md) for React and Preact components. BentoAccordionHeader does not yet support any custom props

#### BentoAccordionContent

Example text: This component supports the [common props](../../../docs/spec/bento-common-props.md) for React and Preact components. BentoAccordionContent does not yet support any custom props
