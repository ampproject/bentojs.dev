---
id: bento-base-carousel
title: العرض الدوار في Bento
permalink: "/ar/components/bento-carousel/"
short_title: عرض دوار
layout: layouts/component.njk
description: عرض دوار عام لعرض عدة أجزاء متشابهة من المحتوى بطول المحور الأفقي أو الرأسي.
---

# العرض الدوار في Bento

{% heroexample 'bento-base-carousel' %}

عرض دوار عام لعرض عدة أجزاء متماثلة من المحتوى بطول المحور الأفقي أو الرأسي. وكل واحدة من الفروع المباشرة للمكِّون تُعتبر عنصرًا في العرض الدوار. وقد تتضمن كل واحدة من هذه العُقد فروعًا إجبارية. يتألف العرض الدوار من عدد إجباري من العناصر، بالإضافة إلى أسهم التنقل الاختيارية للانتقال للأمام أو الخلف بمقدار عنصر واحد. ويتقدم العرض الدوار بين العناصر إذا قام المستخدم بالتمرير أو استخدم أزرار أسهم قابلة للتخصيص.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>استخدم bento-base-carousel كمكون ويب أو مكون React وظيفي:</p>   <a class="bd-button" href="#web-component">↓ مكون ويب</a>   <a class="bd-button" href="#preact%2Freact-component">↓ مكون React / Preact</a>
</div>

## مكون الويب

يجب تضمين كل مكتبة صفحات الأنماط المتتالية (CSS) المطلوبة لمكون Bento لضمان التحميل المناسب وقبل إضافة أنماط مخصصة. أو استخدم أنماط ما قبل الترقية منخفضة المستوى المتوفرة بشكل ضمني. راجع [التخطيط والنمط](#layout-and-style).

### استيراد عبر npm

```bash
npm install @bentoproject/base-carousel
```

```javascript
import {defineElement as defineBentoBaseCarousel} from '@bentoproject/base-carousel';
defineBentoBaseCarousel();
```

### تضمين عبر `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.css" crossorigin="anonymous">
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
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.css"
    />
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.js"
    ></script>
    <style>
      bento-base-carousel,
      bento-base-carousel > div {
        aspect-ratio: 4/1;
      }
      .red {
        background: darkred;
      }
      .blue {
        background: steelblue;
      }
      .green {
        background: seagreen;
      }
    </style>
  </head>
  <body>
    <bento-base-carousel id="my-carousel">
      <div class="red"></div>
      <div class="blue"></div>
      <div class="green"></div>
    </bento-base-carousel>
  </body>
</html>
```

{% endexample %}

### التفاعل واستخدام واجهة برمجة التطبيقات (API)

تُعد مكونات Bento تفاعلية للغاية من خلال واجهة برمجة التطبيقات الخاصة بها. ويمكن الوصول إلى واجهة برمجة تطبيقات مكون `bento-base-carousel` من خلال تضمين علامة البرنامج النصي التالي في مستندك:

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
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.css"
    />
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.js"
    ></script>
    <style>
      bento-base-carousel,
      bento-base-carousel > div {
        aspect-ratio: 4/1;
      }
      .red {
        background: darkred;
      }
      .blue {
        background: steelblue;
      }
      .green {
        background: seagreen;
      }
    </style>
  </head>
  <body>
    <bento-base-carousel id="my-carousel">
      <div class="red"></div>
      <div class="blue"></div>
      <div class="green"></div>
    </bento-base-carousel>
    <div class="buttons" style="margin-top: 8px">
      <button id="prev-button">Go to previous slide</button>
      <button id="next-button">Go to next slide</button>
      <button id="go-to-button">Go to slide with green gradient</button>
    </div>

    <script>
      (async () => {
        const carousel = document.querySelector('#my-carousel');
        await customElements.whenDefined('bento-base-carousel');
        const api = await carousel.getApi();

        // programatically advance to next slide
        api.next();

        // set up button actions
        document.querySelector('#prev-button').onclick = () => api.prev();
        document.querySelector('#next-button').onclick = () => api.next();
        document.querySelector('#go-to-button').onclick = () =>
          api.goToSlide(2);
      })();
    </script>
  </body>
</html>
```

{% endexample %}

```javascript
await customElements.whenDefined('bento-base-carousel');
const api = await carousel.getApi();
```

#### الإجراءات

تسمح لك واجهة برمجة التطبيقات `bento-base-carousel` بتنفيذ الإجراءات التالية:

##### next()

ينقل العرض الدوار للأمام بمقدار `advance-count` من الشرائح.

```javascript
api.next();
```

##### prev()

ينقل العرض الدوار للخلف بمقدار `advance-count` من الشرائح.

```javascript
api.prev();
```

##### goToSlide(index: number)

نقل العرض الدوار إلى الشريحة المحددة بواسطة الوسيطة `index`. ملاحظة: سيتم تسوية `index` إلى رقم أكبر من أو يساوي `0` وأقل من عدد الشرائح المحددة.

```javascript
api.goToSlide(0); // Advance to first slide.
api.goToSlide(length - 1); // Advance to last slide.
```

#### الأحداث

تسمح لك واجهة برمجة التطبيقات `bento-base-carousel` بالتسجيل والاستجابة للأحداث التالية:

##### slideChange

يتم بدء تشغيل هذا الحدث عند تغيير المؤشر المعروض بواسطة العرض الدوار. ويتوفر المؤشر الجديد عبر `event.data.index`.

```javascript
carousel.addEventListener('slideChange', (e) => console.log(e.data.index));
```

### المخطط والنمط

يحتوي كل مكون Bento على مكتبة CSS صغيرة يجب عليك تضمينها لضمان التحميل الصحيح بدون [تغييرات المحتوى](https://web.dev/cls/). ونظرًا للخصوصية المستندة على الأمر، يجب عليك التأكد يدويًا من تضمين صفحات الأنماط قبل أي أنماط مخصصة.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.css"
/>
```

بدلاً من ذلك، يمكنك أيضًا توفير أنماط ما قبل الترقية منخفضة المستوى بشكل مضمّن:

```html
<style>
  bento-base-carousel {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### نوع الحاوية

يحتوي المكون `bento-base-carousel` على نوع حجم مخطط محدد. ولضمان عرض المكون بشكل صحيح، تأكد من تطبيق حجم على المكون وعناصره الفرعية المباشرة (الشرائح) من خلال مخطط صفحات الأنماط المتتالية المطلوب (مثل مخطط محدد بـ `height` أو `width` أو `aspect-ratio`، أو خصائص أخرى):

```css
bento-base-carousel {
  height: 100px;
  width: 100%;
}

bento-base-carousel > * {
  aspect-ratio: 4/1;
}
```

### تغيير الشريحة من اليمين إلى اليسار

يتطلب `<bento-base-carousel>` أن تحدده عندما يكون في سياق من اليمين إلى اليسار (rtl) (على سبيل المثال: صفحات باللغة العربية أو العبرية). وفي حين أن العرض الدوار عمومًا سيعمل دون ذلك، إلا أنه قد يكون هناك عدد قليل من الأخطاء. ويمكنك إعلام العرض الدوار بأنه يجب أن يعمل باعتباره `rtl` كما يلي:

```html
<bento-base-carousel dir="rtl" …> … </bento-base-carousel>
```

إذا كان العرض الدوار في سياق من اليمين إلى اليسار (RTL)، وكنت تريد أن يعمل العرض الدوار اليسار إلى اليمين (LTR)، فيمكنك تعيين `dir="ltr"` صراحة في العرض الدوار.

### تخطيط الشرائح

يتم تحديد حجم الشرائح تلقائيًا بواسطة العرض الدوار عند **عدم** تحديد `mixed-lengths`.

```html
<bento-base-carousel …>
  <img style="height: 100%; width: 100%" src="…" />
</bento-base-carousel>
```

يكون ارتفاع الشرائح ضمنيًا عند تخطيط العرض الدوار. ويمكن تغيير هذا بسهولة باستخدام CSS. وعند تحديد الارتفاع، ستتمحور الشريحة عموديًا داخل العرض الدوار.

إذا كنت ترغب في توسيط محتوى الشريحة أفقيًا، فستحتاج إلى إنشاء عنصر التفاف، واستخدام ذلك لتوسيط المحتوى.

### عدد الشرائح المرئية

عند تغيير عدد الشرائح المرئية باستخدام `visible-slides`، استجابة لاستعلام الوسائط، ستحتاج على الأرجح إلى تغيير نسبة العرض إلى الارتفاع في العرض الدوار نفسه لمطابقة العدد الجديد من الشرائح المرئية. فعلى سبيل المثال، إذا كنت ترغب في عرض ثلاث شرائح في المرة الواحدة بنسبة عرض إلى ارتفاع واحدة تلو الأخرى، فقد ترغب في الحصول على نسبة عرض إلى ارتفاع تبلغ ثلاثة في واحد للعرض الدوار نفسه. وبشكل مشابه، مع وجود أربع شرائح في وقت واحد قد تحتاج إلى نسبة عرض إلى ارتفاع أربعة في واحد. بالإضافة إلى ذلك، عند تغيير `visible-slides`، فينبغي على الأرجح تغيير `advance-count`.

```html
<!-- Using an aspect ratio of 3:2 for the slides in this example. -->
<bento-base-carousel
  visible-count="(min-width: 600px) 4, 3"
  advance-count="(min-width: 600px) 4, 3"
>
  <img style="height: 100%; width: 100%" src="…" />
  …
</bento-base-carousel>
```

### السمات

#### استعلامات الوسائط

يمكن تكوين سمات `<bent-base-carousel>` لاستخدام خيارات مختلفة على أساس [استعلام الوسائط](./../../../docs/spec/amp-html-responsive-attributes.md).

#### عدد الشرائح المرئية

##### mixed-length

إما `true` أو `false`، يتم التعيين افتراضيًا إلى `false`. وعند التعيين إلى صحيح (true)، يتم استخدام العرض الموجود (أو الارتفاع عندما يكون أفقيًا) لكل شريحة من الشرائح. وهذا يسمح باستخدام عرض دوار بشرائح ذات عروض مختلفة.

##### visible-count

هو عدد يتم تعيينه افتراضيًا إلى `1`. ويحدد عدد الشرائح التي يجب إظهارها في وقت محدد. ويمكن استخدام القيم الكسرية لجعل جزء من شريحة (شرائح) إضافية مرئية. ويتم تجاهل هذا الخيار عندما يكون `mixed-length` هو `true`.

##### advance-count

هو عدد يتم تعيينه افتراضيًا إلى `1`. ويحدد عدد الشرائح التي سيقدمها العرض الدوار عند التقدم باستخدام السهم السابق أو السهم التالي. وهذا مفيد عند تحديد سمة `visible-count`.

#### تقديم تلقائي

##### auto-advance

إما `true` أو `false`، يتم التعيين افتراضيًا إلى `false{/code2. يقوم تلقائيًا بتقديم العرض الدوار إلى الشريحة التالية بناءً على التأخير. وإذا قام المستخدم بتغيير الشرائح يدويًا، فسيتم إيقاف التقديم التلقائي. ولاحظ أنه إذا لم يتم تمكين  <code data-md-type="codespan">loop`، عند الوصول إلى العنصر الأخير، فإن التقديم التلقائي سينتقل للخلف إلى العنصر الأول.

##### auto-advance-count

هو عدد يتم تعيينه افتراضيًا إلى `1`. ويحدد عدد الشرائح التي سيقدمها العرض الدوار عند التقدم. وهذا مفيد عند تحديد سمة `visible-count`.

##### auto-advance-interval

هو عدد يتم تعيينه افتراضيًا إلى `1000`. ويحدد مقدار الوقت، بالميلي ثانية، بين التقديمات التلقائية اللاحقة للعرض الدوار.

##### auto-advance-loops

هو عدد يتم تعيينه افتراضيًا إلى `∞`. وعدد المرات التي يجب أن يتقدم فيها العرض الدوار خلال الشرائح قبل التوقف.

#### انطباق

##### snap

إما `true` أو `false`، يتم التعيين افتراضيًا إلى `true`. ويحدد ما إذا كان ينبغي للعرض الدوار أن يحاذي الشرائح عند التمرير أم لا.

##### snap-align

إما `start` أو `center`. عند بدء المحاذاة، يتم محاذاة بداية الشريحة (على سبيل المثال الحافة اليسرى، عند المحاذاة الأفقية) مع بداية العرض الدوار. وعند محاذاة المركز، تتم محاذاة مركز الشريحة مع مركز العرض الدوار.

##### snap-by

هو عدد يتم تعيينه افتراضيًا إلى `1`. ويحدد هذا مستوى تفصيل الانطباق ويكون مفيدًا عند استخدام `visible-count`.

#### متنوع

##### controls

إما `"always"` أو `"auto"` أو `"never"`، يتم التعيين افتراضيًا إلى `"auto"`. ويحدد هذا ما إذا كان يتم عرض سهمي التنقل السابق/التالي ومتى يتم عرضهما. ملاحظة: عندما تكون `outset-shars` معينة إلى `true`، فستظهر الأسهم `"always"`.

- `always`: يتم عرض الأسهم دائمًا.
- `auto`: يتم عرض الأسهم عندما يكون العرض الدوار قد تلقى أحدث اتصال عبر الماوس، ولا يتم عرضها عند تلقي العرض الدوار للتفاعل مؤخرًا عبر اللمس. وعند التحميل الأول لأجهزة اللمس، يتم عرض الأسهم حتى يحدث أول اتصال.
- `always`: يتم عرض الأسهم دائمًا.

##### slide

عدد يتم تعيينه افتراضيًا إلى `0`. ويحدد هذا العدد الشريحة الأولية المعروضة في العرض الدوار. وقد يتم تغيير هذا باستخدام `Element.setAttribute` للتحكم في الشريحة التي يتم عرضها حاليًا.

##### loop

إما `true` أو `false`، يتم التعيين افتراضيًا إلى `false` عند الحذف. وعند التعيين إلى صحيح، سيسمح العرض الدوار للمستخدم بالانتقال من العنصر الأول إلى العنصر الأخير والعكس صحيح. ويجب أن يكون هناك ثلاثة أضعاف على الأقل `visible-count` من الشرائح الموجودة لحدوث حلقات.

##### orientation

إما `horizontal` أو `vertical`، يتم العيين افتراضيًا إلى `horizontal`. عند التعيين إلى `horizontal`، سيتم وضع العرض الدوار أفقيًا، مع قدرة المستخدم على التمرير لليسار واليمين. وعند التعيين إلى `vertical`، يخطط العرض الدوار عموديًا، مع قدرة المستخدم على التمرير لأعلى ولأسفل.

### التصميم

يمكنك استخدام محدِّد العناصر `bento-base-carousel` لتصميم العرض الدوار بحرية.

#### تخصيص أزرار الأسهم

يمكن تخصيص أزرار السهم عن طريق التمرير في رفع السعر المخصص لديك. فعلى سبيل المثال، يمكنك إعادة إنشاء التصميم الافتراضي باستخدام HTML وCSS التاليين:

```css
.carousel-prev,
.carousel-next {
  filter: drop-shadow(0px 1px 2px #4a4a4a);
  width: 40px;
  height: 40px;
  padding: 20px;
  background-color: transparent;
  border: none;
  outline: none;
}

.carousel-prev {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M14,7.4 L9.4,12 L14,16.6" fill="none" stroke="#fff" stroke-width="2px" stroke-linejoin="round" stroke-linecap="round" /></svg>');
}

.carousel-next {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M10,7.4 L14.6,12 L10,16.6" fill="none" stroke="#fff" stroke-width="2px" stroke-linejoin="round" stroke-linecap="round" /></svg>');
}
```

```html
<bento-base-carousel …>
  <div>first slide</div>
  …
  <button slot="next-arrow" class="carousel-next" aria-label="Next"></button>
  <button
    slot="prev-arrow"
    class="carousel-prev"
    aria-label="Previous"
  ></button>
</bento-base-carousel>
```

---

## مكون Preact/React

### استيراد عبر npm

```bash
npm install @bentoproject/base-carousel
```

```javascript
import React from 'react';
import {BentoBaseCarousel} from '@bentoproject/base-carousel/react';
import '@bentoproject/base-carousel/styles.css';

function App() {
  return (
    <BentoBaseCarousel>
      <img src="puppies.jpg" />
      <img src="kittens.jpg" />
      <img src="hamsters.jpg" />
    </BentoBaseCarousel>
  );
}
```

### التفاعل واستخدام واجهة برمجة التطبيقات (API)

مكونات Bento تفاعلية للغاية من خلال واجهة برمجة التطبيقات الخاصة بها. ويمكن الوصول إلى واجهة برمجة تطبيقات المكون `BentoBaseCarousel` بتمرير `ref`:

```javascript
import React, {createRef} from 'react';
const ref = createRef();

function App() {
  return (
    <BentoBaseCarousel ref={ref}>
      <img src="puppies.jpg" />
      <img src="kittens.jpg" />
      <img src="hamsters.jpg" />
    </BentoBaseCarousel>
  );
}
```

#### الإجراءات

تسمح لك واجهة برمجة التطبيقات `BentoBaseCarousel` بتنفيذ الإجراءات التالية:

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

تسمح لك واجهة برمجة التطبيقات `BentoBaseCarousel` بالتسجيل والاستجابة للأحداث التالية:

##### onSlideChange

يتم بدء تشغيل هذا الحدث عند تغيير المؤشر المعروض بواسطة العرض الدوار.

```jsx
<BentoBaseCarousel onSlideChange={(index) => console.log(index)}>
  <img src="puppies.jpg" />
  <img src="kittens.jpg" />
  <img src="hamsters.jpg" />
</BentoBaseCarousel>
```

### المخطط والنمط

#### نوع الحاوية

يحتوي المكون `BentoBaseCarousel` على نوع حجم مخطط محدد. ولضمان عرض المكون بشكل صحيح، تأكد من تطبيق حجم على المكون وعناصره الفرعية المباشرة (الشرائح) من خلال مخطط صفحات الأنماط المتتالية المطلوب (مثل مخطط محدد بـ `height` أو `width` أو `aspect-ratio`، أو خصائص أخرى):

```jsx
<BentoBaseCarousel style={% raw %}{{width: 300, height: 100}}{% endraw %}>
  <img src="puppies.jpg" />
  <img src="kittens.jpg" />
  <img src="hamsters.jpg" />
</BentoBaseCarousel>
```

أو عبر `className`:

```jsx
<BentoBaseCarousel className="custom-styles">
  <img src="puppies.jpg" />
  <img src="kittens.jpg" />
  <img src="hamsters.jpg" />
</BentoBaseCarousel>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}

.custom-styles > * {
  aspect-ratio: 4/1;
}
```

### تغيير الشريحة من اليمين إلى اليسار

يتطلب `<BentoBaseCarousel>` أن تحدده عندما يكون في سياق من اليمين إلى اليسار (rtl) (على سبيل المثال: صفحات باللغة العربية أو العبرية). وفي حين أن العرض الدوار عمومًا سيعمل دون ذلك، إلا أنه قد يكون هناك عدد قليل من الأخطاء. ويمكنك إعلام العرض الدوار بأنه يجب أن يعمل باعتباره `rtl` كما يلي:

```jsx
<BentoBaseCarousel dir="rtl">…</BentoBaseCarousel>
```

إذا كان العرض الدوار في سياق من اليمين إلى اليسار (RTL)، وكنت تريد أن يعمل العرض الدوار اليسار إلى اليمين (LTR)، فيمكنك تعيين `dir="ltr"` صراحة في العرض الدوار.

### تخطيط الشرائح

يتم تحديد حجم الشرائح تلقائيًا بواسطة العرض الدوار عند **عدم** تحديد `mixedlengths`.

```jsx
<BentoBaseCarousel>
  <img style={% raw %}{{height: '100%', width: '100%'}}{% endraw %} src="…" />
</BentoBaseCarousel>
```

يكون ارتفاع الشرائح ضمنيًا عند تخطيط العرض الدوار. ويمكن تغيير هذا بسهولة باستخدام CSS. وعند تحديد الارتفاع، ستتمحور الشريحة عموديًا داخل العرض الدوار.

إذا كنت ترغب في توسيط محتوى الشريحة أفقيًا، فستحتاج إلى إنشاء عنصر التفاف، واستخدام ذلك لتوسيط المحتوى.

### عدد الشرائح المرئية

عند تغيير عدد الشرائح المرئية باستخدام `visibleslides`، استجابة لاستعلام الوسائط، ستحتاج على الأرجح إلى تغيير نسبة العرض إلى الارتفاع في العرض الدوار نفسه لمطابقة العدد الجديد من الشرائح المرئية. فعلى سبيل المثال، إذا كنت ترغب في عرض ثلاث شرائح في المرة الواحدة بنسبة عرض إلى ارتفاع واحدة تلو الأخرى، فقد ترغب في الحصول على نسبة عرض إلى ارتفاع تبلغ ثلاثة في واحد للعرض الدوار نفسه. وبشكل مشابه، مع وجود أربع شرائح في وقت واحد قد تحتاج إلى نسبة عرض إلى ارتفاع أربعة في واحد. بالإضافة إلى ذلك، عند تغيير `visibleslides`، فينبغي على الأرجح تغيير `advancecount`.

```jsx
const count = window.matchMedia('(max-width: 600px)').matches ? 4 : 3;

<BentoBaseCarousel visibleCount={count} advanceCount={count}>
  <img style={% raw %}{{height: '100%', width: '100%'}}{% endraw %} src="…" />…
</BentoBaseCarousel>
```

### الخصائص

#### عدد الشرائح المرئية

##### mixedLength

إما `true` أو `false`، يتم التعيين افتراضيًا إلى `false`. وعند التعيين إلى صحيح (true)، يتم استخدام العرض الموجود (أو الارتفاع عندما يكون أفقيًا) لكل شريحة من الشرائح. وهذا يسمح باستخدام عرض دوار بشرائح ذات عروض مختلفة.

##### visibleCount

هو عدد يتم تعيينه افتراضيًا إلى `1`. ويحدد عدد الشرائح التي يجب إظهارها في وقت محدد. ويمكن استخدام القيم الكسرية لجعل جزء من شريحة (شرائح) إضافية مرئية. ويتم تجاهل هذا الخيار عندما يكون `mixed-length` هو `true`.

##### advanceCount

هو عدد يتم تعيينه افتراضيًا إلى `1`. ويحدد عدد الشرائح التي سيقدمها العرض الدوار عند التقدم باستخدام السهم السابق أو السهم التالي. وهذا مفيد عند تحديد سمة `visiblecount`.

#### تقديم تلقائي

##### autoAdvance

إما `true` أو `false`، يتم التعيين افتراضيًا إلى `false{/code2. يقوم تلقائيًا بتقديم العرض الدوار إلى الشريحة التالية بناءً على التأخير. وإذا قام المستخدم بتغيير الشرائح يدويًا، فسيتم إيقاف التقديم التلقائي. ولاحظ أنه إذا لم يتم تمكين  <code data-md-type="codespan">loop`، عند الوصول إلى العنصر الأخير، فإن التقديم التلقائي سينتقل للخلف إلى العنصر الأول.

##### autoAdvanceCount

هو عدد يتم تعيينه افتراضيًا إلى `1`. ويحدد عدد الشرائح التي سيقدمها العرض الدوار عند التقدم. وهذا مفيد عند تحديد سمة `visible-count`.

##### autoAdvanceInterval

هو عدد يتم تعيينه افتراضيًا إلى `1000`. ويحدد مقدار الوقت، بالميلي ثانية، بين التقديمات التلقائية اللاحقة للعرض الدوار.

##### autoAdvanceLoops

هو عدد يتم تعيينه افتراضيًا إلى `∞`. وعدد المرات التي يجب أن يتقدم فيها العرض الدوار خلال الشرائح قبل التوقف.

#### انطباق

##### snap

إما `true` أو `false`، يتم التعيين افتراضيًا إلى `true`. ويحدد ما إذا كان ينبغي للعرض الدوار أن يحاذي الشرائح عند التمرير أم لا.

##### snapAlign

إما `start` أو `center`. عند بدء المحاذاة، يتم محاذاة بداية الشريحة (على سبيل المثال الحافة اليسرى، عند المحاذاة الأفقية) مع بداية العرض الدوار. وعند محاذاة المركز، تتم محاذاة مركز الشريحة مع مركز العرض الدوار.

##### snapBy

هو عدد يتم تعيينه افتراضيًا إلى `1`. ويحدد هذا مستوى تفصيل الانطباق ويكون مفيدًا عند استخدام `visible-count`.

#### متنوع

##### controls

إما `"always"` أو `"auto"` أو `"never"`، يتم التعيين افتراضيًا إلى `"auto"`. ويحدد هذا ما إذا كان يتم عرض سهمي التنقل السابق/التالي ومتى يتم عرضهما. ملاحظة: عندما تكون `outset-shars` معينة إلى `true`، فستظهر الأسهم `"always"`.

- `always`: يتم عرض الأسهم دائمًا.
- `auto`: يتم عرض الأسهم عندما يكون العرض الدوار قد تلقى أحدث اتصال عبر الماوس، ولا يتم عرضها عند تلقي العرض الدوار للتفاعل مؤخرًا عبر اللمس. وعند التحميل الأول لأجهزة اللمس، يتم عرض الأسهم حتى يحدث أول اتصال.
- `always`: يتم عرض الأسهم دائمًا.

##### defaultSlide

عدد يتم تعيينه افتراضيًا إلى `0`. ويحدد هذا العدد الشريحة الأولية المعروضة في العرض الدوار.

##### loop

إما `true` أو `false`، يتم التعيين افتراضيًا إلى `false` عند الحذف. وعند التعيين إلى صحيح، سيسمح العرض الدوار للمستخدم بالانتقال من العنصر الأول إلى العنصر الأخير والعكس صحيح. ويجب أن يكون هناك ثلاثة أضعاف على الأقل `visible-count` من الشرائح الموجودة لحدوث حلقات.

##### orientation

إما `horizontal` أو `vertical`، يتم العيين افتراضيًا إلى `horizontal`. عند التعيين إلى `horizontal`، سيتم وضع العرض الدوار أفقيًا، مع قدرة المستخدم على التمرير لليسار واليمين. وعند التعيين إلى `vertical`، يخطط العرض الدوار عموديًا، مع قدرة المستخدم على التمرير لأعلى ولأسفل.

### التصميم

يمكنك استخدام محدِّد العناصر `bentobasecarousel` لتصميم العرض الدوار بحرية.

#### تخصيص أزرار الأسهم

يمكن تخصيص أزرار السهم عن طريق التمرير في رفع السعر المخصص لديك. فعلى سبيل المثال، يمكنك إعادة إنشاء التصميم الافتراضي باستخدام HTML وCSS التاليين:

```css
.carousel-prev,
.carousel-next {
  filter: drop-shadow(0px 1px 2px #4a4a4a);
  width: 40px;
  height: 40px;
  padding: 20px;
  background-color: transparent;
  border: none;
  outline: none;
}

.carousel-prev {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M14,7.4 L9.4,12 L14,16.6" fill="none" stroke="#fff" stroke-width="2px" stroke-linejoin="round" stroke-linecap="round" /></svg>');
}

.carousel-next {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M10,7.4 L14.6,12 L10,16.6" fill="none" stroke="#fff" stroke-width="2px" stroke-linejoin="round" stroke-linecap="round" /></svg>');
}
```

```jsx
function CustomPrevButton(props) {
  return <button {...props} className="carousel-prev" />;
}

function CustomNextButton(props) {
  return <button {...props} className="carousel-prev" />;
}

<BentoBaseCarousel
  arrowPrevAs={CustomPrevButton}
  arrowNextAs={CustomNextButton}
>
  <div>first slide</div>
  // …
</BentoBaseCarousel>
```
