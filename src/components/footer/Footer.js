import React from 'react';
import { Link } from 'react-router-dom';
import ball from '../../img/ball2.png';
import { FiFacebook } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiPhoneCall } from 'react-icons/fi';
import { FiNavigation2 } from 'react-icons/fi';


export const Footer = () => {
    return (

        <div className='footer'>
            <div className="footer-content">
                <div className='footer-section-one'>
                    <div className='logo-footer'>
                        <img src={ball} alt="logo-ball" />
                        <h1>Leagues<span>5</span></h1>
                    </div>
                    <div>
                        <Link to='#'>
                            <FiFacebook className='icon-footer' />
                        </Link>
                        <Link to='#'>
                            <FaInstagram className='icon-footer icon-two' />
                        </Link>
                        <Link to='#'>
                            <FiTwitter className='icon-footer' />
                        </Link>
                    </div>
                    <div>
                        <p style={{ color: 'white' }}>A big thanks for Daniel & <a className='link-football-data' rel="noopener noreferrer" target='_blank' href='https://www.football-data.org/'><span className='football-data'>football-data.org</span></a><br /> for making it API free.</p>
                    </div>
                </div>

                <div className='links-footer'>
                    <Link to='#' className='link-footer'>About</Link>
                    <Link to='#' className='link-footer'>Teams</Link>
                    <Link to='#' className='link-footer'>Owner Profile</Link>
                    <Link to='#' className='link-footer'>Services</Link>
                    <Link to='#' className='link-footer'>Contact Us</Link>
                </div>

                <div className='adress-footer'>
                    <p>Contact Us &dArr;</p>
                    <span><FiMail className='icon-footer' /> ddsd@sds.com</span>
                    <span><FiPhoneCall className='icon-footer' /> 09984 94940 </span>
                    <span><FiNavigation2 className='icon-footer' /> ddsd@sds.com</span>
                </div>

                <div className='input-footer'>
                    <p>Sing up for updates &dArr;</p>
                    <div className="form__group field">
                        <input className='form__field' type="text" placeholder='Email*' />
                    </div>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}
