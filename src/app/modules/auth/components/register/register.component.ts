import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthFormService} from "@app/modules/auth/services/form/auth-form.service";
import {FormGroup} from "@angular/forms";
import {IRegisterFormGroup} from "@app/modules/auth/types/auth.types";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerFormGroup!: FormGroup<IRegisterFormGroup>;

  constructor(
    private _router: Router,
    private _authFormService: AuthFormService
  ) {
  }

  get registerFormControl() {
    return this.registerFormGroup.controls;
  }

  ngOnInit() {
    this.registerFormGroup = this._authFormService.registerFormGroup;
  }

  handleClickSignIn() {
    this._router.navigate(['/auth/signIn'])
  }
}
