import * as React from 'react';

class TableRow extends React.Component {
  render() {
    return (
  <p className="tr">
    <span>
      <span className="title">Company: <br className="no-style-break"/></span>
      <a href="http://markdotto.com/2014/07/23/githubs-css/">Github</a>
    </span><br className="no-style-break"/><br className="no-style-break"/>
    <span>
      <span className="title">Preprocessor: <br className="no-style-break"/></span>
      SCSS
    </span><br className="no-style-break"/><br className="no-style-break"/>
    <span>
      <span className="title">Prefixing: <br className="no-style-break"/></span>
      Custom @mixins
    </span><br className="no-style-break"/><br className="no-style-break"/>
    <span>
      <span className="title"># Source files: <br className="no-style-break"/></span>
      100+
    </span><br className="no-style-break"/><br className="no-style-break"/>
    <span>
      <span className="title"># Selectors: <br className="no-style-break"/></span>
      7,000
    </span><br className="no-style-break"/><br className="no-style-break"/>
    <span>
      <span className="title">Style enforcement: <br className="no-style-break"/></span>
      SCSS-lint, <a href="https://github.com/styleguide/css/">styleguide</a>
    </span><br className="no-style-break"/><br className="no-style-break"/>

  </p>);
  }
}

export default TableRow;
