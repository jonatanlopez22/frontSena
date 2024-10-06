
import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../../shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,TitleComponent,],
  templateUrl: './user.component.html',
})
export default class UserComponent {

private route = inject(ActivatedRoute);
public UsersService = inject(UsersService)


//public user = signal<User|undefined>(undefined);

public user = toSignal(
this.route.params.pipe(
  switchMap( ({id}) => this.UsersService.getUserById(id) )
))



public titleLable=computed(()=> {
  if(this.user()){
    return `informacion del usuario :${this.user()?.first_name}  ${this.user()?.last_name}`
  }

  return ' informacion del usuario '



})


}
