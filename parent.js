console.log('From parent.js');
console.log(window.location)

// const request = require('request')
// const BrowserWindow = require('electron').remote.BrowserWindow;

const {remote} = require('electron');
console.log(remote)
// const { BrowserWindow } = remote

const btn = document.getElementById('btn');

let win2;
btn.addEventListener('click', ()=>{
    win2 = new BrowserWindow({
        webPreferences:{
            nodeIntegration: true
        }
    });

    win.loadFile('./child.html');

    win2.webContents.openDevTools();
    win2.on('closed' , () => {
        win2 = null
    })
})