import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ILoginFormGroup} from "@app/modules/auth/types/auth.types";

@Injectable()
export class AuthFormService {
  private _loginFormGroup!: FormGroup<ILoginFormGroup>;

  constructor(private _formBuilder: FormBuilder) {
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
}
