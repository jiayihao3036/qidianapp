
const booklist3 = require('./booklist3.json') 
const booklist = require('./booklist.json') 
const booklist2 = require('./booklist2.json') 
const newbook = require('./newbook.json')
const bookul1 = require('./bookul1.json')
const bookul2 = require('./bookul2.json')
const classification1 = require('./classification1.json')
const classification2 = require('./classification2.json')
const Quadratic = require('./Quadratic.json')
const gass = require('./gass')
module.exports = function () {
  return {
    "booklist2":booklist2,
    "booklist3":booklist3,   
    "booklist":booklist,
    "bookul1":bookul1,
    "bookul2":bookul2,
    "classification1":classification1,
     "classification2":classification2,
    "newbook":newbook,
    "Quadratic":Quadratic,
    "gass":gass
    
  }
}
