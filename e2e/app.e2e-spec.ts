import { KoloursPage } from './app.po';

describe('kolours App', function() {
  let page: KoloursPage;

  beforeEach(() => {
    page = new KoloursPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
