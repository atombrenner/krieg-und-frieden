import { readFileSync } from 'fs'

// Generate a text with <length> characters and copies it to the clipboard
// npx ts-node -T index.ts <length> | xsel -b

const minChars = Number.parseInt(process.argv[2]) || 100
const text = readFileSync('KriegUndFrieden.txt', 'utf-8').replace(/[»«]/g, '"')
console.log(text.substr(0, minChars))
