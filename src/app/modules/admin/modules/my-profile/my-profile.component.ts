import { Component } from '@angular/core';


export interface User {
  avatarUrl: string;
  name: string;
  phone: string;
  email: string;
  dateOfBirth?: Date;
  postedStories? : number;
  followStory? : number;
  followers? : number;
  teams? : string;
  userType? : string;
  roles: string[];
}

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent {

  user: User = {
    avatarUrl: 'https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-1/127523077_443369593493599_7081637295600256055_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=e4545e&_nc_eui2=AeFqvFBDovjkPGdWHYPRctsrqcVrOAsuC7apxWs4Cy4LtnMM9V5r5Ft9QaaGpPGyKqnm8qYhJ3hH9zdbju9d19fE&_nc_ohc=4m12X8lVKp8Q7kNvgFHppPH&_nc_ht=scontent.fhan14-3.fna&oh=00_AYBQlE7Vq5HTWlMDFZtfemV7hzGSMTQQrEcG-8mjbQl-2Q&oe=66A9DD8C',
    name: 'Nguyễn Văn Hoàng',
    phone: '0975312468',
    email: 'hoangvippro@gmail.com',
    roles: ['user', 'admin', 'master', 'Readers']
  };

}
