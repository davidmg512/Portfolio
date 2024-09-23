"use client"
import Image from "next/image"
import Link from "next/link"
import { Github } from 'lucide-react';


interface PorfolioBoxProps {
    data: {
        id:number,
        title: string,
        subtitle: string,
        image: string,
        descripcion: string,
        urlGithub: string,
        urlDemo: string,
        tec: string[]
    }
}

const PortfolioBox = (props: PorfolioBoxProps) => {
    const { data } = props
    const { id, title, subtitle, image, descripcion, urlGithub, urlDemo, tec} = data
    const isEven = id % 2 === 0;

    return  (
        <div className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} bg-slate-900 rounded-xl overflow-hidden`}>
            {/* Imagen */}
            <div className={`md:w-1/2 w-full relative ${isEven ? 'md:pr-4' : 'md:pl-4'}`}>
                <div className="relative w-full h-64 md:h-full">
                    <Image
                        src={image}
                        alt={`Imagen de ${title}`}
                        layout="fill"
                        objectFit="cover"
                        className={`w-full h-full ${isEven ? 'rounded-l-xl' : 'rounded-r-xl'}`}
                    />
                </div>
            </div>

            {/* Contenido */}
            <div className={`md:w-1/2 w-full flex flex-col ${isEven ? 'md:text-right' : 'md:text-left'} p-4`}>
                <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} mt-4 mb-5 md:mt-0`}>
                    <h4 className="text-secondary">
                        {subtitle}
                    </h4>
                    <h3 className="mb-4 text-xl font-semibold">
                        {title}
                    </h3>

                    {/* En pantallas pequeñas, ocultar la descripción */}
                    <p className="hidden md:block">{descripcion}</p>

                    {/* Tecnologías utilizadas */}
                    <div className={`flex flex-wrap gap-3 mt-4 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                        {tec.map((tecnologia, index) => (
                            <div 
                                key={index} 
                                className="bg-gray-700 text-white px-3 py-2 rounded-lg text-sm"
                            >
                                {tecnologia}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Enlaces */}
                <div className={`flex gap-5 mt-4 md:mt-auto ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                    <Link href={urlDemo} target="_blank" className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/50">Ver proyecto</Link>
                    <Link href={urlGithub} target="_blank" className="p-2 items-center transition duration-150 rounded-full border hover:border-secondary hover:text-secondary md:hover:-translate-y-2"><Github /></Link>
                </div>
            </div>
        </div>
     );
}
 
export default PortfolioBox;