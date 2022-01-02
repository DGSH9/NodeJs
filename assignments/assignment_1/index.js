function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    const name1 = process.argv;
    return name1[2]
}

function getNameFromEnv() {
    var name2 = process.env.name
    return name2
}

const readline = require('readline');
function getNameFromReadLine() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question("Please Enter Your Name : ", (ans) => {
        getNameFromReadLine(ans);
        rl.close()
    });

}
module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}