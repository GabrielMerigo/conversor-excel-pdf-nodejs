const fs = require('fs') // file-system

fs.readFile('./usuario.json', { encoding: 'utf-8' }, (rej, res) => {
  if (rej) {
    console.log('Something wrong...')
  } else {
    const object = JSON.parse(res);
    object.nome = 'Iza'
    object.idade = '19'
    object.peso = '50nm'
    const text = JSON.stringify(object)

    fs.writeFile('./usuario.json', text, (rej, res) => {
      if (rej) {
        console.log('Something wrong...')
      }
    })
  }
})