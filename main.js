const { app, BrowserWindow } = require('electron')
const config = require('electron-json-config');
let win



function createWindow () {
	win = new BrowserWindow({ width: 1280, height: 720, frame: false })
	win.loadFile('index.html')
	win.setResizable(false)
	win.center()
 //win.webContents.openDevTools()
	win.setMenu(null) 
	win.on('closed', () => {
		win = null
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
