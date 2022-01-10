---
id: bento-date-display
title: Bento Date Display
permalink: "/es/components/bento-date-display/"
short_title: Date Display
layout: layouts/component.njk
description: Muestra datos temporales que se pueden renderizar en su página.
---

# Bento Date Display

{% heroexample 'bento-date-display' %}

Muestra datos temporales que se pueden renderizar en su página. Si se proporcionan [atributos](#attributes) específicos en la etiqueta Bento Date Display, la extensión Bento Date Display devuelve una lista de parámetros temporales, que puede transferir a [una plantilla amp-mustache](../../amp-mustache/amp-mustache.md) para su renderización. Consulte la [lista que aparece a continuación para cada parámetro temporal que se devuelve](#returned-time-parameters).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Utilice bento-date-display como un componente web o un componente funcional de React:</p> <a class="bd-button" href="#web-component">↓ Componente web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## El componente web

No damos soporte a la versión del componente web de `bento-date-display` ya que el soporte de `<template>` aún se está diseñando. Este esfuerzo puede ser rastreado en este [problema](https://go.amp.dev/issue/36619)[.](https://go.amp.dev/issue/36619)

<!--
An older version of this file contains the removed section, though it's incorrect:

https://github.com/ampproject/amphtml/blob/422d171e87571c4d125a2bf956e78e92444c10e8/extensions/amp-date-display/1.0/README.md
-->

---

## El componente Preact/React

### Importar mediante npm

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

### Interactividad y uso de la API

El componente Bento Date Display no dispone de una API imprescindible. Sin embargo, el componente Bento Date Display Preact/React acepta el prop `render` que renderiza la plantilla del consumidor. Esta prop `render` debe ser una función que el componente Bento Date Display Preact/React pueda utilizar para renderizar su plantilla. La función para devolver llamadas `render` recibirá una serie de parámetros relacionados con la fecha para que los consumidores puedan interpolar la plantilla renderizada. Consulte el <a href="#render" data-md-type="link">la sección del prop `render`</a> para obtener más información.

### Diseño y estilo

El componente Bento Date Display de Preact/React permite que los consumidores rendericen sus propias plantillas. Estas plantillas pueden utilizar estilos integrados en el código, etiquetas `<style>`, componentes Preact/React que importan sus propias hojas de estilo.

### Props

#### `datetime`

Prop obligatorio. Denota la fecha y la hora como una fecha, cadena o número. Si es una cadena, debe ser una cadena de fechas estándar ISO 8601 (por ejemplo, 2017-08-02T15:05:05.000Z) o una cadena `now`. Si se establece como `now`, se utilizará la hora en que se cargó la página para renderizar su plantilla. Si es un número, debe ser un valor de tiempo POSIX expresado en milisegundos.

#### `displayIn`

Prop opcional puede ser tanto `"utc"` como `"local"` y de forma predeterminada es `"local"`. En este prop se indica la zona horaria en la que se mostrará la fecha. Si se establece el valor `"utc"`, el componente convertirá la fecha señalada a UTC.

#### `locale`

Una internacionalización en la cadena del idioma para cada unidad del cronómetro. El valor predeterminado es `en` (inglés). Este accesorio es compatible con todos los valores compatibles con el navegador del usuario.

#### `localeOptions`

El objeto `localeOptions` es compatible con todas las opciones incluidas en el parámetro [Intl.DateTimeFormat.options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters) en la que se especifica el diseño del formateo que se utilizará en el formato `localeString`.

Recuerde que si el prop `displayIn` se configura como `utc`, el valor de `localeOptions.timeZone` se convertirá automáticamente a `UTC`.

#### `render`

Devolución de llamada opcional que debe renderizar una plantilla. A la devolución de llamada se le proporcionará un objeto con propiedades/valores relacionados con la fecha expresada en `datetime`.

De forma predeterminada, el componente Bento Date Display mostrará la forma [`localeString` de la Fecha](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) para la configuración regional y localeOption dadas. Consulte la sección [Parámetros de tiempo devueltos](#returned-time-parameters) para obtener más información sobre cómo se mostrará cada propiedad.

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

### Parámetros temporales devueltos

En esta tabla se muestran los formatos que puede establecer en su plantilla de Mustache:

Formato | Significado
--- | ---
day | 1, 2, ...12, 13, etc.
dayName | cadena,
dayNameShort | cadena,
dayPeriod | cadena,
dayTwoDigit | 01, 02, 03, ..., 12, 13, etc.
hour | 0, 1, 2, 3, ..., 12, 13, ..., 22, 23
hour12 | 1, 2, 3, ..., 12, 1, 2, ..., 11, 12
hour12TwoDigit | 01, 02, ..., 12, 01, 02, ..., 11, 12
hourTwoDigit | 00, 01, 02, ..., 12, 13, ..., 22, 23
iso | Un ISO8601 estándar para establecer la fecha en la cadena, por ejemplo, 2019-01-23T15:31:21.213Z,
localeString | Una cadena cuya representación es sensible al idioma.
minute | 0, 1, 2, ..., 58, 59
minuteTwoDigit | 00, 01, 02, ..., 58, 59
month | 1, 2, 3, ..., 12
monthName | Cadena con el nombre de los meses escrito en formato internacional.
monthNameShort | Cadena con el nombre de los meses escrito según las abreviaturas internacionales.
monthTwoDigit | 01, 02, ..., 11, 12
second | 0, 1, 2, ..., 58, 59
secondTwoDigit | 00, 01, 02, ..., 58, 59
timeZoneName | Zona horaria internacional, por ejemplo, `Pacific Daylight Time`
timeZoneNameShort | Abreviatura de la zona horaria internacional, por ejemplo, `PST`
year | 0, 1, 2, ..., 1999, 2000, 2001, etc.
yearTwoDigit | 00, 01, 02, ..., 17, 18, 19, ..., 98, 99