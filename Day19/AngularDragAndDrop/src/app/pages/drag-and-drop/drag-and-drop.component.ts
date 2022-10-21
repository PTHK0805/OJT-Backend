import { MovieService } from './../../services/movie.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent {

  constructor (private movieService: MovieService) {}

  movies = this.movieService.movies;
  todo = this.movieService.todo;
  done = this.movieService.done;


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex)
    } else {
      moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
  }
}
