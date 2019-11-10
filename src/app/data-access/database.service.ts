import { Injectable } from "@angular/core";
import { Connection, ConnectionOptions, createConnection } from "typeorm";
import { Settings } from "./repositories/settings";
import { User } from "./entities/user.entity";
import { Point } from "./entities/point.entity";
import { Category } from "./entities/category.entity";
import { Fragment } from "./entities/fragment.entity";

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
      entities: [User, Point, Category, Fragment],
      synchronize: false,
      logging: "all",
      migrationsRun: false,
      migrations: []
    };
    this.connection = createConnection(this.options);
  }
}
