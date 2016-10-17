import { Component } from '@angular/core';
import { RGB } from './RGB';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Kolours';
  
  // Starting background color
  rgb: RGB = {
    r: '000',
    g: '150',
    b: '136'
  };

  backgroundColor = "rgb(0,0,0);"

  // TODO: make use of the constructor so rgb... is not a string
  ngOnInit(): void {
    document.body.style.background = "rgb(000,150,136)"
  }

  /**
   * Fired when the user clicks the #update-background button. This function will read the current input values and set the background color to these values.
   * 
   * @param rgb: RGB object bound to the input fields. Holds the rgb(,,) values for the new background  
   */
  updateBackgroundColor(rgb) {
    // 1. Make sure all of the inputs are in the correct form
    
    // 2. Construct the new background color
    var updatedBackgroundColor = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";

    // 3. Set the background of the <body> to the new background color. Right now I am using direct DOM manipulation because I could not find a way to access the <body> via typescript. 
    document.body.style.background = updatedBackgroundColor;
      // TODO: 3.1 In the future this is when the animation should happen 

    // TODO: 4. Update the text colors

  }
}
