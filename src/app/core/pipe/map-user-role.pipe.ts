import {Pipe, PipeTransform} from '@angular/core';
import {EUserRole} from "@app/core/enums/user.enums";
import {USER_ROLE} from "@app/core/constants/user.constants";

@Pipe({
  name: 'mapUserRole',
  standalone: true
})
export class MapUserRolePipe implements PipeTransform {

  transform(role: EUserRole): string {
    if (role) {
      return USER_ROLE[role];
    }
    return '';
  }

}
