

const Hero = () => {
  return (
    <div className="hero flex justify-between items-center gap-7 mx-10">
      <div className="w-1/2 flex flex-col gap-7 ">
        <h1 className="font-bold text-5xl leading-tight">Mars is the fourth planet out from the Sun</h1>
        <p className="text-lg text-gray-400">It moves around the Sun at a mean distance of 228 million km (140 million miles), or about 1.5 times the distance of Earth from the Sun.</p>
      </div>

      <div className="w-1/2">
        <img className="" src="https://www.alicesastroinfo.com/wp-content/uploads/2010/02/Orbit-2.jpg" />
      </div>
    </div>
  )
}

export default Hero
