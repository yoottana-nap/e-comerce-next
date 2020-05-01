import React, { useState } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Cookies from 'js-cookie';
import './navStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Navigation = (props) => {

    const [isToggleNav, setToggleNav] = useState(false);
    const { data, userReducer, cartreducer } = props;
    const destroyCookie = () => {
        Cookies.remove('verify_secure');
        window.location = "/signin";
    }
    return (
        <div className={isToggleNav ? 'nav-box' : 'nav-box-hidden'}>
            <div className="hamburgur-container" onClick={() => { setToggleNav(!isToggleNav) }}>
                <div className={isToggleNav ? 'change-hamburgur-top' : 'hamburgur-top'}></div>
                <div className={isToggleNav ? 'change-hamburgur-middle' : 'hamburgur-middle'} ></div>
                <div className={isToggleNav ? 'change-hamburgur-bottom' : 'hamburgur-bottom'} ></div>
            </div>
            <div className="nav-container">
                <div className="nav-gird-item">
                    <ul className="menu">
                        {data.navigationreducer.navigationItems.map((route, index) => {
                            return (
                                <li className="link-item" key={index}>
                                    {route.keyTitle === "category" ?
                                        <React.Fragment>
                                            <div className="dropdown">
                                                <Link href={{ pathname: "Category", query: { name: route.routePath.Bags } }}>
                                                    {route.keyTitle}
                                                </Link> <FontAwesomeIcon className="ml-2" icon={faChevronDown} />
                                                <div className="dropdown-content" id="dropdown">
                                                    <Link href={{ pathname: "Category", query: { name: route.routePath.Bags } }}>{route.routePath.Bags}</Link>
                                                    <Link href={{ pathname: "Category", query: { name: route.routePath.Pants } }}>{route.routePath.Pants}</Link>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                        : route.keyTitle === "cart" ?
                                            <React.Fragment>
                                                <Link href={route.routePath}>
                                                    {route.keyTitle}
                                                </Link>
                                                {`(${cartreducer.addedItems.length ? cartreducer.addedItems.length : '0'})`}
                                            </React.Fragment>
                                            : route.keyTitle === "signup" ?
                                                <Link href={userReducer.userData.first_name ? '' : route.routePath}>
                                                    {userReducer.userData.first_name !== undefined ?
                                                        `สวัสดี ${userReducer.userData.first_name}` : `${route.keyTitle}`
                                                    }
                                                </Link>
                                                : route.keyTitle === "signin" ?
                                                    <Link href={userReducer.userData.first_name ? '' : route.routePath}>
                                                        {userReducer.userData.first_name !== undefined ?
                                                            <span onClick={() => destroyCookie()}>ออกจากระบบ</span> : `${route.keyTitle}`
                                                        }
                                                    </Link> :
                                                    route.keyTitle === "order" ?
                                                        <React.Fragment>
                                                            <Link href={route.routePath}>
                                                                {route.keyTitle}
                                                            </Link>
                                                        </React.Fragment>
                                                        : <Link href={route.routePath}>
                                                            {route.keyTitle}
                                                        </Link>
                                    }
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default connect(state => state)(Navigation);