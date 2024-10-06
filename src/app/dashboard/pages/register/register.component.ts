import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export default class RegisterComponent {
  control = new FormControl();

  public showMessage = false;

  private loginService = inject(LoginService);
  private roter = inject(Router);
  public formBuild = inject(FormBuilder);

  public formRegister: FormGroup = this.formBuild.group({
    username: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: [''],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  createAcount() {
    if (this.formRegister.invalid)return;
    if(this.showMessage === true) return;

    const objeto: User = {
      username: this.formRegister.value.username,
      password: this.formRegister.value.password,
      firstName: this.formRegister.value.firstname,
      lastName: this.formRegister.value.lastname,
      address: this.formRegister.value.address,
      phone: this.formRegister.value.phone,
      email: this.formRegister.value.email,
    };

    this.loginService.createAcount(objeto).subscribe({
      next: (data) => {
        if (data.isSuccess ) {
          Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
          this.roter.navigate(['dashboard']);
        }
      },
      error(error) {

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          background: '#fffefe',
          text: 'Password or username are invalid!',
        });
      },
    });
  }


  validate() {
    let pws = this.formRegister.value.password;
    this.control.valueChanges.subscribe((query) => {
      if (pws === query) {
        this.showMessage = false;
      } else {
        this.showMessage = true;
      }
    });
  }
}
