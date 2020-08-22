import { Component } from '@angular/core';
import { Quote } from './quote';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[]=[
    { id: 1, name: 'J Cole', description: 'Love Yours' },
    { id: 2, name: 'Bob Proctor', description: 'As a man thinketh so is he' },
    { id: 2, name: 'Kevin Kruse', description: 'Life is about making impact' }
  ];
}
