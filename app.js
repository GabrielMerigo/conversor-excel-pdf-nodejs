const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser')

const leitor = new Reader();

async function main() {
  const data = await leitor.Read('./clients.csv')
  const users = new Table(Processor.Process(data));
  const html = await HtmlParser.Parser(users);
  console.log(html)

}

main()
