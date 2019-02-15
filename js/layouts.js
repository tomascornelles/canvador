import { lang } from './config/lang.js'

export const layouts = {
  home: (value) => {
    return `
      <section>
        <h2>${lang.title}</h2>
        <a href="/dm">DM</a><br>
        <input type="text" placeholder="${value}" class="js-input">
        <p></p>
        <p></p>
        <p></p>
      </section>
    `
  }
}
