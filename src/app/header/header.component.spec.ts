/**
 * Unit test class for the HeaderComponent. 
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
import { HeaderComponent } from './header.component';

/** 
 * HeaderComponent test suite
 */
describe('HeaderComponent: ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      imports: [ MaterialModule.forRoot() ],
    });
  });

  /**
   * Make sure the application can be created
   */
  it('should create the app', async(() => {
    // Create the app
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.componentInstance;

    // Does the app exist?
    expect(app).toBeTruthy();
  }));

  /**
   * Make sure the application's title == 'kolours'
   */
  it('should have a title = Kolours', async(() => {
    // Create the app
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.componentInstance;

    // Check the title
    expect(app.title).toEqual('Kolours');
  }));

  /**
   * Make sure logo links to http://www.brettoberg.com/
   */
  it('should have a logo that links to http://www.brettoberg.com/', async(() => {
    let fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;

    // check link
    expect(compiled.querySelector('#logo').href).toEqual('http://www.brettoberg.com/');
  }));

  /**
   * Make sure github icon links to https://github.com/bjoberg/kolours
   */
  it('should have a github icon that links to https://github.com/bjoberg/kolours', async(() => {
    let fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;

    // check link
    expect(compiled.querySelector('#github').href).toEqual('https://github.com/bjoberg/kolours');
  }));
});
