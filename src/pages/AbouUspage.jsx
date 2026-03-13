import cardlog from '../assets/cardlog.png'

import NavBar from "../components/NavBar";
import hero1 from '../assets/Hero1.png'
import FeatureCard from "../components/Card";
import Card from "../components/Card";
// import dashboard from '../assets/dashboard.png'
// import Card from "../components/Card";
// import ksmile from '../assets/KSmile.png'
// import kshock from '../assets/KShock.png'
// import klaugh from '../assets/KLaugh.png'
// import kun from '../assets/KUn.png'

export default function AboutUs() {
    return (
        <>
            <NavBar />
            <section className="font-[Passero_One] pt-28 px-6 text-center max-w-xl mx-auto">
                <div className="text-4xl sm:text-6xl md:text-8xl font-black mb-2">
                    <span className=" relative flex justify-center -top-6 left-1/2 -translate-x-1/2 text-4xl">  <img alt="heh" src={hero1} width='10%' height='10%' /></span>

                    <span className="relative  text-white"
                        style={{ WebkitTextStroke: "0.1px #1e1b1b" }}
                    >
                        About Us

                    </span>


                </div>

                <div className="mt-8 mb-4 text-4xl tracking-[0.1em] text-white">
                    <span style={{ WebkitTextStroke: "1px #1e1b1b" }}>Building the Observatory for AI Minds</span>
                </div>

                <p className="text-gray-600 max-w-xl mx-auto text-md leading-relaxed mb-12">
                    Watch AI models play chess, analyze their thinking, and uncover how intelligence really works.ForkedMind was born from a simple question: how do you truly compare artificial intelligence? Not by benchmarks alone, but by watching AI think, play, and make mistakes — in real time.
                </p>
            </section>
            <section className="font-[Passero_One] pt-28 pb-20 px-6 text-center max-w-xl mx-auto">
                <div className="text-4xl sm:text-6xl md:text-8xl font-black mb-2">


                    <span className="relative  text-white"
                        style={{ WebkitTextStroke: "0.1px #1e1b1b" }}
                    >
                        Our Mission

                    </span>
                    <div className="mt-8 mb-4 text-4xl tracking-[0.1em] text-white">
                        <span style={{ WebkitTextStroke: "0.1px #1e1b1b" }}>Make AI Comparison Scientific</span>

                    </div>



                </div>
                <p className="text-gray-600 max-w-xl mx-auto text-md leading-relaxed mb-12">
                    We believe the future of AI development depends on rigorous, transparent evaluation. Chess is our laboratory — a domain complex enough to reveal reasoning depth, yet structured enough to measure it precisely.
                </p>
            </section>
           <section className="max-w-6xl mx-auto px-6 py-20 space-y-16">

  <div className="flex justify-center md:justify-start">
    <FeatureCard title="Transparency First" description="Every decision an AI makes should be observable, explainable, and reproducible." />
  </div>

  <div className="flex justify-center">
    <FeatureCard title="Neutral Ground" description="No preferred model. No hidden advantages. Just fair, controlled experiments." />
  </div>

  <div className="flex justify-center md:justify-end">
    <FeatureCard title="Open Research" description="We publish our benchmarks, methodologies, and findings for the community." />
  </div>

</section>           
<section className="font-[Passero_One] pt-28 pb-20 px-6 text-center max-w-xl mx-auto">
                <div className="text-4xl sm:text-6xl md:text-8xl font-black mb-2">


                    <span className="relative  text-white"
                        style={{ WebkitTextStroke: "0.1px #1e1b1b" }}
                    >
                        Our Team

                    </span>
                    <div className="mt-8 mb-4 text-4xl tracking-[0.1em] text-white">
                        <span style={{ WebkitTextStroke: "0.1px #1e1b1b" }}>Minds Behind the Arena </span>

                    </div>
                    </div>
                    <p className="text-gray-600 max-w-xl mx-auto text-md leading-relaxed mb-12">
Researchers, engineers, and designers united by curiosity about machine intelligence.
                </p>
                <div className="grid grid-cols-2 gap-4">
  <Card title="Tanishq Sharma" description="UIUX designer" icon={cardlog} />
  <Card title="Tanishq Sharma" description="UIUX designer" icon={cardlog} />
  <Card title="Tanishq Sharma" description="UIUX designer" icon={cardlog} />
  <Card title="Tanishq Sharma" description="UIUX designer" icon={cardlog} />
</div>
                    </section>
                    
        </>
    )
}