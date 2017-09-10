import { CustAppPage } from './app.po';

describe('cust-app App', function() {
  let page: CustAppPage;

  beforeEach(() => {
    page = new CustAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
