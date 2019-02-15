export const $ = (elem, a) => {
  let all = (typeof a !== 'undefined')

  if (all) return document.querySelectorAll(elem)
  else return document.querySelector(elem)
}
