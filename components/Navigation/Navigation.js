import React from 'react';
import Link from 'next/link';


const Navigation = () => {
    return (
        <div>
            <style global jsx>{
                `
                a{
                    color:#f00;
                    text-decoration:none;
                }
                a:hover{
                    padding:25px;
                    background:#000;
                    transition:1s;
                }
                
                `
            }</style>
            <Link href={"/"}>
                Home
            </Link>
            <Link href={{pathname:"index",query:{name: "zeit/next.js"} }}>
                Next.js
            </Link>
            <Link href={{pathname:"index",query:{name:"facebook/react"}}}>
                React.js
            </Link>

        </div>
    )
}


export default Navigation;