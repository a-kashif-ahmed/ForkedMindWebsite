
// import cardlog from '../assets/cardlog.png'
import hero1 from '../assets/Hero1.png'
// import FeatureCard from "../components/Card";
import CommunitySocialCard from "../components/CommunitySocial";

import reddit from '../assets/reddit.png'
import discord from '../assets/discord.png'
// import Card from '../components/Card';

export default function CommunityPage(){

    return (
        <>
        <div className="bg-white dark:bg-black transition-colors duration-500">
         <section className="font-[Passero_One] pt-28  text-center w-full mx-auto transition-all duration-500 my-slide">
                    
                        <div className="text-4xl sm:text-6xl md:text-8xl font-black leading-none mb-2 pointer-events-none">
                        <span className="block leading-none">
                            <img
                                alt="heh"
                                src={hero1}
                                className="mx-auto w-[10%] block dark:invert"
                            />
                        </span>



                    <span className="relative  text-white"
                        style={{ WebkitTextStroke: "0.1px #1e1b1b" }}
                    >
                        Community

                    </span>


                </div>

                <div className="mt-8 mb-4 text-4xl tracking-[0.1em] text-white">
                    <span style={{ WebkitTextStroke: "1px #1e1b1b" }}>Join the Collective Mind</span>
                </div>

                <p className="text-gray-600 max-w-xl mx-auto text-md leading-relaxed mb-12">
                    Researchers, engineers, and AI enthusiasts building the future of transparent model evaluation , together.
                </p>
            </section>
              <section className="font-[Passero_One] pt-28 pb-20 px-6 text-center max-w-xl mx-auto">
                <div className="text-4xl sm:text-6xl md:text-8xl font-black mb-2">


                    <span className="relative  text-white"
                        style={{ WebkitTextStroke: "0.1px #1e1b1b" }}
                    >
                        Socials

                    </span>
                    <div className="mt-8 mb-4 text-4xl tracking-[0.1em] text-white">
                        <span style={{ WebkitTextStroke: "0.1px #1e1b1b" }}>Where we Hang Out </span>

                    </div>
                    </div>
                    
                    </section><div className='flex flex-wrap justify-center gap-7'>
                    <CommunitySocialCard title="Discord" link='https://discord.gg/W5f3tNQZXm
' description="" icon={discord}  />

                <CommunitySocialCard title="Reddit" link='https://www.reddit.com/r/ForkedMind/' icon={reddit }  />
                
                </div>
        <section className="font-[Passero_One] pt-28 pb-20 px-6 text-center max-w-xl mx-auto">
                {/* <div className="text-4xl sm:text-6xl md:text-8xl font-black mb-2">


                    <span className="relative  text-white"
                        style={{ WebkitTextStroke: "0.1px #1e1b1b" }}
                    >
                        Supporters

                    </span>
                    <div className="mt-8 mb-4 text-4xl tracking-[0.1em] text-white">
                        <span style={{ WebkitTextStroke: "0.1px #1e1b1b" }}>The People Who Make ForkedMind Better</span>

                    </div>
                    </div>
                    
                <div className="grid grid-cols-2 gap-4">
  <Card title="Tanishq Sharma" description="UIUX designer" icon={cardlog} />
  <Card title="Tanishq Sharma" description="UIUX designer" icon={cardlog} />
  <Card title="Tanishq Sharma" description="UIUX designer" icon={cardlog} />
  <Card title="Tanishq Sharma" description="UIUX designer" icon={cardlog} />
</div> */}
                    </section>
                    
</div>
        </>
    )
}