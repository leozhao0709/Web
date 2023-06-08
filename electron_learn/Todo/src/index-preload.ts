import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('index', {
  receiveAddTodo: (onAddTodo: (newTodo: string) => void) => {
    ipcRenderer.on('todo:add', (event, newTodo) => {
      onAddTodo(newTodo);
    });
  },
  clearTodo: (onClearTodo: () => void) => {
    ipcRenderer.on('todo:clear', onClearTodo);
  },
});
