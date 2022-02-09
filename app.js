const Reader = require('./Reader');
const Processor = require('./Processor');

const leitor = new Reader();
leitor.Read('./clients.csv').then(res => {
  console.log(Processor.Process(res))
}).catch(err => {
  console.log(err)
})