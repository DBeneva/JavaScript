import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent {
  @Input() article!: Article;
  @Input() fullDesc!: string;
  descToShow: string = '';
  descIsComplete: boolean = false;
  descBtnTitle: string = 'Read More';
  imageIsShown: boolean = true;
  imageButtonTitle: string = 'Hide Image';

  constructor() { }

  readMore(): void {
    this.descToShow = this.fullDesc.substring(0, this.descToShow.length + 250);

    if (this.descToShow.length + 250 >= this.fullDesc.length) {
      this.descIsComplete = true;
      this.descBtnTitle = 'Hide Desc';
    }
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageButtonTitle == 'Show Image' ? 'Hide Image' : 'Show Image';
  }

  hideDesc(): void {
    this.descToShow = '';
    this.descIsComplete = false;
    this.descBtnTitle = 'Read More';
  }
}
