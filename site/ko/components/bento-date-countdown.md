---
id: bento-date-countdown
title: Bento 날짜 카운트다운
permalink: "/ko/components/bento-date-countdown/"
short_title: 날짜 카운트다운
layout: layouts/component.njk
description: 지정된 날짜까지 카운트다운 시퀀스를 표시합니다.
---

# Bento 날짜 카운트다운

{% heroexample 'bento-date-countdown' %}

지정된 날짜까지 카운트다운 시퀀스를 표시합니다. 사용 가능한 시간 매개변수에 대한 정보는 [반환된 시간 매개변수](#returned-time-parameters) 섹션을 참조하세요.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>bento-date-countdown을 웹 컴포넌트나 React 함수형 컴포넌트로 사용하세요.</p>   <a class="bd-button" href="#web-component">↓ 웹 컴포넌트</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## 웹 컴포넌트

`<template>` 지원이 아직 설계 중이므로 `bento-date-countdown`의 웹 컴포넌트 버전은 지원되지 않습니다. 다음 [이슈](https://go.amp.dev/issue/36619)에서 설계 진행 상황을 추적할 수 있습니다.

<!--
An older version of this file contains the removed section, though it's incorrect:

https://github.com/ampproject/amphtml/blob/422d171e87571c4d125a2bf956e78e92444c10e8/extensions/amp-date-countdown/1.0/README.md
-->

---

## Preact/React 컴포넌트

### npm을 통해 가져오기

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

### 상호작용 및 API 사용

Bento 날짜 카운트다운 컴포넌트에는 명령형 API가 없습니다. 하지만 Bento 날짜 카운트다운 Preact/React 컴포넌트는 사용자의 템플릿을 렌더링하는 `render` 프로퍼티를 허용하지 않습니다. `render` 프로퍼티는 Bento 날짜 카운트다운 Preact/React 컴포넌트가 템플릿을 렌더링하는 데 사용 가능한 함수여야 합니다. `render` 콜백에는 사용자가 렌더링된 템플릿에서 보간할 수 있도록 다양한 날짜 관련 매개변수가 제공됩니다. 자세한 내용은 <a href="#render" data-md-type="link">`render` 프로퍼티 섹션</a>을 참조하세요.

### 레이아웃 및 스타일

사용자는 Bento 날짜 카운트다운 Preact/React 컴포넌트를 통해 템플릿을 렌더링할 수 있습니다. 해당 템플릿에서 인라인 스타일, `<style>` 태그, 자체 스타일시트를 가져오는 Preact/React 컴포넌트를 사용할 수 있습니다.

### 프로퍼티

#### `datetime`

필수 프로퍼티. 날짜와 시간을 날짜, 문자열 또는 숫자로 표시합니다. 문자열인 경우 표준 ISO 8601 날짜 문자열(예: 2017-08-02T15:05:05.000Z) 또는 `now` 문자열이어야 합니다. `now`로 설정하면 페이지가 로드된 시간을 사용하여 템플릿을 렌더링합니다. 숫자인 경우 POSIX 에포크 값(밀리초)이어야 합니다.

#### `locale`

각 타이머 단위의 국제화 언어 문자열입니다. 기본값은 `en`입니다(영어). 이 프로퍼티는 사용자의 브라우저에서 지원하는 모든 값을 지원합니다.

#### `whenEnded`

0초 도달 시 타이머 중지 여부를 지정합니다. 값을 `stop`(기본값)으로 설정하면 타이머가 0초에 중지되어 마지막 날짜를 지나지 않으며, `continue`로 설정하면 타이머가 0초에 도달한 후에도 중지되지 않습니다.

#### `biggestUnit`

`bento-date-countdown` 컴포넌트는 지정된 `biggest-unit` 값을 기반으로 시차를 계산할 수 있습니다. 예를 들어, 남은 시간이 `50 days 10 hours`이라고 가정하면 `biggest-unit`이 `hours`로 설정된 경우 결과는 `1210 hours`가 남은 것으로 표시됩니다.

- 지원되는 값: `days`, `hours`, `minutes`, `seconds`
- 기본값: `days`

#### `countUp`

역방향 카운트다운을 실행하려면 이 프로퍼티를 삽입합니다. 과거의 목표일 이후 경과된 시간을 표시하는 데 유용합니다. 목표일이 과거일 때 카운트다운을 계속 진행하려면 `continue` 값이 포함된 `when-ended` 속성을 삽입해야 합니다. 목표일이 미래일 경우, `bento-date-countdown`에 (0을 향해) 감소하는 음수 값이 표시됩니다.

#### `render`

템플릿을 렌더링하는 콜백 옵션입니다. 콜백에는 `datetime`으로 표시된 날짜와 관련 있는 프로퍼티/값의 객체가 제공됩니다.

기본적으로 Bento 날짜 카운트다운 컴포넌트는 지정된 로케일 및 localeOption에 대한 [날짜의 `localeString` 형식](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)을 표시합니다. 각 속성이 표시되는 방식을 자세히 알아보려면 [반환된 시간 매개변수 섹션](#returned-time-parameters)을 참조하세요.

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

## 반환된 시간 매개변수

다음 표에는 Mustache 템플릿에서 지정할 수 있는 형식이 열거되어 있습니다.

형식 | 의미
--- | ---
d | 일 - 0, 1, 2,...12, 13..무한
dd | 일 - 00, 01, 02, 03..무한
h | 시간 - 0, 1, 2,...12, 13..무한
hh | 시간 - 01, 02, 03..무한
m | 분 - 0, 1, 2,...12, 13..무한
mm | 분 - 01, 01, 02, 03..무한
s | 초 - 0, 1, 2,...12, 13..무한
ss | 초 - 00, 01, 02, 03..무한
days | 일 표시를 위한 국제화 문자열
hours | 시간 표시를 위한 국제화 문자열
minutes | 분 표시를 위한 국제화 문자열
seconds | 초 표시를 위한 국제화 문자열

### 서식이 지정된 값 샘플

다음 표는 Mustache 템플릿에 지정된 서식이 있는 값의 예시와 출력 샘플을 제공합니다.

형식 | 샘플 출력 값 | 특이 사항
--- | --- | ---
{hh}:{mm}:{ss} | 04:24:06 | -
{h} {hours} and {m} {minutes} and {s} {seconds} | 4시간 1분 45초 | -
{d} {days} {h}:{mm} | 1일 5:03 | -
{d} {days} {h} {hours} {m} {minutes} | 50일 5시간 10분 | -
{d} {days} {h} {hours} {m} {minutes} | 20일 5시간 10분 | -
{h} {hours} {m} {minutes} | 240시간 10분 | `biggest-unit='hours'`
{d} {days} {h} {hours} {m} {minutes} | 50 天 5 小时 10 分钟 | `locale='zh-cn'`
