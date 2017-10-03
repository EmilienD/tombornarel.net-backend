import argon2 from 'argon2'
import fs from 'fs'
import path from 'path'

import conf from '../config'

const passwordToHash = process.argv[process.argv.length - 1]
argon2.hash(passwordToHash, {type: argon2.argon2id})
.then(hash => {
  fs.writeFileSync(path.resolve('./config/conf.json'), JSON.stringify({
    password: hash,
    user: conf.user,
  }))
})
.catch(e => console.log('Woops, nope.', e))
