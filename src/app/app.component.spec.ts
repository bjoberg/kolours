/**
 * Unit test class for the AppComponent. 
 * Test are written using Jasmine with the testing environment Karma.
 * 
 * Jasmine: http://jasmine.github.io/2.5/introduction.html
 * Karma: https://karma-runner.github.io/1.0/index.html
 * 
 * How to test:
 * 1. Create a test suite
 * 2. Create a spec inside the suite
 * 3. Create an expectation within the spec
 */
import { TestBed, async } from '@angular/core/testing';

// Imports
import { MaterialModule } from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

/** 
 * AppComponent test suite
 */
describe('AppComponent: ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      imports: [ MaterialModule.forRoot() ],
    });
  });

  /**
   * Make sure the application can be created
   */
  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;

    // Does the app exist?
    expect(app).toBeTruthy();
  }));

  /**
   * Make sure the application's title == 'kolours'
   */
  it('should have a title = Kolours', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;

    // Check the title
    expect(app.title).toEqual('Kolours');
  }));
});
