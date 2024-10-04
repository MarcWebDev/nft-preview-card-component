import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[100vw] min-h-[100vh] flex items-center justify-center">
      <div className="w-[350px] h-fit max-[375px]:w-[calc(100vw-48px)]  bg-card rounded-2xl">
          <div className="group max-[375px]:w-[calc(100vw-48px-48px)] relative m-6 overflow-hidden rounded-lg cursor-pointer">
              <div className="w-full h-[302px] bg-cyan group-hover:opacity-[0.503] opacity-0 absolute transition ease-in-out duration-200"></div>
              <Image src={"/icon-view.svg"} alt={"Eye Icon"} height={48} width={48} className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] transition ease-in-out duration-200 group-hover:opacity-100 opacity-0" />
              <Image src={"/image-equilibrium.jpg"} alt={"Card Image"} width={302} height={302} className="w-full" />
          </div>

          <h2 className="text-white mx-6 font-semibold text-[22px] mb-4 leading-normal transition ease-in-out duration-200 cursor-pointer hover:text-cyan">Equilibrium #3429</h2>
          <p className="text-softBlue mx-6 font-light text-lg mb-6 leading-[26px]">Our Equilibrium collection promotes balance and calm.</p>

          <div className="flex items-center justify-between mx-6 mb-6">
              <div className="flex items-center">
                  <Image src={"/icon-ethereum.svg"} alt={"Ethereum Icon"} width={11} height={18} />
                  <p className="text-cyan leading-normal text-[16px] font-semibold ml-[6.5px]">0.041 ETH</p>
              </div>

              <div className="flex items-center">
                  <Image src={"/icon-clock.svg"} alt={"Clock Icon"} width={16} height={16} />
                  <p className="text-softBlue leading-normal text-[16px] font-normal ml-[7.5px]">3 days left</p>
              </div>
          </div>

          {/* Line */}
          <div className="w-[302px] h-[1px] bg-line mx-6 mb-4 max-[375px]:w-[calc(100vw-48px-48px)]"></div>

          <div className="mx-6 mb-8 flex items-center">
            <Image src={"/image-avatar.png"} alt={"User Profile Picture"} width={32} height={32} className="rounded-full border border-white" />
            <p className="ml-4 text-[16px] text-softBlue leading-normal font-normal">Creation of <span className="text-white transition ease-in-out duration-200 cursor-pointer hover:text-cyan">Jules Wyvern</span></p>
          </div>
      </div>
    </div>
  );
}
