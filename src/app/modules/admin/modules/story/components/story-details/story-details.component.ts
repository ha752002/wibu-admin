import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStoryInformation } from '../../type/story.type';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrl: './story-details.component.scss'
})
export class StoryDetailsComponent implements OnInit {
  @Input() storyData?: IStoryInformation
  @Output() complete = new EventEmitter<void>();

  story?: IStoryInformation = {
    id: '1',
    thumbnailUrl: "https://i.pinimg.com/564x/db/2e/9b/db2e9b90318548e2cde3edd6b908c6f0.jpg",
    title: "Triệu Hồi Đến Thế Giới Fantasy",
    authors: [],
    genres: [
      { title: 'Mystery', description: 'A mysterious tale' },
      { title: 'Mythology', description: 'Mythological stories' },
    ],
    chapters: [
      { id: ' 1', title: 'Chapter 1', pages: ['img1.jpg', 'img2.jpg'] },
      { id: ' 2', title: 'Chapter 2', pages: ['img3.jpg', 'img4.jpg'] },
      { id: ' 3', title: 'Chapter 3', pages: ['img3.jpg', 'img4.jpg'] },
      { id: ' 4', title: 'Chapter 4', pages: ['img3.jpg', 'img4.jpg'] },
      { id: ' 5', title: 'Chapter 5', pages: ['img3.jpg', 'img4.jpg'] },
      { id: ' 6', title: 'Chapter 6', pages: ['img3.jpg', 'img4.jpg'] },
      { id: ' 7', title: 'Chapter 7', pages: ['img3.jpg', 'img4.jpg'] },
      { id: ' 8', title: 'Chapter 8', pages: ['img3.jpg', 'img4.jpg'] },
      { id: ' 9', title: 'Chapter 9', pages: ['img3.jpg', 'img4.jpg'] },
      { id: '10', title: 'Chapter 10', pages: ['img3.jpg', 'img4.jpg'] },
      { id: '11', title: 'Chapter 11', pages: ['img3.jpg', 'img4.jpg'] },
      { id: '12', title: 'Chapter 12', pages: ['img3.jpg', 'img4.jpg'] },
      { id: '13', title: 'Chapter 13', pages: ['img3.jpg', 'img4.jpg'] },
    ],
    views: 12000,
    chapter: 50,
    description: "Một câu chuyện hấp dẫn về những cuộc phiêu lưu đầy kỳ diệu.\n\nmời các bạn đón xem!",
    status: "Updating",
    created: new Date(-10),
    update: new Date(),
  };
  ;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (this.storyData) {
        this.storyData.id = params['id'];
      }
    });

    if (this.storyData) {
      this.storyData = this.story
    }
  }

  navigateToChapter(chapterId?: string) {
    if (this.storyData?.id) {
      this.router.navigate([`admin/chapter/${chapterId}`]);
    }
  }

  navigateToMangaWithId(genreId: string) {
    this.router.navigate(['admin/manga/', genreId]);
  }

  done(){
    this.complete.emit();        
  }

}
