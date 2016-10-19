import { Component } from '@angular/core';
import { RGB } from './RGB';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Kolours';
  updateBackgroundButtonColor: string;
  backgroundColor: string;
  rgb: RGB;

  constructor() {
    this.rgb = {
      r: '100',
      g: '200',
      b: '136'
    };

    this.backgroundColor = "rgb(" + this.rgb.r + "," + this.rgb.g + "," + this.rgb.b + ")";
    this.updateBackgroundButtonColor = "rgb(" + this.rgb.r + "," + this.rgb.g + "," + this.rgb.b + ")";
  }

  // TODO: make use of the constructor so rgb... is not a string
  ngOnInit(): void {
    document.body.style.background = this.backgroundColor;
  }

  /**
   * Called when the user clicks the update-background-btn. This function will read the current input values and set the background color to these values.
   * 
   * @param rgb: RGB object bound to the input fields. Holds the rgb(,,) values for the new background color. 
   */
  updateBackgroundColor(rgb) {
    // TODO: 1. Make sure the input fields are valid and have 3 digits
    
    // 2. Construct the new background color
    var updatedBackgroundColor = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";

    // 3. Set the background of the <body> to the new background color. Right now I am using direct DOM manipulation because I could not find a way to access the <body> via typescript. 
    document.body.style.background = updatedBackgroundColor;
      // TODO: 3.1 In the future this is when the animation should happen 

    // TODO: 4. Update the text colors

  }

  /**
   * Called when an input goes out of focus
   * 
   * @param rgb: RGB object bound to the input fields. Holds the rgb(,,) values for the buttons new background color. 
   */
  updateButtonBackground(rgb) {
    // TODO: 1. Make sure the input fields are valid and have 3 digits

    // 2. Construct the new color for the button
    var updatedBackgroundColor = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";

    // 3. Set the background color of the #update-background-btn
    this.updateBackgroundButtonColor = updatedBackgroundColor;
  
    // TODO: 4. Update button text color

    // TODO: 5. Move to the next input box
  }

  /**
   * Called by the #update-background-btn when anything on the page is updated to see what color it should be.
   * 
   * @return: valid rgb string
   */
  getButtonBackgroundColor(): string {
    return this.updateBackgroundButtonColor;
  }
}
