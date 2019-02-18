import { config } from './config.js'
import { es } from './es.js'
import { en } from './en.js'

const idioma = {
  es: es,
  en: en
}

export const lang = idioma[config.lang]
