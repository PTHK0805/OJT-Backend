import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies = [ 
    'Episode I - The Phantom Menace', 
    'Episode II - Attack of the Clones', 
    'Episode III - Revenge of the Sith', 
    'Episode IV - A New Hope', 
    'Episode V - The Empire Strikes Back', 
    'Episode VI - Return of the Jedi', 
    'Episode VII - The Force Awakens', 
    'Episode VIII - The Last Jedi' 
  ];

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

}
