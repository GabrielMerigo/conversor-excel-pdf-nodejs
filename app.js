const Reader = require('./Reader');

const leitor = new Reader();
leitor.Read('./clients.csv').then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})