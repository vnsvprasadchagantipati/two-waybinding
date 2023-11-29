import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Movie } from '../movie';
@Component({
  selector: 'app-movie-view',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './movie-view.component.html',
  styleUrl: './movie-view.component.css'
})
export class MovieViewComponent {
  movie :Movie;
  movies :Movie[]=[];
  lang:string[]=['telugu','hindi','tamil','kannada','marathi','bengali']
  constructor(){
    this.movie=new Movie();
  }
  AddMovie(): void {
    
    this.movie.movieId = Math.ceil(Math.random() * 1000); 
    
    console.log(this.movie);
    //add student details to array
    this.movies.push(this.movie);
    console.log(this.movies);
    
    this.movie = new Movie();
  }

}
