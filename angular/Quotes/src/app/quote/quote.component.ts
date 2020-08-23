import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
import { from } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote( 1, 'As am thinketh so is he', 'Bob Proctor' ),
    new Quote( 2, 'Life is about making impact', 'Kevin Kruse' ),
    new Quote( 3, 'The way to get started is to quit talking and begin doing', 'Walt Disney' ),
    new Quote( 4, 'Life is what happens when you are busy making other plans', 'John Lennon' )
  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
