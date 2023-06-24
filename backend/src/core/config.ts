interface Env {
  // Server
  PORT: string;

  // DB
  DB_HOST: string;
  DB_PORT: string;
  DB_DATABASE: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
}

export class Config {
  private static env: Env;

  public static loadEnv(): void {
    Config.env = {
      PORT: process.env.PORT,

      DB_HOST: process.env.DB_HOST,
      DB_PORT: process.env.DB_PORT,
      DB_DATABASE: process.env.DB_DATABASE,
      DB_USERNAME: process.env.DB_USERNAME,
      DB_PASSWORD: process.env.DB_PASSWORD,
    };

    Object.keys(Config.env).forEach((key) => {
      if (Config.env[key as keyof Env] == undefined) {
        throw new Error(`Environment is not defined: ${key}`);
      }
    });
  }

  public static getEnv(key: keyof Env): string {
    if (!Config.env) {
      Config.loadEnv();
    }

    return Config.env[key];
  }
}
