import {
  BrowserWindow,
  Menu,
  MenuItemConstructorOptions,
  app,
  ipcMain,
} from 'electron';
import path from 'path';

const isMac = process.platform === 'darwin';

let mainWindow: BrowserWindow;
let addTodoWindow: BrowserWindow | null;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'index-preload.js'),
    },
  });
  mainWindow.loadURL(`file://${__dirname}/../views/index.html`);
  mainWindow.on('closed', () => app.quit());

  app.on('window-all-closed', () => app.quit());

  const mainMenu = Menu.buildFromTemplate(createMainMenuItems());
  Menu.setApplicationMenu(mainMenu);

  // handle is corresponding to ipcRender.invoke by the channel key
  ipcMain.handle('todo:add', (e, newTodo: string) => {
    mainWindow.webContents.send('todo:add', newTodo);
    addTodoWindow?.close();
  });
});

const createNewTodoWindow = () => {
  addTodoWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: 'Add New Todo',
    webPreferences: {
      preload: path.join(__dirname, 'add-preload.js'),
    },
  });

  addTodoWindow.loadURL(`file://${__dirname}/../views/add.html`);
  addTodoWindow.on('close', () => (addTodoWindow = null));
};

const createMainMenuItems = () => {
  const menuItems: MenuItemConstructorOptions[] = [
    {
      label: 'File',
      submenu: [
        {
          label: 'New Todo',
          accelerator: isMac ? 'Command+n' : 'Ctrl+n',
          click(menuItem, browserWindow, event) {
            createNewTodoWindow();
          },
        },
        {
          label: 'clear Todo',
          click(menuItem, browserWindow, event) {
            mainWindow.webContents.send('todo:clear');
          },
        },
        { type: 'separator' },
        {
          label: 'Quit',
          role: 'quit',
        },
      ],
    },
  ];

  if (isMac) {
    menuItems.unshift({ role: 'appMenu' }); // for mac, the first item is the app name
  }

  if (process.env.NODE_ENV !== 'production') {
    menuItems.push({
      label: 'View',
      submenu: [{ role: 'reload' }, { role: 'toggleDevTools' }],
    });
  }

  return menuItems;
};
