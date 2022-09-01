function formatChapterBible(msg){
    const regexVerseNumber = /\d+\./gi;  
    var newMsg = msg.replace(regexVerseNumber, "###### $& \n");
    newMsg = newMsg.replace(/[#]{6}\s\d+\./gi, (item) => {
        console.log(item)
        return item.replace('.', '')
    })
    return newMsg;
}
module.exports = formatChapterBible;