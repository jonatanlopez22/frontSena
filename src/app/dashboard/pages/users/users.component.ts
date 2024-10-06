import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { TitleComponent } from '../../../shared/title/title.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',

  standalone: true,
  imports: [TitleComponent,CommonModule,RouterModule],
  templateUrl: './users.component.html',

})
export default class UsersComponent {

  public UsersService = inject(UsersService)





}
