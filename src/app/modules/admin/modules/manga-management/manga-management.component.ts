import { Component } from '@angular/core';
import { viewType } from '@app/shared/components/story-list/story-list.component';

export interface IStoryInformation {
  id?: number;
  thumbnail?: string;
  name?: string;
  genres?: IGenre[],
  author?: string;
  translator?: string;
  views?: number;
  chapter?: number;
  introduce?: string;
  status?: statusType;
  created?: Date;
  update?: Date;
}


export interface IGenre {
  genre?: string,
  AgeWarning?: boolean,
  describe?: string,
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
  viewType: viewType = "grid"

  story: IStoryInformation[] = [
    {
      id: 1,
      thumbnail: "https://i.pinimg.com/564x/db/2e/9b/db2e9b90318548e2cde3edd6b908c6f0.jpg",
      name: "Triệu Hồi Đến Thế Giới Fantasy",
      author: "Park Jinjoon",
      translator: "Mary Smith",
      genres: [
        { genre: 'Mystery', AgeWarning: false, describe: 'A mysterious tale' },
        { genre: 'Mythology', AgeWarning: false, describe: 'Mythological stories' },
      ],
      views: 12000,
      chapter: 50,
      introduce: "Một câu chuyện hấp dẫn về những cuộc phiêu lưu đầy kỳ diệu.\n\nmời các bạn đón xem!",
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

  genre: IGenre[] = [
    { genre: 'Fantasy', AgeWarning: false, describe: 'A fantasy story' },
    { genre: 'Adventure', AgeWarning: false, describe: 'An adventurous journey' },
    { genre: 'Mystery', AgeWarning: false, describe: 'A mysterious tale' },
    { genre: 'Mythology', AgeWarning: false, describe: 'Mythological stories' },
    { genre: 'Sci-Fi', AgeWarning: false, describe: 'Science fiction stories' },
    { genre: 'Horror', AgeWarning: true, describe: 'Scary and horror stories' },
    { genre: 'Romance', AgeWarning: false, describe: 'Love and romance stories' },
    { genre: 'Thriller', AgeWarning: true, describe: 'Thrilling and suspenseful tales' },
    { genre: 'Comedy', AgeWarning: false, describe: 'Humorous and funny stories' },
    { genre: 'Drama', AgeWarning: false, describe: 'Serious and dramatic stories' }
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
