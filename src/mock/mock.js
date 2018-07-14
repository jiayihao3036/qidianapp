
const booklist3 = require('./booklist3.json') 
const booklist = require('./booklist.json') 
const booklist2 = require('./booklist2.json') 
const newbook = require('./newbook.json')
module.exports = function () {
  return {
    "booklist2":booklist2,
    "booklist3":booklist3,   
    "booklist":booklist,
    "newbook":newbook
    
  }
}
