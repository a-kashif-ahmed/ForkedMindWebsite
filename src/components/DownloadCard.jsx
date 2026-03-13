export default function DownloadCard({ title, icon, popular }) {
  return (
    <div className="relative font-[Passero_One] bg-black text-white rounded-3xl p-8 flex flex-col items-center text-center gap-6 w-72 hover:scale-[1.03] transition-transform duration-200">

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
      <button className="bg-white text-black px-8 py-3 rounded-full text-sm hover:bg-gray-200 transition">
        Download Now
      </button>

    </div>
  );
}