const { app, BrowserWindow } = require('electron')
// app 是管理应用程序程序的事件生命周期
// BrowserWindow创建和管理应用程序窗口

const path = require('node:path')



const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
    console.log("22222",__dirname)
  
    win.loadFile('index.html')
  }
  

  app.whenReady().then(() => {
    createWindow()
  
    // app.on('activate', () => {
    //   if (BrowserWindow.getAllWindows().length === 0) createWindow()
    // })
    // app.on('window-all-closed', () => {
    //     // 对于非 macOS 系统，在所有窗口关闭时退出应用
    //     if (process.platform !== 'darwin') { // 'darwin' 代表 macOS 平台
    //       app.quit()
    //     }
    //   })
  })


  