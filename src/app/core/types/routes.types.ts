import {IconNameTypes} from "@app/shared/components/icon/icon.types";

export const ADMIN_ROUTES: IRoute[] = [{
  route: ['profile'],
  icon: 'user',
  title: 'My Profile'
}, {
  title: 'Admin',
  icon: 'deployment-unit',
  children: [
    {
      title: 'Users',
      icon: 'team',
      route: ['users'],
    }, {
      title: 'Roles',
      icon: 'tags',
      route: ['roles'],
    }, {
      title: 'Configurations',
      icon: 'sliders',
      route: ['configurations'],
    },],
}, {
  title: 'Projects',
  icon: 'project',
  route: ['projects'],
}, {
  title: 'My Working Time',
  icon: 'calendar',
  route: ['my-working-time'],
}, {
  title: 'Manage Working Time',
  icon: 'clock-circle',
  route: ['manage-working-time'],
}];


export interface IRoute {
  route?: string | string[];
  title: string;
  icon?: IconNameTypes;
  children?: IRoute[];
  level?: number;
  opened?: boolean;
  activated?: boolean;
}
