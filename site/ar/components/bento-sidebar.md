---
id: bento-sidebar
title: شريط Bento الجانبي
permalink: "/ar/components/bento-sidebar/"
short_title: شريط جانبي
layout: layouts/component.njk
description:   يوفر طريقة لعرض محتوى تعريفي مخصص للوصول المؤقت مثل أدوات التنقل والارتباطات والأزرار والقوائم.
---

# شريط Bento الجانبي

{% heroexample 'bento-sidebar' %}

يوفر طريقة لعرض محتوى تعريفي مخصص للوصول المؤقت مثل التنقل والارتباطات والأزرار والقوائم. ويمكن كشف الشريط الجانبي بضغطة زر بينما يظل المحتوى الرئيسي مرئيًا أسفل منه.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>استخدم bento-sidebar كمكون ويب أو مكون React وظيفي:</p>   <a class="bd-button" href="#web-component">↓ مكون الويب</a>   <a class="bd-button" href="#preact%2Freact-component">↓ مكون React / Preact</a>
</div>

## مكون الويب

يجب تضمين كل مكتبة صفحات الأنماط المتتالية (CSS) المطلوبة لمكون Bento لضمان التحميل المناسب وقبل إضافة أنماط مخصصة. أو استخدم أنماط ما قبل الترقية منخفضة المستوى المتوفرة بشكل ضمني. راجع [التخطيط والنمط](#layout-and-style).

### استيراد عبر npm

```bash
npm install @bentoproject/sidebar
```

```javascript
import {defineElement as defineBentoSidebar} from '@bentoproject/sidebar';
defineBentoSidebar();
```

### تضمين عبر `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css"
    />
  </head>
  <body>
    <bento-sidebar id="sidebar1" side="right" hidden>
      <ul>
        <li>Nav item 1</li>
        <li>Nav item 2</li>
        <li>Nav item 3</li>
        <li>Nav item 4</li>
        <li>Nav item 5</li>
        <li>Nav item 6</li>
      </ul>
    </bento-sidebar>

    <div class="buttons" style="margin-top: 8px">
      <button id="open-sidebar">Open sidebar</button>
    </div>

    <script>
      (async () => {
        const sidebar = document.querySelector('#sidebar1');
        await customElements.whenDefined('bento-sidebar');
        const api = await sidebar.getApi();

        // set up button actions
        document.querySelector('#open-sidebar').onclick = () => api.open();
      })();
    </script>
  </body>
</html>
```

{% endexample %}

### التفاعل واستخدام واجهة برمجة التطبيقات (API)

تُعد مكونات Bento تفاعلية للغاية من خلال واجهة برمجة التطبيقات الخاصة بها. ويمكن الوصول إلى واجهة برمجة تطبيقات مكون `bento-sidebar` من خلال تضمين علامة البرنامج النصي التالي في مستندك:

```javascript
await customElements.whenDefined('bento-sidebar');
const api = await carousel.getApi();
```

#### الإجراءات

تسمح لك واجهة برمجة التطبيقات `bento-sidebar` بتنفيذ الإجراءات التالية:

##### open()

يفتح الشريط الجانبي.

```javascript
api.open();
```

##### close()

يغلق الشريط الجانبي.

```javascript
api.close();
```

##### toggle()

يبدل حالة فتح الشريط الجانبي.

```javascript
api.toggle(0);
```

### المخطط والنمط

يحتوي كل مكون Bento على مكتبة CSS صغيرة يجب عليك تضمينها لضمان التحميل الصحيح بدون [تغييرات المحتوى](https://web.dev/cls/). ونظرًا للخصوصية المستندة على الأمر، يجب عليك التأكد يدويًا من تضمين صفحات الأنماط قبل أي أنماط مخصصة.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css"
/>
```

بدلاً من ذلك، يمكنك أيضًا توفير أنماط ما قبل الترقية منخفضة المستوى بشكل مضمّن:

```html
<style>
  bento-sidebar:not([open]) {
    display: none !important;
  }
</style>
```

#### أنماط مخصصة

يمكن إضافة أنماط لمكون `bento-sidebar` باستخدام مكتبة CSS القياسية.

- يمكن تعيين `width` لـ `bento-sidebar` لضبط العرض من قيمة 45 بكسل التي تم تعيينها مسبقًا.
- يمكن تعيين ارتفاع `bento-sidebar` لضبط ارتفاع الشريط الجانبي، حسب الحاجة. وإذا تجاوز العرض 100 نقطة من عرض المنفذ، فسوف يتضمن الشريط الجانبي شريط تمرير رأسي. يكون الارتفاع المعد مسبقًا للشريط الجانبي 100 نقطة من عرض المنفذ ويمكن تجاوزه في CSS لجعله أقصر من ذلك.
- يجري عرض الحالة الحالية للشريط الجانبي عن طريق السمة `open` التي تم تعيينها في علامة `bento-sidebar` عندما يكون الشريط الجانبي مفتوحًا في الصفحة.

```css
bento-sidebar[open] {
  height: 100%;
  width: 50px;
}
```

### اعتبارات تجربة المستخدم

عند استخدام `<bento-sidebar>`، ضع في اعتبارك أن المستخدمين سوف يعرضون صفحتك عادة على جهاز محمول، والذي قد يعرض عنوانًا ثابت الموضع. بالإضافة إلى ذلك، تعرض المستعرضات عادة العنوان الثابت الخاص بها في أعلى الصفحة. وإضافة عنصر ثابت الموضع آخر في أعلى الشاشة سوف يستهلك مساحة كبيرة من شاشة المحمول مع المحتوى الذي لا يوفر للمستخدم معلومات جديدة.

لهذا السبب نوصي بعدم وضع العناصر الوظيفية لفتح الشريط الجانبي في عنوان ثابت بعرض كامل.

- يمكن أن يظهر الشريط الجانبي فقط على الجانب الأيسر أو الأيمن للصفحة.
- أقصى ارتفاع للشريط الجانبي 100 نقطة من ارتفاع عرض المنفذ، وإذا تجاوز الارتفاع 100 نقطة من ارتفاع عرض المنفذ فعندئذ سوف يظهر شريط تمرير رأسي. يتم تعيين الارتفاع الافتراضي على 100 نقطة من ارتفاع عرض المنفذ في مكتبة CSS ويمكن تجاوزه في مكتبة CSS.
- يمكن تعيين عرض الشريط الجانبي وضبطه باستخدام مكتبة CSS.
- يوصى بأن يكون `<bento-sidebar>` *فرعًا مباشرًا* لـ `<body>` للمحافظة على ترتيب DOM المنطقي للوصول بالإضافة إلى تجنب تغيير سلوكه بواسطة عنصر محتوى. لاحظ أن وجود عنصر أصل لـ `bento-sidebar` تم تعيين `z-index` له قد يتسبب في ظهور الشريط الجانبي أسفل العناصر الأخرى (مثل العناوين)، ما قد يعطل وظيفته.

### السمات

#### side

يشير إلى الجانب الذي يجب فتح الشريط الجانبي منه، سواء `left` أو `right`. إذا لم يتم تحديد `side`، سوف تتم وراثة قيمة `side` من علامة `body` السمة`dir` (`ltr` =&gt; `left` , `rtl` =&gt; `right`); في حالة عدم وجود `dir`، يتم تعيين القيمة الافتراضية لـ `side` على `left`.

#### open

تكون هذه السمة موجودة عندما يكون الشريط الجانبي مفتوحًا.

---

## مكون Preact/React

### استيراد عبر npm

```bash
npm install @bentoproject/sidebar
```

```javascript
import React from 'react';
import {BentoSidebar} from '@bentoproject/sidebar/react';
import '@bentoproject/sidebar/styles.css';

function App() {
  return (
    <BentoSidebar>
      <ul>
        <li>Nav item 1</li>
        <li>Nav item 2</li>
        <li>Nav item 3</li>
        <li>Nav item 4</li>
        <li>Nav item 5</li>
        <li>Nav item 6</li>
      </ul>
    </BentoSidebar>
  );
}
```

### التفاعل واستخدام واجهة برمجة التطبيقات (API)

مكونات Bento تفاعلية للغاية من خلال واجهة برمجة التطبيقات الخاصة بها. ويمكن الوصول إلى واجهة برمجة تطبيقات المكون `BentoSidebar` بتمرير `ref`:

```javascript
import React, {createRef} from 'react';
const ref = createRef();

function App() {
  return (
    <BentoSidebar ref={ref}>
      <ul>
        <li>Nav item 1</li>
        <li>Nav item 2</li>
        <li>Nav item 3</li>
        <li>Nav item 4</li>
        <li>Nav item 5</li>
        <li>Nav item 6</li>
      </ul>
    </BentoSidebar>
  );
}
```

#### الإجراءات

تسمح لك واجهة برمجة التطبيقات `BentoSidebar` بتنفيذ الإجراءات التالية:

##### open()

يفتح الشريط الجانبي.

```javascript
ref.current.open();
```

##### close()

يغلق الشريط الجانبي.

```javascript
ref.current.close();
```

##### toggle()

يبدل حالة فتح الشريط الجانبي.

```javascript
ref.current.toggle(0);
```

### المخطط والنمط

يمكن إضافة أنماط لمكون `BentoSidebar` باستخدام مكتبة CSS القياسية.

- يمكن تعيين `width` لـ `bento-sidebar` لضبط العرض من قيمة 45 بكسل التي تم تعيينها مسبقًا.
- يمكن تعيين ارتفاع `bento-sidebar` لضبط ارتفاع الشريط الجانبي، حسب الحاجة. وإذا تجاوز العرض 100 نقطة من عرض المنفذ، فسوف يتضمن الشريط الجانبي شريط تمرير رأسي. يكون الارتفاع المعد مسبقًا للشريط الجانبي 100 نقطة من عرض المنفذ ويمكن تجاوزه في CSS لجعله أقصر من ذلك.

لضمان عرض المكون بالطريقة التي تريدها، تأكد من تطبيق حجم على المكون. ويمكن تطبيق ذلك بشكل مضمن:

```jsx
<BentoSidebar style={% raw %}{{width: 300, height: '100%'}}{% endraw %}>
  <ul>
    <li>Nav item 1</li>
    <li>Nav item 2</li>
    <li>Nav item 3</li>
    <li>Nav item 4</li>
    <li>Nav item 5</li>
    <li>Nav item 6</li>
  </ul>
</BentoSidebar>
```

أو عبر `className`:

```jsx
<BentoSidebar className="custom-styles">
  <ul>
    <li>Nav item 1</li>
    <li>Nav item 2</li>
    <li>Nav item 3</li>
    <li>Nav item 4</li>
    <li>Nav item 5</li>
    <li>Nav item 6</li>
  </ul>
</BentoSidebar>
```

```css
.custom-styles {
  height: 100%;
  width: 300px;
}
```

### اعتبارات تجربة المستخدم

عند استخدام `<bento-sidebar>`، ضع في اعتبارك أن المستخدمين سوف يعرضون صفحتك عادة على جهاز محمول، والذي قد يعرض عنوانًا ثابت الموضع. بالإضافة إلى ذلك، تعرض المستعرضات عادة العنوان الثابت الخاص بها في أعلى الصفحة. وإضافة عنصر ثابت الموضع آخر في أعلى الشاشة سوف يستهلك مساحة كبيرة من شاشة المحمول مع المحتوى الذي لا يوفر للمستخدم معلومات جديدة.

لهذا السبب نوصي بعدم وضع العناصر الوظيفية لفتح الشريط الجانبي في عنوان ثابت بعرض كامل.

- يمكن أن يظهر الشريط الجانبي فقط على الجانب الأيسر أو الأيمن للصفحة.
- أقصى ارتفاع للشريط الجانبي 100 نقطة من ارتفاع عرض المنفذ، وإذا تجاوز الارتفاع 100 نقطة من ارتفاع عرض المنفذ فعندئذ سوف يظهر شريط تمرير رأسي. يتم تعيين الارتفاع الافتراضي على 100 نقطة من ارتفاع عرض المنفذ في مكتبة CSS ويمكن تجاوزه في مكتبة CSS.
- يمكن تعيين عرض الشريط الجانبي وضبطه باستخدام مكتبة CSS.
- يوصى بأن يكون `<BentoSidebar>` *فرعًا مباشرًا* لـ `<body>` للمحافظة على ترتيب DOM المنطقي للوصول بالإضافة إلى تجنب تغيير سلوكه بواسطة عنصر محتوى. لاحظ أن وجود عنصر أصل لـ `bento-sidebar` تم تعيين `z-index` له قد يتسبب في ظهور الشريط الجانبي أسفل العناصر الأخرى (مثل العناوين)، ما قد يعطل وظيفته.

### الخصائص

#### side

يشير إلى الجانب الذي يجب فتح الشريط الجانبي منه، سواء `left` أو `right`. إذا لم يتم تحديد `side`، سوف تتم وراثة قيمة `side` من علامة `body` السمة`dir` (`ltr` =&gt; `left` , `rtl` =&gt; `right`); في حالة عدم وجود `dir`، يتم تعيين القيمة الافتراضية لـ `side` على `left`.
