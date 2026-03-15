export interface IElectronAPI {
  settings: {
    getSocket: () => Promise<string>;
    // Добавьте другие методы API по мере необходимости
    setSocket?: (socket: string) => Promise<void>;
  };
}

declare global {
  interface Window {
    api: IElectronAPI;
  }
}
