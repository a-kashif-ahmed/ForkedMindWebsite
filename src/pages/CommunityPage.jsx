import NavBar from "../components/NavBar";
import cardlog from '../assets/cardlog.png'
import hero1 from '../assets/Hero1.png'
// import FeatureCard from "../components/Card";
import Card from "../components/Card";

export default function CommunityPage(){
    return (
        <>
        <NavBar />
         <section className="font-[Passero_One] pt-28 px-6 text-center max-w-xl mx-auto">
                <div className="text-4xl sm:text-6xl md:text-8xl font-black mb-2">
                    <span className=" relative flex justify-center -top-6 left-1/2 -translate-x-1/2 text-4xl">  <img alt="heh" src={hero1} width='10%' height='10%' /></span>

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
                    Researchers, engineers, and AI enthusiasts building the future of transparent model evaluation — together.
                </p>
            </section>
              <section className="font-[Passero_One] pt-28 pb-20 px-6 text-center max-w-xl mx-auto">
                <div className="text-4xl sm:text-6xl md:text-8xl font-black mb-2">


                    <span className="relative  text-white"
                        style={{ WebkitTextStroke: "0.1px #1e1b1b" }}
                    >
                        Platforms

                    </span>
                    <div className="mt-8 mb-4 text-4xl tracking-[0.1em] text-white">
                        <span style={{ WebkitTextStroke: "0.1px #1e1b1b" }}>Where we Hang Out </span>

                    </div>
                    </div>
                    <div className='flex items-center gap-7'>
                    <Card title="Tanishq Sharma" description="UIUX desinger" icon={cardlog }  />

                <Card title="Tanishq Sharma" description="UIUX desinger" icon={cardlog }  />
                <Card title="Tanishq Sharma" description="UIUX desinger" icon={cardlog }  />
                <Card title="Tanishq Sharma" description="UIUX desinger" icon={cardlog }  />
                </div>
                    </section>
        <section className="font-[Passero_One] pt-28 pb-20 px-6 text-center max-w-xl mx-auto">
                <div className="text-4xl sm:text-6xl md:text-8xl font-black mb-2">


                    <span className="relative  text-white"
                        style={{ WebkitTextStroke: "0.1px #1e1b1b" }}
                    >
                        Supporters

                    </span>
                    <div className="mt-8 mb-4 text-4xl tracking-[0.1em] text-white">
                        <span style={{ WebkitTextStroke: "0.1px #1e1b1b" }}>The People Who Make ForkedMind Better</span>

                    </div>
                    </div>
                    
                <div className='flex flex-wrap gap-2 '>
                    <Card title="Tanishq Sharma" description="UIUX desinger" icon={cardlog }  />

                <Card title="Tanishq Sharma" description="UIUX desinger" icon={cardlog }  />
                <Card title="Tanishq Sharma" description="UIUX desinger" icon={cardlog }  />
                <Card title="Tanishq Sharma" description="UIUX desinger" icon={cardlog }  />
                </div>
                    </section>
                    

        </>
    )
}