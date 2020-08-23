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
    { id: 1, name: 'As am thinketh so is he', description:'Bob Proctor' },
    { id: 2, name: 'Life is about making impact', description:'Kevin Kruse' },
    { id: 3, name: 'The way to get started is to quit talking and begin doing', description:'Walt Disney' },
    { id: 4, name: 'Life is what happens when you are busy making other plans', description:'John Lennon' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
