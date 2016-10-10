import { Component } from '@angular/core';
import { AppHeader } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Kolours';
  isDisabled = true;
}
