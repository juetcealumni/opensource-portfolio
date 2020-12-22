import React from 'react'
import styled from 'styled-components';
import etceimage from '../../assets/images/etceimage.png';
import github from '../../assets/svg/github.svg';

export default function Footer() {
    return (

        <FooterContainer className="main-footer">
            <div className="footer-middle">


                <div className="container-fluid">
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-4 col-sm-6">
                            <h4>About Us</h4>
                            <ul className="list-unstyled">
                                <li><a href="https://juetcefreshers.github.io/">Find us on web</a></li>
                                <li><a href="https://github.com/juetcefreshers/github-contributing-guide">How to Contribute</a></li>
                                <li><a href="https://github.com/juetcefreshers/introduction-to-github">Introduction to git and Github</a></li>
                                <li></li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className="col-md-4 col-sm-6">
                            <h4>Contact Us</h4>
                            <ul className="list-unstyled">
                                <li><a href="/#">Drop an Email</a></li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Find Us</h4>
                            <ul className="list-unstyled">
                                <li><a href="https://github.com/juetcefreshers"> <img src={github} alt="github" className="icons" />  Github</a></li>

                            </ul>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy; {new Date().getFullYear()} <img height={50} src={etceimage} alt="logo" /> JU ETCE Student Community - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
h4{
    padding-bottom: 1rem;
}
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}
.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}
ul li a {
    color: var(--mainSilverGrey);
}
ul li a: hover{
    color: var(--mainLightGrey);
}
ul li{
    padding-bottom: 10px;
}
.icons{
    height: 20px;
    padding-right: 5px;
    color: var( --mainWhite);
}
.main-footer{
    margin: 25px 15px 15px;

}
`;