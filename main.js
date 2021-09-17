console.log('From main.js');

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let win;

function createBrowserWindow() {
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true 
        }
    })

    win.loadFile('./parent.html');

    win.webContents.openDevTools();
    win.on('closed' , ()=>{
        win = null
    })
}

app.on("ready", () => { 
    createBrowserWindow()
})

app.on('window-all-closed',()=>{ 
    if(process.platform!=="darwin") {
        app.quit();
    }
})

app.on('activate',()=>{ 
    if(win === null) {
        createBrowserWindow()
    }
})


