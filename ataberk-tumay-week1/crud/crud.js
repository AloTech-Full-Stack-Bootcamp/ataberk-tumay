const fs = require("fs");

fs.mkdir("odev", { recursive: true }, (err) => {
  if (err) throw err;
});


fs.appendFile('./odev/employees.json', '{"name": "Employee 1 Name", "salary": 2000}', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

fs.readFile('./odev/employees.json', (err, data) => {
  if (err) throw err;
  console.log((JSON.parse(data)));
  console.log("read");
});



fs.readFile('./odev/employees.json', (err, data) => {
  if (err) throw err;
  let dataRaw = {"name": "Employee 1 Name", "salary": 5000};
  let newData = JSON.stringify(dataRaw);
  fs.writeFile('./odev/employees.json', newData, (err) => {
    if (err) throw err;
    console.log('The file has been saved!'+ newData);
  });
  fs.unlink('odev/employees.json', (err) => {
    if (err) throw err;
    console.log('path/file.txt was deleted');
  });
});

