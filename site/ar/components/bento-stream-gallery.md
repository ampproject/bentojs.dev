---
id: bento-stream-gallery
title: معرض Bento للبث
permalink: "/ar/components/bento-stream-gallery/"
short_title: معرض البث
layout: layouts/component.njk
description:  يُستخدم معرض Bento للبث في عرض عدة أجزاء متماثلة من المحتوى مرة واحدة بطول المحور الأفقي.
---

# معرض Bento للبث

{% heroexample 'bento-stream-gallery' %}

يُستخدم معرض Bento للبث في عرض عدة أجزاء متماثلة من المحتوى مرة واحدة بطول المحور الأفقي.

إنه صورة مخصوصة من عرض Bento الدوار الأساسي ويستخدم [ResizeObservers](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) لتعديل حجم وعدد الشرائح المعروضة تلقائيًا بالاستناد إلى عرض الحاوية. لتنفيذ المزيد من تجربة المستخدم المخصصة، استخدم [`<bento-base-carousel>`](../../amp-base-carousel/1.0/README.md).

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>استخدم bento-stream-gallery كمكون ويب أو مكون React وظيفي:</p>   <a class="bd-button" href="#web-component">↓ مكون ويب</a>   <a class="bd-button" href="#preact%2Freact-component">↓ مكون React / Preact</a>
</div>

## مكون الويب

يجب تضمين كل مكتبة صفحات الأنماط المتتالية (CSS) المطلوبة لمكون Bento لضمان التحميل المناسب وقبل إضافة أنماط مخصصة. أو استخدم أنماط ما قبل الترقية منخفضة المستوى المتوفرة بشكل ضمني. راجع [التخطيط والنمط](#layout-and-style).

### استيراد عبر npm

```bash
npm install @bentoproject/stream-gallery
```

```javascript
import {defineElement as defineBentoStreamGallery} from '@bentoproject/stream-gallery';
defineBentoStreamGallery();
```

### تضمين عبر `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css"
    />
  </head>
  <body>
    <bento-stream-gallery id="my-stream-gallery" style="height: 150px;" min-item-width="75" max-item-width="100">
      <div style="height: 100px; background: red;">A</div>
      <div style="height: 100px; background: green;">B</div>
      <div style="height: 100px; background: blue;">C</div>
      <div style="height: 100px; background: yellow;">D</div>
      <div style="height: 100px; background: purple;">E</div>
      <div style="height: 100px; background: orange;">F</div>
      <div style="height: 100px; background: fuchsia;">G</div>
    </bento-stream-gallery>
  </body>
</html>
```

{% endexample %}

### التفاعل واستخدام واجهة برمجة التطبيقات (API)

تُعد مكونات Bento تفاعلية للغاية من خلال واجهة برمجة التطبيقات الخاصة بها. ويمكن الوصول إلى واجهة برمجة تطبيقات مكون `bento-stream-gallery` من خلال تضمين علامة البرنامج النصي التالي في مستندك:

```javascript
await customElements.whenDefined('bento-stream-gallery');
const api = await streamGallery.getApi();
```

#### الإجراءات

##### next()

نقل العرض الدوار للأمام حسب عدد الشرائح المرئية.

```js
api.next();
```

##### prev()

نقل العرض الدوار للخلف حسب عدد الشرائح المرئية.

```js
api.prev();
```

##### goToSlide(index: number)

ينقل العرض الدوار إلى الشريحة المحددة بواسطة الوسيطة `index`.

ملاحظة: سوف تتم تسوية `index` إلى رقم أكبر من أو يساوي `0` وأقل من عدد الشرائح المعروضة.

```js
api.goToSlide(0); // Advance to first slide.
api.goToSlide(length - 1); // Advance to last slide.
```

#### الأحداث

يسمح لك واجهة مكون Bento Stream Gallery بالتسجيل والاستجابة للأحداث التالية:

##### slideChange

يتم بدء تشغيل هذا الحدث عند تغيير المؤشر المعروض بواسطة العرض الدوار. ويتوفر المؤشر الجديد عبر `event.data.index`.

```js
streamGallery.addEventListener('slideChange', (e) => console.log(e.data.index));
```

### المخطط والنمط

يحتوي كل مكون Bento على مكتبة CSS صغيرة يجب عليك تضمينها لضمان التحميل الصحيح بدون [تغييرات المحتوى](https://web.dev/cls/). ونظرًا للخصوصية المستندة على الأمر، يجب عليك التأكد يدويًا من تضمين صفحات الأنماط قبل أي أنماط مخصصة.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css"
/>
```

بدلاً من ذلك، يمكنك أيضًا توفير أنماط ما قبل الترقية منخفضة المستوى بشكل مضمّن:

```html
<style>
  bento-stream-gallery {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### مثال API

يوضح هذا المثال كيفية التبديل من الناحية البرمجية إلى الشريحة التالية/السابقة والانتقال إلى شرائح محددة.

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
      src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css"
    />
  </head>
  <body>
    <bento-stream-gallery id="my-stream-gallery" style="height: 150px;" min-item-width="75" max-item-width="100">
      <div style="height: 100px; background: red;">A</div>
      <div style="height: 100px; background: green;">B</div>
      <div style="height: 100px; background: blue;">C</div>
      <div style="height: 100px; background: yellow;">D</div>
      <div style="height: 100px; background: purple;">E</div>
      <div style="height: 100px; background: orange;">F</div>
      <div style="height: 100px; background: fuchsia;">G</div>
    </bento-stream-gallery>
    <script>
      (async () => {
        const streamGallery = document.querySelector('#my-stream-gallery');
        await customElements.whenDefined('bento-stream-gallery');
        const api = await streamGallery.getApi();

        // programatically go to next slide
        api.next();
        // programatically go to prev slide
        api.prev();
        // programatically go to slide
        api.goToSlide(4);
      })();
    </script>
  </body>
</html>
```

{% endexample %}

### السمات

#### السلوك

##### `controls`

إما `"always"` أو `"auto"` أو `"never"`، يتم التعيين افتراضيًا إلى `"auto"`. ويحدد هذا ما إذا كان يتم عرض سهمي التنقل السابق/التالي ومتى يتم عرضهما. ملاحظة: عندما تكون `outset-shars` معينة إلى `true`، فستظهر الأسهم `"always"`.

- `always`: يتم عرض الأسهم دائمًا.
- `auto`: يتم عرض الأسهم عندما يكون العرض الدوار قد تلقى أحدث اتصال عبر الماوس، ولا يتم عرضها عند تلقي العرض الدوار للتفاعل مؤخرًا عبر اللمس. وعند التحميل الأول لأجهزة اللمس، يتم عرض الأسهم حتى يحدث أول اتصال.
- `always`: يتم عرض الأسهم دائمًا.

##### `extra-space`

إما `"around"` أو غير محدد. يحدد هذا كيفية تخصيص المسافة الإضافية بعد عرض العدد المحتسَب للشرائح المرئية في العرض الدوار. فإذا كان `"around"`، يتم توزيع مسافة بيضاء بالتساوي حول العرض الدوار مع `degrafy-content: center`؛ وبخلاف ذلك، يتم تخصيص مسافة على يمين العرض الدوار لمستندات من اليسار إلى اليمين (LTR) وعلى اليسار لمستندات من اليمين إلى اليسار (RTL).

##### `loop`

إما `true` أو `false`، يتم التعيين افتراضيًا إلى `true`. وعند التعيين إلى صحيح، سيسمح العرض الدوار للمستخدم بالانتقال من العنصر الأول إلى العنصر الأخير والعكس صحيح. ويجب أن يكون هناك ثلاثة شرائح موجودة لحدوث حلقات.

##### `outset-arrows`

إما `true` أو `false`، يتم التعيين افتراضيًا إلى `false`. وعند التعيين إلى صحيح، سيعرض العرض الدوار أسهمه خارجيًا وعلى جانبي الشرائح. ولاحظ أنه باستخدام الأسهم خارجيًا، سيكون لحاوية الشرائح طول فعال بمقدار 100 بكسل أقل من المساحة المخصصة للحاوية المحددة لها - أي 50 بكسل لكل سهم على كلا الجانبين. وعند التعيين إلى خطأ، سيعرض العرض الدوار أسهمه داخليًا وتكون متداخلة فوق الحافتين اليسرى واليمنى للشرائح.

##### `peek`

رقم يتم تعيينه افتراضيًا إلى `0`. ويحدد هذا الرقم مقدار الشريحة الإضافية التي يتم عرضها (على أحد جانبي الشريحة الحالية أو كلا الجانبين) كعنصر وظيفي للمستخدم يشير إلى أن العرض الدوار قابل للتمرير.

#### إمكانية رؤية شرائح المعرض (Gallery)

##### `min-visible-count`

هو عدد يتم تعيينه افتراضيًا إلى `1`. ويحدد أدنى عدد للشرائح التي يجب إظهارها في وقت محدد. ويمكن استخدام القيم الكسرية لجعل جزء من شريحة (شرائح) إضافية مرئية.

##### `max-visible-count`

هو عدد يتم تعيينه افتراضيًا إلى [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). ويحدد أدنى عدد للشرائح التي يجب إظهارها في وقت محدد. ويمكن استخدام القيم الكسرية لجعل جزء من شريحة (شرائح) إضافية مرئية.

##### `min-item-width`

رقم يتم تعيينه افتراضيًا إلى `1`. ويحدد أدنى عرض لكل عنصر، ويُستخدم لحل عدد العناصر الكاملة التي يمكن عرضها في وقت واحد ضمن العرض الكلي للمعرض.

##### `max-item-width`

رقم يتم تعيينه افتراضيًا إلى [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). ويحدد أقصى عرض لكل عنصر، ويُستخدم لحل عدد العناصر الكاملة التي يمكن عرضها في وقت واحد ضمن العرض الكلي للمعرض.

#### انطباق الشرائح

##### `slide-align`

إما `start` أو `center`. عند بدء المحاذاة، يتم محاذاة بداية الشريحة (على سبيل المثال الحافة اليسرى، عند المحاذاة الأفقية) مع بداية العرض الدوار. وعند محاذاة المركز، تتم محاذاة مركز الشريحة مع مركز العرض الدوار.

##### `snap`

إما `true` أو `false`، يتم التعيين افتراضيًا إلى `true`. ويحدد ما إذا كان ينبغي للعرض الدوار أن يحاذي الشرائح عند التمرير أم لا.

### التصميم

يمكنك استخدام محدِّد العناصر `bento-stream-gallery` لتصميم معرض الدفق بحرية.

---

## مكون Preact/React

### استيراد عبر npm

```bash
npm install @bentoproject/stream-gallery
```

```javascript
import React from 'react';
import {BentoStreamGallery} from '@bentoproject/stream-gallery/react';
import '@bentoproject/stream-gallery/styles.css';

function App() {
  return (
    <BentoStreamGallery style={% raw %}{{height: 150}}{% endraw %} minItemWidth="75" maxItemWidth="100">
      <img src="img1.png" />
      <img src="img2.png" />
      <img src="img3.png" />
      <img src="img4.png" />
      <img src="img5.png" />
      <img src="img6.png" />
      <img src="img7.png" />
    </BentoStreamGallery>
  );
}
```

### التفاعل واستخدام واجهة برمجة التطبيقات (API)

مكونات Bento تفاعلية للغاية من خلال واجهة برمجة التطبيقات الخاصة بها. ويمكن الوصول إلى واجهة برمجة تطبيقات المكون `BentoStreamGallery` بتمرير `ref`:

```javascript
import React, {createRef} from 'react';
const ref = createRef();

function App() {
  return (
    <BentoStreamGallery ref={ref}>
      <img src="img1.png" />
      <img src="img2.png" />
      <img src="img3.png" />
      <img src="img4.png" />
      <img src="img5.png" />
      <img src="img6.png" />
      <img src="img7.png" />
    </BentoStreamGallery>
  );
}
```

#### الإجراءات

تسمح لك واجهة برمجة التطبيقات `BentoStreamGallery` بتنفيذ الإجراءات التالية:

##### next()

ينقل العرض الدوار للأمام بمقدار `advanceCount` من الشرائح.

```javascript
ref.current.next();
```

##### prev()

ينقل العرض الدوار للخلف بمقدار `advanceCount` من الشرائح.

```javascript
ref.current.prev();
```

##### goToSlide(index: number)

نقل العرض الدوار إلى الشريحة المحددة بواسطة الوسيطة `index`. ملاحظة: سيتم تسوية `index` إلى رقم أكبر من أو يساوي `0` وأقل من عدد الشرائح المحددة.

```javascript
ref.current.goToSlide(0); // Advance to first slide.
ref.current.goToSlide(length - 1); // Advance to last slide.
```

#### الأحداث

##### onSlideChange

يتم بدء تشغيل هذا الحدث عند تغيير المؤشر المعروض بواسطة العرض الدوار.

```jsx
<BentoStreamGallery style={% raw %}{{height: 150}}{% endraw %} onSlideChange={(index) => console.log(index)}>
  <img src="puppies.jpg" />
  <img src="kittens.jpg" />
  <img src="hamsters.jpg" />
</BentoStreamGallery>
```

### المخطط والنمط

#### نوع الحاوية

يحتوي المكون `BentoStreamGallery` على نوع حجم مخطط محدد. ولضمان عرض المكون بشكل صحيح، تأكد من تطبيق حجم على المكون وعناصره الفرعية المباشرة من خلال مخطط CSS المطلوب (مثل مخطط محدد بـ `width`). يمكن تطبيق هذه الخطوات ضمنيًا:

```jsx
<BentoStreamGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoStreamGallery>
```

أو عبر `className`:

```jsx
<BentoStreamGallery className="custom-styles">...</BentoStreamGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### الخصائص

#### الخصائص الشائعة

يدعم هذا المكون [الخصائص الشائعة](../../../docs/spec/bento-common-props.md) لمكونات React وPreact.

#### السلوك

##### `controls`

إما `"always"` أو `"auto"` أو `"never"`، يتم التعيين افتراضيًا إلى `"auto"`. ويحدد هذا ما إذا كان يتم عرض سهمي التنقل السابق/التالي ومتى يتم عرضهما. ملاحظة: عندما تكون `outset-shars` معينة إلى `true`، فستظهر الأسهم `"always"`.

- `always`: يتم عرض الأسهم دائمًا.
- `auto`: يتم عرض الأسهم عندما يكون العرض الدوار قد تلقى أحدث اتصال عبر الماوس، ولا يتم عرضها عند تلقي العرض الدوار للتفاعل مؤخرًا عبر اللمس. وعند التحميل الأول لأجهزة اللمس، يتم عرض الأسهم حتى يحدث أول اتصال.
- `always`: يتم عرض الأسهم دائمًا.

##### `extraSpace`

إما `"around"` أو غير محدد. يحدد هذا كيفية تخصيص المسافة الإضافية بعد عرض العدد المحتسَب للشرائح المرئية في العرض الدوار. فإذا كان `"around"`، يتم توزيع مسافة بيضاء بالتساوي حول العرض الدوار مع `degrafy-content: center`؛ وبخلاف ذلك، يتم تخصيص مسافة على يمين العرض الدوار لمستندات من اليسار إلى اليمين (LTR) وعلى اليسار لمستندات من اليمين إلى اليسار (RTL).

##### `loop`

إما `true` أو `false`، يتم التعيين افتراضيًا إلى `true`. وعند التعيين إلى صحيح، سيسمح العرض الدوار للمستخدم بالانتقال من العنصر الأول إلى العنصر الأخير والعكس صحيح. ويجب أن يكون هناك ثلاثة شرائح موجودة لحدوث حلقات.

##### `outsetArrows`

إما `true` أو `false`، يتم التعيين افتراضيًا إلى `false`. وعند التعيين إلى صحيح، سيعرض العرض الدوار أسهمه خارجيًا وعلى جانبي الشرائح. ولاحظ أنه باستخدام الأسهم خارجيًا، سيكون لحاوية الشرائح طول فعال بمقدار 100 بكسل أقل من المساحة المخصصة للحاوية المحددة لها - أي 50 بكسل لكل سهم على كلا الجانبين. وعند التعيين إلى خطأ، سيعرض العرض الدوار أسهمه داخليًا وتكون متداخلة فوق الحافتين اليسرى واليمنى للشرائح.

##### `peek`

رقم يتم تعيينه افتراضيًا إلى `0`. ويحدد هذا الرقم مقدار الشريحة الإضافية التي يتم عرضها (على أحد جانبي الشريحة الحالية أو كلا الجانبين) كعنصر وظيفي للمستخدم يشير إلى أن العرض الدوار قابل للتمرير.

#### إمكانية رؤية شرائح المعرض (Gallery)

##### `minVisibleCount`

هو عدد يتم تعيينه افتراضيًا إلى `1`. ويحدد أدنى عدد للشرائح التي يجب إظهارها في وقت محدد. ويمكن استخدام القيم الكسرية لجعل جزء من شريحة (شرائح) إضافية مرئية.

##### `maxVisibleCount`

هو عدد يتم تعيينه افتراضيًا إلى [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). ويحدد أدنى عدد للشرائح التي يجب إظهارها في وقت محدد. ويمكن استخدام القيم الكسرية لجعل جزء من شريحة (شرائح) إضافية مرئية.

##### `minItemWidth`

رقم يتم تعيينه افتراضيًا إلى `1`. ويحدد أدنى عرض لكل عنصر، ويُستخدم لحل عدد العناصر الكاملة التي يمكن عرضها في وقت واحد ضمن العرض الكلي للمعرض.

##### `maxItemWidth`

رقم يتم تعيينه افتراضيًا إلى [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). ويحدد أقصى عرض لكل عنصر، ويُستخدم لحل عدد العناصر الكاملة التي يمكن عرضها في وقت واحد ضمن العرض الكلي للمعرض.

#### انطباق الشرائح

##### `slideAlign`

إما `start` أو `center`. عند بدء المحاذاة، يتم محاذاة بداية الشريحة (على سبيل المثال الحافة اليسرى، عند المحاذاة الأفقية) مع بداية العرض الدوار. وعند محاذاة المركز، تتم محاذاة مركز الشريحة مع مركز العرض الدوار.

##### `snap`

إما `true` أو `false`، يتم التعيين افتراضيًا إلى `true`. ويحدد ما إذا كان ينبغي للعرض الدوار أن يحاذي الشرائح عند التمرير أم لا.
