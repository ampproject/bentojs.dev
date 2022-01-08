---
id: bento-wordpress-embed
title: تضمين WordPress في Bento
permalink: "/ar/components/bento-wordpress-embed/"
short_title: WordPress مضمن
layout: layouts/component.njk
description: إطار  iframe يعرض <a href="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/">مقتطفًا</a> من منشور أو صفحة WordPress.
---

# تضمين WordPress في Bento

{% heroexample 'bento-wordpress-embed' %}

إطار iframe يعرض [مقتطفًا](https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/) من منشور أو صفحة WordPress.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>استخدم bento-wordpress-embed كمكون ويب أو مكون React وظيفي:</p>   <a class="bd-button" href="#web-component">↓ مكون ويب</a>   <a class="bd-button" href="#preact%2Freact-component">↓ مكون React / Preact</a>
</div>

## مكون الويب

يجب تضمين كل مكتبة صفحات الأنماط المتتالية (CSS) المطلوبة لمكون Bento لضمان التحميل المناسب وقبل إضافة أنماط مخصصة. أو استخدم أنماط ما قبل الترقية منخفضة المستوى المتوفرة بشكل ضمني. راجع [التخطيط والنمط](#layout-and-style).

### استيراد عبر npm

```bash
npm install @bentoproject/wordpress-embed
```

```javascript
import {defineElement as defineBentoWordpressEmbed} from '@bentoproject/wordpress-embed';
defineBentoWordpressEmbed();
```

### تضمين عبر `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css"
    />
  </head>
  <body>
    <bento-wordpress-embed
      id="my-embed"
      style="width: 300px; height: 400px"
      data-url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"
    ></bento-wordpress-embed>
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
  href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css"
/>
```

بدلاً من ذلك، يمكنك أيضًا توفير أنماط ما قبل الترقية منخفضة المستوى بشكل مضمّن:

```html
<style>
  bento-wordpress-embed {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### نوع الحاوية

يحتوي المكون `bento-wordpress-embed` على نوع حجم مخطط محدد. ولضمان عرض المكون بشكل صحيح، تأكد من تطبيق حجم على المكون وفروعه المباشرة (الشرائح) من خلال مخطط صفحات الأنماط المتتالية المطلوب (مثل مخطط محدد بـ `height` أو `width` أو `aspect-ratio`، أو خصائص أخرى):

```css
bento-wordpress-embed {
  height: 100px;
  width: 100%;
}
```

### السمات

#### عنوان url للبيانات (مطلوب)

عنوان URL للمنشور المراد تضمينه. من الناحية البرمجية يؤدي تغيير قيمة السمة إلى تحديد المحتوى المضمن تلقائيًا.

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
      src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css"
    />
  </head>
  <body>
    <bento-wordpress-embed
      id="my-embed"
      style="width: 300px; height: 400px"
      data-url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"
    ></bento-wordpress-embed>
    <div class="buttons" style="margin-top: 8px">
      <button id="switch-button">Switch embed</button>
    </div>

    <script>
      (async () => {
        const embed = document.querySelector('#my-embed');
        await customElements.whenDefined('bento-wordpress-embed');

        // set up button actions
        document.querySelector('#switch-button').onclick = () =>
          embed.setAttribute(
            'data-url',
            'https://make.wordpress.org/core/2021/09/09/core-editor-improvement-cascading-impact-of-improvements-to-featured-images/'
          );
      })();
    </script>
  </body>
</html>
```

{% endexample %}

---

## مكون Preact/React

### استيراد عبر npm

```bash
npm install @bentoproject/wordpress-embed
```

```jsx
import React from 'react';
import {BentoWordPressEmbed} from '@bentoproject/wordpress-embed/react';

function App() {
  return (
    <BentoWordPressEmbed url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"></BentoWordPressEmbed>
  );
}
```

### المخطط والنمط

#### نوع الحاوية

يحتوي المكون `BentoWordPressEmbed` على نوع حجم مخطط محدد. ولضمان عرض المكون بشكل صحيح، تأكد من تطبيق حجم على المكون وفروعه المباشرة (الشرائح) من خلال مخطط صفحات الأنماط المتتالية المطلوب (مثل مخطط محدد بـ `height` أو `width` أو `aspect-ratio`، أو خصائص أخرى):

```jsx
<BentoWordPressEmbed
  style={% raw %}{{width: '100%', height: '100px'}}{% endraw %}
  url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"
></BentoWordPressEmbed>
```

أو عبر `className`:

```jsx
<BentoWordPressEmbed
  className="custom-styles"
  url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"
></BentoWordPressEmbed>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}
```

### الخصائص

#### عنوان url (مطلوب)

عنوان URL للنشر المطلوب تضمينه.
