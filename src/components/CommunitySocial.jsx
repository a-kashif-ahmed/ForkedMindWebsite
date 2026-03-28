export default function CommunitySocialCard({ title, description, icon, link }) {
  return (
    <a href={link}>
    <div className="font-[Passero_One] bg-black text-white rounded-3xl p-8 flex flex-col  gap-4 hover:scale-[1.02] transition-transform duration-200 dark:bg-white dark:text-black">

      {/* Icon */}
      {icon && (
        <div className="text-3xl dark:invert flex justify-center">
           <img alt="heh" src={icon}/>
        </div>
      )}

      {/* Title */}
      <h3 className="text-3xl font-bold">
        {title}
      </h3>

      
    </div>
    </a>
  );
}