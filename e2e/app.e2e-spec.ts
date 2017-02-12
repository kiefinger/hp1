import { Hp1Page } from './app.po';

describe('hp1 App', function() {
  let page: Hp1Page;

  beforeEach(() => {
    page = new Hp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
