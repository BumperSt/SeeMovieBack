const OS = require('opensubtitles-api');
const MovieFolderName = "movies"
const fs = require('fs')
const https = require('https')
const srt2vtt = require('srt-to-vtt')
 

const StreamSubTitle = (file, movieObject, torrentObject, mainWindow) => {
    const OpenSubtitles = new OS({
        useragent:'UserAgent',
        username: 'bumperst',
        password: '123456',
        ssl: true
    });
    
    OpenSubtitles.search({
        filesize: file.length, 
        filename: file.name,
        imdbid: movieObject.imdb_code,
                                   
    }).then(subtitles => { 
        mainWindow.webContents.send('setSubtiltes', subtitles)

    }).catch((error) => {
        console.log("ERROR PORRA")
        console.error(error)
    })
}

const Start = (mainWindow, ipcMain, app) => {    
    ipcMain.handle('selectSubtitle', (evt, sub) => {
        let name = sub.filename
        let subFilePath = `${MovieFolderName}/` + actualFile.path.split('\\')[0] + "/subs/"

        if (!fs.existsSync(subFilePath)){
            fs.mkdirSync(subFilePath);
        }

        subFilePath = subFilePath + name
        let vttPath = subFilePath.replace('srt', 'vtt')

        fs.access(subFilePath, (err) => {

            if (!err) {
                mainWindow.webContents.send('getSubtitles', torrentObject.hash)
            }else{
                const subFile = fs.createWriteStream(subFilePath);
                const request = https.get(sub.utf8, function(response) {
                    response.pipe(subFile);
                    subFile.on('finish', () =>{
                        fs.createReadStream(subFilePath)
                            .pipe(srt2vtt())
                            .pipe(fs.createWriteStream(vttPath))
                    })
                    mainWindow.webContents.send('getSubtitles', torrentObject.hash)
                });
            }

            app.use(`/sub/${torrentObject.hash}`,  (req, res) => {
                subArquive = fs.createReadStream(vttPath)
                subArquive.pipe(res)
            })
            
        });   
        
    })
}

module.exports = {Start, StreamSubTitle}