export const $ = (elem, a) => {
  let all = (typeof a !== 'undefined')

  if (all) return document.querySelectorAll(elem)
  else return document.querySelector(elem)
}

export const changetab = (tab, group) => {
  $(group + '-content', true).forEach(jsTabContent => {
    jsTabContent.classList.add('hidden')
  })
  $('#' + tab.dataset.tab).classList.remove('hidden')
  $(group, true).forEach(jsTab => {
    jsTab.classList.remove('tab--active')
  })
  tab.classList.add('tab--active')
}
