import Database from 'better-sqlite3'
import type { Database as SQLiteDatabase } from 'better-sqlite3'
import path from 'path'
import { app } from 'electron'

let db: SQLiteDatabase | null = null

export function getDB(): SQLiteDatabase {
  if (!db) {
    const dbPath = path.join(app.getPath('userData'), 'db.db')

    db = new Database(dbPath)

    db.pragma('journal_mode = WAL')
    db.pragma('synchronous = FULL')
    db.pragma('foreign_keys = ON')
    db.pragma('busy_timeout = 5000')

    console.log('SQLite started:', dbPath)
  }

  return db
}
