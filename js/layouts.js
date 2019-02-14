export const layout = {
  home: (value) => {
    return `
      <section>
        <a href="/dm">DM</a><br>
        <input type="text" placeholder="${value}" class="js-input">
      </section>
    `
  }
}
