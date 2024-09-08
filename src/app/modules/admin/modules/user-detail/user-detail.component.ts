import { Component } from '@angular/core';
import { IUser } from '../user-management/type/user.types';
import { ActivatedRoute } from '@angular/router';
import { IAuthor } from './types/author.type';
import { AuthorService } from './services/author/author.service';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  user?: IUser;
  author?: IAuthor;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getAuthorDetails(id);
      }
    });
  }

  getAuthorDetails(id: string): void {
    this.authorService.getAuthorById(id).subscribe(
      (response) => {
        this.author = response.data;
      },
      (error) => {
        console.error('Error fetching author details:', error);
        this.getUserDetails(id)
      }
    );
  }

  getUserDetails(id: string): void {
    this.userService.getUserById(id).subscribe(
      (response) => {
        this.user = response.data;
      },
      (error) => {
        console.error('Error fetching author details:', error);
      }
    );
  }
}
