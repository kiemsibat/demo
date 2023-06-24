import { DataSource, DataSourceOptions } from 'typeorm';
import * as entities from '../entities/index';
import * as migrations from '../migrations/index';
import { Config } from '../core/config';

export const connectionOptions: DataSourceOptions = {
  type: 'postgres',
  host: Config.getEnv('DB_HOST'),
  port: Number(Config.getEnv('DB_PORT')),
  database: Config.getEnv('DB_DATABASE'),
  username: Config.getEnv('DB_USERNAME'),
  password: Config.getEnv('DB_PASSWORD'),
  entities: Object.values(entities),
  migrations: Object.values(migrations),
  logging: ['query', 'error'],
  poolSize: 1,
  extra: {
    connectionLimit: 1,
  },
};

const dataSource = new DataSource(connectionOptions);

export default dataSource;
