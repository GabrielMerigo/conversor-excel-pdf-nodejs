const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');

const leitor = new Reader();
leitor.Read('./clients.csv').then(res => {
  const users = new Table(Processor.Process(res))
  console.log(users.header)

}).catch(err => {
  console.log(err)
})