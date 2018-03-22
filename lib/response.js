const jest = require("jest");

module.exports = class MockResponse {
  constructor() {
    // Properties
    this.app = {};
    this.headersSent = false;
    this.locals = {};

    // Methods
    this.append = jest.fn();
    this.attachment = jest.fn();
    this.cookie = jest.fn();
    this.clearCookie = jest.fn();
    this.download = jest.fn();
    this.end = jest.fn();
    this.format = jest.fn();
    this.get = jest.fn();
    this.json = jest.fn();
    this.jsonp = jest.fn();
    this.links = jest.fn();
    this.location = jest.fn();
    this.redirect = jest.fn();
    this.render = jest.fn();
    this.send = jest.fn();
    this.sendFile = jest.fn();
    this.sendStatus = jest.fn();
    this.links = jest.fn();
    this.set = jest.fn();
    this.status = jest.fn();
    this.type = jest.fn();
    this.vary = jest.fn();

    // Chainable Methods
    this.status.mockImplementation(() => this);
    this.vary.mockImplementation(() => this);
  }

  reset() {
    this.append.mockClear();
    this.attachment.mockClear();
    this.cookie.mockClear();
    this.clearCookie.mockClear();
    this.download.mockClear();
    this.end.mockClear();
    this.format.mockClear();
    this.get.mockClear();
    this.json.mockClear();
    this.jsonp.mockClear();
    this.links.mockClear();
    this.location.mockClear();
    this.redirect.mockClear();
    this.render.mockClear();
    this.send.mockClear();
    this.sendFile.mockClear();
    this.sendStatus.mockClear();
    this.links.mockClear();
    this.set.mockClear();
    this.status.mockClear();
    this.type.mockClear();
    this.vary.mockClear();
  }
};
