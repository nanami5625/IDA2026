const { app, BrowserWindow } = require('electron/main')

//ウインドウの作成
const createWindow = () => {
  const win = new BrowserWindow({
      width: 400,
      height: 400,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
  })
  win.loadFile('index.html')
  // ウィンドウ閉じられた時の挙動
  win.on('closed', ()=>{
    app.quit();
  })
}

 // electron の準備ができた時の挙動。基本、createWindow()を呼び出す
 app.whenReady().then(() => {
    createWindow()

// electron がアクティブになった時
   app.on('activate', () => {
     if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })
 })
 
  // ウィンドウが全部閉じられた時の挙動
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})


