import cardlog from '../assets/cardlog.png'

import VisitWidget from '../components/VisitsWidget';
import hero1 from '../assets/Hero1.png'
import FeatureCard from "../components/Card";
import SocialCard from "../components/SocialCard";
// import dashboard from '../assets/dashboard.png'
// import Card from "../components/Card";
// import ksmile from '../assets/KSmile.png'
// import kshock from '../assets/KShock.png'
// import klaugh from '../assets/KLaugh.png'
// import kun from '../assets/KUn.png'

export default function AboutUs({totalVisits}) {
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
                            About Us

                        </span>


                    </div>

                    <div className="mt-8 mb-4 text-4xl tracking-[0.1em] text-white ">
                        <span style={{ WebkitTextStroke: "1px #1e1b1b" }}>Building the Observatory for AI Minds</span>
                    </div>

                    <p className="text-gray-600 max-w-xl mx-auto text-md leading-relaxed mb-12">
                        Watch AI models play chess, analyze their thinking, and uncover how intelligence really works.ForkedMind was born from a simple question: how do you truly compare artificial intelligence? Not by benchmarks alone, but by watching AI think, play, and make mistakes , in real time.
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
                            <span style={{ WebkitTextStroke: "0.1px #1e1b1b" }}>Make AI Comparison Scientific</span>

                        </div>



                    </div>
                    <p className="text-gray-600 max-w-xl mx-auto text-md leading-relaxed mb-12">
                        We believe the future of AI development depends on rigorous, transparent evaluation. Chess is our laboratory , a domain complex enough to reveal reasoning depth, yet structured enough to measure it precisely.
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
                        {/* <SocialCard title="Yang Zixuan " description="Backend Developer" icon={cardlog} githuburl='https://github.com/TomiWebPro' />
                        <SocialCard title="Tanishq Sharma" description="UI UX designer" icon={cardlog} linkedinurl='https://www.linkedin.com/in/ertanishqsharma/' githuburl='https://github.com/Tanishq890' twitterurl='https://x.com/tanishqsharma82' behanceurl='https://www.behance.net/tanishqsharma16' />
                        <SocialCard title="Kashif Ahmed A" description="Frontend Developer" icon={cardlog} linkedinurl='https://linkedin.com/in/a-kashif-ahmed/' githuburl='https://github.com/a-kashif-ahmed' />
                        <SocialCard title={'One Mission'} description={'Combining logic with creativity to build the future of chess.'} /> */}
                        <SocialCard title={'Full stack dev' }/>
                        
                        <SocialCard title={'Designer' }/>
                    </div>
                </section>
            
            <VisitWidget totalVisits={totalVisits}/>
            </div>

        </>
    )
}