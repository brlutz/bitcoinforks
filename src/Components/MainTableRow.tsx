import * as React from 'react';
export interface MainTableRowProps {
  Name: string;
  BlockNumber?: number; 
  BlockDate: string;
  Claimable?: string;
  Markets: string;
  MarketLink: string;
  MainNet: string;
  Website: string;
  WebsiteAltText?: string;
  HasCheckMark?: boolean;
  TwitterName?: string;
  WalletSupport?: string;
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
  {this.props.BlockNumber} {this.props.BlockDate !== '' && this.props.BlockNumber !== undefined && '/'} {this.props.BlockDate}
</span><br className="no-style-break"/><br className="no-style-break"/>
<span>
  <span className="title">Markets: <br className="no-style-break"/></span>
  {this.getOptionalLink(this.props.Markets, this.props.MarketLink)}
</span><br className="no-style-break"/><br className="no-style-break"/>
<span>
  <span className="title">Website: <br className="no-style-break"/></span>
  {this.getOptionalLink(this.props.Website, this.props.Website, this.props.WebsiteAltText)}
</span><br className="no-style-break"/><br className="no-style-break"/>
<span>
  <span className="title">Ledger / Trezor Support: <br className="no-style-break"/></span>
  {this.props.WalletSupport !== undefined ? this.props.WalletSupport : 'No'}
</span><br className="no-style-break"/><br className="no-style-break"/>
<span>
  <span className="title">Twitter <br className="no-style-break"/></span>
  {this.getTwitterLink(this.props.TwitterName)}
</span><br className="no-style-break"/><br className="no-style-break"/>
</p>);
  }

  getOptionalLink(text: string, link: string, altText?: string) {
    return (
      link !== '' ? 
      altText !== undefined ? <a href={link}>{altText}</a> : <a href={link}>{text}</a> : <span>{text}</span>
    );
  }

  getTwitterLink(text?: string) {
    return (
      
      text !== undefined ?
      <a href={'https://twitter.com/' + this.props.TwitterName}>{'@' + this.props.TwitterName}</a> : ''
      
    );
  }
}

export default MainTableRow;
