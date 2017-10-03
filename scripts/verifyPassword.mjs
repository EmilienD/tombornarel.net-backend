import argon2 from 'argon2'

import conf from '../config'

const hash = conf.password
const passwordToVerify = process.argv[process.argv.length - 1]
argon2.verify(hash, passwordToVerify)
.then(match => {
    console.log(match? 'OK':'KO')
})
.catch(e => console.log('Woops, nope.', e))
