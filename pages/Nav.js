import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Nav() {
    const navIcon = <svg width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="M21 18H3v-2h18v2zm0-5H3v-2h18v2zm0-5H3V6h18v2z" fill="currentColor"></path></g></svg>
    const separator = <svg width="1em" height="0.35em" viewBox="0 0 16 16"><path fillRule="evenodd" d="M0 7.75A.75.75 0 0 1 .75 7h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 7.75z" fill="currentColor"></path></svg>
    const close = <svg width="1em" height="1em" viewBox="0 0 20 20"><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15l-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152l2.758 3.15a1.2 1.2 0 0 1 0 1.698z" fill="currentColor"></path></svg>
    const [isVisible, setIsVisible] = useState("none");

    return (
        <nav>
            <ul className="hidden md:flex list-none justify-end mx-4">
                <li className="m-4 px-2">
                    <Link href="/"><a className={styles.nav}>Home</a></Link>
                </li>
                <li className="m-4 px-2">
                    <Link href="/aboutme"><a className={styles.nav}>About Me</a></Link>
                </li>
                <li className="m-4 px-2">
                    <Link href="/"><a className={styles.nav}>Skills</a></Link>
                </li>
                <li className="m-4 px-2">
                    <Link href="/"><a className={styles.nav}>Projects</a></Link>
                </li>
                <li className="m-4 px-2">
                    <Link href="/"><a className={styles.nav}>Blogs</a></Link>
                </li>
            </ul>

            <div className="md:hidden px-4 flex justify-end nav-shadow fixed top-0 z-50" onClick={() => { setIsVisible(isVisible => isVisible==="none" ? "flex" : "none") }}>
                <p className="text-5xl py-1">{navIcon}</p>
            </div>

            <div className="md:hidden fixed z-10 m-0 left-0 top-0 w-full h-full drawer-bg" style={{display: isVisible}} onClick={()=>{ setIsVisible(isVisible => isVisible==="flex" ? "none" : "flex") }}>
                <div className="drawer fixed bottom-0 z-20 w-full flex flex-col justify-center rounded-t-3xl">
                    <span className="mx-auto my-0 text-9xl">{separator}</span>
                    <ul className="flex flex-col justify-center items-center">
                        <li className="mb-4 text-lg">
                            <Link href="/"><a>Home</a></Link>
                        </li>
                        <li className="mb-4 text-lg">
                            <Link href="/"><a>Skills</a></Link>
                        </li>
                        <li className="mb-4 text-lg">
                            <Link href="/"><a>Projects</a></Link>
                        </li>
                        <li className="mb-4 text-lg">
                            <Link href="/"><a>Blogs</a></Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}
