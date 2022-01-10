---
id: bento-date-display
title: Bento 날짜 표시
permalink: "/ko/components/bento-date-display/"
short_title: 날짜 표시
layout: layouts/component.njk
description: 페이지에서 렌더링할 수 있는 시간 데이터를 표시합니다.
---

# Bento 날짜 표시

{% heroexample 'bento-date-display' %}

페이지에서 렌더링할 수 있는 시간 데이터를 표시합니다. Bento 날짜 표시 확장 프로그램은 Bento 날짜 표시 태그에서 특정한 [속성](#attributes)을 제공하여 렌더링을 위해 [amp-mustache 템플릿](../../amp-mustache/amp-mustache.md)에 전달할 수 있는 시간 매개변수 목록을 반환합니다. [반환된 각 시간 매개변수 목록을 아래에서](#returned-time-parameters) 확인할 수 있습니다.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>bento-date-display을 웹 컴포넌트나 React 함수형 컴포넌트로 사용하세요.</p>   <a class="bd-button" href="#web-component">↓ 웹 컴포넌트</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## 웹 컴포넌트

`<template>` 지원이 아직 설계 중이므로 `bento-date-display`의 웹 컴포넌트 버전은 지원되지 않습니다. 다음 [이슈](https://go.amp.dev/issue/36619)에서 설계 진행 상황을 추적할 수 있습니다.

<!--
An older version of this file contains the removed section, though it's incorrect:

https://github.com/ampproject/amphtml/blob/422d171e87571c4d125a2bf956e78e92444c10e8/extensions/amp-date-display/1.0/README.md
-->

---

## Preact/React 컴포넌트

### npm을 통해 가져오기

```bash
npm install @bentoproject/date-display
```

```javascript
import React from 'react';
import {BentoDateDisplay} from '@bentoproject/date-display/react';
import '@bentoproject/date-display/styles.css';

function App() {
  return (
    <BentoDateDisplay
      datetime={dateTime}
      displayIn={displayIn}
      locale={locale}
      render={(date) => (
        <div>{`ISO: ${date.iso}; locale: ${date.localeString}`}</div>
      )}
    />
  );
}
```

### 상호작용 및 API 사용

Bento 날짜 표시 컴포넌트에는 명령형 API가 없습니다. 하지만 Bento 날짜 표시 Preact/React 컴포넌트는 사용자의 템플릿을 렌더링하는 `render` 프로퍼티를 허용하지 않습니다. `render` 프로퍼티는 Bento 날짜 표시 Preact/React 컴포넌트가 템플릿을 렌더링하는 데 사용 가능한 함수여야 합니다. `render` 콜백에는 사용자가 렌더링된 템플릿에서 보간할 수 있도록 다양한 날짜 관련 매개변수가 제공됩니다. 자세한 내용은 <a href="#render" data-md-type="link">`render` 프로퍼티 섹션</a>을 참조하세요.

### 레이아웃 및 스타일

사용자는 Bento Date Display Preact/React 컴포넌트를 통해 자신의 템플릿을 렌더링할 수 있습니다. 해당 탬플릿에서 인라인 스타일, `<style>` 태그, 자체 스타일시트를 가져오는 Preact/React 컴포넌트를 사용할 수 있습니다.

### 프로퍼티

#### `datetime`

필수 프로퍼티. 날짜와 시간을 날짜, 문자열 또는 숫자로 표시합니다. 문자열인 경우 표준 ISO 8601 날짜 문자열(예: 2017-08-02T15:05:05.000Z) 또는 `now` 문자열이어야 합니다. `now`로 설정하면 페이지가 로드된 시간을 사용하여 템플릿을 렌더링합니다. 숫자인 경우 POSIX 에포크 값(밀리초)이어야 합니다.

#### `displayIn`

`"utc"` 또는 `"local"`이며 기본값이 `"local"`일 수 있는 선택적 프로퍼티입니다. 이 프로퍼티는 날짜를 표시할 시간대를 나타냅니다. `"utc"` 값으로 설정하면 컴포넌트는 지정된 날짜를 UTC로 변환합니다.

#### `locale`

각 타이머 단위의 국제화 언어 문자열입니다. 기본값은 `en`입니다(영어). 이 프로퍼티는 사용자의 브라우저에서 지원하는 모든 값을 지원합니다.

#### `localeOptions`

`data-options-*`는 <code>localeString</code> 형식에 사용할 형식 스타일을 지정하는 <a class="" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters">Intl.DateTimeFormat.options</a> 매개변수의 모든 옵션을 지원합니다.

`displayIn` 프로퍼티가 `utc`로 설정된 경우 `localeOptions.timeZone`의 값이 `UTC`로 자동 변환됩니다.

#### `render`

템플릿을 렌더링하는 콜백 옵션입니다. 콜백에는 `datetime`으로 표시된 날짜와 관련 있는 프로퍼티/값의 객체가 제공됩니다.

기본적으로 Bento 날짜 표시 컴포넌트는 지정된 로케일 및 localeOption에 대한 [날짜의 `localeString` 형식](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)을 표시합니다. 각 속성이 표시되는 방식을 자세히 알아보려면 [반환된 시간 매개변수 섹션](#returned-time-parameters)을 참조하세요.

```typescript
(dateParams: DateParams) => JSXInternal.Element
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

### 반환된 시간 매개변수

다음 표에는 Mustache 템플릿에서 지정할 수 있는 형식이 열거되어 있습니다.

형식 | 의미
--- | ---
day | 1, 2, ...12, 13 등
dayName | 문자열
dayNameShort | 문자열
dayPeriod | 문자열
dayTwoDigit | 01, 02, 03, ..., 12, 13 등
hour | 0, 1, 2, 3, ..., 12, 13, ..., 22, 23
hour12 | 1, 2, 3, ..., 12, 1, 2, ..., 11, 12
hour12TwoDigit | 01, 02, ..., 12, 01, 02, ..., 11, 12
hourTwoDigit | 00, 01, 02, ..., 12, 13, ..., 22, 23
iso | 표준 ISO8601 날짜 문자열(예: 2019-01-23T15:31:21.213Z)
localeString | 언어에 따라 표현된 문자열
minute | 0, 1, 2, ..., 58, 59
minuteTwoDigit | 00, 01, 02, ..., 58, 59
month | 1, 2, 3, ..., 12
monthName | 국제화된 월 이름 문자열
monthNameShort | 국제화된 월 이름 약자 문자열
monthTwoDigit | 01, 02, ..., 11, 12
second | 0, 1, 2, ..., 58, 59
secondTwoDigit | 00, 01, 02, ..., 58, 59
timeZoneName | 국제화된 시간대(예: `Pacific Daylight Time`)
timeZoneNameShort | 국제화된 시간대 약자(예: `PST`)
year | 0, 1, 2, ..., 1999, 2000, 2001 등
yearTwoDigit | 00, 01, 02, ..., 17, 18, 19, ..., 98, 99