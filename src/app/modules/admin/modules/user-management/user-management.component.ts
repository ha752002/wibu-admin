import { Component } from '@angular/core';
import { User } from '../my-profile/my-profile.component';
import { formNameTypes } from '@app/shared/components/open-form/open-form.types';

export interface IuserFilter {
  search?:string,
  userType?: string,
  teams?: string,
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent {
  filter: IuserFilter = {
    search:'',
    teams: '',
    userType: '',
  }

  userTypeList: string[] = ['All','user','admin','management'];
  teamList: string[] = ['All','Team A', 'Team B', 'Team C'];

  listOfData: User[] = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@example.com',
      phone: '0123456789',
      dateOfBirth: new Date('1990-01-01'),
      postedStories: 5,
      followStory: 10,
      followers: 200,
      teams: 'Team A',
      userType: 'Admin',
      roles: ['Admin', 'User'],
      avatarUrl: 'https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-1/127523077_443369593493599_7081637295600256055_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=e4545e&_nc_eui2=AeFqvFBDovjkPGdWHYPRctsrqcVrOAsuC7apxWs4Cy4LtnMM9V5r5Ft9QaaGpPGyKqnm8qYhJ3hH9zdbju9d19fE&_nc_ohc=4m12X8lVKp8Q7kNvgFHppPH&_nc_ht=scontent.fhan14-3.fna&oh=00_AYBQlE7Vq5HTWlMDFZtfemV7hzGSMTQQrEcG-8mjbQl-2Q&oe=66A9DD8C',

    },
    {
      id: 2,
      name: 'Ha ngốc ngếch',
      email: 'nguyenvana@example.com',
      phone: '0123456789',
      dateOfBirth: new Date('1990-01-01'),
      postedStories: 5,
      followStory: 10,
      followers: 200,
      teams: 'Team A',
      userType: 'Admin',
      roles: ['Admin', 'User'],
      avatarUrl: 'https://do78x13wq0td.cloudfront.net/prod/avatars/host/20240616143304_3df38a8c-cfd3-4ed6-8c70-517bd452f87f.jpg',

    },
  ];

  onFieldValueChange(field: keyof IuserFilter, value: string | number | Date | undefined): void {

    console.log(this.filter);
  }

}
