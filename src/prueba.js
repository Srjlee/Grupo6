var XLSX = require("xlsx");

const ExcelAJSON = () => {
    console.log(__dirname)
    const excel = XLSX.readFile(        
        __dirname + "distri.xlsx"
    );

    var nombreHoja = excel.SheetNames; // regresa []
    let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
        return datos;
}





module.exports = {ExcelAJSON}