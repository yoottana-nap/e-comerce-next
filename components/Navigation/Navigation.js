import React, { useState } from 'react';
import Link from 'next/link';
import './navStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Navigation = (props) => {

    const [isToggleNav, setToggleNav] = useState(false);

    const { data } = props;

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
                                                <Link href={{pathname:"Category", query:{name:route.routePath.Bags}}}>
                                                    {route.keyTitle}
                                                </Link> <FontAwesomeIcon className="ml-2" icon={faChevronDown} />
                                                <div className="dropdown-content" id="dropdown">
                                                    <Link href={{ pathname:"Category", query:{name:route.routePath.Bags}}}>{route.routePath.Bags}</Link>
                                                    <Link href={{ pathname:"Category", query:{name:route.routePath.Pants}}}>{route.routePath.Pants}</Link>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                        : route.keyTitle === "cart" ?
                                            <React.Fragment>
                                                <Link href="">
                                                    {route.keyTitle}
                                                </Link>{`(0)`}
                                            </React.Fragment>
                                            : route.keyTitle === "order" ?
                                                <React.Fragment>
                                                    <Link href="">
                                                        {route.keyTitle}
                                                    </Link>{`(0)`}
                                                </React.Fragment>

                                                : <Link href={route.routePath}>
                                                    {route.keyTitle}
                                                </Link>
                                    }
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Navigation;

