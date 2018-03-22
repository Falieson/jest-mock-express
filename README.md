# jest-mock-express

This library adds Express mocks for unit testing with Jest. It provides a real chained API as returned by Express.

Currently supports the Express.response and Express.request Objects
object with full API for Express 4

## Getting started

First, install jest-mock-express using yarn:

```sh
    yarn add https://github.com/benwart/jest-mock-express.git
```

Then, require the package and use it like so:

```js
    const MockResponse = require('jest-mock-express').MockResponse

    test('Example test', () => {
      const res = new MockResponse();
      res.status(200).send();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalled();
    })
```

## API

### `.MockRequest()` and `.MockResponse()`

Returns a mocked Express Class. The methods in the returned object can be chained just like with the real thing. You can use any of the [Jest mock methods](https://facebook.github.io/jest/docs/mock-function-api.html).

### `<class>.reset()`

Will reset all information stored in the response mocks. This is a convenience method
which internally will call `.mockClear()` on all the class methods.

## Contributing

To report bugs or request features, submit issues here on GitHub, [benwart/jest-mock-express/issues](https://github.com/benwart/jest-mock-express/issues). Pull requests are also welcome.

## License

MIT
