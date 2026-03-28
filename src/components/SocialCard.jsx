import behance from '../assets/behance.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

export default function SocialCard({ title, description, icon, linkedinurl, twitterurl, githuburl, behanceurl }) {
  return (
    <div className="font-[Passero_One] bg-black text-white rounded-3xl p-8 flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-200 dark:bg-white dark:text-black">

      {/* Icon */}
      {icon && (
        <div className="text-3xl dark:invert">
           <img alt="heh" src={icon}/>
        </div>
      )}

      {/* Title */}
      <h3 className="text-3xl font-bold">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 leading-relaxed dark:invert">
        {description}
      </p>
<div className="text-left flex">
        {twitterurl ?  <a href={twitterurl}><img src={twitter} alt='twitter' className='w-[70%]'/></a> : ''}
        {linkedinurl ? <a href={linkedinurl}><img src={linkedin} alt='linkedin' className='w-[70%]'/></a>:''}
        {githuburl ? <a href={githuburl}><img src={github} alt='github' className='w-[70%]'/></a>:''}
        {behanceurl ? <a href={behanceurl}><img src={behance} alt='behnace' className='w-[70%]'/></a> : ''}
      </div>
    </div>
  );
}