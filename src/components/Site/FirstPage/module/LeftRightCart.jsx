import first from './111.png'
import two from './222.png'
import tg from './Telegram.png'
import insta from './inst.webp'

const LeftRightCart = () => {
  return (
    <div
      className={`flex justify-between custom-845:justify-center items-center flex-wrap px-4 gap-4`}
    >
      <div
        className={`
              custom-1100:bottom-0 bottom-52
              w-[350px] h-[500px]  z-10 p-7 flex flex-col justify-between`}
      >
        <img className="" src={first} loading="lazy" alt="" />
        <div className="text-blue-400 text-2xl flex items-center justify-center mt-4 gap-2">
          <img src={tg} width={40} alt="" />
          Telegram{' '}
        </div>
      </div>

      <div
        className={`w-[350px] h-[500px] right-0 z-10 p-7 flex flex-col justify-between bottom-52 custom-1100:bottom-0`}
      >
        <img className="" loading="lazy" src={two} alt="" />
        <div className="text-[#cf2d8f] text-2xl flex items-center justify-center mt-4  gap-2">
          <img src={insta} width={40} alt="" />
          Instagram{' '}
        </div>
      </div>
    </div>
  )
}

export default LeftRightCart
