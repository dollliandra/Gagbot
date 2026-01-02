const fs = require('fs')
const path = require('path');
const admZip = require('adm-zip');
const { getTimestringForZip } = require("./functions/timefunctions");

try {
    let filepath = `Z:\\Data\\Codeprojects\\NodeJs\\GagbotFiles`;
    let dest = path.resolve(filepath, "backups");
    let files = fs.readdirSync(filepath).filter(file => file.endsWith('.txt'));

    let zip = new admZip();

    let timestring = getTimestringForZip();

    files.forEach(f => {
        zip.addLocalFile(path.resolve(filepath, f));
    })

    zip.writeZip(path.resolve(dest, `backup-${timestring}.zip`));

    console.log(`Completed zip .\\backup\\backup-${timestring}.zip`)
}
catch (err) {
    console.log(err)
}