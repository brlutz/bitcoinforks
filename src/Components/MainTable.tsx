import * as React from 'react';
import MainTableRow from './MainTableRow';
// import MainTableRowProps from './MainTableRow';
class MainTable extends React.Component {
  render() {
    return (
<div className="container navPadding">
<section className="the-css-at-table">
<header className="hiddenHeader">
  <p className="tr">
    <span className="th">Name</span>
    <span className="th">Block Number / Date</span>
    <span className="th">Claimable</span>
    <span className="th">Markets</span>
    <span className="th">Mainnet</span>
    <span className="th">Social</span>
  </p>
</header>
<div className="tbody">
  <MainTableRow 
      Name="Bitcoin Cash (BCH)"
      BlockNumber={478588}
      BlockDate="Aug 01 2017"
      Claimable="Yes"
      Markets="High Volume"
      MarketLink="https://coinmarketcap.com/currencies/bitcoin-cash/#markets"
      MainNet="Yes"
      Website="www.bitcoincash.org"
      Social=""
      HasCheckMark={true}
  />
  <MainTableRow 
      Name="Bitcoin Gold (BTG)"
      BlockNumber={491407}
      BlockDate="Oct 24 2017"
      Claimable="Yes"
      Markets="High Volume"
      MarketLink="https://coinmarketcap.com/currencies/bitcoin-gold/#markets"
      MainNet="Yes"
      Website="www.bitcoingold.org"
      Social=""
      HasCheckMark={true}
  />
  <MainTableRow 
      Name="Bitcoin Gold (BTG)"
      BlockNumber={492820}
      BlockDate="Nov 2 2017"
      Claimable="Yes + Airdrops"
      Markets="Low Volume"
      MarketLink="https://coinmarketcap.com/currencies/bitcore/#markets"
      MainNet="Yes"
      Website="https://bitcore.cc/"
      Social=""
      HasCheckMark={false}
  />
  
  
  <p className="spacer">&nbsp;</p>
</div>
</section>
</div>);
  }
}

export default MainTable;
