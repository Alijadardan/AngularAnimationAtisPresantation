import { Article, ARTICLE_MOCK } from './../../articleList';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
    articleList: Article[] = ARTICLE_MOCK;

    constructor(
      private route: ActivatedRoute
    ) {}
      ngOnInit() : void{
        this.route.params
        .switchMap((params: Params) => this.articleList.filter(function(article) {
            return article.id == (params['id'])
        }))
        .subscribe(article => this.article = article);
      }

}
