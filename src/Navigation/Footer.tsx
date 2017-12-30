import * as React from 'react';

class Footer extends React.Component {
  render() {
    return (
        <div>
<section id="footer-defoult" className="padding-60">
<div className="container">
    <div className="row">
        <div className="col-md-3 margin-btm20">
            <div className="footer-column">
                <h3>About us</h3>
                <p className="margin-btm20">
                    We are two guys that wanted to present some Bitcoin related information in a better way. <br/> Last Updated 12/30/2017.
                </p>

            </div>
        </div>
        {/*
        <div className="col-md-3 margin-btm20">
            <div className="footer-column">
                <h3>Latest post</h3>
                <ul className="list-unstyled post-list">
                    <li><a href="#" className="hover-color">Blog slide post</a></li>
                    <li><a href="#" className="hover-color">Lorem ipsum dollor</a></li>
                    <li><a href="#" className="hover-color">Blog image post</a></li>
                    <li><a href="#" className="hover-color">Blog Video post</a></li>
                    <li><a href="#" className="hover-color">Lorem ipsum dollor</a></li>
                </ul>

            </div>
        </div>
        <div className="col-md-3 margin-btm20">
            <div className="footer-column">
                <h3>Latest work</h3>
                <ul className="list-unstyled work-list">
                    <li><a href="#">
                            <img src="img/img-1.jpg" className="img-responsive" alt=""  data-toggle="tooltip" data-placement="top" title="" data-original-title="Work Title"/>
                        </a></li>
                </ul>
            </div>
        </div>*/}
        <div className="col-md-3 margin-btm20">
            <div className="footer-column">
                <h3>Get in touch</h3>
                <ul className="list-unstyled contact-list margin-btm20">
                    {/*<li><i className="ion-home"/> 124,munnawali<br/>Jaipur,302012</li>
                    <li><i className="ion-ios7-telephone"/> <strong>Phone:</strong> +91 1234567890</li>*/}
                    <li><i className="ion-ios7-email"/> <strong>Email: bitcoinforks at gmail.com</strong></li>
                    <li><i className="ion-ios7-world"/> <strong>Website:</strong> http://www.bitcoinforks.io</li>
                    <li><i className="ion-ios7-world"/> <strong>Reddit:</strong> http://www.reddit.com/u/ppostie</li>
                </ul>
                <ul className="list-unstyled list-inline social">
                    {/*<li><a href="#"><i className="ion-social-facebook-outline"  data-toggle="tooltip" data-placement="top" title="" data-original-title="Like On Facebook"/></a></li>*/}
                    <li><a href="https://twitter.com/bitcoinforks"><i className="ion-social-twitter-outline"  data-toggle="tooltip" data-placement="top" title="" data-original-title="Follow On twitter"/></a></li>
                    {/*<li><a href="#"><i className="ion-social-googleplus-outline"  data-toggle="tooltip" data-placement="top" title="" data-original-title="Follow On googleplus"/></a></li>
                    <li><a href="#"><i className="ion-social-pinterest-outline"  data-toggle="tooltip" data-placement="top" title="" data-original-title="pinterest"/></a></li>
                    <li><a href="#"><i className="ion-social-skype-outline"  data-toggle="tooltip" data-placement="top" title="" data-original-title="skype"/></a></li>
                */}

                </ul>
            </div>
        </div>
    </div>
    <div className="divied-40"/>
    <div className="row">
        <div className="col-md-12 text-center margin-btm20">
            <a href="index.html">Bitcoinforks.io</a>
        </div>
        <div className="col-md-12 text-center">
            <span>&copy; copyright 2017. All rights reserved.</span>
        </div>
    </div>
</div>
</section>
</div>);
  }
}

export default Footer;
