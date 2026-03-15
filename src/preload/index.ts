import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('api', {
  app: {
    exit: () => ipcRenderer.send('exit')
  },

  settings: {
    getIp: () => ipcRenderer.invoke('settings:getIp'),

    setIp: (ip: string) => ipcRenderer.invoke('settings:setIp', ip)
  }
})

// contextBridge.exposeInMainWorld('electronAPI', {
//   exitApp: () => {
//     ipcRenderer.send('exit')
//     console.log('fuck')
//   }
// })
//
// // Custom APIs for renderer
// const api = {
//   settings: appSettings
// }
//
// // Use `contextBridge` APIs to expose Electron APIs to
// // renderer only if context isolation is enabled, otherwise
// // just add to the DOM global.
// if (process.contextIsolated) {
//   try {
//     contextBridge.exposeInMainWorld('electron', electronAPI)
//     contextBridge.exposeInMainWorld('api', api)
//   } catch (error) {
//     console.error(error)
//   }
// } else {
//   // @ts-ignore (define in dts)
//   window.electron = electronAPI
//   // @ts-ignore (define in dts)
//   window.api = api
// }
