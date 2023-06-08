import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('add', {
  sendAddTodo: (value) => {
    // ipcRenderer.send('todo:add', value);
    ipcRenderer.invoke('todo:add', value); // invoke expect ipcMain to handle this channel. If do not need ipcMain to resolve, then can use send instead of ipcRender
  },
});
