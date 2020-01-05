const { Champion } = require("./services/dbService");
const Excel = require("exceljs")
const path = require("path");
const fs = require("fs");

fs.readdir("../spreadsheets/", (err, files) => {
  if (err) console.log(err);

  files.forEach(file => {
    let filePath = path.resolve(__dirname, "../spreadsheets/" + file);
    let wb = new Excel.Workbook();
    wb.xlsx.readFile(filePath).then(function () {
      let champParams = { contributor: {}, counters: { top: [], mid: [], jungle: [], support: [], bot: [] } }
      let metadata = wb.getWorksheet("metadata")
      console.log(file, metadata.getCell('B1').value)
      try {
        if (metadata.getCell('B3').value) champParams.contributor.name = metadata.getCell('B3').value;
        if (metadata.getCell('B4').value) champParams.contributor.twitter = metadata.getCell('B4').value.text;
        if (metadata.getCell('B5').value) champParams.contributor.twitch = metadata.getCell('B5').value.text;
        if (metadata.getCell('B6').value) champParams.contributor.opgg = metadata.getCell('B6').value.text;
        if (metadata.getCell('B7').value) champParams.contributor.youtube = metadata.getCell('B7').value.text;
        if (metadata.getCell('B9').value && metadata.getCell('B9').value.hyperlink) {
          if (metadata.getCell('B8').value) champParams.contributor.discord = metadata.getCell('B8').value.text;
          if (metadata.getCell('B9').value) champParams.contributor.portrait = metadata.getCell('B9').value.text;
          if (metadata.getCell('B10').value) champParams.contributor.bio = metadata.getCell('B10').value;
          if (metadata.getCell('B1').value) champParams.contributor.message = metadata.getCell('B11').value;
        } else {
          if (metadata.getCell('B8').value) champParams.contributor.portrait = metadata.getCell('B8').value.text;
          if (metadata.getCell('B9').value) {
            if (metadata.getCell('B9').value.hyperlink) {
              champParams.contributor.bio = metadata.getCell('B9').value.text;
            }
            else {
              champParams.contributor.bio = metadata.getCell('B9').value;
            }
          }
          if (metadata.getCell('B10').value) {
            if (metadata.getCell('B10').value.hyperlink) {
              champParams.contributor.message = metadata.getCell('B10').value.text;
            }
            else {
              champParams.contributor.message = metadata.getCell('B10').value;
            }
          }
        }
      } catch (e) { console.log(e.message) }
      wb.eachSheet((worksheet) => {
        if (worksheet.name != "metadata") {
          let i = 0;
          worksheet.eachRow(row => {
            i++
            if (i == 1) return;
            let counterChamp = {}
            Champion.findOne({ name: row.getCell('A').value }, (err, champ) => {
              if (err) console.log(err)
              if (champ == null) {
                console.log(row.getCell('A').value, row, file);
                return;
              }
              counterChamp.champion = champ._id
              counterChamp.difficulty = row.getCell('B').value
              counterChamp.comments = row.getCell('C').value;
              if (counterChamp.comments && counterChamp.comments.richText) {
                counterChamp.comments = counterChamp.comments.richText.text;
              }
              champParams.counters[worksheet.name.toLocaleLowerCase()].push(counterChamp)
              if (champParams.counters[worksheet.name.toLocaleLowerCase()].length == worksheet.actualRowCount - 1) {
                Champion.updateOne({ shortname: metadata.getCell('B1').value.toLocaleLowerCase() }, champParams, (err, obj) => {
                  console.log(metadata.getCell('B1').value.toLocaleLowerCase(), file, worksheet.name)
                  if (err) console.log(err.message, file);
                })
              }
            });
          });
        }
      });
    })
      .catch(err => {
        console.log(file, err)
      })
  });
});
