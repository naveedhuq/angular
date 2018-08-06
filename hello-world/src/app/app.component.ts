import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'My First Angular App';

  // post = {
  //   title: 'A title of the post',
  //   isFavorite: true
  // };

  // tweet = {
  //   body: 'Body of the Tweet',
  //   isLiked: false,
  //   likesCount: 10
  //};
  courses = [];


  // onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
  //   console.log('Favorite Changed: ', eventArgs);
  // }
}
