const fs = require('fs')
const path = require('path')

const logFolder = path.join(__dirname, 'Logs')

function create_logs() {
    if(!fs.existsSync(logFolder)) {
        console.log("Making Log directory")
        fs.mkdirSync(logFolder)
        console.log("Created!")
    }
    
    for (let f = 0; f < 10; f++) {
        const logName = `log${f}.txt`
        console.log("Creating " + logName + "...")
        const logFile = path.join(logFolder, logName)
        const logText = "Log text created!"
        fs.writeFileSync(logFile, logText)
        console.log("File created !!")
    }
}

module.exports = create_logs