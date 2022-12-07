import { calculate, keyClick, keyPress, clear } from "./calculate.js"
import { copy } from "./copy.js"
import { themeSwitcher } from "./themeSwitcher.js"

document.querySelector('body').addEventListener('click', () => document.getElementById('input').focus())
document.getElementById('input').addEventListener('keydown', keyPress )
document.querySelectorAll('.charKey').forEach( keyClick )
document.getElementById('clear').addEventListener('click', clear)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copyToClipboard').addEventListener('click', copy)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)

