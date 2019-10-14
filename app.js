var gplay = require('google-play-scraper');
/* const otc = require('objects-to-csv');
const fastcsv = require('fast-csv');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'out.csv',
  headers: true,
}); */
var txt =  new Object();
//var data = new Object();
const fs = require('fs');
//var details = {id: "2222", appId: "2223", title: "2224", url: "2225"};


//Working code

details = gplay.search({
term: 'child caregiver',
num: 100,
country : 'us',
lang: 'lang',
price: 'all'
})
.then(data => { fs.writeFile('output.json', (JSON.stringify(data)))})
.catch(console.log);
