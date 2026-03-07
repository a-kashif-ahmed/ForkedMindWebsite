

import NavBar from "../components/NavBar";
import hero1 from '../assets/Hero1.png'

import dashboard from '../assets/dashboard.png'
import Card from "../components/Card";
import ksmile from '../assets/KSmile.png'
import kshock from '../assets/KShock.png'
import klaugh from '../assets/KLaugh.png'
import kun from '../assets/KUn.png'

export default function AboutUs(){
    return(
        <>
            <NavBar />
            <section className="font-[Passero_One] pt-28 pb-20 px-6 text-center max-w-xl mx-auto">
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
                </section>
</>
    )
}