function main() {
  let sheet = SpreadsheetApp.getActiveSheet();
  let data = sheet.getDataRange().getValues();

  dateDiffWrite(sheet, data);
  emailWrite(sheet, data.length);
}

function dateDiffWrite(sheet, data) {
  for (let i = 1; i < data.length; i++) {
    let dateA = Date.parse(data[i][0]);
    let dateB = Date.parse(data[i][1]);

    let dateDiff = Math.abs(dateA - dateB);
    let days = Math.floor(dateDiff / (24 * 60 * 60 * 1000));
    console.log(days);

    let cell = sheet.getRange(i + 1, 3);
    cell.setValue(days);
  }
};

function emailWrite(sheet, datalength) {
  const URL = 'https://jsonplaceholder.typicode.com/comments';

  let JSONDATA = JSON.parse(UrlFetchApp.fetch(URL));

  for (let i = 1; i < datalength; i++) {
    let cell = sheet.getRange(i + 1, 4);
    cell.setValue(JSONDATA[Math.floor(Math.random() * JSONDATA.length)]["email"]);
  }
}