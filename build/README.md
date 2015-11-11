# react-asyncbutton

![npm](https://img.shields.io/npm/v/react-asyncbutton.svg) ![license](https://img.shields.io/npm/l/react-asyncbutton.svg) ![github-issues](https://img.shields.io/github/issues/revolunet/react-asyncbutton.svg)

async button to call urls with visual feedback

![demo](./examples/asyncbutton.gif)

## Install

`npm install --save-dev react-asyncbutton`

## Usage

```html
<AsyncButton url={ url } onSuccess={ this.onSuccess }/>
```

See [examples](./examples)

## Scripts  

 - **npm run test** : `rackt test`
 - **npm run test-chrome** : `./node_modules/.bin/testem -l Chrome`
 - **npm run start** : `rackt server`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[babel-runtime](https://www.npmjs.com/package/babel-runtime) | 6.1.4 | ✖
[browser-request](https://www.npmjs.com/package/browser-request) | ^0.3.3 | ✖
[babel-runtime](https://www.npmjs.com/package/babel-runtime) | ^6.1.4 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | 0.1.9 | ✔
[rackt-cli-revolunet](https://www.npmjs.com/package/rackt-cli-revolunet) | ^0.5.10 | ✔
[react](https://www.npmjs.com/package/react) | ^0.14 | ✔


## Contributing

Contributions welcome; Please submit all pull requests the against master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

Julien Bouquillon <julien@revolunet.com>> undefined

## License

 - **MIT** : http://opensource.org/licenses/MIT
