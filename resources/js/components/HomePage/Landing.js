import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <div>
                {/* slideshow content begin */}
           <div className="uk-section uk-padding-remove-vertical">
  <div className="uk-light in-slideshow uk-background-cover uk-background-top-center" style={{backgroundImage: 'url(img/sliderbackground.png)'}} data-uk-slideshow>
    <ul className="uk-slideshow-items">
      <li>
        <div className="uk-container">
          <div className="uk-grid-medium" data-uk-grid>
            <div className="uk-width-1-2@s">
              <div className="uk-overlay">
                <h2>Crypto options And crypto trading with a trusted broker</h2>
                <p className="uk-text-lead uk-visible@m">Secure and easy way to trade. <br/>230.000+ traders chose borextrade</p>
                <a href="#" className="btn btn-outline-warning uk-border-rounded uk-visible@s">Create Free Account</a>
              </div>
            </div>
            <div className="uk-width-1-2@s">
              <img className="in-slide-img" src="/img/in-liquid-slide-3.svg" data-src="/img/in-liquid-slide-3.svg" alt="image-slide" width={500} height={400} />
            </div>
          </div>
        </div>
      </li>
    
    </ul>
    {/* <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous" />
    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next" /> */}
    <div className="container-fluid" style={{marginTop:"-90px"}}>
              <div className="row tradeWithFRow pb-4" >
             
                <div className="col-lg-3 col-md-4 col-sm-2 feature_div ">
                  <div className="tradeFeatureBox">
                    <div>
                    <img className="in-slide-img" src="/img/icons8-clock-96.png" data-src="/img/icons8-clock-96.png" alt="image-slide" width={40} height={40} />
                    </div>
                    
                    <p><strong>Short-Term Contracts<br/></strong><em>Trading intra-day, daily or weekly provides unique opportunities.</em></p>
                    
                    <p></p>
                  
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-2 feature_div">
                  <div className="tradeFeatureBox">
                    <div >
                    <img className="in-slide-img" src="/img/icons8-countdown-clock-96.png" data-src="/img/icons8-countdown-clock-96.png" alt="image-slide" width={40} height={40} />
                    </div>
                    <p><strong>Trading Around the Clock<br/></strong><em>24 hours a day, Sunday-Friday only.</em></p>
                 
                   <p></p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-2 feature_div">
                  <div className="tradeFeatureBox">
                    <div>
                    <img className="in-slide-img" src="/img/icons8-trading-64.png" data-src="/img/icons8-trading-64.png" alt="image-slide" width={40} height={40} />
                    </div>
                    <p><strong> Active Markets<br></br></strong><em>23 hours a day, Sunday-Friday. Whenever you want to trade.</em></p>
                    <p></p>
                 
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-2 feature_div">
                  <div className="tradeFeatureBox">
                    <div >
                    <img className="in-slide-img" src="/img/icons8-neutral-trading-96.png" data-src="/img/icons8-neutral-trading-96.png" alt="image-slide" width={40} height={40} />
                    </div>
                    <p><strong> Risk That You Define<br/></strong><em>Know your maximum potential profit or loss up front</em></p>
                 
                  </div>
                </div>
              </div></div>



  </div>
  
</div>

<div className="uk-section uk-section-secondary in-liquid-1">
  <div className="uk-container uk-light">
    <div className="uk-grid uk-flex uk-flex-middle">
      <div className="uk-text-center" style={{marginLeft:"31%"}}>
        <h2>How it work.  <br></br><p >Start Trading in 3 Steps.</p></h2>
        
      </div>
    </div>
    <div className="uk-child-width-1-3@m" data-uk-grid>
      <div>
        <div className="uk-card uk-card-secondary uk-border-rounded uk-cover-container">
          <div className="uk-card-media-top" >
            <img src="img/in-liquid-object-1.svg" data-src="img/in-liquid-object-1.svg" alt="sample-image" data-width data-height data-uk-img />
          </div>
          <div className="uk-card-body">
            <h3 style={{marginTop:'50px'}}>Register</h3>
            <p>Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-secondary uk-border-rounded uk-cover-container">
          <div className="uk-card-media-top">
            <img src="img/in-liquid-object-3.svg" data-src="img/in-liquid-object-3.svg" alt="sample-image" data-width data-height data-uk-img />
          </div>
          <div className="uk-card-body" style={{marginTop:'50px'}}>
            <h3>Fund Your Account</h3>
            <p>Login to borextrade  and make <br></br>your  deposit to  activate your<br></br> trade.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-secondary uk-border-rounded uk-cover-container">
          <div className="uk-card-media-top">
            <img src="img/in-liquid-object-2.svg" data-src="img/in-liquid-object-2.svg" alt="sample-image" data-width data-height data-uk-img />
          </div>
          <div className="uk-card-body" style={{marginTop:'50px'}}>
            <h3>Invest</h3>
            <p>Start getting profits to your trading account once your trade is activated.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <div className="uk-section in-liquid-14 py-0">
  <div className="uk-container mt-0 mb-0">
    <div className="uk-grid-large uk-flex uk-flex-middle" data-uk-grid>
      <div className="uk-width-expand@m">
        <h2>A broker you can <span className="in-highlight">Trust</span>.</h2>
        <p>Checkout our minimum qoutes.</p>
        <div className="uk-grid uk-grid-collapse uk-child-width-1-3@m uk-child-width-1-2@s uk-text-center uk-margin-medium-top">
          <div className="uk-tile uk-tile-default">
            <p className="uk-text-lead uk-margin-remove-bottom">EURUSD</p>
            <p className="uk-text-small uk-text-muted uk-margin-remove-top">0.1
</p>
          </div>
          <div className="uk-tile uk-tile-default">
            <p className="uk-text-lead uk-margin-remove-bottom">GBPUSD</p>
            <p className="uk-text-small uk-text-muted uk-margin-remove-top">0.4</p>
          </div>
          <div className="uk-tile uk-tile-default">
            <p className="uk-text-lead uk-margin-remove-bottom">USDJPY</p>
            <p className="uk-text-small uk-text-muted uk-margin-remove-top">0.2</p>
          </div>
          <div className="uk-tile uk-tile-default">
            <p className="uk-text-lead uk-margin-remove-bottom">DAX</p>
            <p className="uk-text-small uk-text-muted uk-margin-remove-top">1</p>
          </div>
          <div className="uk-tile uk-tile-default uk-visible@m">
            <p className="uk-text-lead uk-margin-remove-bottom">XAUUSD</p>
            <p className="uk-text-small uk-text-muted uk-margin-remove-top">0.1</p>
          </div>
          {/* <div className="uk-tile uk-tile-default uk-visible@m">
            <p className="uk-text-lead uk-margin-remove-bottom">2.11M</p>
            <p className="uk-text-small uk-text-muted uk-margin-remove-top">Daily Avg Revenue</p>
          </div>
        </div>
        {/* <a className="uk-button uk-button-text uk-border-rounded uk-margin-medium-top" href="#">Asset protection<i className="fas fa-angle-right uk-margin-small-left" /></a>
        <p className="uk-text-small">For additional information view our Investors Relations - <a href="#">clicking here.</a></p>
      </div>
      <div className="uk-width-1-2@m">
        <img className="uk-width-1-1 img_sheild"  src="/img/8.svg" data-src="img/in-liquid-object-5.svg" alt="sample-image" data-width data-height data-uk-img />
      </div>
    </div>
  </div>
</div> */}
<div className="uk-section">
  <div className="uk-container">
    <div className="uk-grid">
      <div className="uk-width-2-3@m">
        <div className="uk-grid uk-grid-small" data-uk-grid>
          {/* <div className="uk-width-auto@m">
            <i className="fas fa-money-bill-wave fa-2x in-icon-wrap circle large primary-color uk-margin-right" />
          </div> */}
          <div className="uk-width-expand">
            <h2>Why Choose Us</h2>
            <p>borextrade strives to be worthy of our client's trust by providing them with services which are economically beneficial to them and to create awareness regarding reliable and highly profitable investment platform among our clients around the globe. All you need to do is sit back and enjoy how your profit grows on a daily.</p>
            <div className="uk-grid uk-child-width-1-1 uk-child-width-1-2@m">
              <div>
                <ul className="uk-list uk-list-bullet in-list-check">
                  <li>Professional team</li>
                  <li>Instant payments</li>
                  <li>24/7 live support</li>
                  <li>Great referral system</li>
                </ul>
              </div>
              <div className="in-margin-top-10@s in-margin-bottom-40@s">
                <ul className="uk-list uk-list-bullet in-list-check">
                  <li>DDOS security</li>
                  <li>Unique design</li>
                  <li>Profitable plans</li>
                  <li>No investment contracts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-width-1-3@m">
      <img className="in-slide-img" src="/img/in-liquid-slide-2.svg" data-src="/img/in-liquid-slide-2.svg" alt="image-slide" width={500} height={400} />
      </div>
    </div>
  </div>
</div>


<div className="uk-section uk-section-secondary in-liquid-10">
  <div className="uk-container uk-light">
    <div >
        <div className='col-md-6' style={{marginLeft:'32%'}}>
            <h2>Crypto Market Analysis</h2>
        </div>
      <iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=6&pref_coin_id=1505&graph=yes"  height={420} style={{border: 0, width:'100%'}}/>
    </div>
  </div>
</div>
{/* //////////////////////////////// */}
<div className="uk-section uk-section-secondary in-liquid-10" >
  <div className="uk-container uk-light">
    <div className="uk-grid-medium uk-child-width-1-4@m uk-flex uk-flex-middle"  data-uk-grid>
      <div>
        <h2>Trade types</h2>
        <p className="font-italic">Explore different trade types to trade on your preferred market.</p>
        {/* <a className="uk-button uk-button-default uk-border-rounded uk-margin-top" href="#">Start trading<i className="fas fa-angle-right uk-margin-small-left" /></a> */}
      </div>
      <div>
        <div className="uk-card uk-card-secondary uk-card-body uk-border-rounded uk-text-center">
          <img className="uk-margin-small-bottom" src="img/in-liquid-icon-16.svg" data-src="img/in-liquid-icon-16.svg" alt="wave-award" width={72} height={72} />
          <h3 className="uk-margin-top">Forex</h3>
          <p>Explore and trade CFDs on <br/>  major,minor, and exotic  currency pairs<br/> with efficient <br></br>  spreads.</p>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-secondary uk-card-body uk-border-rounded uk-text-center">
          <img className="uk-margin-small-bottom" src="img/in-liquid-icon-17.svg" data-src="img/in-liquid-icon-17.svg" alt="wave-award" width={72} height={72}/>
          <h3 className="uk-margin-top">CFD STOCK</h3>
          <p>Trade CFDs on <br></br>stocks  of leading companies  and industry giants  <br></br> without actually<br></br> owning them</p>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-secondary uk-card-body uk-border-rounded uk-text-center">
          <img className="uk-margin-small-bottom" src="img/in-liquid-icon-18.svg" data-src="img/in-liquid-icon-18.svg" alt="wave-award" width={72} height={72} />
          <h3 className="uk-margin-top">Indices</h3>
          <p>Select from a list of CFDs on widely traded indices representing a particular market sector or national economy.</p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* //////////////////////////////////////////////// */}


<div className="uk-section">
  <div className="uk-container">
    <div className="uk-grid uk-flex uk-flex-middle" data-uk-grid>
      <div className="uk-width-expand@m">
        <h2>Bitcoin Currency Converter</h2>
        <p>Bitcoin is a form of digital currency, created and held electronically. No one controls it. Bitcoins aren’t printed, like dollars or euros – they’re produced by people, and increasingly businesses, running computers all around the world.</p>
        <div className="uk-grid-medium uk-child-width-1-3@s uk-child-width-1-3@m uk-margin-medium" data-uk-grid>
     <div className="form-group row">
  <div className="col-xs-3">
    {/* <label htmlFor="ex1">col-xs-2</label> */}
    <input className="form-control" id="ex1" type="text" />
  </div>
</div>
<div className="form-group row">
  <div className="col-xs-3">
    {/* <label htmlFor="ex1">col-xs-2</label> */}
    <input className="form-control" id="ex1" type="text" />
  </div>
  </div>
  <div className="col-xs-3">
    {/* <label htmlFor="ex1">col-xs-2</label> */}
    <p><h5>=</h5></p>
  </div>
    <div className="form-group row">
   
  <div className="col-xs-3">
    {/* <label htmlFor="ex1">col-xs-2</label> */}
    <input className="form-control" id="ex1" type="text" />
  </div>
  </div>
        </div>
      </div>
      <div className="uk-width-3-5@m uk-inline uk-dark">
        <img src="img/in-liquid-slide-1.svg" data-src="img/in-liquid-slide-1.svg" alt="sample-image" data-width data-height data-uk-img style={{width:"100%"}} />
       
      </div>
    </div>
  </div>
</div>

{/* /////////////////////////////////////////////////////////// */}

<div className="uk-section uk-section-secondary in-liquid-10" >
  <div className="uk-container uk-light">
  {/* <div className="uk-section"> */}
    {/* <div className="uk-container"> */}
      <div className="uk-grid uk-flex uk-flex-center">
        <div className="uk-width-3-4@m">
          <div data-uk-grid>
            <div className="uk-width-1-2@s uk-width-2-3@m" style={{marginLeft:'15%', textAlign:"center"}}>
              <h2 className="uk-margin-remove">INVESTMENT PLANS</h2>
              <p className="font-italic">Choose your preferable plan for investment</p>
            </div>
          </div>
        </div>
      </div>
    {/* </div> */}
  {/* </div> */}
    <div className="uk-grid-medium uk-child-width-1-3@m uk-flex uk-flex-middle"  data-uk-grid>
    <div>
        <div className="uk-card uk-card-secondary uk-card-body uk-border-rounded uk-text-center">
          {/* <img className="uk-margin-small-bottom" src="img/in-liquid-icon-16.svg" data-src="img/in-liquid-icon-16.svg" alt="wave-award" width={72} height={72} /> */}
          <h3 className="uk-margin-top">INVEST <br/>INTO STANDARD <br/>PACKAGE</h3>
          <p>STARTING AT <br/><h4>1,000 - 4,999</h4><br/>Trade Time = 10 days<br/>Interest = 55% <br/></p>
          <button type="button" class="btn btn-outline-warning btn-lg btn-block">START INVESTING</button>
        </div>
       
      </div>
      <div>
        <div className="uk-card uk-card-secondary uk-card-body uk-border-rounded uk-text-center">
          {/* <img className="uk-margin-small-bottom" src="img/in-liquid-icon-16.svg" data-src="img/in-liquid-icon-16.svg" alt="wave-award" width={72} height={72} /> */}
          <h3 className="uk-margin-top">INVEST<br/> INTO CLASSIC <br/>PACKAGE</h3>
          <p>STARTING AT <br/><h4>5,000 - 9,999</h4><br/>Trade Time = 15 days<br/>Interest = 60% <br/></p>
          <button type="button" class="btn btn-outline-warning btn-lg btn-block">START INVESTING</button>
        </div>
        
      </div>
      <div>
        <div className="uk-card uk-card-secondary uk-card-body uk-border-rounded uk-text-center">
          {/* <img className="uk-margin-small-bottom" src="img/in-liquid-icon-16.svg" data-src="img/in-liquid-icon-16.svg" alt="wave-award" width={72} height={72} /> */}
          <h3 className="uk-margin-top">INVEST <br/> INTO GOLD <br/>PACKAGE</h3>
          <p>STARTING AT <br/><h4>10,000 - 49,999</h4><br/>Trade Time = 20 days<br/>Interest = 75% <br/></p>
          <button type="button" class="btn btn-outline-warning btn-lg btn-block">START INVESTING</button>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-secondary uk-card-body uk-border-rounded uk-text-center">
          {/* <img className="uk-margin-small-bottom" src="img/in-liquid-icon-16.svg" data-src="img/in-liquid-icon-16.svg" alt="wave-award" width={72} height={72} /> */}
          <h3 className="uk-margin-top">INVEST<br/> INTO LONG <br/>TERM PACKAGE</h3>
          <p>STARTING AT <br/><h4>15,000 - 1,000,000</h4><br/>Trade Time = 90 days<br/>Interest = 85% <br/></p>
          <button type="button" class="btn btn-outline-warning btn-lg btn-block">START INVESTING</button>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-secondary uk-card-body uk-border-rounded uk-text-center">
          {/* <img className="uk-margin-small-bottom" src="img/in-liquid-icon-16.svg" data-src="img/in-liquid-icon-16.svg" alt="wave-award" width={72} height={72} /> */}
          <h3 className="uk-margin-top">INVEST <br/>INTO PREMIUM <br/>PACKAGE</h3>
          <p>STARTING AT <br/><h4>50,000 - 99,999</h4><br/>Trade Time = 30 days<br/>Interest = 90% <br/></p>
          <button type="button" class="btn btn-outline-warning btn-lg btn-block">START INVESTING</button>
        </div>
      </div>
      <div>
        <div className="uk-card uk-card-secondary uk-card-body uk-border-rounded uk-text-center">
          {/* <img className="uk-margin-small-bottom" src="img/in-liquid-icon-16.svg" data-src="img/in-liquid-icon-16.svg" alt="wave-award" width={72} height={72} /> */}
          <h3 className="uk-margin-top">INVEST <br/>INTO STANDARD<br/> PACKAGE</h3>
          <p>STARTING AT <br/><h4>100,000 - 300,999</h4><br/>Trade Time = 50 days<br/>Interest = 100% <br/></p>
          <button type="button" class="btn btn-outline-warning btn-lg btn-block">START INVESTING </button>
        </div>
      </div>
    </div>
  </div>
</div>
{/* /////////////////////////////////////////////// */}

  




    {/* ////////////////////////////////////////////////////// */}




  <div className="uk-section uk-section-secondary in-footer-feature">
  <div className="uk-container">
    <div className="uk-grid uk-flex uk-flex-center">
      <div className="uk-width-5-6@m">
        <div className="uk-grid uk-child-width-1-3@s" data-uk-grid>
          <div className="uk-flex uk-flex-middle">
            <div className="uk-margin-right">
              <i className="fas fa-address-card in-icon-wrap" />
            </div>
            <div>
              <h6 className="uk-margin-remove">Quick funds access</h6>
            </div>
          </div>
          <div className="uk-flex uk-flex-middle uk-flex-center@m">
            <div className="uk-margin-right">
              <i className="fas fa-mobile in-icon-wrap" />
            </div>
            <div>
              <h6 className="uk-margin-remove">Trade on the go</h6>
            </div>
          </div>
          <div className="uk-flex uk-flex-middle uk-flex-right@m">
            <div className="uk-margin-right">
              <i className="fas fa-credit-card in-icon-wrap" />
            </div>
            <div>
              <h6 className="uk-margin-remove">Industry-best payouts</h6>
            </div>
          </div>
          
        </div>

        <div className="uk-grid uk-child-width-1-3@s" data-uk-grid>
          <div className="uk-flex uk-flex-middle">
            <div className="uk-margin-right">
              <i className="fas fa-lock in-icon-wrap" />
            </div>
            <div>
              <h6 className="uk-margin-remove">Segregated funds</h6>
            </div>
          </div>
          <div className="uk-flex uk-flex-middle uk-flex-center@m">
            <div className="uk-margin-right">
              <i className="fas fa-headphones in-icon-wrap" />
            </div>
            <div>
              <h6 className="uk-margin-remove">Amazing support</h6>
            </div>
          </div>
          <div className="uk-flex uk-flex-middle uk-flex-right@m">
            <div className="uk-margin-right">
              <i className="fas fa-id-badge in-icon-wrap" />
            </div>
            <div>
              <h6 className="uk-margin-remove">Licensed in Australia</h6>
            </div>
          </div>
          
        </div>
        <div className="uk-grid uk-child-width-1-3@s" data-uk-grid>
          <div className="uk-flex uk-flex-middle">
            <div className="uk-margin-right">
              <i className="fas fa-hand-holding-usd in-icon-wrap" />
            </div>
            <div>
              <h6 className="uk-margin-remove">$50 Cashback for new accounts</h6>
            </div>
          </div>
          <div className="uk-flex uk-flex-middle uk-flex-center@m">
            <div className="uk-margin-right">
              <i className="fas fa-thumbs-up in-icon-wrap" />
            </div>
            <div>
              <h6 className="uk-margin-remove">Options specialists</h6>
            </div>
          </div>
        
          
        </div>
        
      </div>
    </div>
  </div>
</div>


            </div>
        );
    }
}

export default Landing;
