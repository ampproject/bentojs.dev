---
id: bento-date-countdown
title: Bento Date Countdown
permalink: "/ru/components/bento-date-countdown/"
short_title: Date Countdown
layout: layouts/component.njk
description: Отображает последовательность обратного отсчета до указанной даты.
---

# Bento Date Countdown

{% heroexample 'bento-date-countdown' %}

Отображает последовательность обратного отсчета до указанной даты. Информацию о возвращаемых параметрах времени см. в [соответствующем разделе](#returned-time-parameters).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Используйте bento-date-countdown в виде веб-компонента или функционального компонента React:</p>   <a class="bd-button" href="#web-component">↓ Веб-компонент</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Веб-компонент

Версия `bento-date-countdown` в виде веб-компонента не поддерживается, так как поддержка `<template>` находится на стадии разработки. Следить за ходом разработки можно [здесь](https://go.amp.dev/issue/36619).

<!--
An older version of this file contains the removed section, though it's incorrect:

https://github.com/ampproject/amphtml/blob/422d171e87571c4d125a2bf956e78e92444c10e8/extensions/amp-date-countdown/1.0/README.md
-->

---

## Компонент для Preact/React

### Импорт через npm

```bash
npm install @bentoproject/date-countdown
```

```javascript
import React from 'react';
import {BentoDateCountdown} from '@bentoproject/date-countdown/react';
import '@bentoproject/date-countdown/styles.css';

function App() {
  return (
    <BentoDateCountdown
      datetime={200000000}
      biggestUnit={'HOURS'}
      render={(data) => (
        <div>
          <span>{`${data.days} ${data.dd} ${data.d}`}</span>
          <br />
          <span>{`${data.hours} ${data.hh} ${data.h}`}</span>
          <br />
          <span>{`${data.minutes} ${data.mm} ${data.m}`}</span>
          <br />
          <span>{`${data.seconds} ${data.ss} ${data.s}`}</span>
        </div>
      )}
    />
  );
}
```

### Интерактивность и использование API

Компонент Bento Date Countdown не имеет императивного API, однако Bento Date Countdown для Preact/React принимает свойство `render`, используемое для рендеринга шаблона потребителя. Значение свойства `render` должно быть функцией, которую компонент Bento Date Countdown для Preact/React может использовать для рендеринга своего шаблона. Обратный вызов `render` снабжается различными связанными с датой параметрами, которые подставляются потребителями в отображаемый шаблон при помощи интерполяции. Дополнительную информацию см. в <a href="#render" data-md-type="link">разделе о `render`</a>.

### Макет и стиль

Компонент Bento Date Countdown для Preact/React позволяет потребителям создавать собственные шаблоны. Эти шаблоны могут использовать встраиваемые стили, теги `<style>` и компоненты Preact/React, которые импортируют собственные таблицы стилей.

### Свойства

#### `datetime`

Обязательное свойство. Содержит дату и время в формате Date, String или Number. При использовании String это должна быть стандартная строка даты ISO 8601 (например, 2017-08-02T15:05:05.000Z) или строка `now`. Если установлено значение `now`, для рендеринга своего шаблона компонент будет использовать время на момент загрузки страницы. Если используется Number, число должно быть представлением времени по стандарту POSIX в миллисекундах.

#### `locale`

Язык локализации единиц, используемых таймером. По умолчанию — `en` (английский). Данное свойство поддерживает все значения, поддерживаемые браузером пользователя.

#### `whenEnded`

Определяет, останавливается ли таймер, достигнув отметки в 0 секунд. `stop` (по умолчанию) означает, что по достижении отметки в 0 секунд таймер останавливается и не пересекает время окончания отсчета. `continue` означает, что после достижения этой отметки таймер продолжает идти.

#### `biggestUnit`

Устанавливает наиболее крупную единицу измерения времени, используемую компонентом `bento-date-countdown` при отображении временных интервалов. Например, предположим, что до окончания отсчета осталось `50 дней и 10 часов`; если атрибут `biggest-unit` установлен в значение `hours`, то счетчик будет отображать `1210 часов`.

- Поддерживаемые значения: `days`, `hours`, `minutes`, `seconds`
- По умолчанию: `days`

#### `countUp`

Это свойство изменяет направление отсчета с обратного на прямое. Это полезно для отображения времени, прошедшего с определенной даты в прошлом. Чтобы отсчет продолжался даже тогда, когда целевая дата находится в прошлом, установите свойство `when-ended` в значение `continue`. Если целевая дата находится в будущем, `bento-date-countdown` будет показывать уменьшающееся (в сторону 0) отрицательное значение.

#### `render`

Необязательный обратный вызов для рендеринга шаблона. В обратный вызов передается объект со свойствами и значениями, связанными с датой из `datetime`.

По умолчанию компонент Bento Date Countdown показывает [дату в форме `localeString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString), соответствующую указанным параметрам locale и localeOption. Подробнее о том, как отображается каждое свойство, см. в разделе [Возвращаемые параметры времени](#returned-time-parameters).

```typescript
function render(dateParams: DateParams): JSXInternal.Element;

interface DateParams {
  day: number;
  dayName: string;
  dayNameShort: string;
  dayPeriod: string;
  dayTwoDigit: string;
  hour: number;
  hour12: number;
  hour12TwoDigit: string;
  hourTwoDigit: string;
  iso: string;
  localeString: string;
  minute: number;
  minuteTwoDigit: string;
  month: number;
  monthName: string;
  monthNameShort: string;
  monthTwoDigit: string;
  second: number;
  secondTwoDigit: string;
  timeZoneName: string;
  timeZoneNameShort: string;
  year: number;
  yearTwoDi: string;
}
```

## Параметры отображения времени

В таблице ниже приводятся форматы для шаблона Mustache.

Формат | Значение
--- | ---
d | дни — 0, 1, 2, ...12, 13 и т. д.
dd | дни — 00, 01, 02, 03 и т. д.
h | часы — 0, 1, 2, ...12, 13 и т. д.
hh | часы — 01, 02, 03 и т. д.
m | минуты — 0, 1, 2, ...12, 13 и т. д.
mm | минуты — 01, 01, 02, 03 и т. д.
s | секунды — 0, 1, 2, ...12, 13 и т. д.
ss | секунды — 00, 01, 02, 03 и т. д.
days | локализованная строка «день», «дня» или «дней»
hours | локализованная строка «час», «часа» или «часов»
minutes | локализованная строка «минута», «минуты» или «минут»
seconds | локализованная строка «секунда», «секунды» или «секунд»

### Примеры форматированных значений

В таблице ниже приводятся примеры форматированных значений в шаблоне Mustache, а также примеры вывода.

Формат | Пример вывода | Примечания
--- | --- | ---
{hh}:{mm}:{ss} | 04:24:06 | -
{h} {hours}, {m} {minutes} и {s} {seconds} | 4 часа, 1 минута и 45 секунд | -
{d} {days} {h}:{mm} | 1 день 5:03 | -
{d} {days} {h} {hours} {m} {minutes} | 50 дней 5 часов 10 минут | -
{d} {days} {h} {hours} {m} {minutes} | 20 дней 5 часов 10 минут | -
{h} {hours} {m} {minutes} | 240 часов 10 минут | `biggest-unit='hours'`
{d} {days} {h} {hours} {m} {minutes} | 50 天 5 小时 10 分钟 | `locale='zh-cn'`
