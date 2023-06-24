import { DataSource } from 'typeorm';

import { connectionOptions } from '../config/connection-options';

export class Database {
  public static readonly dataSource = new DataSource(connectionOptions);

  static async initialize(): Promise<void> {
    if (!Database.dataSource.isInitialized) {
      console.log('Connecting to database');

      await Database.dataSource.initialize();

      console.log('Connected to database');
    } else {
      console.log('Database connected already');
    }
  }
}
