import Database from 'better-sqlite3'
import type { Database as SQLiteDatabase } from 'better-sqlite3'
import { app } from 'electron'
import path from 'path'

const dbPath = path.join(app.getPath('userData'), 'db.db')
export const db: SQLiteDatabase = new Database(dbPath)

db.pragma('journal_mode = DELETE')
db.pragma('synchronous = FULL')
db.pragma('foreign_keys = ON')

db.prepare(
  `
      CREATE TABLE IF NOT EXISTS settings (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      )
    `
).run()
