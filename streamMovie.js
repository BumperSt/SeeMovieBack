// const express = require("express");
// const app = express();
// const OS = require('opensubtitles-api');
// const cors = require('cors');
// const torrentStream = require('torrent-stream')
// const fs = require('fs')
// const { ipcMain } = require('electron')

// let moviePath 
// let movieSize
// let fileOnNow
// let streamOn
// let turnOff 
// let subPath
// const https = require('https')



// server = app.listen(8000, function () {
//     console.log("Listening on port 8000!");
// });

// app.use(cors({
//     origin: '*'
// }));

// const io = require('socket.io')(server, {
//     cors: {
//         origin: '*',
//     }
// });

// io.on("connection", (socket) => {
//     console.log("novo socket")
    
//     socket.on("disconnect", () => {
//         if(streamOn){
//             console.log("dis")
//             streamOn = false
//             turnOff()
//         }
//     })
// })


// startStream = () => {
//     streamOn = true

//     app.use("/movie", function (req, res) {
//         // Ensure there is a range given for the video
//         const range = req.headers.range;
//         // const start = Number(req.query.StartTime)
//         if (!range) {
//             res.status(400).send("Requires Range header");
//         }
//         console.log(moviePath)
//         // get video stats (about 61MB)
//         const videoSize = fs.statSync(moviePath).size;
    
//         // Parse Range
//         // Example: "bytes=32324-"
//         const CHUNK_SIZE = 10 ** 6; // 1MB
//         const start = Number(range.replace(/\D/g, ""));
//         const end = Math.min(start + CHUNK_SIZE, fileOnNow.length - 1);
    
//         // Create headers
//         const contentLength = end - start + 1;
    
//         const headers = {
//             "Content-Range": `bytes ${start}-${end}/${fileOnNow.length}`,
//             "Accept-Ranges": "bytes",
//             "Content-Length": contentLength,
//             "Content-Type": "video/mp4",
//         };
        
//         // HTTP Status 206 for Partial Content
//         res.writeHead(206, headers);
//         streamArquive = fs.createReadStream(moviePath, {start: start, end: end+300000})

//         streamArquive.pipe(res)
//         // create video read     stream for this particular chunk
//         // const videoStream = fs.createReadStream(videoPath, { start, end });
//         // Stream the video chunk to the client
//         turnOff = () => {
//             res.destroy()
//         }
    
//     });
    
    
// }





// app.use("/sub",  (req, res) => {

//     subArquive = fs.createReadStream(subPath)
//     subArquive.pipe(res)

// })







// const GetMovie = (hashMovie, mainWindow, imdbID) => {

//     let initialSize = 0;
//     return new Promise(resolve => {


//         const engine = torrentStream(hashMovie, {
//             path: './movie',
//             tracker: true,
//             trackers: [
//                 'udp://tracker.openbittorrent.com:80',
//                 'udp://tracker.ccc.de:80'
//             ],
//         })

//         engine.on('ready', function () {
//             console.log("Start Torrent")

//             engine.files.forEach(function (file) {

//                 if (thisIsMovie(file)) {
                    
//                     file.select()

//                     fileOnNow = file

//                     mainWindow.webContents.send('movieStart')

//                     moviePath = `movie/${file.path}`    
                    
//                     let stream = fs.createWriteStream(moviePath);


//                     // fs.access(moviePath, (err) => {

//                     //     if (!err) {
//                     //         console.log(file.name + "137")
//                     //         initialSize = fs.statSync(moviePath).size
//                             streamMovieFile(file, resolve)

//                     //     }


//                     // });            

//                 }else{
//                     file.deselect()
//                 }

//             })
//         })

//         engine.on('download', function (pieceIndex) {
//             console.log(pieceIndex)

//             engine.files.forEach(function (file) {
                
//                 console.log(file.name + ' ' + pieceIndex)
                
//                 mainWindow.webContents.send('movieUpdate', {

//                     'percentDownload' :  initialSize + engine.swarm.downloaded,
//                     'downloadSpeed' : engine.swarm.downloadSpeed(),
                    
//                 })
                    

//             })
//         })

//         const streamMovieFile = (file, resolve) => {
//             movieSize = file.length
    
//             resolve({
//                     'path': file.path,
//                     'percentDownload': 0,
//                     'fileLength': movieSize,
//             })
//         }
//     })
// }


// const getSub = (imdbId, mainWindow, file) => {

//     const OpenSubtitles = new OS({
//         useragent:'UserAgent',
//         username: 'bumperst',
//         password: '123456',
//         ssl: true
//     });
    
//     OpenSubtitles.search({
//         filesize: file.length, 
//         filename: file.name,
//         imdbid: imdbId,
//                                     // arbitrary nb. Defaults to 'best'
//     }).then(subtitles => { 
//             mainWindow.webContents.send('legendas', subtitles)

//             ipcMain.handle('selectStr', (evt, sub) => {
//                 let name = sub.filename.replace(".srt", ".vtt")
//                 let subFilePath = "movie/" + file.path.split('\\')[0] + "/subs/" + name
                
//                 fs.access(subFilePath, (err) => {

//                     if (!err) {

//                         subPath = subFilePath
//                         mainWindow.webContents.send('statusLegenda', true)

//                     }else{

//                         const file = fs.createWriteStream(subFilePath);
//                         const request = https.get(sub.vtt, function(response) {
//                             response.pipe(file);
//                             subPath = subFilePath
//                             mainWindow.webContents.send('statusLegenda', true)
//                         });

//                     }

                    
//                 });   
             
//             })
//     }).catch((error) => {
//         console.log("ERROR PORRA")
//         console.error(error)
//     })
// }


// const thisIsMovie = (file) => {

//     let name = file.name.split('.')

//     name = name[name.length - 1]

//     if (name == "mp4" || name == "mkv") {

//         return true

//     }
//     else {

//         return false

//     }

// }

  

// module.exports = {GetMovie}