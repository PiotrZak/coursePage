'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import SimpleImageSlider from "react-simple-image-slider";
import Logo from './image/logo.svg'
import styles from './page.module.scss'
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic'
import KubernetesCourseHero from '../../public/images/SimilarProducts/1.jpg';
import { SimilarProducts } from './DesignSystem/SimilarProducts';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const udemyUrl = "https://www.udemy.com/share/108lMy3@m_Q2hNMmQP-4qugU0CGK6ziiQzostr2utUh2vZ9ip4kSIigwR9A5pU9oJ9hCiBzn/";;
const youtubeUrl = "https://www.youtube.com/watch?v=v5Z6Kft9doA&feature=youtu.be";
const KubernetesCourseUrl = "https://course-page-1u5i.vercel.app/";


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
        <SimilarProducts
          header={'Similar Products'}
          products={[
            // upload correct product parameter, when already published and advertised
            {
              title: 'Learn Kubernetes Basics',
              duration: '2 hours',
              imageUrl: KubernetesCourseHero,
              price: 'Free',
              link: KubernetesCourseUrl
            },
          ]}
        />
        <Footer refScroll={myRef} />
      </div>
    </main>
  )
}

const images = [
  {
    url: 'images/1.jpg'
  },
  {
    url: 'images/2.jpg'
  },
  {
    url: 'images/3.jpg'
  }
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

const Footer = ({ refScroll }) => {

  const openInNewTab = (url: string | URL) => {
    window.open(url, '_blank', 'noreferrer');
  };


  return (
    <div ref={refScroll} className={styles.footer}>
      <div className={styles.footerContent}>
        <h2>9h 55 min duration</h2>
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