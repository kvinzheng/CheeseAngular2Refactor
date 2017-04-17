import { CheezewhizzzPage } from './app.po';

describe('cheezewhizzz App', () => {
  let page: CheezewhizzzPage;

  beforeEach(() => {
    page = new CheezewhizzzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
