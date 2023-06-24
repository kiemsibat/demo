import 'reflect-metadata';
import { app } from './app';
import { Database } from './core/database';
import { Config } from './core/config';



async function bootstrap(): Promise<void> {
  Config.loadEnv();

  await Database.initialize();

  const port = Config.getEnv('PORT');

  app.listen(port, () => {
    console.log('Server is running on port', port);
  });
}

bootstrap().catch((error) => console.log(error));
