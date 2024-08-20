import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStoryInformation } from '../../type/story.type';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html',
  styleUrl: './story-details.component.scss'
})
export class StoryDetailsComponent implements OnInit {
  @Input() storyData?: IStoryInformation

  story?: IStoryInformation = {
    id: '1',
    thumbnailUrl: "https://i.pinimg.com/564x/db/2e/9b/db2e9b90318548e2cde3edd6b908c6f0.jpg",
    title: "Triệu Hồi Đến Thế Giới Fantasy",
    author: [],
    genres: [
      { title: 'Mystery', description: 'A mysterious tale' },
      { title: 'Mythology', description: 'Mythological stories' },
    ],
    chapters: [
      { id: ' 1', name: 'Chapter 1', image: ['img1.jpg', 'img2.jpg'] },
      { id: ' 2', name: 'Chapter 2', image: ['img3.jpg', 'img4.jpg'] },
      { id: ' 3', name: 'Chapter 3', image: ['img3.jpg', 'img4.jpg'] },
      { id: ' 4', name: 'Chapter 4', image: ['img3.jpg', 'img4.jpg'] },
      { id: ' 5', name: 'Chapter 5', image: ['img3.jpg', 'img4.jpg'] },
      { id: ' 6', name: 'Chapter 6', image: ['img3.jpg', 'img4.jpg'] },
      { id: ' 7', name: 'Chapter 7', image: ['img3.jpg', 'img4.jpg'] },
      { id: ' 8', name: 'Chapter 8', image: ['img3.jpg', 'img4.jpg'] },
      { id: ' 9', name: 'Chapter 9', image: ['img3.jpg', 'img4.jpg'] },
      { id: '10', name: 'Chapter 10', image: ['img3.jpg', 'img4.jpg'] },
      { id: '11', name: 'Chapter 11', image: ['img3.jpg', 'img4.jpg'] },
      { id: '12', name: 'Chapter 12', image: ['img3.jpg', 'img4.jpg'] },
      { id: '13', name: 'Chapter 13', image: ['img3.jpg', 'img4.jpg'] },
    ],
    views: 12000,
    chapter: 50,
    introduce: "Một câu chuyện hấp dẫn về những cuộc phiêu lưu đầy kỳ diệu.\n\nmời các bạn đón xem!",
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
      this.router.navigate([`admin/story/${this.storyData.id}/chapter/${chapterId}`]);
    }
  }

  navigateToMangaWithId(genreId: string) {
    this.router.navigate(['admin/manga/', genreId]);
  }

}
