---
id: bento-fit-text
title: ملاءمة النص في Bento
permalink: "/ar/components/bento-fit-text/"
short_title: ملاءمة النص
layout: layouts/component.njk
description: يحدد أفضل حجم للخط ليناسب المحتوى النصي المعروض بأكمله داخل المساحة المتوفرة.
---

# ملاءمة النص في Bento

{% heroexample 'bento-fit-text' %}

يحدد أفضل حجم للخط ليناسب المحتوى النصي العروض بأكمله داخل المساحة المتوفرة.

والمحتوى المتوقع لـ Bento Fit Text هو نص أو محتوى مدمج آخر، ولكن يمكن أن يحتوي أيضًا على محتوى غير مدمج.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>استخدم bento-fit-text كمكون ويب أو مكون React وظيفي:</p>   <a class="bd-button" href="#web-component">↓ مكون ويب</a>   <a class="bd-button" href="#preact%2Freact-component">↓ مكون React / Preact</a>
</div>

## مكون الويب

يجب تضمين كل مكتبة صفحات الأنماط المتتالية (CSS) المطلوبة لمكون Bento لضمان التحميل المناسب وقبل إضافة أنماط مخصصة. أو استخدم أنماط ما قبل الترقية منخفضة المستوى المتوفرة بشكل ضمني. راجع [التخطيط والنمط](#layout-and-style).

### استيراد عبر npm

```bash
npm install @bentoproject/fit-text
```

```javascript
import {defineElement as defineBentoFitText} from '@bentoproject/fit-text';
defineBentoFitText();
```

### تضمين عبر `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css"
    />
  </head>
  <body>
    <bento-fit-text id="my-fit-text">
      Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque
      inermis reprehendunt.
    </bento-fit-text>
  </body>
</html>
```

{% endexample %}

### المحتوى المتجاوز

إذا تجاوز محتوى `bento-fit-text` المساحة المتوفرة، حتى مع تحديد `min-font-size`، فسيتم قطع المحتوى المتجاوز وإخفاؤه. وتعرض المستعرضات المستندة إلى WebKit وBlink علامة الحذف للمحتوى المتجاوز.

في المثال التالي، حددنا `min-font-size` من `40`، وأضفنا المزيد من المحتوى داخل العنصر `bento-fit-text`. ويؤدي ذلك إلى تجاوز المحتوى لحجم الكتلة الأصلية الثابتة، لذا يتم قطع النص ليناسب الحاوية.

```html
<div style="width: 300px; height: 300px; background: #005af0; color: #fff">
  <bento-fit-text min-font-size="40">
    Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque
    inermis reprehendunt. Lorem ipsum dolor sit amet, has nisl nihil convenire
    et, vim at aeque inermis reprehendunt
  </bento-fit-text>
</div>
```

### المخطط والنمط

يحتوي كل مكون Bento على مكتبة CSS صغيرة يجب عليك تضمينها لضمان التحميل الصحيح بدون [تغييرات المحتوى](https://web.dev/cls/). ونظرًا للخصوصية المستندة على الأمر، يجب عليك التأكد يدويًا من تضمين صفحات الأنماط قبل أي أنماط مخصصة.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css"
/>
```

بدلاً من ذلك، يمكنك أيضًا توفير أنماط ما قبل الترقية منخفضة المستوى بشكل مضمّن:

```html
<style>
  bento-fit-text {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### نوع الحاوية

يحتوي المكون `bento-fit-tex` على نوع حجم مخطط محدد. ولضمان عرض المكون بشكل صحيح، تأكد من تطبيق حجم على المكون وعناصره الفرعية المباشرة (الشرائح) من خلال مخطط صفحات الأنماط المتتالية المطلوب (مثل مخطط محدد بـ `height` أو `width` أو `aspect-ratio`، أو خصائص أخرى):

```css
bento-fit-text {
  height: 100px;
  width: 100%;
}
```

### اعتبارات إمكانية الوصول للمحتوى المتجاوز

بينما يتم قطع المحتوى المتجاوز *بصريًا* ليناسب الحاوية، لاحظ أنه لا يزال موجودًا في المستند. لا تعتمد على سلوك التجاوز لمجرد "حشو" كميات كبيرة من المحتوى في صفحاتك - بينما قد يبدو ذلك مناسبًا من الناحية المرئية، إلا أنه قد يؤدي إلى أن تصبح الصفحة مطولة بشكل مفرط لمستخدمي التقنيات المساعدة (مثل قارئات الشاشة)، حيث إنه بالنسبة لهؤلاء المستخدمين فإن جميع المحتويات المقطوعة ستظل مقروءة/معلنة بالكامل.

### السمات

#### استعلامات الوسائط

يمكن تكوين سمات `<bento-fit-text>` لاستخدام خيارات مختلفة على أساس [استعلام الوسائط](./../../../docs/spec/amp-html-responsive-attributes.md).

#### `min-font-size`

يحدد الحد الأدنى لحجم الخط بوحدات البكسل كعدد صحيح يمكن لـ `bento-fit-text` استخدامه.

#### `max-font-size`

يحدد الحد الأقصى لحجم الخط بوحدات البكسل كعدد صحيح يمكن لـ `bento-fit-text` استخدامه.

#### مثال API

من الناحية البرمجية يؤدي تغيير قيمة السمة إلى تحديث العنصر تلقائيًا.

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
      src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css"
    />
  </head>
  <body>
    <bento-fit-text id="my-fit-text">
      Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque
      inermis reprehendunt.
    </bento-fit-text>
    <div class="buttons" style="margin-top: 8px">
      <button id="font-button">Change max-font-size</button>
      <button id="content-button">Change content</button>
    </div>

    <script>
      (async () => {
        const fitText = document.querySelector('#my-fit-text');
        await customElements.whenDefined('bento-fit-text');

        // set up button actions
        document.querySelector('#font-button').onclick = () =>
          fitText.setAttribute('max-font-size', '40');
        document.querySelector('#content-button').onclick = () =>
          (fitText.textContent = 'new content');
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
npm install @bentoproject/fit-text
```

```javascript
import React from 'react';
import {BentoFitText} from '@bentoproject/fit-text/react';
import '@bentoproject/fit-text/styles.css';

function App() {
  return (
    <BentoFitText>
      Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque
      inermis reprehendunt.
    </BentoFitText>
  );
}
```

### المخطط والنمط

#### نوع الحاوية

يحتوي المكون `BentoFitText` على نوع حجم مخطط محدد. ولضمان عرض المكون بشكل صحيح، تأكد من تطبيق حجم على المكون وفروعه المباشرة (الشرائح) من خلال مخطط صفحات الأنماط المتتالية المطلوب (مثل مخطط محدد بـ `height` أو `width` أو `aspect-ratio`، أو خصائص أخرى):

```jsx
<BentoFitText style={% raw %}{{width: 300, height: 100}}{% endraw %}>
  Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque inermis
  reprehendunt.
</BentoFitText>
```

أو عبر `className`:

```jsx
<BentoFitText className="custom-styles">
  Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque inermis
  reprehendunt.
</BentoFitText>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}
```

### الخصائص

#### `minFontSize`

يحدد الحد الأدنى لحجم الخط بوحدات البكسل كعدد صحيح يمكن لـ `bento-fit-text` استخدامه.

#### `maxFontSize`

يحدد الحد الأقصى لحجم الخط بوحدات البكسل كعدد صحيح يمكن لـ `bento-fit-text` استخدامه.
