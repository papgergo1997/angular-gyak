import { Component, Input } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Pap's list";
  users = this.userService.list;
  currentUser: User = new User();

  constructor(
    private userService: UserService,
  ) { }

  onSelectUser(user: User): void {
    this.currentUser = user;
  }
  onUpdateUser(user: User): void {
    this.userService.updateUser(user);
  }
  onDeleteUser(user: User): void {
    this.userService.removeUser(user);
  }

}
