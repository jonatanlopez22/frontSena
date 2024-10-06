import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { Login } from '../../../interfaces/login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {


  private loginService = inject(LoginService)
  private roter= inject(Router)
  public formBuild = inject(FormBuilder)


  public formLogin:FormGroup = this.formBuild.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })


  SignIn(){
    if(this.formLogin.invalid)return;

    const objeto:Login ={
      username:this.formLogin.value.username,
      password:this.formLogin.value.password

    }

    this.loginService.login(objeto).subscribe({
      next:(data)=>{


        console.log("----------------------"+data)
        if(data !== null){
          localStorage.setItem("accessToken",data.accessToken)
          this.roter.navigate(['dashboard'])
        }
      },
      error(error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          background: '#fffefe',
          text: 'Password or username are invalid!'
        });
      },
    })
  }

}
