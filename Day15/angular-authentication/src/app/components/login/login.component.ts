import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   hide:any;
   userName!: string;
   password!: string;
   formData!: FormGroup;
   isSuccessed!: boolean;

   constructor(private authService : AuthService, private router : Router) { }

   ngOnInit() {
      this.hide = true;
      this.formData = new FormGroup({
         userName: new FormControl("admin"),
         password: new FormControl("admin"),
      });
   }

   onSubmit(data: any) {
      this.userName = data.userName;
      this.password = data.password;

      console.log("Login page: " + this.userName);
      console.log("Login page: " + this.password);

      this.authService.login(this.userName, this.password)
         .subscribe( data => { 
            console.log("Is Login Success: " + data);
            this.isSuccessed = data;
      
           if(data) this.router.navigate(['/admin']); 
      });
   }
}