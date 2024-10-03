const create = require('./create_logs')
const clear = require('./clear_logs')

const selection = 1 //for testing, change to 0 to create logs and 1 to clear logs

if(selection === 0) {
    create()
} else {
    clear()
}