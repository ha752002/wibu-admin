import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthFormService} from "@app/modules/auth/services/form/auth-form.service";
import {FormGroup} from "@angular/forms";
import {ILoginFormGroup} from "@app/modules/auth/types/auth.types";
import {Store} from "@ngrx/store";
import {authActions} from "@app/core/store/_auth/_auth.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup<ILoginFormGroup>;

  constructor(
    private _router: Router,
    private _authFormService: AuthFormService,
    private _store: Store
  ) {
  }

  get loginFormControls() {
    return this.loginFormGroup.controls;
  }

  ngOnInit(): void {
    this.loginFormGroup = this._authFormService.LoginFormGroup;
  }

  handleClickSignUp() {
    this._router.navigate(['auth/signUp']).then();
  }

  handleSubmitSignIn() {
    if (this.loginFormGroup.invalid) {
      Object.values(this.loginFormControls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
        }
      })
    } else {
      this._store.dispatch(authActions.login({
        payload: this.loginFormGroup.getRawValue()
      }));
    }
  }
}
