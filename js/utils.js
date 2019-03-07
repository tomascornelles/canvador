export const $ = (elem, a) => {
  let all = (typeof a !== 'undefined')

  if (all) return document.querySelectorAll(elem)
  else return document.querySelector(elem)
}

export const changetab = (tab) => {
  $('.js-tab-content', true).forEach(jsTabContent => {
    jsTabContent.classList.add('hidden')
  })
  console.log(tab)
  $('#' + tab.dataset.tab).classList.remove('hidden')
  $('.js-tab', true).forEach(jsTab => {
    jsTab.classList.remove('tab--active')
  })
  tab.classList.add('tab--active')
}
