import { config } from './config.js'
import { es } from './es.js'
const idioma = {
  es: es
}
export const setLang = (lang) => {
  config.lang = lang
}

export const lang = idioma[config.lang]
