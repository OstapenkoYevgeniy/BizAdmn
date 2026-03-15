export {}

declare global {
  interface Window {
    api: {
      app: {
        exit(): void
      }
      settings: {
        getIp(): Promise<string>
        setIp(ip: string): Promise<void>
        getSocket(): Promise<string>   // добавляем метод, который используешь
      }
    }
  }
}
