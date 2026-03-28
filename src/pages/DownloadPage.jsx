
import cardlog from '../assets/cardlog.png'
import hero1 from '../assets/Hero1.png'
// import FeatureCard from "../components/Card";
import Card from "../components/Card";
import DownloadCard from "../components/DownloadCard";

export default function DownloadPage(){
    return (
        <>
        <div className="bg-white dark:bg-black transition-colors duration-500">
         <section className="font-[Passero_One] pt-28 px-6 text-center max-w-xl mx-auto">
                <div className="text-4xl sm:text-6xl md:text-8xl font-black mb-2">
                    <span className="block relative -top-6 text-4xl text-center"><img alt="heh" src={hero1} className="mx-auto w-[10%]" /></span>

                    <span className="relative  text-white"
                        style={{ WebkitTextStroke: "0.1px #1e1b1b" }}
                    >
                        Download

                    </span>


                </div>

                <div className="mt-8 mb-4 text-4xl tracking-[0.1em] text-white">
                    <span style={{ WebkitTextStroke: "1px #1e1b1b" }}>Get ForkedMind</span>
                </div>

                <p className="text-gray-600 max-w-xl mx-auto text-md leading-relaxed mb-12">
                    Available on every major platform. Download the app and start comparing AI models locally.
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
                        <span style={{ WebkitTextStroke: "0.1px #1e1b1b" }}>Available on </span>

                    </div>
                    </div>
                    
                    </section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">

  <DownloadCard icon={cardlog} popular={true} title="Windows" />
  <DownloadCard icon={cardlog} popular={true} title="Mac OS (Apple HW)" />
  <DownloadCard icon={cardlog} popular={false} title="Mac OS (Intel)" />
  <DownloadCard icon={cardlog} popular={false} title="Linux" />
  <DownloadCard icon={cardlog} popular={true} title="Android" />
  <DownloadCard icon={cardlog} popular={true} title="iOS" />

</div>
        <section className="font-[Passero_One] pt-28 pb-20 px-6 text-center max-w-xl mx-auto">
                <div className="text-4xl sm:text-6xl md:text-8xl font-black mb-2">


                    <span className="relative  text-white"
                        style={{ WebkitTextStroke: "0.1px #1e1b1b" }}
                    >
                        Requirements

                    </span>
                    <div className="mt-8 mb-4 text-4xl tracking-[0.1em] text-white">
                        <span style={{ WebkitTextStroke: "0.1px #1e1b1b" }}>System Requirements</span>

                    </div>
                    </div>
                    
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <Card title="Windows" description=" Windows 10 or newer , 4GB RAM, 200MB Disk Space" icon={cardlog }  />

                <Card title="macOS " description=" Mac OS 12 Monterey or newer , 4GB RAM, 200MB Disk Space" icon={cardlog }  />
                <Card title="Linux" description=" Ubuntu 20.04+, Fedora 36+, or equivalent, 4GB RAM, 200MB Disk Space" icon={cardlog }  />
                <Card title="Mobile" description="iOS 16+ or Android 10+, 4GB RAM, 100MB Space" icon={cardlog }  />
                </div>
                    </section>
                    
</div>
        </>
    )
}