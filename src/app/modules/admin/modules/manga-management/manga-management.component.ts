import { Component } from '@angular/core';
import { viewType } from './components/manga-list/manga-list.component';

export interface IStoryInformation {
  id: number;
  thumbnail?: string;
  name?: string;
  author?: string;
  translator?: string;
  views?: number;
  chapter?: number;
  introduce?: string;
  status?: statusType;
  created?: Date;
  update?: Date;
}

export interface ImangaFilter {
  search?: string,
  genre?: string,
  chapterNumber?: string,
}

export type statusType = 'Updating' | 'Halt' | 'Full';


@Component({
  selector: 'app-manga-management',
  templateUrl: './manga-management.component.html',
  styleUrl: './manga-management.component.scss'
})
export class MangaManagementComponent {


  filter: ImangaFilter = {
    search: '',
    genre: '',
    chapterNumber: '',
  }

  userTypeList: string[] = ['All', 'user', 'admin', 'management'];
  teamList: string[] = ['All', 'Team A', 'Team B', 'Team C'];
  viewType: viewType = "table"

  story: IStoryInformation[] = [
    {
      id: 1,
      thumbnail: "https://i.pinimg.com/564x/db/2e/9b/db2e9b90318548e2cde3edd6b908c6f0.jpg",
      name: "Triệu Hồi Đến Thế Giới Fantasy",
      author: "Park Jinjoon",
      translator: "Mary Smith",
      views: 12000,
      chapter: 50,
      introduce: "Một câu chuyện hấp dẫn về những cuộc phiêu lưu đầy kỳ diệu.",
      status: "Updating",
      created: new Date(-10),
      update: new Date(),
    },
    {
      id: 2,
      thumbnail: "https://i.pinimg.com/474x/f2/e9/3a/f2e93adf802e2cd5cd83c0637ddf0f72.jpg",
      name: "Triệu Hồi Đến Thế Giới Fantasy",
      author: "Park Jinjoon",
      translator: "Mary Smith",
      views: 12000,
      chapter: 50,
      introduce: "Một câu chuyện hấp dẫn về những cuộc phiêu lưu đầy kỳ diệu.",
      status: "Updating",
      created: new Date(-10),
      update: new Date(),
    },
    {
      id: 3,
      thumbnail: "https://i.pinimg.com/564x/db/2e/9b/db2e9b90318548e2cde3edd6b908c6f0.jpg",
      name: "Triệu Hồi Đến Thế Giới Fantasy",
      author: "Park Jinjoon",
      translator: "Mary Smith",
      views: 12000,
      chapter: 50,
      introduce: "Một câu chuyện hấp dẫn về những cuộc phiêu lưu đầy kỳ diệu.",
      status: "Updating",
      created: new Date(-10),
      update: new Date(),
    },
    {
      id: 4,
      thumbnail: "https://i.pinimg.com/564x/db/2e/9b/db2e9b90318548e2cde3edd6b908c6f0.jpg",
      name: "Triệu Hồi Đến Thế Giới Fantasy",
      author: "Park Jinjoon",
      translator: "Mary Smith",
      views: 12000,
      chapter: 50,
      introduce: "Một câu chuyện hấp dẫn về những cuộc phiêu lưu đầy kỳ diệu.",
      status: "Updating",
      created: new Date(-10),
      update: new Date(),
    },{
      id: 5,
      thumbnail: "https://i.pinimg.com/564x/db/2e/9b/db2e9b90318548e2cde3edd6b908c6f0.jpg",
      name: "Triệu Hồi Đến Thế Giới Fantasy",
      author: "Park Jinjoon",
      translator: "Mary Smith",
      views: 12000,
      chapter: 50,
      introduce: "Một câu chuyện hấp dẫn về những cuộc phiêu lưu đầy kỳ diệu.",
      status: "Updating",
      created: new Date(-10),
      update: new Date(),
    },{
      id: 6,
      thumbnail: "https://i.pinimg.com/564x/db/2e/9b/db2e9b90318548e2cde3edd6b908c6f0.jpg",
      name: "Triệu Hồi Đến Thế Giới Fantasy",
      author: "Park Jinjoon",
      translator: "Mary Smith",
      views: 12000,
      chapter: 50,
      introduce: "Một câu chuyện hấp dẫn về những cuộc phiêu lưu đầy kỳ diệu.",
      status: "Updating",
      created: new Date(-10),
      update: new Date(),
    },{
      id: 7,
      thumbnail: "https://i.pinimg.com/564x/db/2e/9b/db2e9b90318548e2cde3edd6b908c6f0.jpg",
      name: "Triệu Hồi Đến Thế Giới Fantasy",
      author: "Park Jinjoon",
      translator: "Mary Smith",
      views: 12000,
      chapter: 50,
      introduce: "Một câu chuyện hấp dẫn về những cuộc phiêu lưu đầy kỳ diệu.",
      status: "Updating",
      created: new Date(-10),
      update: new Date(),
    },{
      id: 8,
      thumbnail: "https://i.pinimg.com/564x/db/2e/9b/db2e9b90318548e2cde3edd6b908c6f0.jpg",
      name: "Triệu Hồi Đến Thế Giới Fantasy",
      author: "Park Jinjoon",
      translator: "Mary Smith",
      views: 12000,
      chapter: 50,
      introduce: "Một câu chuyện hấp dẫn về những cuộc phiêu lưu đầy kỳ diệu.",
      status: "Updating",
      created: new Date(-10),
      update: new Date(),
    },{
      id: 9,
      thumbnail: "https://i.pinimg.com/564x/db/2e/9b/db2e9b90318548e2cde3edd6b908c6f0.jpg",
      name: "Triệu Hồi Đến Thế Giới Fantasy",
      author: "Park Jinjoon",
      translator: "Mary Smith",
      views: 12000,
      chapter: 50,
      introduce: "Một câu chuyện hấp dẫn về những cuộc phiêu lưu đầy kỳ diệu.",
      status: "Updating",
      created: new Date(-10),
      update: new Date(),
    },{
      id: 10,
      thumbnail: "https://i.pinimg.com/564x/db/2e/9b/db2e9b90318548e2cde3edd6b908c6f0.jpg",
      name: "Triệu Hồi Đến Thế Giới Fantasy",
      author: "Park Jinjoon",
      translator: "Mary Smith",
      views: 12000,
      chapter: 50,
      introduce: "Một câu chuyện hấp dẫn về những cuộc phiêu lưu đầy kỳ diệu.",
      status: "Updating",
      created: new Date(-10),
      update: new Date(),
    },{
      id: 11,
      thumbnail: "https://i.pinimg.com/564x/db/2e/9b/db2e9b90318548e2cde3edd6b908c6f0.jpg",
      name: "Triệu Hồi Đến Thế Giới Fantasy",
      author: "Park Jinjoon",
      translator: "Mary Smith",
      views: 12000,
      chapter: 50,
      introduce: "Một câu chuyện hấp dẫn về những cuộc phiêu lưu đầy kỳ diệu.",
      status: "Updating",
      created: new Date(-10),
      update: new Date(),
    }

  ];

  onFieldValueChange(field: keyof ImangaFilter, value: string | number | Date | undefined): void {

    console.log(this.filter);
  }

  changeViewType(view: viewType) {
    if (view === 'table') {
      this.viewType = 'grid'
    } else {
      this.viewType = 'table'

    }

    console.log(this.viewType);

  }
}
