import { Component, Input } from '@angular/core';
import { IChapter } from '@app/shared/components/open-form/types/chapter.type';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.scss'
})
export class ChapterComponent {
  @Input() chapterData?: IChapter = {
    id: '1',
    title: 'Chapter 1',
    pages: [
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/1.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/2.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/3.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/4.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/5.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/6.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/7.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/8.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/9.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/10.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/11.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/12.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/13.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/14.jpg',
      'https://dtcdnyacd.com/nettruyen/trieu-hoi-den-the-gioi-fantasy/0/15.jpg',
    ],
  }

}
