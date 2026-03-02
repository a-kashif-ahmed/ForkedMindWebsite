export default function Card({ title, description, icon }) {
  return (
    <div className="font-[Passero_One] bg-black text-white rounded-3xl p-8 flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-200">

      {/* Icon */}
      {icon && (
        <div className="text-3xl">
           <img alt="heh" src={icon}/>
        </div>
      )}

      {/* Title */}
      <h3 className="text-3xl font-bold">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>

    </div>
  );
}