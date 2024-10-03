const fs = require('fs')
const path = require('path')

const logFolder = path.join(__dirname, 'Logs')

function clearLogs() {
    if (fs.existsSync(logFolder)) {
        const filesToRemove = fs.readdirSync(logFolder)
        console.log("Removing files...")
        filesToRemove.forEach((file) => {
            console.log(file)
            const logFile = path.join(logFolder, file)
            fs.unlinkSync(logFile)
            console.log("Removed !!")
        })
    
        console.log("Removing folder...")
        fs.rmdirSync(logFolder)
        console.log("Removed the log folder!")
    
        }else{
            console.log("There is no log directory...")
        }
}

module.exports = clearLogs