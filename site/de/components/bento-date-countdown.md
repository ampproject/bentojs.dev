---
id: bento-date-countdown
title: Bento Date Countdown
permalink: "/de/components/bento-date-countdown/"
short_title: Date Countdown
layout: layouts/component.njk
description: Zeigt eine Countdown Sequenz bis zu einem bestimmten Datum an.
---

# Bento Date Countdown

{% heroexample 'bento-date-countdown' %}

Zeigt eine Countdown Sequenz bis zu einem bestimmten Datum an. Informationen zu den verfügbaren Zeitparametern findest du im [Abschnitt zu den zurückgegebenen Zeitparametern](#returned-time-parameters).

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Verwende bento-date-countdown als Webkomponente oder als funktionale React Komponente:</p>   <a class="bd-button" href="#web-component">↓ Webkomponente</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Webkomponente

Wir unterstützen die Webkomponentenversion von `bento-date-countdown` nicht, da die Unterstützung für `<template>` noch in Arbeit ist. Du kannst die Entwicklung in diesem [Issue](https://go.amp.dev/issue/36619) mitverfolgen.

<!--
An older version of this file contains the removed section, though it's incorrect:

https://github.com/ampproject/amphtml/blob/422d171e87571c4d125a2bf956e78e92444c10e8/extensions/amp-date-countdown/1.0/README.md
-->

---

## Preact/React Komponente

### Import via npm

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

### Interaktivität und API Nutzung

Die Komponente "Bento Date Countdown" hat keine imperative API. Die Preact/React Komponente für Bento Date Countdown akzeptiert jedoch die Eigenschaft `render`, die das Template des Consumers rendert. Diese `render` Eigenschaft sollte eine Funktion sein, welche die Preact/React Komponente für Bento Date Countdown verwenden kann, um ihr Template zu rendern. Dem `render` Callback werden zahlreiche datumsbezogene Parameter bereitgestellt, die Consumer im gerenderten Template interpolieren können. Weitere Informationen findest du im <a href="#render" data-md-type="link">Abschnitt `render`</a>.

### Layout und Style

Die Preact/React Komponente für Bento Date Countdown ermöglicht es Consumern, ihre eigenen Templates zu rendern. Diese Templates können Inline Styles, `<style>` Tags und Preact/React Komponenten verwenden, die ihre eigenen Stylesheets importieren.

### Eigenschaften

#### `datetime`

Erforderliche Eigenschaft. Gibt Datum und Uhrzeit als Datum, String oder Zahl an. Bei einem String muss es sich um einen Standard ISO 8601 Datumsstring (z. B. 2017-08-02T15:05:05.000Z) oder den String `now` handeln. Bei Angabe von `now` wird zum Rendern des Templates die Zeit verwendet, zu der die Seite geladen wurde. Soll eine Zahl verwendet werden, so muss ein POSIX Epochenwert in Millisekunden angegeben werden.

#### `locale`

Ein String für die Sprache der Internationalisierung für jede Zeiteinheit. Der Standardwert ist `en` (für Englisch). Diese Eigenschaft unterstützt alle Werte, die vom Browser des Benutzers unterstützt werden.

#### `whenEnded`

Gibt an, ob der Timer gestoppt werden soll, wenn er 0 Sekunden erreicht. Der Wert kann auf `stop` (Standard) gesetzt werden, damit der Timer bei 0 Sekunden stoppt und das letzte Datum nicht überschreitet, oder auf `continue`, damit der Timer nach Erreichen von 0 Sekunden weiterläuft.

#### `biggestUnit`

Ermöglicht der Komponente `bento-date-countdown`, die Zeitdifferenz basierend auf dem angegebenen Wert von `biggest-unit` zu berechnen. Angenommen, es sind noch 50 Tage und 10 Stunden (`50 days 10 hours`) übrig. Wenn der Wert von `biggest-unit` gleich `hours` ist, wird angezeigt, dass noch 1210 Stunden (`1210 hours`) verbleiben.

- Unterstützte Werte: `days`, `hours`, `minutes`, `seconds`
- Standardwert: `days`

#### `countUp`

Verwende diese Eigenschaft, um die Richtung des Countdowns umzukehren und hochzuzählen. Auf diese Weise kannst du die seit einem Zieldatum in der Vergangenheit verstrichene Zeit anzeigen. Um den Countdown fortzusetzen, wenn das Zieldatum in der Vergangenheit liegt, gib auch die Eigenschaft `when-ended` mit dem Wert `continue` an. Wenn das Zieldatum in der Zukunft liegt, zeigt `bento-date-countdown` einen in Richtung 0 abnehmenden negativen Wert an.

#### `render`

Optionaler Callback, der ein Template rendern soll. Dem Callback wird ein Objekt mit Eigenschaften/Werten bereitgestellt, die sich auf das in `datetime` angegebene Datum beziehen.

Standardmäßig zeigt die Komponente "Bento Date Countdown" die [`localeString` Form des Datums ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) für die unter "locale" und "localeOption" angegebenen Werte an. Weitere Informationen zur Anzeige der einzelnen Eigenschaften findest du im [Abschnitt "Zurückgegebene Zeitparameter"](#returned-time-parameters).

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

## Zurückgegebene Zeitparameter

Diese Tabelle enthält die Formate, die du in deinem Moustache Template angeben kannst:

Format | Bedeutung
--- | ---
d | Tag – 0, 1, 2, ...12, 13 ... unendlich
dd | Tag – 00, 01, 02, 03 ... unendlich
h | Stunde – 0, 1, 2, ...12, 13 ... unendlich
hh | Stunde – 01, 02, 03 ... unendlich
m | Minute – 0, 1, 2, ...12, 13 ... unendlich
mm | Minute – 01, 02, 03 ... unendlich
s | Sekunde – 0, 1, 2, ...12, 13 ... unendlich
ss | Sekunde – 00, 01, 02, 03 ... unendlich
days | Internationalisierungsstring für Tag oder Tage
hours | Internationalisierungsstring für Stunde oder Stunden
minutes | Internationalisierungsstring für Minute oder Minuten
seconds | Internationalisierungsstring für Sekunden oder Sekunden

### Beispiele für formatierte Werte

Diese Tabelle enthält Beispiele für formatierte Werte, die in einem Moustache Template vorkommen, sowie ein Beispiel für die Ausgabe:

Format | Beispielausgabe | Anmerkungen
--- | --- | ---
{hh}:{mm}:{ss} | 04:24:06 | -
{h} {hours} und {m} {minutes} und {s} {seconds} | 4 Stunden und 1 Minute und 45 Sekunden | -
{d} {days} {h}:{mm} | 1 Tag 5:03 | -
{d} {days} {h} {hours} {m} {minutes} | 50 Tage 5 Stunden 10 Minuten | -
{d} {days} {h} {hours} {m} {minutes} | 20 Tage 5 Stunden 10 Minuten | -
{h} {hours} {m} {minutes} | 240 Stunden 10 Minuten | `biggest-unit='hours'`
{d} {days} {h} {hours} {m} {minutes} | 50 天 5 小时 10 分钟 | `locale='zh-cn'`
