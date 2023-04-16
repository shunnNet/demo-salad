// prepare.js
// prepare will run right after npm install
import husky from 'husky'

const isCi = process.env.CI !== undefined
if (!isCi) {
  console.log('install husky hook')
  console.log('this will configure git config core.hooksPath to .husky')
  husky.install()
}
