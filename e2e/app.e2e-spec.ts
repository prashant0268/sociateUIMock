import { SociateUIPage } from './app.po';

describe('sociate-ui App', () => {
  let page: SociateUIPage;

  beforeEach(() => {
    page = new SociateUIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
