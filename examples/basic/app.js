import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(<App/>, document.getElementById('container'));
