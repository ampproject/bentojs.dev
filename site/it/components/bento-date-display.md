---
id: bento-date-display
title: Bento Date Display
permalink: "/it/components/bento-date-display/"
short_title: Visualizzazione data
layout: layouts/component.njk
description: Visualizza le informazioni relative a data e orario utilizzabili per il rendering nelle tue pagine.
---

# Bento Date Display

{% heroexample 'bento-date-display' %}

Il componente permette di visualizzare informazioni sulla data nella tua pagina. Inserendo gli opportuni [attributi](#attributes) nel tag Bento Date Display, l'estensione Bento Date Display restituisce un elenco di parametri relativi a data e orario, che possono essere trasferiti a [un modello amp-moustache](../../amp-mustache/amp-mustache.md) per il rendering. Di seguito è riportato [l'elenco di ciascun parametro restituito](#returned-time-parameters).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Usare bento-date-display come componente web o componente funzionale React:</p> <a class="bd-button" href="#web-component">↓ Componente Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Componente Web

Non supportiamo la versione come componente web di `bento-date-display` poiché il `<template>` è ancora in fase di progettazione. Gli aggiornamenti di questa attività sono riportati in questo [articolo](https://go.amp.dev/issue/36619).

<!--
An older version of this file contains the removed section, though it's incorrect:

https://github.com/ampproject/amphtml/blob/422d171e87571c4d125a2bf956e78e92444c10e8/extensions/amp-date-display/1.0/README.md
-->

---

## Componente Preact/React

### Importazione tramite npm

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

### Interattività e utilizzo dell'API

Il componente Bento Date Display non ha un'API imperativa. Tuttavia, il componente Preact/React di Bento Date Display permette di accettare un oggetto `render` che esegue il rendering del modello dell'utente. Quest'oggetto `render` deve essere una funzione utilizzabile dal componente Preact/React Bento Date Display per eseguire il rendering del suo modello. Alla richiamata di `render` verrà fornita una serie di parametri relativi alla data che gli utenti potranno interpolare nel rendering del modello. Consultare la <a href="#render" data-md-type="link">sezione dell'oggetto `render`</a> per maggiori informazioni.

### Layout e stile

Il componente Preact/React Bento Date Display consente agli utenti di eseguire il rendering dei propri modelli. Questi modelli possono utilizzare stili inline, tag `<style>` o componenti Preact/React che importano i propri fogli di stile.

### Oggetti

#### `datetime`

Oggetto obbligatorio. Indica la data e l'ora in formato Data, Stringa o Numero. Il formato Stringa deve essere una stringa di data standard ISO 8601 (es. 2017-08-02T15:05:05.000Z) o la stringa `now`. Se impostato su `now`, l'oggetto utilizzerà il tempo di caricamento della pagina per eseguire il rendering del suo modello. Il formato Numero deve essere un valore che indica una durata POSIX in millisecondi.

#### `displayIn`

Oggetto opzionale che può valere `"utc"` o `"local"` con valore predefinito `"local"`. Esso indica in quale fuso orario visualizzare la data. Se impostato sul valore `"utc"`, il componente convertirà la data indicata in UTC.

#### `locale`

Una stringa che permette di usare lingue internazionali per ogni unità del timer. Il valore predefinito è `en` (per l'inglese). Questo oggetto supporta tutti i valori consentiti dal browser dell'utente.

#### `localeOptions`

L'oggetto `localeOptions` supporta tutte le opzioni disponibili nel parametro [Intl.DateTimeFormat.options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters) che indica lo stile di formattazione da utilizzare per il formato `localeString`.

Nota: se l'oggetto `displayIn` è impostato su `utc`, il valore di `localeOptions.timeZone` verrà automaticamente convertito in `UTC`.

#### `render`

Richiamata opzionale che dovrebbe eseguire il rendering di un modello. La richiamata verrà effettuata fornendole un oggetto con proprietà/valori relativi alla data espressa in `datetime` .

Per impostazione predefinita, il componente Bento Date Display visualizzerà la [data in formato `localeString` ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) per la impostazioni locali e localeOption indicate. Consultare  la [sezione Parametri di orario restituiti](#returned-time-parameters) per maggiori dettagli su come verrà visualizzata ciascuna proprietà.

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

### Parametri di orario restituiti

Questa tabella elenca i formati che si possono indicare nel proprio modello Mustache:

Formato | Significato
--- | ---
day | 1, 2, ...12, 13, ecc.
dayName | stringa,
dayNameShort | stringa,
dayPeriod | stringa,
dayTwoDigit | 01, 02, 03, ..., 12, 13, ecc.
hour | 0, 1, 2, 3, ..., 12, 13, ..., 22, 23
hour12 | 1, 2, 3, ..., 12, 1, 2, ..., 11, 12
hour12TwoDigit | 01, 02, ..., 12, 01, 02, ..., 11, 12
hourTwoDigit | 00, 01, 02, ..., 12, 13, ..., 22, 23
iso | Una stringa di data in formato standard ISO8601, ad es. 2019-01-23T15:31:21.213Z,
localeString | Una stringa con una rappresentazione dipendente dalla lingua.
minute | 0, 1, 2, ..., 58, 59
minuteTwoDigit | 00, 01, 02, ..., 58, 59
month | 1, 2, 3, ..., 12
monthName | Stringa del nome del mese in lingue internazionali.
monthNameShort | Stringa del nome breve del mese in lingue internazionali.
monthTwoDigit | 01, 02, ..., 11, 12
second | 0, 1, 2, ..., 58, 59
secondTwoDigit | 00, 01, 02, ..., 58, 59
timeZoneName | Fuso orario in formato internazionale, come `Pacific Daylight Time`
timeZoneNameShort | Fuso orario abbreviato in formato internazionale, come `PST`
year | 0, 1, 2, ..., 1999, 2000, 2001, ecc.
yearTwoDigit | 00, 01, 02, ..., 17, 18, 19, ..., 98, 99
