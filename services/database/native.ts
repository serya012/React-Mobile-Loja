// services/database/native.ts
import * as SQLite from 'expo-sqlite';

export interface Database {
  getAllAsync<T>(query: string, params?: any[]): Promise<T[]>;
  getFirstAsync<T>(query: string, params?: any[]): Promise<T | null>;
  runAsync(query: string, params?: any[]): Promise<{ lastInsertRowId: number; changes: number }>;
  withTransactionAsync<T>(callback: () => Promise<T>): Promise<T>;
}

class NativeDatabase implements Database {
  private db: SQLite.SQLiteDatabase;
  
  constructor() {
    this.db = SQLite.openDatabase('promocoes.db');
  }
  
  async getAllAsync<T>(query: string, params?: any[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.db.exec([{ sql: query, args: params }], false, (_, results) => {
        if (results && results[0]) {
          resolve(results[0].rows as T[]);
        } else {
          resolve([]);
        }
      });
    });
  }
  
  async getFirstAsync<T>(query: string, params?: any[]): Promise<T | null> {
    const results = await this.getAllAsync<T>(query, params);
    return results.length > 0 ? results[0] : null;
  }
  
  async runAsync(query: string, params?: any[]): Promise<{ lastInsertRowId: number; changes: number }> {
    return new Promise((resolve, reject) => {
      this.db.exec([{ sql: query, args: params }], false, (_, results) => {
        if (results && results[0]) {
          resolve({
            lastInsertRowId: results[0].insertId || 0,
            changes: results[0].rowsAffected || 0
          });
        } else {
          resolve({ lastInsertRowId: 0, changes: 0 });
        }
      });
    });
  }
  
  async withTransactionAsync<T>(callback: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.db.exec([{ sql: 'BEGIN TRANSACTION', args: [] }], false, async () => {
        try {
          const result = await callback();
          this.db.exec([{ sql: 'COMMIT', args: [] }], false, () => {
            resolve(result);
          });
        } catch (error) {
          this.db.exec([{ sql: 'ROLLBACK', args: [] }], false, () => {
            reject(error);
          });
        }
      });
    });
  }
}

const db = new NativeDatabase();

export const initDatabase = async (): Promise<void> => {
  try {
    await db.runAsync(`
      CREATE TABLE IF NOT EXISTS promocoes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        produto_id TEXT NOT NULL,
        produto_nome TEXT NOT NULL,
        desconto REAL NOT NULL,
        data_inicio TEXT NOT NULL,
        data_fim TEXT NOT NULL,
        data_criacao TEXT NOT NULL,
        status TEXT NOT NULL,
        data_expiracao TEXT
      )
    `);
    
    await db.runAsync(`
      CREATE TABLE IF NOT EXISTS historico_promocoes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        promocao_id INTEGER NOT NULL,
        produto_nome TEXT NOT NULL,
        desconto REAL NOT NULL,
        data_inicio TEXT NOT NULL,
        data_fim TEXT NOT NULL,
        acao TEXT NOT NULL,
        data_acao TEXT NOT NULL
      )
    `);
    console.log('Banco de dados native inicializado com sucesso');
  } catch (error) {
    console.error('Erro ao inicializar banco native:', error);
  }
};

export { db };