import { useInView } from "./useInViewHook";
export default function DownloadCard({ title, icon, popular,link, text, isDownload }) {
  const [ref,visible] = useInView();
  return (
    <div ref={ref} className={` ${visible ? "slide" : "opacity-0 translate-y-16"} relative font-[Passero_One] bg-black text-white dark:bg-white dark:text-black rounded-3xl p-8 flex flex-col items-center text-center gap-6 w-72 hover:scale-[1.03] transition-transform duration-200`}>

      {/* Popular Badge */}
      {popular && (
        <span className="absolute top-4 right-4 bg-blue-400 text-black text-xs px-3 py-1 rounded-full">
          POPULAR
        </span>
      )}

      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Title */}
      <h3 className="text-3xl">
        {title}
      </h3>

      {/* Button */}
      {isDownload ? <a  href={link} download><button className="bg-white text-black dark:bg-black dark:text-white px-8 py-3 rounded-full text-sm hover:bg-gray-200 transition">
        {text}
      </button></a> :  <a  href={link} ><button className="bg-white text-black dark:bg-black dark:text-white px-8 py-3 rounded-full text-sm hover:bg-gray-200 transition">
        {text}
      </button></a>}
     

    </div>
  );
}