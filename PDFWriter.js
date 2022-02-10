const pdf = require('html-pdf')

class PDFWriter{
  static WritePDF(filename, html){
    pdf.create(html, { }).toFile(filename, () => console.log)
  }
}

module.exports = PDFWriter