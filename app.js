const fs = require("fs");

const filename = process.argv[2];
const ky = process.argv[3];
const prefix = process.argv[4];
let file = [];
fs.readFile(filename, (err, data) => {
  file = JSON.parse(data);
  if (file.length > 0) {
    let sorted = file.sort((a, b) => {
      if (a[ky] > b[ky]) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else return 0;
    });
    fs.writeFile(prefix + filename, JSON.stringify(sorted, null, 4), (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
});
