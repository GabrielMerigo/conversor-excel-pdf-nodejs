class Processor {
  static Process(data){
    const res = data.split('\n');
    let rows = [];

    res.forEach(item => {
      rows.push(item.split(',')); 
    });

    return rows
  }
}

module.exports = Processor