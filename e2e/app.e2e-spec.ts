import { ScottAdminPage } from './app.po';

describe('scott-admin App', () => {
  let page: ScottAdminPage;

  beforeEach(() => {
    page = new ScottAdminPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
