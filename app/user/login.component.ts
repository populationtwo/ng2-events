import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "./auth.service";

@Component({
  // moduleId: module.id,
  // selector: 'name',
  templateUrl: 'app/user/login.component.html',
  styles: [`
    em {float:right; color: red; padding-left:10px;}
  `]
})

export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login(formValues) {
    console.log(formValues)
    this.authService.loginUser(formValues.userName, formValues.password)
    this.router.navigate(['events'])
  }

  cancel() {
    this.router.navigate(['events'])
  }
}