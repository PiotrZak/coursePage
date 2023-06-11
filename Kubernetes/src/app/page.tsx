'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import SimpleImageSlider from "react-simple-image-slider";
import Logo from './image/logo.svg'

import DotnetCourseHero from '../../public/images/SimilarProducts/1.jpg';

import styles from './page.module.scss'
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic'


const udemyUrl = "https://www.udemy.com/course/kubernetes-quest/?referralCode=8A5E4E3F8B2B2B2B2B2B";
const youtubeUrl = "https://www.youtube.com/watch?v=sqXFt8nIJ4A";
const dotnetCourseUrl = "https://course-page-mu.vercel.app/";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Home() {

  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' });

  const [width, setWidth] = useState<number>(0);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }


  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  return (
    <main className={styles.main}>
      <div className={inter.className}>
        <Hero executeScroll={executeScroll} isMobile={isMobile} />
        <List />
        <Video isMobile={isMobile} />
        <SimilarProducts />
        <Footer refScroll={myRef} />
      </div>
    </main>
  )
}

const images = [
  {
    url: 'images/1.jpg'
  },
]

const inter = Inter({ subsets: ['latin'] })


const Hero = ({ executeScroll, isMobile }) => {

  return (
    <div className={inter.className}>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <Image src={Logo} alt={''} />
          <div className={styles.heroContent}>
            <h1>
              Kubernetes Quest<br />
              Next-Level ML Engineering </h1>
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
      <b>Supercharge Your Career:</b> Unlock Exciting Opportunities at the Intersection of Kubernetes and Machine Learning.<br />
      <b>Stay Ahead of the Curve:</b> Master the Latest Techniques for ML Deployment on Kubernetes.<br />
      <b>Elevate Your Coding Skills:</b>  Develop Advanced ML Applications on the Kubernetes Platform.<br />
      <b>Cross-Domain Expertise:</b>  Seamlessly Deploy ML Models on Multiple Platforms with Kubernetes.<br />
      <b>Thrive in the High-Demand Industry:</b>  Meet the Growing Demand for ML Engineers with Kubernetes Skills.<br />
      <b>Network with Industry Leaders:</b>  Connect with Like-Minded Professionals in the Kubernetes and ML Communities.<br />
      <b>Hands-On Immersion:</b>  Gain Practical Experience and Apply ML on Kubernetes to Real-World Projects.<br />
    </p>
  )
}



const Video = ({ isMobile }) => {

  return (
    <div className={styles.video}>
      <ReactPlayer width={isMobile ? '100%' : '640px'} url={youtubeUrl} config={{
        youtube: {
          playerVars: { showinfo: 0 }
        }
      }} />
    </div>
  )

}

const SimilarProducts = () => {

  return (
    <div className={styles.similarProducts}>
      <h2>Similar Products</h2>
      <Image src={DotnetCourseHero} alt={''} />

      <h3>Dotnet Architecture</h3>
      <p>9h 55 min duration</p>
      <p>19.99$</p>

      <a target="_blank" href={dotnetCourseUrl}>Visit</a>
    </div >
  )
}

const Footer = ({ refScroll }) => {

  const openInNewTab = (url: string | URL) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <div ref={refScroll} className={styles.footer}>
      <div className={styles.footerContent}>
        <h2>3h 15 min duration</h2>
        <h3>19,99 $</h3>
        <Button onClick={() => openInNewTab(udemyUrl)} text={"Buy now!"} /><br />
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