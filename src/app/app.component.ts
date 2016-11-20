import { Component, ViewContainerRef } from '@angular/core';
import { RGB } from './RGB';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

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

  constructor(public snackBar: MdSnackBar, public viewContainerRef: ViewContainerRef) {
    this.rgb = {
      r: '100',
      g: '200',
      b: '136'
    };

    this.backgroundColor = "rgb(" + this.rgb.r + "," + this.rgb.g + "," + this.rgb.b + ")";
    this.updateBackgroundButtonColor = "rgb(" + this.rgb.r + "," + this.rgb.g + "," + this.rgb.b + ")";
  }

  ngOnInit(): void {
    document.body.style.background = this.backgroundColor;
  }

  /**
   * Called when the user clicks the update-background-btn. This function will read the current input values and set the background color to these values.
   * 
   * @param rgb: RGB object bound to the input fields. Holds the rgb(,,) values for the new background color. 
   */
  updateBackgroundColor(rgb) {
    // 1. Make sure the input fields have 3 digits
    // TODO: update validateRgbValueLength method to make sure the inputs are only numbers
    // TODO: update validateRgbValueLength method to make sure the inputs are not <0 or >250
    rgb.r = this.validateRgbValueLength(rgb.r);
    rgb.g = this.validateRgbValueLength(rgb.g);
    rgb.b = this.validateRgbValueLength(rgb.b);

    
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
    // 1. Make sure the inputs are not <0 or >250
    rgb.r = this.validateRgbValueRange(rgb.r);
    rgb.g = this.validateRgbValueRange(rgb.g);
    rgb.b = this.validateRgbValueRange(rgb.b);

    // 2. Make sure the input fields are valid and have 3 digits
    rgb.r = this.validateRgbValueLength(rgb.r);
    rgb.g = this.validateRgbValueLength(rgb.g);
    rgb.b = this.validateRgbValueLength(rgb.b);
    
    // 3. TODO: update validateRgbValueLength method to make sure the inputs are only numbers

    // 4. Construct the new color for the button
    var updatedBackgroundColor = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";

    // 5. Set the background color of the #update-background-btn
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

  /**
   * Used to validate a single RGB value (rgb.r || rgb.g || rgb.b). This function validates a single value, not the whole RGB object. The goal of this function is to make sure an rgb value has a length of 3.
   * 
   * For example, if the current value of rgb.r == '10', this function will add a '0' to the beginning of the string, setting rgb.r to '010'.
   * 
   * @param value: string value (single RGB value) that should have a length of 3
   * @return: string with a length of 3
   */
  private validateRgbValueLength(value): string {
    if (value.length != 3) {
      switch (value.length) {
        case 0:
          value = "000";
          break;        
        case 1:
          value = "00" + value;
          break;
        case 2:
          value = "0" + value;
          break;
        default:
          console.log("There was an error while validating the rgb value, defaulting to '000'");
          value = "000";
          break;
      }
    }

    return value;
  }

  /**
   * Used to validate a single RGB value (rgb.r || rgb.g || rgb.b). This function validates a single value, not the whole RGB object. This function makes sure an rgb value is > 0 and < 250.
   * 
   * @param value: string value (single RGB value) that should be > 0 and < 250
   * @return: value > 0 and < 250
   */
  private validateRgbValueRange(value): string {
    let config = new MdSnackBarConfig(this.viewContainerRef);

    if (value > 250) {
      value = '250';
      this.snackBar.open('Value cannot be greater than 250', 'Okay', config);
    } else if (value < 0) {
      value = '000'
      this.snackBar.open('Value cannot be less than 0', 'Okay', config);
    }
    return value;
  }
}
