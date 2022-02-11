---
id: bento-embedly-card
title: بطاقة Bento Embedly
permalink: "/ar/components/bento-embedly-card/"
short_title: بطاقة Embedly
layout: layouts/component.njk
description: يوفر عناصر مضمنة قابلة للاستجابة والمشاركة باستخدام <a href="http://docs.embed.ly/docs/cards">بطاقات Embedly</a>
---

# بطاقة Bento Embedly

{% heroexample 'bento-embedly-card' %}

يوفر عناصر مضمنة قابلة للمشاركة ومستجيبة باستخدام [بطاقات Embedly](http://docs.embed.ly/docs/cards)

البطاقات هي أسهل طريقة للاستفادة من Embedly. وبالنسبة لأي وسائط، توفر البطاقات تضمينًا تفاعليًا مع تحليلات مضمنة.

إذا كان لديك خطة مدفوعة، فاستخدم المكون `<bentoembedly-key>` أو `<BentoEmbedlyContext.Provider>` لتعيين مفتاح واجهة برمجة التطبيقات لديك. ولا تحتاج سوى إلى مفتاح Bento Embedly واحد في كل صفحة لإزالة العلامة التجارية لـ Embely من البطاقات. وفي صفحتك، يمكنك تضمين مثيل Bento Embedly Card واحدًا أو أكثر.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>استخدم bento-embedly-card كمكون ويب أو مكون React وظيفي:</p>   <a class="bd-button" href="#web-component">↓ مكون ويب</a>   <a class="bd-button" href="#preact%2Freact-component">↓ مكون React / Preact</a>
</div>

## مكون الويب

يجب تضمين كل مكتبة صفحات الأنماط المتتالية (CSS) المطلوبة لمكون Bento لضمان التحميل المناسب وقبل إضافة أنماط مخصصة. أو استخدم أنماط ما قبل الترقية منخفضة المستوى المتوفرة بشكل ضمني. راجع [التخطيط والنمط](#layout-and-style).

### استيراد عبر npm

```bash
npm install @bentoproject/embedly-card
```

```javascript
import {defineElement as defineBentoEmbedlyCard} from '@bentoproject/embedly-card';
defineBentoEmbedlyCard();
```

### تضمين عبر `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css" crossorigin="anonymous">
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
      href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css"
    />
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.js"
    ></script>
    <style>
      bento-embedly-card {
        width: 375px;
        height: 472px;
      }
    </style>
  </head>
  <body>
    <bento-embedly-key value="12af2e3543ee432ca35ac30a4b4f656a">
    </bento-embedly-key>

    <bento-embedly-card
      data-url="https://twitter.com/AMPhtml/status/986750295077040128"
      data-card-theme="dark"
      data-card-controls="0"
    >
    </bento-embedly-card>

    <bento-embedly-card
      id="my-url"
      data-url="https://www.youtube.com/watch?v=LZcKdHinUhE"
    >
    </bento-embedly-card>
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
  href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css"
/>
```

بدلاً من ذلك، يمكنك أيضًا توفير أنماط ما قبل الترقية منخفضة المستوى بشكل مضمّن:

```html
<style>
  bento-embedly-card {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### نوع الحاوية

يحتوي المكون `bento-embedly-card` على نوع حجم مخطط محدد. ولضمان عرض المكون بشكل صحيح، تأكد من تطبيق حجم على المكون وفروعه المباشرة (الشرائح) من خلال مخطط صفحات الأنماط المتتالية المطلوب (مثل مخطط محدد بـ `height` أو `width` أو `aspect-ratio`، أو خصائص أخرى):

```css
bento-embedly-card {
  height: 100px;
  width: 100%;
}
```

### السمات

#### `data-url`

عنوان URL لاسترجاع معلومات التضمين.

#### `data-card-embed`

عنوان URL لمقطع فيديو أو وسائط غنية. استخدمه مع التضمينات الثابتة مثل المقالات، بدلاً من استخدام محتوى الصفحة الثابت في البطاقة، ستقوم البطاقة بتضمين الفيديو أو الوسائط الغنية.

#### `data-card-image`

عنوان URL لصورة ما. ويحدد الصورة المطلوب استخدامها في بطاقات المقالات عندما يشير `data-url` إلى مقال. وليست جميع عناوين URL للصور مدعومة، وإذا لم يتم تحميل الصورة، جرب صورة أو مجال مختلف.

#### `data-card-controls`

تمكين أيقونات المشاركة.

- `0`: تعطيل أيقونات المشاركة.
- `1`: تمكين أيقونات المشاركة

الافتراضي هو `1`.

#### `data-card-align`

محاذاة البطاقة. القيم المحتملة هي `left` و`center` و`right`. القيمة الافتراضية هي `center`.

#### `data-card-recommend`

في حالة دعم التوصيات، فإنه يعطل التوصيات على الفيديو والبطاقات المنسقة. وهذه هي التوصيات التي تم إنشاؤها بواسطة embedly.

- `0`: تعطيل توصيات embedly.
- `1`: تمكين توصيات embedly.

القيمة الافتراضية هي `1`.

#### `data-card-via` (اختياري)

تحديد عبر المحتوى في البطاقة. وهذه طريقة رائعة للقيام بالإسناد.

#### `data-card-theme` (اختياري)

يسمح بإعداد نسق `dark` الذي يغير لون خلفية حاوية البطاقات الرئيسية. استخدم `dark` لتعيين هذا النسق. أما بالنسبة للخلفيات المظلمة فمن الأفضل تحديد هذا النسق لها. والإعداد الافتراضي هو `light`، والذي لا يعين أي لون خلفية لحاوية البطاقات الرئيسية.

#### title (اختياري)

حدد سمة `title` للمكون المطلوب نشره إلى عنصر `<iframe>` الأساسي. والقيمة الافتراضية هي `"Embedly card"`.

#### مثال API

من الناحية البرمجية يؤدي تغيير أي قيم للسمات إلى تحديث العنصر تلقائيًا. على سبيل المثال، من خلال تغيير قيمة `data-url`، يمكنك التبديل إلى عنصر مضمن مختلف:

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
      href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css"
    />
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.js"
    ></script>
    <style>
      bento-embedly-card {
        width: 375px;
        height: 472px;
      }
    </style>
  </head>
  <body>
    <bento-embedly-key value="12af2e3543ee432ca35ac30a4b4f656a">
    </bento-embedly-key>

    <bento-embedly-card
      data-url="https://twitter.com/AMPhtml/status/986750295077040128"
      data-card-theme="dark"
      data-card-controls="0"
    >
    </bento-embedly-card>

    <bento-embedly-card
      id="my-url"
      data-url="https://www.youtube.com/watch?v=LZcKdHinUhE"
    >
    </bento-embedly-card>

    <div class="buttons" style="margin-top: 8px">
      <button id="change-url">Change embed</button>
    </div>

    <script>
      (async () => {
        const embedlyCard = document.querySelector('#my-url');
        await customElements.whenDefined('bento-embedly-card');

        // set up button actions
        document.querySelector('#change-url').onclick = () => {
          embedlyCard.setAttribute(
            'data-url',
            'https://www.youtube.com/watch?v=wcJSHR0US80'
          );
        };
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
npm install @bentoproject/embedly-card
```

```javascript
import {BentoEmbedlyCard} from '@bentoproject/embedly-card/react';
import '@bentoproject/embedly-card/styles.css';

function App() {
  return (
    <BentoEmbedlyContext.Provider
      value={% raw %}{{apiKey: '12af2e3543ee432ca35ac30a4b4f656a'}}{% endraw %}
    >
      <BentoEmbedlyCard url="https://www.youtube.com/watch?v=LZcKdHinUhE"></BentoEmbedlyCard>
    </BentoEmbedlyContext.Provider>
  );
}
```

### المخطط والنمط

#### نوع الحاوية

يحتوي المكون `BentoEmbedlyCard` على نوع حجم مخطط محدد. ولضمان عرض المكون بشكل صحيح، تأكد من تطبيق حجم على المكون وفروعه المباشرة (الشرائح) من خلال مخطط صفحات الأنماط المتتالية المطلوب (مثل مخطط محدد بـ `height` أو `width` أو `aspect-ratio`، أو خصائص أخرى):

```jsx
<BentoEmbedlyCard
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  url="https://www.youtube.com/watch?v=LZcKdHinUhE"
></BentoEmbedlyCard>
```

أو عبر `className`:

```jsx
<BentoEmbedlyCard
  className="custom-styles"
  url="https://www.youtube.com/watch?v=LZcKdHinUhE"
></BentoEmbedlyCard>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}
```

### الخصائص

#### `url`

عنوان URL لاسترجاع معلومات التضمين.

#### `cardEmbed`

عنوان URL لمقطع فيديو أو وسائط غنية. استخدمه مع التضمينات الثابتة مثل المقالات، بدلاً من استخدام محتوى الصفحة الثابت في البطاقة، ستقوم البطاقة بتضمين الفيديو أو الوسائط الغنية.

#### `cardImage`

عنوان URL لصورة ما. ويحدد الصورة المطلوب استخدامها في بطاقات المقالات عندما يشير `data-url` إلى مقال. وليست جميع عناوين URL للصور مدعومة، وإذا لم يتم تحميل الصورة، جرب صورة أو مجال مختلف.

#### `cardControls`

تمكين أيقونات المشاركة.

- `0`: تعطيل أيقونات المشاركة.
- `1`: تمكين أيقونات المشاركة

الافتراضي هو `1`.

#### `cardAlign`

محاذاة البطاقة. القيم المحتملة هي `left` و`center` و`right`. القيمة الافتراضية هي `center`.

#### `cardRecommend`

في حالة دعم التوصيات، فإنه يعطل التوصيات على الفيديو والبطاقات المنسقة. وهذه هي التوصيات التي تم إنشاؤها بواسطة embedly.

- `0`: تعطيل توصيات embedly.
- `1`: تمكين توصيات embedly.

القيمة الافتراضية هي `1`.

#### `cardVia` (اختياري)

تحديد عبر المحتوى في البطاقة. وهذه طريقة رائعة للقيام بالإسناد.

#### `cardTheme` (اختياري)

يسمح بإعداد نسق `dark` الذي يغير لون خلفية حاوية البطاقات الرئيسية. استخدم `dark` لتعيين هذا النسق. أما بالنسبة للخلفيات المظلمة فمن الأفضل تحديد هذا النسق لها. والإعداد الافتراضي هو `light`، والذي لا يعين أي لون خلفية لحاوية البطاقات الرئيسية.

#### title (اختياري)

حدد سمة `title` للمكون المطلوب نشره إلى عنصر `<iframe>` الأساسي. والقيمة الافتراضية هي `"Embedly card"`.
