import { TapRoomPage } from './app.po';

describe('tap-room App', () => {
  let page: TapRoomPage;

  beforeEach(() => {
    page = new TapRoomPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
