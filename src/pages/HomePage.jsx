
import NavBar from "../components/NavBar";
import hero1 from '../assets/Hero1.png'
import board from '../assets/Board.png'
import FeatureCard from "../components/Card";
import eye from '../assets/eye.png'
import aiBrain from '../assets/aiBrain.png'
import shield from '../assets/shield.png'
import stars from '../assets/stars.png'
import IconCard from "../components/IconCard";
import chessboardicon from '../assets/chessboardicon.png'
import beaker from '../assets/beaker.png'
import terminal from '../assets/terminal.png'
import network from '../assets/network.png'


export default function HomePage() {

    return (
        <>
            <NavBar />

            {/* HERO */}
            <section className="font-[Passero_One] pt-28 pb-20 px-6 text-center max-w-5xl mx-auto">
                <div className="text-7xl md:text-9xl font-black mb-2 ">
                    <span className=" relative flex justify-center -top-6 left-1/2 -translate-x-1/2 text-4xl"> <img alt="heh" src={hero1} width='10%' height='10%' /></span>

                    <span className="relative  text-white"
                        style={{ WebkitTextStroke: "0.1px #1e1b1b" }}
                    >
                        Play

                    </span>{" "}
                    <span
                        className="relative inline-block text-white"
                        style={{ WebkitTextStroke: "0.1px #1e1b1b" }}
                    >
                        AI
                    </span>
                </div>

                <div className="mt-8 mb-4 text-md tracking-[0.3em] text-gray-500">
                    <span style={{ WebkitTextStroke: "0.1px #1e1b1b" }}>Play Against Minds</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                    Not Engines
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed mb-12">
                    Play chess directly against AI models. Observe reasoning, coaching, mistakes, and intelligence — in real time.
                </p>
            </section>
            <section className="flex items-center gap-6 px-6 py-16 max-w-6xl mx-auto">


                <div className="flex-1">
                     <img 
                        src={board}
                        alt="Chess Board"
                        className="w-full h-auto object-contain rounded-xl"
                    />
                </div>


                <div className="flex-1 font-[Passero_One]">
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug">
                        We all say LLMs are smarter than humans,
                        but is it really the case in the world of chess?
                    </h1>
                </div>

            </section>
            <section className="flex items-center gap-6 px-6 py-16 max-w-6xl mx-auto">
                <div className="flex-1 font-[Passero_One]">
                    <span className="text-xl sm:text-2xl md:text-4xl leading-snug" style={{ WebkitTextStroke: "0.1px #403d3d" }}>
                        Can you win against the latest flagship LLM ?
                    </span>
                </div>
                <div className="flex-1">
                     <img 
                        src={board}
                        alt="Chess Board"
                        className="w-full h-auto object-contain rounded-xl"
                    />
                </div>
            </section>
            <section className="font-[Passero_One] py-20 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-4xl font-bold tracking-[0.2em] text-white mb-2" style={{ WebkitTextStroke: "0.01px #1e1b1b" }}>
                        What Makes
                    </span>
                    <span className="text-4xl md:text-5xl font-black  tracking-tight">
                        ForkedMind Different
                    </span>
                    <p className="text-gray-600 mt-3 text-xl">
                        Not another chess engine. A window into how AI actually thinks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FeatureCard
                        icon={aiBrain}
                        title="Model-Agnostic Interface"
                        description="Bring any LLM — OpenAI, Claude, Gemini, Llama, or your own local model. ForkedMind doesn't care what powers the opponent."
                    />
                    <FeatureCard
                        icon={stars}
                        title="Bring Your Own AI"
                        accent
                        description="Connect via API key. Your model, your rules. No vendor lock-in, no hidden costs beyond your own API usage."
                    />
                    <FeatureCard className="font-[Passero_One]"
                        icon={eye}
                        title="Transparent Decision Making"
                        description="See how the AI reasons about each move. Watch it think, hesitate, blunder, and occasionally surprise you with brilliance."
                    />
                    <FeatureCard
                        icon={shield}
                        title="No Hidden Tuning or Bias"
                        accent
                        description="Raw model output. No secret fine-tuning, no difficulty sliders behind the scenes. What you see is what the model actually produces."
                    />
                </div>
            </section>
            <section className="font-[Passero_One] py-20 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-4xl font-bold tracking-[0.2em] text-white mb-2" style={{ WebkitTextStroke: "0.01px #1e1b1b" }}>
                        Why
                    </span>
                    <span className="text-4xl md:text-5xl font-black  tracking-tight">
                        Chess ?
                    </span>
                    <p className="text-gray-600 mt-3 text-xl">
                        Chess is the ultimate stress test for reasoning. It's bounded, sequential, and fully verifiable making it the perfect lens to study AI cognition.
                    </p>
                    <p className="text-black mt-3 text-xl">
                        "This isn't about Elo. It's about understanding intelligence."
                    </p>
                </div>
            </section>
            <section className="flex max-h-min items-center gap-6 px-6 py-16 max-w-6xl mx-auto">


                <div className="flex-1">
                    <FeatureCard title="Structed Rules" description='Perfect sandbox — every move is verifiable against a known ruleset.' />
                </div>


                <div className="flex-1 font-[Passero_One]">

                </div>

            </section>
            <section className="flex max-h-min items-center gap-6 px-6 py-16 max-w-6xl mx-auto">

                <div className="flex-1 font-[Passero_One]">

                </div>

                <div className="flex-1">
                    <FeatureCard title="Sequential Reasoning" description='Each move depends on understanding what came before and anticipating what comes next.' />
                </div>

            </section>
            <section className="flex max-h-min items-center gap-6 px-6 py-16 max-w-6xl mx-auto">


                <div className="flex-1">
                    <FeatureCard title="Clear Verification" description='Unlike open-ended text, chess has right and wrong answers. Mistakes are undeniable.' />
                </div>


                <div className="flex-1 font-[Passero_One]">

                </div>

            </section>

            <section className="flex max-h-min items-center gap-6 px-6 py-16 max-w-6xl mx-auto">

                <div className="flex-1 font-[Passero_One]">

                </div>

                <div className="flex-1">
                    <FeatureCard title="Reveals Strength & Flaws " description='Watch models struggle with tactics, sacrifice material illogically, or find creative solutions.' />
                </div>

            </section>
            <section className="font-[Passero_One] py-20 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-4xl font-bold text-white mb-2 mr-1" style={{ WebkitTextStroke: "0.01px #1e1b1b" }}>
                        Built for the
                    </span>
                    <span className="text-4xl md:text-5xl font-black  tracking-tight">
                        Curious
                    </span>

                </div>
                <section className="flex max-h-min items-center gap-6 px-6 py-16 max-w-6xl mx-auto">


                    <div className="flex-1">
                        <IconCard img1={beaker} img2={hero1} title="AI Researchers" description='Unlike open-ended text, chess has right and wrong answers. Mistakes are undeniable.' />
                    </div>


                    <div className="flex-1 font-[Passero_One]">

                    </div>

                </section>

                <section className="flex max-h-min items-center gap-6 px-6 py-16 max-w-6xl mx-auto">

                    <div className="flex-1 font-[Passero_One]">

                    </div>

                    <div className="flex-1">
                        <IconCard img1={chessboardicon} img2={hero1} title="Chess Enthusiats " description='Watch models struggle with tactics, sacrifice material illogically, or find creative solutions.' />
                    </div>

                </section>

                <section className="flex max-h-min items-center gap-6 px-6 py-16 max-w-6xl mx-auto">


                    <div className="flex-1">
                        <IconCard img1={terminal} img2={hero1} title="Developers" description='Unlike open-ended text, chess has right and wrong answers. Mistakes are undeniable.' />
                    </div>


                    <div className="flex-1 font-[Passero_One]">

                    </div>

                </section>

                <section className="flex max-h-min items-center gap-6 px-6 py-16 max-w-6xl mx-auto">

                    <div className="flex-1 font-[Passero_One]">

                    </div>

                    <div className="flex-1">
                        <IconCard img1={network} img2={hero1} title="Curious Minds " description='Watch models struggle with tactics, sacrifice material illogically, or find creative solutions.' />
                    </div>

                </section>
            </section>
            <section className="font-[Passero_One] py-20 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <span className="text-4xl font-bold text-white mb-2 mr-1" style={{ WebkitTextStroke: "0.01px #1e1b1b" }}>
                        Beyond a Game.
                    </span>

                </div>
                <div className="text-center mb-12">
                    <span className="text-4xl md:text-5xl font-black  tracking-tight">
                        A Window Into AI Cognition.
                    </span>
                </div>
                <div className="text-center mb-12">
                    <p className="text-gray-600 mt-3 text-xl">
                        ForkedMind is evolving into an AI benchmark platform — a research and entertainment hybrid that gives anyone a transparent view of how artificial intelligence reasons, adapts, and fails under pressure.
                    </p>
                </div>
            </section>

            <section className="font-[Passero_One] py-20 px-6 max-w-5xl mx-auto">

                <div className="text-center mb-12">
                    <span className="text-4xl md:text-5xl font-black  tracking-tight">
                        Step Into the Mind of AI.
                    </span>
                </div>
                <div className="text-center mb-12">
                    <p className="text-gray-600 mt-3 text-xl">
                        The board is set. The model is waiting. Make your move.
                    </p>
                </div>
                <div className="text-center mb-12">
                    <button className="inline-block bg-black text-white text-sm md:text-base font-bold uppercase tracking-widest px-6 py-3 rounded-full border-2 border-black hover:bg-white hover:text-black transition duration-300 shadow-md hover:scale-105">
                        Download Now
                    </button>


                </div>
            </section>

        </>
    )
}

