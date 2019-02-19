import { config } from './config.js'
import { es } from './es.js'
import { en } from './en.js'

const idioma = {
  es: es,
  en: en
}
let currentLang = (window.sessionStorage.getItem('lang')) 
  ? window.sessionStorage.getItem('lang')
  : 'es'

export const lang = idioma[currentLang]

export const setLang = (l) => {
  window.sessionStorage.setItem('lang', l)
  return lang
}
