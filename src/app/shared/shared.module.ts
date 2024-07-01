import {NgModule} from '@angular/core';
import {IconComponent} from './components/icon/icon.component';

const COMPONENTS = [
  IconComponent
];

@NgModule({
  imports: [
    COMPONENTS,
  ],
  exports: [
    COMPONENTS
  ],
})
export class SharedModule {
}
