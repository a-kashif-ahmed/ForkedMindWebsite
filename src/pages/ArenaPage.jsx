
import NavBar from "../components/NavBar";
import hero1 from '../assets/Hero1.png'

import dashboard from '../assets/dashboard.png'
import Card from "../components/Card";


export default function ArenaPage() {
    return (
        <>
            <NavBar />
            <section className="font-[Passero_One] pt-28 pb-20 px-6 text-center max-w-xl mx-auto">
                <div className="text-7xl md:text-9xl font-black mb-2 ">
                    <span className=" relative flex justify-center -top-6 left-1/2 -translate-x-1/2 text-4xl"> <img alt="heh" src={hero1} width='10%' height='10%' /></span>

                    <span className="relative  text-white"
                        style={{ WebkitTextStroke: "0.1px #1e1b1b" }}
                    >
                        Model Arena

                    </span>


                </div>


                <div className="mt-8 mb-4 text-4xl tracking-[0.1em] text-white">
                    <span style={{ WebkitTextStroke: "1px #1e1b1b" }}>Where AI Minds Compete</span>
                </div>

                <p className="text-gray-600 max-w-xl mx-auto text-md leading-relaxed mb-12">
                    Watch AI models play chess, analyze their thinking, and uncover how intelligence really works.
                </p>
            </section>
            <section className="font-[Passero_One] py-12 px-6 text-center max-w-xl mx-auto">

                <div className="mt-8 mb-4 text-4xl tracking-[0.1em] text-white">
                    <span style={{ WebkitTextStroke: "1px #1e1b1b" }}>Model Intelligence Metrics</span>

                </div>
                <p className="text-gray-600 max-w-xl mx-auto text-md leading-relaxed mb-12">
                    Compare reasoning depth, rule adherence, and strategic creativity across leading LLMs.
                </p>
                <div className="text-2xl tracking-[0.1em] text-white font-[Passero_One]  text-center max-w-xl mx-auto">
                    <span style={{ WebkitTextStroke: "1px #1e1b1b" }}>Performance Dashboard</span>

                </div>
                 <img alt="heh" src={dashboard} className="mt-3 " />
                <div className="flex justify-left gap-10">

                    <div className="bg-[#6f9ad6] text-center px-8 py-2 rounded-full shadow-[0_6px_10px_rgba(0,0,0,0.25)]">
                        <h1
                            className="text-md font-bold text-white"
                            style={{
                                WebkitTextStroke: "0.3px black",
                                textShadow: "1px 1px 0px rgba(0,0,0,0.4)"
                            }}
                        >
                            GPT-5
                        </h1>
                    </div>

                    <div className="bg-[#e31b1b] text-center px-6 py-2 rounded-full shadow-[0_6px_10px_rgba(0,0,0,0.25)]">
                        <h1
                            className="text-md font-bold text-white"
                            style={{
                                WebkitTextStroke: "0.3px black",
                                textShadow: "1px 1px 0px rgba(0,0,0,0.4)"
                            }}
                        >
                            Gemini
                        </h1>
                    </div>

                    <div className="bg-[#bfbfbf] text-center px-6 py-2 rounded-full shadow-[0_6px_10px_rgba(0,0,0,0.25)]">
                        <h1
                            className="text-md font-extrabold text-white"
                            style={{
                                WebkitTextStroke: "0.3px black",
                                textShadow: "1px 1px 0px rgba(0,0,0,0.4)"
                            }}
                        >
                            Claude
                        </h1>
                    </div>

                    <div className="bg-[#ffd800] text-center px-6 py-2 rounded-full shadow-[0_6px_10px_rgba(0,0,0,0.25)]">
                        <h1
                            className="text-md font-extrabold text-white"
                            style={{
                                WebkitTextStroke: "0.3px black",
                                textShadow: "1px 1px 0px rgba(0,0,0,0.4)"
                            }}
                        >
                            llama
                        </h1>
                    </div>

                </div>
            </section>
            <section className="font-[Passero_One] py-20 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-4xl font-bold text-white mb-2 mr-1" style={{ WebkitTextStroke: "0.01px #1e1b1b" }}>
                        Built for Research
                    </span>

                </div>
                <div className="text-center mb-12">
                    <p className="text-gray-600 mt-3 text-xl">
                        Every feature designed for AI transparency and reproducible experiments
                    </p>
                </div>
                <section className="flex max-h-min items-center gap-6 px-6 py-16 max-w-6xl mx-auto">
                    <div className="flex-1">
                        <Card title='Side-by-Side Comparison' description='Watch two AI models face off with synchronized move displays and reasoning outputs.' />
                    </div>
                    <div className="flex-1 font-[Passero_One]">

                    </div>
                </section>
                <section className="flex max-h-min items-center gap-6 px-6 py-16 max-w-6xl mx-auto">
                    <div className="flex-1 font-[Passero_One]">
                        
                    </div>
                    <div className="flex-1">
                        <Card title='Side-by-Side Comparison' description='Watch two AI models face off with synchronized move displays and reasoning outputs.' />
                    </div>
                    
                </section>
                <section className="flex max-h-min items-center gap-6 px-6 py-16 max-w-6xl mx-auto">
                    <div className="flex-1">
                        <Card title='Side-by-Side Comparison' description='Watch two AI models face off with synchronized move displays and reasoning outputs.' />
                    </div>
                    <div className="flex-1 font-[Passero_One]">
                        
                    </div>
                </section>
                <section className="flex max-h-min items-center gap-6 px-6 py-16 max-w-6xl mx-auto">
                    <div className="flex-1 font-[Passero_One]">
                        
                    </div>
                    <div className="flex-1">
                        <Card title='Side-by-Side Comparison' description='Watch two AI models face off with synchronized move displays and reasoning outputs.' />
                    </div>
                    
                </section>

            </section>

        </>
    )
}