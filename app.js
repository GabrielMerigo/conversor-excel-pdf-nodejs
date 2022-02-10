const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');
const Writer = require('./Writter');

const leitor = new Reader();
const escritor = new Writer();

async function main() {
  const data = await leitor.Read('./clients.csv')
  const users = new Table(Processor.Process(data));
  const html = await HtmlParser.Parser(users);
  escritor.Write(`${Date.now()}.html`, html)

}

main()
