import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { from } from 'rxjs';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    { id: 1, name: 'J Cole' },
    { id: 2, name: 'Bob Proctor' },
    { id: 2, name: 'Kevin Kruse' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
