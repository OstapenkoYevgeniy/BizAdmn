import { getDB } from '../database/sqlite'

function getSetting(key: string): string | undefined {
  const db = getDB()

  console.log(`get set ${key}`)

  const row = db.prepare('SELECT value FROM settings WHERE key = ?').get(key) as
    | { value: string }
    | undefined

  return row?.value
}

function setSetting(key: string, value: string): void {
  const db = getDB()

  db.prepare(
    `
    INSERT OR REPLACE INTO settings (key, value) VALUES (?, ?)
  `
  ).run(key, value)
}

const appSettings = {
  getIp() {
    return getSetting('ip')
  },
  setIp(value: string) {
    setSetting('ip', value)
  },
  getId() {
    return getSetting('id')
  },
  setId(value: string) {
    setSetting('id', value)
  },
  getPort() {
    return getSetting('port')
  },
  setPort(value) {
    setSetting('port', value)
  }
}

export default appSettings
