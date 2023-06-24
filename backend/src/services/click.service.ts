import { ClickedEntity } from "../entities/clicked.entity";
import { Database } from "../core/database";

export class ClickService {
  public static async click(): Promise<void> {
    await Database.dataSource.getRepository(ClickedEntity).save({});
  }

  public static async getClicked(): Promise<number> {
    return await Database.dataSource.getRepository(ClickedEntity).count();
  }
}
