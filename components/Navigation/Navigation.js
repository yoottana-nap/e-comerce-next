import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '../navStyles.scss';

const Navigation = (props) => {
    const [isToggleNav, setToggleNav] = useState(false);
    const { data } = props;
    return (
        <div className={isToggleNav ?'nav-box': 'nav-box-hidden'}>
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
                                    <Link href={route.routePath}>
                                        {route.keyTitle}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Navigation;

