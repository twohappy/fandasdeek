import {Component} from '@angular/core';
import {ElectronService} from './core/services';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../environments/environment';
import {DatabaseService} from './data-access/database.service';
import {User} from './data-access/entities/user.entity';
import {Point} from './data-access/entities/point.entity';
const sql = require('sqlite3');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[] = [];

  constructor(
    public electronService: ElectronService,
    private translate: TranslateService,
    private databaseService: DatabaseService
  ) {
    translate.setDefaultLang('en');
    console.log('AppConfig', environment);

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
      console.log('sql');
      console.log(sql);
    } else {
      console.log('Mode web');
    }
    this.addUser();
    // this.getUsers();
  }

  getUsers() {
    this.databaseService
      .connection
      .then(() => User.find())
      .then(users => {
        console.log(users);
        this.users = users;
      });
  }

  addUser() {
    const user = new User();

    user.firstName = 'firstName';
    user.lastName = 'lastName';
    user.age = 90;

    this.databaseService
      .connection
      .then(() => user.save())
      .then(() => {
        this.getUsers();
      });

    this.databaseService
      .connection
      .then(() => Point.find({ relations: ["categories", "fragments"] }))
      .then(points => {
        console.log(points);
      });
  }

}
