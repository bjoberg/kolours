import { Component } from '@angular/core';

// TODO make this it's own component
export class RGB {
  r: string;
  g: string;
  b: string;
}

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

  /**
   * Fired when the user clicks the #update-background button. This function will read the current input values and set the background color to these values.
   * 
   * @param rgb: RGB object bound to the input fields. Holds the rbg(,,) values for the new background  
   */
  updateBackgroundColor(rgb) {
    // 1. Make sure all of the inputs are in the correct form

    // 2. Construct the new background color
    var updatedBackgroundColor = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ");";

    // 3. Set the background of the <body> to the new background color
      // 3.1 In the future this is when the animation should happen 
  }
}
