const electron = require('electron')

const { app } = electron
const { BrowserWindow } = electron
const fs = require('fs')
const path = require('path')
const isDev = require('electron-is-dev')
const { ipcMain } = require('electron')
const streamMovie = require('./newStream')


let mainWindow


function createWindow() {


  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },

    
  })
 
  // mainWindow.loadFile(
  //   'src/index.html'
  // )

  mainWindow.loadURL('http://localhost:3000/');
  streamMovie.Start(mainWindow)
  
  // if (isDev) {
  //   mainWindow.webContents.openDevTools()
  // }

  mainWindow.on('closed', () => {
    mainWindow = null
  })

}

app.on('ready',createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {

  streamMovie.Start(mainWindow)
  if (mainWindow === null) {
    createWindow()
  }
})



// ipcMain.handle('startMovie', async (event, movieHash, imdbID) => {

//   const response = await express.GetMovie(movieHash, mainWindow, imdbID)
//   return response

// })

