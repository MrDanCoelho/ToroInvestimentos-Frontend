import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/2 - core/application/services/login.service';

@Component({
  selector: 'app-log-delete',
  template: ''
})
export class LogoutComponent implements OnInit {
  constructor(
    private router: Router,
    private loginService :  LoginService
    ) { }

  ngOnInit(): void {
    let user = this.loginService.getLoggedUser();
    if(user != null)
      this.logout();
    else
      this.router.navigate(['/login']);
  }

  async logout(): Promise<void>{
    try {
      await this.loginService.logout();
      window.location.reload();
    } catch (err) {
      alert(err.message);
    }
  }

}
