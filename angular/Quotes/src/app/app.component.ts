import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    { id: 1, name: 'As am thinketh so is he' },
    { id: 2, name: 'Life is about making impact' },
    { id: 3, name: 'The way to get started is to quit talking and begin doing' },
    { id: 4, name: 'Life is what happens when you are busy making other plans' }
  ];
}
