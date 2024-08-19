import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ListGridComponent } from './components/list-grid/list-grid.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { IStoryInformation } from '@app/modules/admin/modules/story/type/story.type';

export type viewType = 'grid' | 'table' ;

@Component({
  selector: 'app-story-list',
  standalone: true,
  imports: [
    CommonModule,
    ListGridComponent,
    ListTableComponent,
  ],
  templateUrl: './story-list.component.html',
  styleUrl: './story-list.component.scss'
})
export class StoryListComponent implements OnInit{
  @Input() rowSize: 3 | 4 | 5 = 3;
  @Input() viewType: viewType = 'grid';
  @Input() storyData: IStoryInformation[]= [];

  storys: IStoryInformation[] = [
    {
      id: '1',
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
      id: '2',
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
      id: '3',
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
      id: '4',
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
      id: '5',
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
      id: '6',
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
      id:'7',
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
      id: '8',
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
      id: '9',
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
      id: '10',
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
      id: '11',
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

  ngOnInit(): void {
    if(this.storyData){
      this.storyData = this.storys
    }
  }
}
