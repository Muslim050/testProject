import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SetkaSvg, StarsSSSvg } from '@/assets/Site/site-svg.jsx'
import 'swiper/css'
import 'swiper/css/pagination'
import HeadeYouTube from './HeadeYouTube.png'
import m from './FifthPage.module.scss'
import PageTitle from '../module/PageTitle'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import img4 from './5.png'
import Socials1 from './Socials1.jsx'

gsap.registerPlugin(ScrollTrigger)

gsap.registerPlugin(ScrollTrigger)
function FifthPage() {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)
  const swiperRef = useRef()
  const socials1 = useRef(null)
  const socials2 = useRef(null)
  //section2
  const sectionMainTitle = useRef(null)

  //section2

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: '-100vw',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '1000 top',
          scrub: 0.6,
          pin: true,
        },
      },
    )
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill()
    }
  }, [])

  //section2
  useEffect(() => {
    gsap.from(sectionMainTitle.current, {
      scrollTrigger: {
        trigger: sectionMainTitle.current,
        start: 'left center', // Начало анимации, когда элемент достигнет середины экрана по горизонтали
        end: 'right center', // Конец анимации
        scrub: true,
      },
      duration: 1,
      opacity: 0,
      x: -50, // Смещение по горизонтали
    })
  }, [])
  //section2

  const cardRef = useRef(null)
  const sparkleRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    const sparkles = sparkleRef.current

    // Анимация при наведении
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e

      gsap.to(sparkles, {
        x: clientX - card.getBoundingClientRect().left,
        y: clientY - card.getBoundingClientRect().top,
        duration: 0.3,
        ease: 'power3.out',
        opacity: 1,
      })
    }

    const handleMouseLeave = () => {
      gsap.to(sparkles, {
        opacity: 0,
        duration: 0.3,
        ease: 'power3.out',
      })
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])
  return (
    <section className="overflow-hidden" id="FifthPage">
      <div className=" ">
        {/* max-w-[900px] w-full m-auto */}
        <div
          style={{
            background:
              'radial-gradient(49.2% 63.45% at 50% 45.62%, rgba(21, 61, 204, 0.08) 14.36%, rgba(5, 5, 11, 0) 100%), radial-gradient(47.78% 64.92% at 50% 44.06%, rgba(216, 236, 248, 0.04) 0%, rgba(152, 192, 239, 0.01) 50%, rgba(5, 5, 11, 0) 100%',
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
          }}
          className="relative  flex-col justify-between  py-20	   overflow-hidden"
        >
          {/*<GradientBGSvg className="absolute top-0 left-0 w-[100%] h-full -z-[5px]" />*/}
          <StarsSSSvg className="absolute top-0 left-0 w-[100%] h-full -z-[5px]" />
          <SetkaSvg className="absolute top-0 left-0 w-[100%] h-full -z-[5px]" />
          <div className="text-center max-w-[1240px] w-full m-auto">
            <PageTitle
              topTitle={'Особенности'}
              title={'Привлекайте целевые действия с помощью тысяч блогеров'}
            />
          </div>
          <div
            style={{
              background:
                'linear-gradient(0deg, rgba(186, 207, 247, 0.04), rgba(186, 207, 247, 0.04)), rgba(2, 3, 8, 0.8)',
              border: '0.5px solid rgba(255, 255, 255, 0.1)',
              boxShadow:
                'inset 0px 1px 1px rgba(216, 236, 248, 0.3), inset 0px 24px 48px rgba(168, 216, 245, 0.06)',
              borderRadius: '32px',
            }}
            ref={cardRef}
            className="max-w-[1000px] w-full m-auto rounded-[32px] p-3 relative z-20 "
          >
            <div ref={sparkleRef} className={m.sparkles} />

            <div className="">
              <img
                loading="lazy"
                src={HeadeYouTube}
                alt=""
                className="w-full rounded-t-[32px] relative"
              />
              <div className="absolute left-8 top-8">
                <Socials1 socials1={socials1} socials2={socials2} />
              </div>
            </div>
            <div className="py-5 flex flex-col gap-8 bg-black rounded-b-[32px] ">
              <div className="flex gap-4 justify-around flex-wrap">
                <div className={`w-[400px] p-2 ${m.wrapperCard}`}>
                  <img
                    src={img1}
                    className="w-[400px] h-[550px] rounded-[14px]"
                  ></img>
                </div>
                <div className={`w-[400px] p-2 ${m.wrapperCard}`}>
                  <img
                    src={img2}
                    className="w-[400px] h-[550px] rounded-[14px]"
                  ></img>
                </div>
              </div>
              <div className="flex gap-4 justify-around flex-wrap">
                <div className={`w-[400px] p-2 ${m.wrapperCard}`}>
                  <img
                    src={img3}
                    className="w-[400px] h-[550px] rounded-[14px]"
                  ></img>
                </div>
                <div className={`w-[400px] p-2 ${m.wrapperCard}`}>
                  <img
                    src={img4}
                    className="w-[400px] h-[550px] rounded-[14px]"
                  ></img>
                </div>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  )
}

export default FifthPage
