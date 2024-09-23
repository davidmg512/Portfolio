"use client"

import Image from "next/image"


interface SkillInterface {
    data: {
        title: string,
        image: string
    }
    
}

const Skill = (props: SkillInterface) => {

    const {data} = props;

    const {title, image} = data;

    return ( 
        <div className="bg-slate-600 rounded-lg py-2 px-3 flex items-center gap-2 hover:outline hover:outline-2 hover:outline-secondary hover:text-secondary hover:-translate-y-2 transition duration-250">                      
                <Image 
                    src={image} 
                    layout="intrinsic"  
                    width={30} 
                    height={30} 
                    alt={`Imagen de ${title}`}
                    className="object-contain"
                />
                {title}
        </div>
     );
}
 
export default Skill;