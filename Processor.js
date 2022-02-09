class Processor {
  static Process(data){
    const res = data.split('\n');
    const rows = res.map(item => item.split(','));

    return rows
  }
}

module.exports = Processor