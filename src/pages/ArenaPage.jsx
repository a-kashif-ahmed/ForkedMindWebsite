
import NavBar from "../components/NavBar";
import hero1 from '../assets/Hero1.png'

import dashboard from '../assets/dashboard.png'
import Card from "../components/Card";


export default function ArenaPage() {
    return (
        <>
            <NavBar />
            <section className="font-[Passero_One] pt-28 pb-20 px-6 text-center max-w-xl mx-auto">
                <div className="text-4xl sm:text-6xl md:text-8xl font-black mb-2">
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
                {/* BOTTOM STATS */}
                <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-20 mt-16 text-2xl sm:text-3xl md:text-4xl font-black">

                    <span
                        className="text-white"
                        style={{
                            WebkitTextStroke: "0.3px #1e1b1b",
                            textShadow: "2px 2px 0px rgba(0,0,0,0.25)"
                        }}
                    >
                        42+
                    </span>

                    <span
                        className="text-white"
                        style={{
                            WebkitTextStroke: "0.3px #1e1b1b",
                            textShadow: "2px 2px 0px rgba(0,0,0,0.25)"
                        }}
                    >
                        12.8K
                    </span>

                    <span
                        className="text-white"
                        style={{
                            WebkitTextStroke: "0.3px #1e1b1b",
                            textShadow: "2px 2px 0px rgba(0,0,0,0.25)"
                        }}
                    >
                        3.2K
                    </span>

                    <span
                        className="text-white"
                        style={{
                            WebkitTextStroke: "0.3px #1e1b1b",
                            textShadow: "2px 2px 0px rgba(0,0,0,0.25)"
                        }}
                    >
                        1.25
                    </span>

                </div>
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
                <img
                    alt="Dashboard preview"
                    src={dashboard}
                    className="mt-3 w-full h-auto rounded-lg"
                />
                <div className="flex flex-wrap justify-center gap-4 mt-6">

                    <div className="bg-[#6f9ad6] text-center px-8 py-2 rounded-full shadow-[0_6px_10px_rgba(0,0,0,0.25)] sm:px-3 py-2">
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
                <section className="flex flex-col md:flex-row items-center gap-6 px-6 py-12 md:py-16 max-w-6xl mx-auto">
                    <div className="flex-1">
                        <Card title='Side-by-Side Comparison' description='Watch two AI models face off with synchronized move displays and reasoning outputs.' />
                    </div>
                    <div className="flex-1 font-[Passero_One]">

                    </div>
                </section>
                <section className="flex flex-col md:flex-row items-center gap-6 px-6 py-12 md:py-16 max-w-6xl mx-auto">
                    <div className="flex-1 font-[Passero_One]">

                    </div>
                    <div className="flex-1">
                        <Card title='Transparent Reasoning' description="Read each model's chain-of-thought as it evaluates positions and plans strategies." />
                    </div>

                </section>
                <section className="flex flex-col md:flex-row items-center gap-6 px-6 py-12 md:py-16 max-w-6xl mx-auto">
                    <div className="flex-1">
                        <Card title='Adjustable Rules' description='Modify temperature, time limits, and chess variants to stress-test model behavior.' />
                    </div>
                    <div className="flex-1 font-[Passero_One]">

                    </div>
                </section>
                <section className="flex flex-col md:flex-row items-center gap-6 px-6 py-12 md:py-16 max-w-6xl mx-auto">
                    <div className="flex-1 font-[Passero_One]">

                    </div>
                    <div className="flex-1">
                        <Card title='Replayable Matches' description='Step through any historical match move-by-move with full reasoning replay.' />
                    </div>

                </section>
                <section className="flex flex-col md:flex-row items-center gap-6 px-6 py-12 md:py-16 max-w-6xl mx-auto">

                    <div className="flex-1">
                        <Card title='Experimental Benchmarking' description='Run automated test suites across models and export results for research.' />
                    </div>
                    <div className="flex-1 font-[Passero_One]">

                    </div>

                </section>
                <section className="flex flex-col md:flex-row items-center gap-6 px-6 py-12 md:py-16 max-w-6xl mx-auto">
                    <div className="flex-1 font-[Passero_One]">

                    </div>
                    <div className="flex-1">
                        <Card title='Fair & Neutral Platform' description='No preferred AI. Every model gets identical conditions for unbiased comparison.' />
                    </div>

                </section>


            </section>
            <section className="font-[Passero_One] py-20 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-4xl font-bold text-white mb-2 mr-1" style={{ WebkitTextStroke: "0.01px #1e1b1b" }}>
                        Your Models
                    </span>

                </div>
                <div className="text-center mb-12">
                    <span className="text-2xl sm:text-3xl md:text-5xl font-black  tracking-tight">
                        Our Arena
                    </span>
                </div>
                <p className="text-gray-600 max-w-xl mx-auto text-md leading-relaxed mb-12">
                    ForkedMind is model-agnostic. Plug in any LLM and benchmark it against the field.
                </p>
                <section className="flex flex-col md:flex-row items-center gap-6 px-6 py-12 md:py-16 max-w-6xl mx-auto">
                    <div className="flex-1 font-[Passero_One]">
                        <span className="text-4xl font-bold text-white mb-2 mr-1" style={{ WebkitTextStroke: "0.01px #1e1b1b" }}>
                            Bring Your Own LLM
                        </span>
                        <p className="text-gray-600 max-w-xl mx-auto text-md leading-relaxed mb-12">
                            Connect any model via API — OpenAI, Anthropic, Mistral, open-source, or custom fine-tunes.
                        </p>
                        <span className="text-4xl font-bold text-white mb-2 mr-1" style={{ WebkitTextStroke: "0.01px #1e1b1b" }}>
                            Neutral Playground
                        </span>
                        <p className="text-gray-600 max-w-xl mx-auto text-md leading-relaxed mb-12">
                            No preferred vendor. Every model runs under identical conditions for fair head-to-head results.
                        </p>
                        <span className="text-4xl font-bold text-white mb-2 mr-1" style={{ WebkitTextStroke: "0.01px #1e1b1b" }}>
                            Full Transparency
                        </span>
                        <p className="text-gray-600 max-w-xl mx-auto text-md leading-relaxed mb-12">
                            All prompts, configs, and match conditions are open. Reproduce any experiment independently.
                        </p>

                    </div>
                    <div className="flex-1">
                        <Card
                            title=""
                            description={
                                <>
                                    const arena = new ForkedMind({"{"}<br />
                                    &nbsp;&nbsp;apiKey: "fm_...",<br />
                                    {"}"});<br /><br />

                                    await arena.connect({"{"}<br />
                                    &nbsp;&nbsp;model: "gpt-5",<br />
                                    &nbsp;&nbsp;endpoint: "https://api.openai.com/v1",<br />
                                    &nbsp;&nbsp;temperature: 0.7,<br />
                                    {"}"});<br /><br />

                                    const match = await arena.startMatch(<br />
                                    &nbsp;&nbsp;"gpt-5", "gemini-pro"<br />
                                    );
                                </>
                            }
                        />
                    </div>

                </section>
            </section>

            <section className="font-[Passero_One] py-20 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-2xl sm:text-3xl md:text-5xl font-black  tracking-tight">
                        Enter the Arena
                    </span>
                </div>
                <div className="text-center mb-12">
                    <span className="text-2xl sm:text-3xl md:text-5xl font-black  tracking-tight">
                        Understand AI
                    </span>
                </div>
                <p className="text-gray-600 text-center max-w-xl mx-auto text-md leading-relaxed mb-12">
                    Start comparing models today. No setup required.
                </p>
                <div className="text-center mb-12 px-4">
                    <button className="w-full sm:w-auto inline-block bg-black text-white text-sm md:text-base font-bold uppercase tracking-widest px-6 py-3 rounded-full border-2 border-black hover:bg-white hover:text-black transition duration-300 shadow-md hover:scale-105">
                        Download Now
                    </button>


                </div>
            </section>

        </>
    )
}