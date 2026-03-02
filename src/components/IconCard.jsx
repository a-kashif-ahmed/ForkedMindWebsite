export default function IconCard({ img1, img2, title, description }) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs mx-auto">

      {/* Circular Icon */}
      <div className="w-28 h-28 rounded-full bg-black flex items-center justify-center mb-6">
         <img alt="heh" src={img1} className="object-contain w-12 h-10"/>
         <img alt="heh" src={img2} className="object-contain w-18 h-15"/>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>

    </div>
  );
}