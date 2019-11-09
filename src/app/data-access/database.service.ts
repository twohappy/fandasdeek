import { Injectable } from "@angular/core";
import { Connection, ConnectionOptions, createConnection } from "typeorm";
import { Settings } from "./repositories/settings";
import { User } from "./entities/user.entity";

@Injectable({
  providedIn: "root"
})
export class DatabaseService {
  public connection: Promise<Connection>;
  private readonly options: ConnectionOptions;

  constructor() {
    Settings.initialize();
    this.options = {
      type: "sqlite",
      database: Settings.dbPath,
      entities: [User],
      synchronize: false,
      logging: "all",
      migrationsRun: false,
      migrations:[]
    };
    this.connection = createConnection(this.options);
  }
}
