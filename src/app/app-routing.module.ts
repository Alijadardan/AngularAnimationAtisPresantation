import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent , data: {animation: 'Home'} },
  { path: 'article/:id', component: ArticleComponent , data: {animation: 'Article'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
