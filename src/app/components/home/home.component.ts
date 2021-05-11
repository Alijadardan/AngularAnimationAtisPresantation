import { Article, ARTICLE_MOCK } from './../../articleList';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInOut } from 'src/app/animations/fadeinout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeInOut
  ]
})
export class HomeComponent implements OnInit {

  articleList: Article[] = ARTICLE_MOCK;
  selectedArticle: Article;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoDetail(article: Article): void {
    let link = ['/article', article.id];
    this.router.navigate(link);
  }

}
