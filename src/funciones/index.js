var XLSX = require("xlsx");

const ExcelAJSON = () => {
    const excel = XLSX.readFile(
        "C:\\Users\\pablo\\Downloads\\distri.xlsx"
    );
    var nombreHoja = excel.SheetNames; // regresa []
    let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]])
    console.log(datos);
}

ExcelAJSON()