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
      Name="Bitcore (BTX)"
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
  <MainTableRow 
      Name="Bitcoin Diamond (BCG)"
      BlockNumber={495866}
      BlockDate="Nov 24 2017"
      Claimable="Warning"
      Markets="Low Volume Futures"
      MarketLink="https://coinmarketcap.com/currencies/bitcoin-diamond/#markets"
      MainNet="Late December"
      Website="http://www.btcd.io/"
      Social=""
      HasCheckMark={false}
  />
  <MainTableRow 
      Name="Bitcoin Lightning (BLG)"
      BlockNumber={498553}
      BlockDate="Dec 10 2017"
      Claimable="Be Careful"
      Markets="No"
      MarketLink=""
      MainNet="Dec 25th"
      Website="https://bitcointalk.org/index.php?topic=2559630.0"
      Social=""
      HasCheckMark={false}
  />
  <MainTableRow 
      Name="Bitcoin Hot (BLG)"
      BlockNumber={498848}
      BlockDate="Dec 12 2017"
      Claimable="Be Careful"
      Markets="Fringe Exchanges (Tiny Volume)"
      MarketLink=""
      MainNet="No"
      Website="www.bithot.org"
      Social=""
      HasCheckMark={false}
  />
  <MainTableRow 
      Name="United Bitcoin"
      BlockNumber={498777}
      BlockDate="Dec 12 2017"
      Claimable=""
      Markets=""
      MarketLink=""
      MainNet=""
      Website="http://www.ub.com/"
      Social=""
      HasCheckMark={false}
  />
  <MainTableRow 
      Name="Super Bitcoin (SBTC)"
      BlockNumber={498888}
      BlockDate="Dec 14 2017"
      Claimable="No"
      Markets="Fringe Exchanges (Tiny Volume)"
      MarketLink=""
      MainNet="No"
      Website="http://supersmartbitcoin.com/"
      Social=""
      HasCheckMark={false}
  />
  <MainTableRow 
      Name="BitcoinX (BCX)"
      BlockNumber={498888}
      BlockDate="Dec 14 2017"
      Claimable="No"
      Markets="Fringe Exchanges (Tiny Volume)"
      MarketLink=""
      MainNet="No"
      Website="https://www.bcx.org/"
      Social=""
      HasCheckMark={false}
  />
  <MainTableRow 
      Name="Bitcoin God (GOD)"
      BlockNumber={501225}
      BlockDate="Dec 25 2017"
      Claimable="No"
      Markets="No"
      MarketLink=""
      MainNet="No"
      Website="https://www.bitcoingod.org/"
      Social=""
      HasCheckMark={false}
  />
  <MainTableRow 
      Name="Bitcoin Atom"
      BlockDate="Mid December"
      Claimable="No"
      Markets="No"
      MarketLink=""
      MainNet="No"
      Website="https://bitcoinatom.io/"
      Social=""
      HasCheckMark={false}
  />
  <MainTableRow 
      Name="Bitcoin Uranium (BUM)"
      BlockDate="Dec 31, 2017"
      Claimable="No"
      Markets="No"
      MarketLink=""
      MainNet="No"
      Website="https://bitcointalk.org/index.php?topic=2316506.0"
      Social=""
      HasCheckMark={false}
  />
  <MainTableRow 
      Name="Bitcoin Cash Plus"
      BlockNumber={501407}
      BlockDate=""
      Claimable="No"
      Markets="No"
      MarketLink=""
      MainNet="No"
      Website="http://www.bitcoincashplus.org/"
      Social=""
      HasCheckMark={false}
  />
  <MainTableRow 
      Name="Bitcoin Pizza"
      BlockNumber={501888}
      BlockDate=""
      Claimable="No"
      Markets="No"
      MarketLink=""
      MainNet="No"
      Website="http://www.p.top/en/index.html"
      Social=""
      HasCheckMark={false}
  />
  <MainTableRow 
      Name="Bitcoin Smart"
      BlockNumber={505050}
      BlockDate=""
      Claimable="No"
      Markets="No"
      MarketLink=""
      MainNet="No"
      Website="http://bcs.info/"
      Social=""
      HasCheckMark={false}
  />
  <MainTableRow 
      Name="Bitcoin Rhodium"
      BlockDate="Airdrops"
      Claimable="No"
      Markets="Airdrops"
      MarketLink=""
      MainNet="No"
      Website="https://www.bitcoinrh.org/"
      Social=""
      HasCheckMark={false}
  />
  <MainTableRow 
      Name="Bitcoin Silver"
      BlockDate="Scam"
      Claimable=""
      Markets=""
      MarketLink=""
      MainNet=""
      Website=""
      Social=""
      HasCheckMark={false}
  />
  <MainTableRow 
      Name="Bitcoin Rhodium"
      BlockDate=""
      Claimable=""
      Markets=""
      MarketLink=""
      MainNet=""
      Website=""
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
