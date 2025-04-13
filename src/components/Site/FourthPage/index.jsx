import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Video from './VideoBG.mp4'
import { StarsSSSvg } from '@/assets/Site/site-svg.jsx'
import m from './FourthPage.module.scss'

import image1 from './imm/1.png'
import image2 from './imm/2.png'
import image3 from './imm/3.png'
import image4 from './imm/4.png'
import image5 from './imm/5.png'
import image6 from './imm/6.png'
import image7 from './imm/7.png'
import image8 from './imm/8.png'
import image9 from './imm/9.png'
import image10 from './imm/10.png'
import image11 from './imm/11.png'
import image12 from './imm/12.png'

const imagesData = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
  { id: 5, image: image5 },
  { id: 6, image: image6 },
  { id: 7, image: image7 },
  { id: 8, image: image8 },
  { id: 9, image: image9 },
  { id: 10, image: image10 },
  { id: 11, image: image11 },
  { id: 12, image: image12 },
]

gsap.registerPlugin(ScrollTrigger)

const FourthPage = () => {
  const containerRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    // Устанавливаем начальное состояние для текстового блока
    if (textRef.current) {
      gsap.set(textRef.current, { opacity: 0, y: 50 })
    }

    // Batch-анимация карточек и одновременно анимация текста
    ScrollTrigger.batch('.card', {
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
        })
        // Анимация текста при появлении карточек
        if (textRef.current) {
          gsap.to(textRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
          })
        }
      },
      onLeaveBack: (batch) => {
        gsap.to(batch, {
          opacity: 0,
          y: 200,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.in',
        })
        // Обратная анимация для текста
        if (textRef.current) {
          gsap.to(textRef.current, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power2.in',
          })
        }
      },
      start: 'top 80%',
      end: 'bottom 20%',
    })

    // Дополнительный timeline для видео и других анимаций (если требуется)
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.sectionFourthBlue',
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
        },
      })
      .fromTo(
        '.dog-1',
        { opacity: 0, scale: 6 },
        { opacity: 1, scale: 1, duration: 2, ease: 'power1.out' },
      )
      .to('.dog-2', { opacity: 1, duration: 2, ease: 'power1.out' })

    // Очистка при размонтировании компонента
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
  return (
    <section className="sectionFourth sectionFourthBlue">
      {/* Video background */}
      <video
        src={Video}
        autoPlay
        muted
        loop
        playsInline
        loading="lazy"
        style={{ paddingBottom: '10px' }}
        className="absolute top-0 left-0 w-full h-full object-cover "
      />

      <div className="dog-1 absolute w-full h-full">
        {/*<GradientBGSvg >*/}
        <div
          style={{
            background:
              'radial-gradient(49.2% 63.45% at 50% 45.62%, rgba(21, 61, 204, 0.08) 14.36%, rgba(5, 5, 11, 0) 100%), radial-gradient(47.78% 64.92% at 50% 44.06%, rgba(216, 236, 248, 0.04) 0%, rgba(152, 192, 239, 0.01) 50%, rgba(5, 5, 11, 0) 100%',
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
          }}
          className="absolute top-0 left-0 w-full h-auto z-10"
        />

        <StarsSSSvg className="absolute top-0 left-0 w-[100%] h-auto z-10 mb-2" />
        <video
          src={Video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover "
        ></video>
        <div className="mix-blend-multiply m-auto font-black uppercase absolute top-0 left-0 w-full h-full text-white bg-[#05060a] text-[35px] flex justify-center flex-col items-center ">
          Blogger Bank
        </div>
      </div>
      <h2
        ref={textRef}
        style={{
          background:
            'linear-gradient(360deg, #FFFFFF 16.15%, rgba(255, 255, 255, 0.3) 140.1%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          letterSpacing: '-0.03em',

          textShadow: '0px 4px 20px rgba(255, 255, 255, 0.25)',
        }}
        className={`animated-element text-[35px] md:text-[40px] lg:text-[60px] pt-3  text-center flex h-full mt-20`}
      >
        Бренды, выбравшие нас
      </h2>
      {/* Cards with ScrollTrigger */}

      <div
        ref={containerRef}
        className="dog-2 imgFourth max-w-[1240px] w-full m-auto"
      >
        <div className={m.wrapperCard}>
          {imagesData.map((item, index) => (
            <div
              key={item.id}
              className={`card card-${index} ${m.cardWrapper} flex items-center justify-center`}
              style={{
                background:
                  'linear-gradient(0deg, rgba(186, 207, 247, 0.04), rgba(186, 207, 247, 0.04)), rgba(2, 3, 8, 0.8)',
                border: '0.5px solid rgba(255, 255, 255, 0.1)',
                boxShadow:
                  '0px 16px 32px rgba(0, 0, 0, 0.3), inset 0px 1px 1px rgba(216, 236, 248, 0.3), inset 0px 24px 48px rgba(168, 216, 245, 0.06)',
                borderRadius: '20px',
                opacity: 0,
                transform: 'translateY(1000px)', // Matches the animation start state
              }}
            >
              <img
                loading="lazy"
                src={item.image}
                alt={`Image ${item.id}`}
                className="w-auto h-auto max-w-[200px]  object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FourthPage
