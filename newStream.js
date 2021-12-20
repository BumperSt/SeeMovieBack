const express = require("express");
const app = express();
const cors = require('cors');
const torrentStream = require('torrent-stream')
const fs = require('fs')
const { ipcMain } = require('electron')
const MovieFolderName = "movies"
const path = require('path');
const streamSubTitle = require('./streamSubtitle')

const Start = (mainWindow) => {
    
    let actualMovie = null
    let turnOff = null
    const mainWindowHere = mainWindow
    
    server = app.listen(8000, function () {
        console.log("Listening on port 8000!");
    });
    
    app.use(cors({
        origin: '*'
    }));
    
    const io = require('socket.io')(server, {
        cors: {
            origin: '*',
        }
    });
    
    if (!fs.existsSync(`./${MovieFolderName}`)){
        fs.mkdirSync(`./${MovieFolderName}`);
    }

    streamSubTitle.Start(mainWindowHere, ipcMain, app)
    
    
    io.on("connection", (socket) => {
        console.log("connect")
        
        socket.on("disconnect", () => {
           console.log("disconnect")
           if(turnOff != null) {
                turnOff()
           }
        })
    })
    
    
    ipcMain.handle('StartTorrent', (evt, object) => {
    
        movieObject = object.movieObject
        torrentObject = object.myTorrent
        let initialSize = 0
    
        var engine = torrentStream(torrentObject.hash,{
            path: `./${MovieFolderName}`,
        });
        
        engine.on('ready', function() {
            engine.files.forEach(function(file) {
                if(ThisIsMovie(file.name)){
                    
                    actualMovie = file
    
                    file.select()
                    movieCompletPath = `./${MovieFolderName}/${file.path}`
                    actualFile = file
                    if (fs.existsSync(movieCompletPath)){
                        initialSize = fs.statSync(movieCompletPath).size
                        mainWindowHere.webContents.send('donwloadMovieUpdate', {
                            'totalSize' : file.length,
                            'percentDownload' :  initialSize + engine.swarm.downloaded,
                            'downloadSpeed' : engine.swarm.downloadSpeed(),
                            'hash' : torrentObject.hash
                        })
                    }

                    StreaMovieFile(file, engine,torrentObject)
                    streamSubTitle.StreamSubTitle(file, movieObject, torrentObject, mainWindowHere)
                }else{
    
                    file.deselect()
    
                }
    
    
            });
        });
    
        engine.on('download', (pieceIndex) => {
            engine.files.forEach(function(file) {
    
                if(file.name == actualMovie.name){
    
                    mainWindowHere.webContents.send('donwloadMovieUpdate', {
                        'pieceIndex' : pieceIndex,
                        'percentDownload' :  initialSize + engine.swarm.downloaded,
                        'downloadSpeed' : engine.swarm.downloadSpeed(),
                        'totalSize' : file.length,
                        'hash' : torrentObject.hash

                
                    })
                }
                
            });
        })
    })
    
    const ThisIsMovie = (name) => {
    
        extesion = path.extname(name)
        
        if( extesion == ".mp4" || extesion == ".mkv"){
            return true
        }else{
            return false 
        }
    
    }
    
    const StreaMovieFile = (file, engine, torrentObject) => {
        app.use(`/movie/${torrentObject.hash}`, function (req, res) {
            // Ensure there is a range given for the video
            const range = req.headers.range;
            // const start = Number(req.query.StartTime)
            if (!range) {
                res.status(400).send("Requires Range header");
            }
            // get video stats (about 61MB)        
            // Parse Range
            // Example: "bytes=32324-"
            const CHUNK_SIZE = 10 ** 6; // 1MB
            const start = Number(range.replace(/\D/g, ""));
            const end = Math.min(start + CHUNK_SIZE, actualMovie.length - 1);
            
            // Create headers
            const contentLength = end - start + 1;
            const headers = {
                "Content-Range": `bytes ${start}-${end}/${actualMovie.length}`,
                "Accept-Ranges": "bytes",
                "Content-Length": contentLength,
                "Content-Type": "video/mp4",
            };
            
            // HTTP Status 206 for Partial Content
            res.writeHead(206, headers);
            let streamFile = file.createReadStream({start: start, end: end})
            streamFile.pipe(res)
            
            turnOff = () => {
                console.log("off")
                engine.destroy()
            
            }
        });
    }


    
}



module.exports = {Start}