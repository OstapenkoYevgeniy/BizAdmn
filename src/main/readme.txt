electron
 ├── main                # основной процесс Electron
 │   ├── ipc
 │   │   ├── sales.ipc.ts
 │   │   ├── products.ipc.ts
 │   │   └── settings.ipc.ts
 │   │
 │   ├── services
 │   │   ├── sales.service.ts
 │   │   ├── product.service.ts
 │   │   ├── settings.service.ts
 │   │   └── printer.service.ts
 │   │
 │   ├── database
 │   │   ├── sqlite.ts
 │   │   ├── migrations
 │   │   └── repositories
 │   │       ├── sales.repo.ts
 │   │       ├── product.repo.ts
 │   │       └── settings.repo.ts
 │   │
 │   └── app.ts
 │
 ├── preload
 │   └── api.ts
 │
 └── renderer (React)
     ├── pages
     ├── components
     ├── hooks
     ├── store
     └── services


2. Слои системы
1️⃣ Renderer (React)

Только UI.

Никакого:

SQLite

Node API

filesystem

Работа через API preload.

Пример:

window.api.sales.createSale(data)

2️⃣ Preload (bridge)

Безопасный мост между React и Electron.

contextBridge.exposeInMainWorld

contextBridge.exposeInMainWorld('api', {
  sales: {
    createSale: (data) => ipcRenderer.invoke('sales:create', data),
  },
})

3️⃣ IPC слой

Обработчики сообщений между UI и backend.

ipcMain.handle()


Пример:

ipcMain.handle('sales:create', async (_, sale) => {
  return salesService.createSale(sale)
})
