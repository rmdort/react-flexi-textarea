import React from 'react';
import ReactAutogrowTextarea from '../../lib/index';

let App = React.createClass({
  render() {
    return (
      <div className="example">
        <h1>react-autogrow-textarea</h1>
        <ReactAutogrowTextarea/>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('container'));
