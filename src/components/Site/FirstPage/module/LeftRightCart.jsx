import Nout1 from './notebook1.png'

const LeftRightCart = () => {
  return (
    <div
      className={`flex justify-between custom-845:justify-center items-center flex-wrap px-4 gap-10`}
    >
      <div className="w-full flex justify-center ml-[100px]">
        <img src={Nout1} width={900} height={30} alt="" />
      </div>
      <div
        className="flex justify-between w-full"
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
      >
        <div className="flex flex-col gap-1 justify-between">
          <div className="text-[72px] font-extrabold">5 915</div>
          <p className="text-[32px] font-bold">рекламных акций</p>
        </div>
        <div className="flex flex-col gap-1 justify-between">
          <div className="text-[72px] font-extrabold">128 922</div>
          <p className="text-[32px] font-bold">блогеров</p>
        </div>
        <div className="flex flex-col gap-1 justify-between">
          <div className="text-[72px] font-extrabold">4 674 153</div>
          <p className="text-[32px] font-bold">целевых действий</p>
        </div>
      </div>
    </div>
  )
}

export default LeftRightCart
