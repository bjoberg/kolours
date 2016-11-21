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
  rgb: RGB;

  /**
   * Initiate the app. Create new snackbar, viewContainerRef, and initiate variables.
   */
  constructor(public snackBar: MdSnackBar, public viewContainerRef: ViewContainerRef) {
    this.rgb = {
      r: 100,
      g: 200,
      b: 136
    };

    // General
    this.backgroundColor = this.rgbToString(this.rgb);
    this.fontColorOfBodyElements = "rgb(250,250,250)"; // TODO: Make this better

    // #update-background-btn specific
    this.updateBackgroundButtonColor = this.rgbToString(this.rgb);
    this.updateBackgroundButtonFontColor = "rgb(250,250,250)"; // TODO: Make this better
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

    // TODO: There should be some animation here
    // 2. Set the background of the <body> to the new background color. Right now I am using direct DOM manipulation because I could not find a way to access the <body> via typescript. 
    document.body.style.background = this.rgbToString(rgb); 
    
    // 3. Update the all of the font colors
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
  }

  /**
   * Convert RGB object to string value that can be read by DOM
   * 
   * @return: string value of the RGB object
   */
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
    let colorValue = (rgb.r * 0.299) + (rgb.g * 0.587) + (rgb.b * 0.114)

    if (colorValue > 186) {
      fontColor = {r: 0, g: 0, b: 0};
      return fontColor;
    } else {
      fontColor = {r: 250, g: 250, b: 250};
      return fontColor;
    }
  }

  /**
   * Called by the <app-header>, and .app-component when anything on the page is updated to see what the font color should be.
   * 
   * @return: valid rgb string
   */
  public getFontColorOfBodyElements(): string {
    return this.fontColorOfBodyElements;
  }

  /**
   * Called by the #update-background-btn when anything on the page is updated to see what color it should be.
   * 
   * @return: valid rgb string
   */
  public getButtonBackgroundColor(): string {
    return this.updateBackgroundButtonColor;
  }

  /**
   * Called by the #update-background-btn when anything on the page is updated to see what the font color should be.
   * 
   * @return: valid rgb string
   */
  public getButtonBackgroundFontColor(): string {
    return this.updateBackgroundButtonFontColor;
  }

  /**
   * Check to make sure a RGB object is valid
   * 
   * @return: a valid RGB object
   */
  private validateRgbObject(rgb): RGB {
    // 1. Make sure the input fields do not have atleast 1 and no more than 3 digits
    rgb.r = this.validateRgbValueLength(rgb.r);
    rgb.g = this.validateRgbValueLength(rgb.g);
    rgb.b = this.validateRgbValueLength(rgb.b);

    // 2. Make sure the inputs are not <0 or >250
    rgb.r = this.validateRgbValueRange(rgb.r);
    rgb.g = this.validateRgbValueRange(rgb.g);
    rgb.b = this.validateRgbValueRange(rgb.b);

    return rgb;
  }

  /**
   * Make sure the RGB object is not longer than 3.
   * 
   * @param value: single RGB value
   * @return: value if value > 3 else return 0
   */
  private validateRgbValueLength(value): number {
    let config = new MdSnackBarConfig(this.viewContainerRef);

    if (value === null || value == null || value == 'undefined') {
      this.snackBar.open('Oops... you forgot a value', 'Okay', config);
      return 0;
    } else if (value.length > 3) {
      this.snackBar.open('Value cannot be longer than 4', 'Okay', config);
      return 0; 
    } else {
      return value;
    }
  }

  /**
   * Used to validate the range of a single RGB value (rgb.r || rgb.g || rgb.b). This function validates a single value, not the whole RGB object. This function makes sure an rgb value is > 0 and < 250.
   * 
   * @param value: single RGB value that should be > 0 and < 250
   * @return: value > 0 and < 250
   */
  private validateRgbValueRange(value): number {
    let config = new MdSnackBarConfig(this.viewContainerRef);

    if (value > 250) {
      value = 250;
      this.snackBar.open('Value cannot be greater than 250', 'Okay', config);
    } else if (value < 0) {
      value = 0
      this.snackBar.open('Value cannot be less than 0', 'Okay', config);
    }
    return value;
  }
}
