# react-flexi-textarea

Automatically adjusts the height of the textarea as user types

## Installation
React Autogrow Textarea can be installed as an npm package

    npm install react-flexi-textarea --save

## Usage

```jsx
import React from 'react';
import Textarea from 'react-flexi-textarea';

let App = React.createClass({
  render() {
    return (
      <Textarea />
    );
  }
});

React.render(<App/>, document.getElementById('container'));
```
    
You can pass all `props` that can be used with default React textarea

## License

This project is licensed under the terms of the MIT license.
