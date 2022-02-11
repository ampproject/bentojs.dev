---
id: bento-soundcloud
title: المكون Bento Soundcloud
permalink: "/ar/components/bento-soundcloud/"
short_title: Soundcloud
layout: layouts/component.njk
description: يقوم بتضمين مقطع من <a href="https://soundcloud.com">Soundcloud</a>
---

# المكون Bento Soundcloud

{% heroexample 'bento-soundcloud' %}

يقوم بتضمين مقطع من [Soundcloud](https://soundcloud.com).

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>استخدم bento-soundcloud كمكون ويب أو مكون React وظيفي:</p>   <a class="bd-button" href="#web-component">↓ مكون ويب</a>   <a class="bd-button" href="#preact%2Freact-component">↓ مكون React / Preact</a>
</div>

## مكون الويب

يجب تضمين كل مكتبة صفحات الأنماط المتتالية (CSS) المطلوبة لمكون Bento لضمان التحميل المناسب وقبل إضافة أنماط مخصصة. أو استخدم أنماط ما قبل الترقية منخفضة المستوى المتوفرة بشكل ضمني. راجع [التخطيط والنمط](#layout-and-style).

### استيراد عبر npm

```bash
npm install @bentoproject/soundcloud
```

```javascript
import {defineElement as defineBentoSoundcloud} from '@bentoproject/soundcloud';
defineBentoSoundcloud();
```

### تضمين عبر `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css"
    />
    <style>
      bento-soundcloud {
        width: 300px;
        height: 300px;
      }
    </style>
  </head>
  <body>
    <bento-soundcloud
      id="my-track"
      data-trackid="89299804"
      data-visual="true"
    ></bento-soundcloud>
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
  href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css"
/>
```

بدلاً من ذلك، يمكنك أيضًا توفير أنماط ما قبل الترقية منخفضة المستوى بشكل مضمّن:

```html
<style>
  bento-soundcloud {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### نوع الحاوية

يحتوي المكون `bento-soundcloud` على نوع حجم مخطط محدد. ولضمان عرض المكون بشكل صحيح، تأكد من تطبيق حجم على المكون وفروعه المباشرة (الشرائح) من خلال مخطط صفحات الأنماط المتتالية المطلوب (مثل مخطط محدد بـ `height` أو `width` أو `aspect-ratio`، أو خصائص أخرى):

```css
bento-soundcloud {
  height: 100px;
  width: 100%;
}
```

### السمات

من الناحية البرمجية يؤدي تغيير السمات إلى تحديث المشغل تلقائيًا.

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
      src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css"
    />
    <style>
      bento-soundcloud {
        width: 300px;
        height: 300px;
      }
    </style>
  </head>
  <body>
    <bento-soundcloud
      id="my-track"
      data-trackid="89299804"
      data-visual="true"
    ></bento-soundcloud>
    <div class="buttons" style="margin-top: 8px">
      <button id="change-track">Change track</button>
    </div>

    <script>
      (async () => {
        const soundcloud = document.querySelector('#my-track');
        await customElements.whenDefined('bento-soundcloud');

        // set up button actions
        document.querySelector('#change-track').onclick = () => {
          soundcloud.setAttribute('data-trackid', '243169232');
          soundcloud.setAttribute('data-color', 'ff5500');
          soundcloud.removeAttribute('data-visual');
        };
      })();
    </script>
  </body>
</html>
```

{% endexample %}

##### data-track

هذه السمة مطلوبة إذا لم يتم تحديد <code>data-playlistid</code>.<br> قيمة هذه السمة هي معرف تتبع، وهي عدد صحيح.

##### data-playlistid

هذه السمة مطلوبة إذا لم يتم تحديد <code>data-trackid</code>. قيمة هذه السمة هي معرف قائمة تشغيل، وهي عدد صحيح.

##### data-secret-token (اختياري)

الرمز المميز السري للتتبع، إذا كان خاصًا.

##### data-visual (اختياري)

في حالة التعيين إلى <code>true</code>، يعرض الوضع "مرئي" كامل العرض؛ بخلاف ذلك، يتم عرضه كوضع "كلاسيكي". القيمة الافتراضية هي <code>false</code>.

##### data-color (اختياري)

هذه السمة هي تجاوز لون مخصص للوضع "كلاسيكي". تم تجاهل السمة بالوضع "مرئي". حدد قيمة لون ست عشرية بدون البادئة # (على سبيل المثال، <code>data color="e540ff"</code>).

---

## مكون Preact/React

### استيراد عبر npm

```bash
npm install @bentoproject/soundcloud
```

```javascript
import React from 'react';
import {BentoSoundcloud} from '@bentoproject/soundcloud/react';
import '@bentoproject/soundcloud/styles.css';

function App() {
  return <BentoSoundcloud trackId="243169232" visual={true}></BentoSoundcloud>;
}
```

### المخطط والنمط

#### نوع الحاوية

يحتوي المكون `BentoSoundcloud` على نوع حجم مخطط محدد. ولضمان عرض المكون بشكل صحيح، تأكد من تطبيق حجم على المكون وفروعه المباشرة (الشرائح) من خلال مخطط صفحات الأنماط المتتالية المطلوب (مثل مخطط محدد بـ `height` أو `width` أو `aspect-ratio`، أو خصائص أخرى):

```jsx
<BentoSoundcloud
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  trackId="243169232"
  visual={true}
></BentoSoundcloud>
```

أو عبر `className`:

```jsx
<BentoSoundcloud
  className="custom-styles"
  trackId="243169232"
  visual={true}
></BentoSoundcloud>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}
```

### الخصائص

##### trackId

هذه السمة مطلوبة إذا لم يتم تحديد <code>data-playlistid</code>.<br> قيمة هذه السمة هي معرف تتبع، وهي عدد صحيح.

##### playlistId

هذه السمة مطلوبة إذا لم يتم تحديد <code>data-trackid</code>. قيمة هذه السمة هي معرف قائمة تشغيل، وهي عدد صحيح.

##### secretToken (اختياري)

الرمز المميز السري للتتبع، إذا كان خاصًا.

##### visual (اختياري)

في حالة التعيين إلى <code>true</code>، يعرض الوضع "مرئي" كامل العرض؛ بخلاف ذلك، يتم عرضه كوضع "كلاسيكي". القيمة الافتراضية هي <code>false</code>.

##### color (اختياري)

هذه السمة هي تجاوز لون مخصص للوضع "كلاسيكي". تم تجاهل السمة بالوضع "مرئي". حدد قيمة لون ست عشرية بدون البادئة # (على سبيل المثال، <code>data color="e540ff"</code>).
