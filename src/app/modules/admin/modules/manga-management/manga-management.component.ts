import {Component, OnInit} from '@angular/core';
import {viewType} from '@app/shared/components/story-list/story-list.component';
import {IGenre, IStoryInformation} from '../story/story.component';
import {ActivatedRoute} from '@angular/router';

export interface ImangaFilter {
  search?: string,
  genre?: string,
  chapterNumber?: string,
}


@Component({
  selector: 'app-manga-management',
  templateUrl: './manga-management.component.html',
  styleUrl: './manga-management.component.scss'
})
export class MangaManagementComponent implements OnInit {

  filter: ImangaFilter = {
    search: '',
    genre: '',
    chapterNumber: '',
  }

  genreNames: string[] = [];
  teamList: string[] = ['All', 'Team A', 'Team B', 'Team C'];
  viewType: viewType = "grid"
  multiGenreMode: boolean = false;
  previewVisible = false;

  story: IStoryInformation[] = [
    {
      id: 1,
      thumbnail: "https://i.pinimg.com/564x/db/2e/9b/db2e9b90318548e2cde3edd6b908c6f0.jpg",
      name: "Triệu Hồi Đến Thế Giới Fantasy",
      author: "Park Jinjoon",
      translator: "Mary Smith",
      genres: [
        {genre: 'Mystery', AgeWarning: false, describe: 'A mysterious tale'},
        {genre: 'Mythology', AgeWarning: false, describe: 'Mythological stories'},
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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

  genres: IGenre[] = [
    {id: 1, genre: 'Fantasy', AgeWarning: false, describe: 'A fantasy story'},
    {id: 2, genre: 'Adventure', AgeWarning: false, describe: 'An adventurous journey'},
    {id: 3, genre: 'Mystery', AgeWarning: false, describe: 'A mysterious tale'},
    {id: 4, genre: 'Mythology', AgeWarning: false, describe: 'Mythological stories'},
    {id: 5, genre: 'Sci-Fi', AgeWarning: false, describe: 'Science fiction stories'},
    {id: 6, genre: 'Horror', AgeWarning: true, describe: 'Scary and horror stories'},
    {id: 7, genre: 'Romance', AgeWarning: false, describe: 'Love and romance stories'},
    {id: 8, genre: 'Thriller', AgeWarning: true, describe: 'Thrilling and suspenseful tales'},
    {id: 9, genre: 'Comedy', AgeWarning: false, describe: 'Humorous and funny stories'},
    {id: 10, genre: 'Drama', AgeWarning: false, describe: 'Serious and dramatic stories'}
  ];
  selectedGenres: IGenre[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getParams();
    this.genreNames = this.genres.map(g => g.genre);
  }

  getParams() {
    this.route.queryParams.subscribe(params => {
      const genreParam = params['genreId'];
      if (genreParam) {
        const parsedGenres = JSON.parse(genreParam);
        this.multiGenreMode = true;
        this.selectedGenres = this.genres.filter(genre => genre.id !== undefined && parsedGenres.includes(genre.id));
      } else {
        this.getGenreById()
      }
    });
  }

  getGenreById() {
    this.route.params.subscribe(params => {
      const genreParam = params['genreId'];
      if (genreParam) {
        this.filter.genre = genreParam;
      }
    });
  }

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

  changeMultiGenreMode(Mode: boolean) {
    if (this.multiGenreMode) {

    }
  }

  handleVisible(value: boolean) {
    this.previewVisible = value;
  }

  onGenresSelected(genres: IGenre[]) {
    this.selectedGenres = genres;
    if (this.selectedGenres.length == 0) {
      this.multiGenreMode = false
    } else {
      this.multiGenreMode = true
    }
  }
}
