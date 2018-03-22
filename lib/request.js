module.exports = class MockRequest {
  constructor() {
    // Properties
    this.app = {};
    this.baseUrl = "/";
    this.body = undefined;
    this.cookies = {};
    this.fresh = true;
    this.hostname = "domain.com";
    this.ip = "127.0.0.1";
    this.ips = [];
    this.method = "GET";
    this.originalUrl = "/";
    this.params = {};
    this.path = "/";
    this.protocol = "https";
    this.query = {};
    this.route = {};
    this.secure = true;
    this.signedCookies = {};
    this.stale = true;
    this.subdomains = ["subdomain"];
    this.xhr = false;

    // Methods
    this.accepts = jest.fn();
    this.acceptsCharsets = jest.fn();
    this.acceptsEncodings = jest.fn();
    this.acceptsLanguages = jest.fn();
    this.get = jest.fn();
    this.is = jest.fn();
    this.param = jest.fn();
    this.range = jest.fn();
  }

  reset() {
    this.accepts.mockClear();
    this.acceptsCharsets.mockClear();
    this.acceptsEncodings.mockClear();
    this.acceptsLanguages.mockClear();
    this.get.mockClear();
    this.is.mockClear();
    this.param.mockClear();
    this.range.mockClear();
  }
};
