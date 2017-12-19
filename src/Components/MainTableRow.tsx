import * as React from 'react';
export interface MainTableRowProps {
  Name: string;
  BlockNumber?: number; 
  BlockDate: string;
  Claimable: string;
  Markets: string;
  MarketLink: string;
  MainNet: string;
  Website: string;
  Social?: string;
  HasCheckMark?: boolean;
}

class MainTableRow extends React.Component < MainTableRowProps, {}> {
  render() {
    return (
<p className="tr">
<span>
  <span className="title">Name: <br className="no-style-break"/></span>
  {this.props.Name}
</span><br className="no-style-break"/><br className="no-style-break"/>
<span>
  <span className="title">Block Number/Date: <br className="no-style-break"/></span>
  {this.props.BlockNumber} / {this.props.BlockDate}
</span><br className="no-style-break"/><br className="no-style-break"/>
<span>
  <span className="title">Claimable: <br className="no-style-break"/></span>
  {this.props.Claimable}
</span><br className="no-style-break"/><br className="no-style-break"/>
<span>
  <span className="title">Markets: <br className="no-style-break"/></span>
  {this.getOptionalLink(this.props.Markets, this.props.MarketLink)}
</span><br className="no-style-break"/><br className="no-style-break"/>
<span>
  <span className="title">MainNet: <br className="no-style-break"/></span>
  {this.props.MainNet}
</span><br className="no-style-break"/><br className="no-style-break"/>
<span>
  <span className="title">Social <br className="no-style-break"/></span>
  Coming Soon!
</span><br className="no-style-break"/><br className="no-style-break"/>
</p>);
  }

  getOptionalLink(text: string, link: string) {
    return (
      link !== '' ? 
      <a href={this.props.MarketLink}>{this.props.Markets}</a> : <span>{this.props.Markets}</span>
    );
  }
}

export default MainTableRow;
