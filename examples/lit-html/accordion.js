import { html, render } from "lit";
import { defineElement as defineBentoAccordion } from "@bentoproject/accordion";

const template = ({ names }) => html`
  <bento-accordion animate>
    ${names.map((name) => html`
      <section>
        <h1>${name}</h1>
        <div>Content for ${name}</div>
      </section>`
    )}
  </bento-accordion>
`;

async function getData() {
  // Fetch some remote data.
  // For this example, we will return some dummy data
  return Promise.resolve({names: ['Alice', 'Bob', 'Charlie', 'David']});
}

async function app() {
  // Define all imported Bento components when you start your app
  defineBentoAccordion();

  render(template(await getData()), document.body);
}

app();
