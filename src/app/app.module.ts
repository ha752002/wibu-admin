import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {IconDefinition} from '@ant-design/icons-angular';
import {LockOutline, UserOutline} from '@ant-design/icons-angular/icons';
import {NZ_ICONS} from 'ng-zorro-antd/icon';
import {provideHttpClient} from '@angular/common/http';
import {AuthEffect} from "@app/core/store/_auth/_auth.effects";
import {combinedReducers} from "@app/core/store";
import {NzMessageModule} from "ng-zorro-antd/message";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


const icons: IconDefinition[] = [UserOutline, LockOutline];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzMessageModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(combinedReducers),
    EffectsModule.forRoot([AuthEffect])
  ],
  providers: [{provide: NZ_ICONS, useValue: icons}, provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
