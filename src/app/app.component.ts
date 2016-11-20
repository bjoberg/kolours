import { Component, ViewContainerRef } from '@angular/core';
import { RGB } from './RGB';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // Instance variables
  title = 'Kolours';
  backgroundColor: string;
  fontColorOfBodyElements: string;
  updateBackgroundButtonColor: string;
  updateBackgroundButtonFontColor: string;
  rgb: RGB; // TODO: Convert RGB values to number... not string

  /**
   * Initiate the app. Create new snackbar, viewContainerRef, and initiate variables.
   */
  constructor(public snackBar: MdSnackBar, public viewContainerRef: ViewContainerRef) {
    this.rgb = {
      r: '100',
      g: '200',
      b: '136'
    };

    // General
    this.backgroundColor = "rgb(" + this.rgb.r + "," + this.rgb.g + "," + this.rgb.b + ")";
    this.fontColorOfBodyElements = "rgb(250,250,250)";

    // #update-background-btn specific
    this.updateBackgroundButtonColor = "rgb(" + this.rgb.r + "," + this.rgb.g + "," + this.rgb.b + ")";
    this.updateBackgroundButtonFontColor = "rgb(250,250,250)";
  }

  /**
   * Override app life cycle method ngOnInit()... Called when the screen loads
   */
  ngOnInit(): void {
    document.body.style.background = this.backgroundColor;
  }

  /**
   * Called when the user clicks the #update-background-btn. This function will read the current input values and set the background color to these values.
   * 
   * @param rgb: RGB object bound to the input fields. Holds the rgb(xxx,xxx,xxx) values for the new background color. 
   */
  updateBackgroundColor(rgb) {
    // 1. Make sure the rgb values are valid
    rgb = this.validateRgbObject(rgb);

    // 2. Construct the new background color
    var updatedBackgroundColor = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";

    // 3. Set the background of the <body> to the new background color. Right now I am using direct DOM manipulation because I could not find a way to access the <body> via typescript. 
    document.body.style.background = updatedBackgroundColor;
      // TODO: 3.1 In the future this is when the animation should happen 
    
    // 4. Update the all of the font colors
    let fontColor = this.setFontColor(rgb);
    this.fontColorOfBodyElements = this.rgbToString(fontColor);
  }

  /**
   * Called when an input goes out of focus
   * 
   * @param rgb: RGB object bound to the input fields. Holds the rgb(xxx,xxx,xxx) values for the buttons new background color. 
   */
  updateButtonBackground(rgb) {
    // 1. Make sure the rgb values are valid
    rgb = this.validateRgbObject(rgb);

    // 2. Set the background color of the #update-background-btn
    this.updateBackgroundButtonColor = this.rgbToString(rgb);
  
    // 3. Set the font color of the #update-background-btn
    let fontColor = this.setFontColor(rgb);
    this.updateBackgroundButtonFontColor = this.rgbToString(fontColor);

    // TODO: 4. Move to the next input box
  }

  private rgbToString(rgb): string {
    return "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
  }

  /**
   * Set the font color based on the current RGB object values.
   * 
   * @param rgb: RGB object bound to the input fields. Holds the rgb(xxx,xxx,xxx) values to determine font color
   * @return: RGB object holding the new font color determined from current RGB object values
   */
  private setFontColor(rgb): RGB {
    var fontColor: RGB;
    let fontValue = (rgb.r*0.299) + (rgb.g*0.587) + (rgb.b*0.114)

    if (fontValue > 186) {
      fontColor = {r: '000', g: '000', b: '000'};
      return fontColor;
    } else {
      fontColor = {r: '250', g: '250', b: '250'};
      return fontColor;
    }
  }

  /**
   * Called by the <app-header>, and .app-component when anything on the page is updated to see what the font color should be.
   * 
   * @return: valid rgb string
   */
  getFontColorOfBodyElements(): string {
    return this.fontColorOfBodyElements;
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
   * Called by the #update-background-btn when anything on the page is updated to see what the font color should be.
   * 
   * @return: valid rgb string
   */
  getButtonBackgroundFontColor(): string {
    return this.updateBackgroundButtonFontColor;
  }

  /**
   * Check to make sure a RGB object is valid
   * 
   * @return: a valid RGB object
   */
  private validateRgbObject(rgb): RGB {
    // 1. TODO: update validateRgbValueLength method to make sure the inputs are only numbers
    // 2. Make sure the inputs are not <0 or >250
    rgb.r = this.validateRgbValueRange(rgb.r);
    rgb.g = this.validateRgbValueRange(rgb.g);
    rgb.b = this.validateRgbValueRange(rgb.b);

    // 3. Make sure the input fields are valid and have 3 digits
    rgb.r = this.validateRgbValueLength(rgb.r);
    rgb.g = this.validateRgbValueLength(rgb.g);
    rgb.b = this.validateRgbValueLength(rgb.b);

    return rgb;
  }

  /**
   * Used to validate the length of a single RGB value (rgb.r || rgb.g || rgb.b). This function validates a single value, not the whole RGB object. The goal of this function is to make sure an rgb value has a length of 3.
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
   * Used to validate the range of a single RGB value (rgb.r || rgb.g || rgb.b). This function validates a single value, not the whole RGB object. This function makes sure an rgb value is > 0 and < 250.
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
