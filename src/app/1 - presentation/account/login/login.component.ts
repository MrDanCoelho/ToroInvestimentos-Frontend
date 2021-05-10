import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/2 - core/application/services/login.service';
import { AuthModel } from 'src/app/2 - core/domain/models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnUrl : string = "";

  form: FormGroup = new FormGroup({
    identity: new FormControl(''),
    password: new FormControl('', [Validators.required])
  });

  errorMessage: string | null = null;

  @Output() userEvent = new EventEmitter<string>(); 
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService :  LoginService
    ) {
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

  ngOnInit(): void {
    let user = this.loginService.getLoggedUser();
    if(user != null)
      this.router.navigate([this.returnUrl])
  }

  async onSubmit(): Promise<void>{
    if (this.form.valid) {
      try {
        var auth = new AuthModel();
        auth.identity = this.form.controls.identity.value;
        auth.password = this.form.controls.password.value;
        await this.loginService.login(auth);
        await this.router.navigate([this.returnUrl]);
        window.location.reload();
      } catch (err) {
        this.errorMessage = err.message;
      }
    }
  }

}
