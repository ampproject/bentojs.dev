---
id: bento-mathml
title: Bento MathML
permalink: "/ar/components/bento-mathml/"
short_title: MathML
layout: layouts/component.njk
description: يعرض معادلة MathML في iframe.
---

# Bento MathML

{% heroexample 'bento-mathml' %}

يعرض معادلة MathML في iframe.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>استخدم bento-mathml كمكون ويب أو مكون React وظيفي:</p>   <a class="bd-button" href="#web-component">↓ مكون الويب</a>   <a class="bd-button" href="#preact%2Freact-component">↓ مكون React / Preact</a>
</div>

## مكون الويب

يجب تضمين كل مكتبة صفحات الأنماط المتتالية (CSS) المطلوبة لمكون Bento لضمان التحميل المناسب وقبل إضافة أنماط مخصصة. أو استخدم أنماط ما قبل الترقية منخفضة المستوى المتوفرة بشكل ضمني. راجع [التخطيط والنمط](#layout-and-style).

### استيراد عبر npm

```bash
npm install @bentoproject/mathml
```

```javascript
import {defineElement as defineBentoMathml} from '@bentoproject/mathml';
defineBentoMathml();
```

### تضمين عبر `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-mathml-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-mathml-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-mathml-1.0.css" crossorigin="anonymous">
```

### مثال

{% example %}

```html
<!DOCTYPE html>
<html>
  <head>
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/bento.mjs"
    ></script>
    <script nomodule src="https://cdn.ampproject.org/bento.js"></script>
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-mathml-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-mathml-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-mathml-1.0.css"
    />
  </head>
  <body>
    <h2>The Quadratic Formula</h2>
    <bento-mathml
      style="height: 40px;"
      data-formula="\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]"
    ></bento-mathml>

    <h2>Inline formula</h2>
    <p>
      This is an example of a formula,
      <bento-mathml
        style="height: 40px; width: 147px"
        inline
        data-formula="\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]"
      ></bento-mathml>
      placed inline in the middle of a block of text.
    </p>
  </body>
</html>
```

{% endexample %}

### المخطط والنمط

يحتوي كل مكون Bento على مكتبة CSS صغيرة يجب عليك تضمينها لضمان التحميل الصحيح بدون [تغييرات المحتوى](https://web.dev/cls/). ونظرًا للخصوصية المستندة على الأمر، يجب عليك التأكد يدويًا من تضمين صفحات الأنماط قبل أي أنماط مخصصة.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-mathml-1.0.css"
/>
```

بدلاً من ذلك، يمكنك أيضًا توفير أنماط ما قبل الترقية منخفضة المستوى بشكل مضمّن:

```html
<style>
  bento-mathml {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

### السمات

#### `data-formula` (مطلوبة)

تحدد المعادلة المراد عرضها.

#### `inline` (اختيارية)

في حالة تحديدها، يتم عرض المكون داخليًا (`inline-block` في مكتبة CSS).

#### title (اختياري)

حدد سمة `title` للمكون المطلوب نشره إلى عنصر `<iframe>` الأساسي. والقيمة الافتراضية هي `"MathML formula"`.

### التصميم

يمكنك استخدام محدِّد العناصر `bento-mathml` لتصميم الأكورديون بحرية.

---

## مكون Preact/React

### استيراد عبر npm

```bash
npm install @bentoproject/mathml
```

```javascript
import React from 'react';
import {BentoMathml} from '@bentoproject/mathml/react';
import '@bentoproject/mathml/styles.css';

function App() {
  return (
    <>
      <h2>The Quadratic Formula</h2>
      <BentoMathml
        style={% raw %}{{height: 40}}{% endraw %}
        formula="\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]"
      ></BentoMathml>

      <h2>Inline formula</h2>
      <p>
        This is an example of a formula,{' '}
        <BentoMathml
          style={% raw %}{{height: 40, width: 147}}{% endraw %}
          inline
          formula="\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]"
        ></BentoMathml>
        , placed inline in the middle of a block of text. This shows how the formula will fit inside a block of text and can be styled with CSS.
      </p>
    </>
  );
}
```

### المخطط والنمط

#### نوع الحاوية

يحتوي المكون `BentoMathml` على نوع حجم مخطط محدد. ولضمان عرض المكون بشكل صحيح، تأكد من تطبيق حجم على المكون وعناصره الفرعية المباشرة من خلال مخطط CSS المطلوب (مثل مخطط محدد بـ `height` أو `width` أو `aspect-ratio`، أو خصائص أخرى):

```jsx
<BentoMathml style={% raw %}{{width: 300, height: 100}}{% endraw %}>...</BentoMathml>
```

أو عبر `className`:

```jsx
<BentoMathml className="custom-styles">...</BentoMathml>
```

```css
.custom-styles {
  height: 40px;
  width: 147px;
}
```

### الخصائص

#### `formula` (مطلوبة)

تحدد المعادلة المراد عرضها.

#### `inline` (اختيارية)

في حالة تحديدها، يتم عرض المكون داخليًا (`inline-block` في مكتبة CSS).

#### title (اختياري)

حدد سمة `title` للمكون المطلوب نشره إلى عنصر `<iframe>` الأساسي. والقيمة الافتراضية هي `"MathML formula"`.
