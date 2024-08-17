import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ILoginFormGroup, IRegisterFormGroup} from "@app/modules/auth/types/auth.types";

@Injectable()
export class AuthFormService {
  private _loginFormGroup!: FormGroup<ILoginFormGroup>;

  constructor(private _formBuilder: FormBuilder) {
  }

  private _registerFormGroup!: FormGroup<IRegisterFormGroup>;

  get registerFormGroup() {
    if (!this._registerFormGroup) {
      this.initRegisterForm();
    }

    return this._registerFormGroup;
  }

  get LoginFormGroup() {
    if (!this._loginFormGroup) {
      this.initLoginForm();
    }

    return this._loginFormGroup;
  }

  private initLoginForm() {
    const fb = this._formBuilder.nonNullable;
    this._loginFormGroup = fb.group({
      email: fb.control('', [Validators.required]),
      password: fb.control('', [Validators.required])
    })
  }

  private initRegisterForm() {
    const fb = this._formBuilder.nonNullable;
    this._registerFormGroup = fb.group({
      email: fb.control('', [Validators.required, Validators.email]),
      password: fb.control('', [Validators.required]),
      confirmPassword: fb.control('', [Validators.required]),
      username: fb.control('', [Validators.required, Validators.minLength(3)]),
    })
  }
}
