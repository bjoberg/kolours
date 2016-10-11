/**
 * Unit test class for the AppComponent. 
 * Test are written using Jasmine with the testing environment Karma.
 * 
 * Jasmine: http://jasmine.github.io/2.5/introduction.html
 * Karma: https://karma-runner.github.io/1.0/index.html
 */

/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

// Imports
import { MaterialModule } from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

/** 
 * 1. Create a test suite
 * 
 * @param 1: Title of the suite
 * @param 2: Code block that implements the suite
 */
describe('App: Kolours', () => {
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
   * 2. Create a spec
   * 
   * @param 1: Title of the spec
   * @param 2: The spec's test
   * 
   * @return: Result of spec method
   */
  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;

    // 3. Create an expectation... compare actual to expected
    expect(app).toBeTruthy();
  }));

  it('should have a title = Kolours', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Kolours');
  }));
});
