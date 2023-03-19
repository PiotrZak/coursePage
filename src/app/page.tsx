'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import SimpleImageSlider from "react-simple-image-slider";
import Logo from './image/logo.svg'
import styles from './page.module.scss'
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Home() {

  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <main className={styles.main}>
      <div className={inter.className}>
        <Hero executeScroll={executeScroll} />
        <List />
        <Video />
        <Footer refScroll={myRef} />
      </div>
    </main>
  )
}

const images = [
  {
    url: 'images/1.png'
  },
  {
    url: 'images/2.png'
  },
  {
    url: 'images/3.png'
  }
]

const inter = Inter({ subsets: ['latin'] })

const Hero = ({ executeScroll }) => {

  const [width, setWidth] = useState<number>(window.screen.width);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }


  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  return (
    <div className={inter.className}>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <Image src={Logo} alt={''} />
          <div className={styles.heroContent}>
            <h1>
              Get Hands-On
              Experience with .NET </h1>
            <Button onClick={executeScroll} text={"Buy course now"} />
          </div>
        </div>
        <div className={styles.heroImage}>
          <SimpleImageSlider
            width={isMobile ? '100%' : '62%'}
            height={isMobile ? '40%' : '100vh'}
            images={images}
            showBullets={false}
            showNavs={false}
            autoPlay={true}
          />
        </div>
      </div>
    </div>
  )
}


const List = () => {

  return (
    <p className={styles.listText}>
      <b>Boost Your Career Opportunities:</b> Gain in-demand skills and increase your job prospects.<br />
      <b>Learn the Latest Techniques:</b> Stay up-to-date with the latest .NET development practices and technologies.<br />
      <b>Enhance Your Coding Skills:</b> Improve your coding skills and develop advanced .NET applications.<br />
      <b>Cross-Platform Development:</b> Learn to build applications for multiple platforms, including Windows, Mac, and Linux.<br />
      <b>Ease of Integration:</b> Work with other technologies and platforms, such as databases, web services, and more, with ease.<br />
      <b>High-Demand Industry:</b> .NET is a widely used framework and highly sought after by businesses and organizations.<br />
      <b>Networking Opportunities:</b> Connect with other .NET developers and expand your professional network.<br />
      <b>Hands-On Experience:</b> Get hands-on experience working on real-world projects and develop practical skills that you can apply in your work.<br />
    </p>
  )
}

const Video = () => {
  return (
    <div className={styles.video}>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    </div>
  )

}

const Footer = ({ refScroll }) => {
  return (
    <div ref={refScroll} className={styles.footer}>
      <div className={styles.footerContent}>
        <h2>7h 35 min duration</h2>
        <h3>29,99 $</h3>
        <Button onClick={() => { }} text={"Buy now!"} /><br />
        <p>or <a href="mailto:piotrzak77@gmail.com">convince me</a> to get course free</p>
        <p className={styles.footerRights}>© All right reserved. 2023</p>
      </div>
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={() => onClick()} className={styles.button}>
      {text}
    </button>
  )
}