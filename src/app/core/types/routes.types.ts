import {IconNameTypes} from "@app/shared/components/icon/icon.types";

export const ADMIN_ROUTES: IRoute[] = [{
  route: ['my-profile'],
  icon: 'user',
  title: 'My Profile'
}, {
  title: 'Manga',
  icon: 'deployment-unit',
  route: ['manga'],
}, {
  title: 'User',
  icon: 'project',
  route: ['user'],
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
