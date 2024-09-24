"use client"

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Introduction = () => {
    return ( 
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid grid-cols-1 md:grid-cols-2 items-center h-full p-6 py-20 md:py-0">
                {/* Imagen */}
                <div className="relative flex justify-center md:justify-end mb-6 mt-16 md:mt-0 md:mb-0 md:mr-24">
                    <div className="hidden absolute -right-6 -bottom-7 w-[calc(300px+16px)] h-[calc(300px+16px)] border-solid border-2 border-secondary rounded-xl md:block"></div>
                    <Image 
                        src="/fotoOrla2.jpg" 
                        priority 
                        width="300" 
                        height="300" 
                        alt="Profile pic" 
                        className="rounded-xl z-10"
                    />
                </div>
                
                {/* Texto */}
                <div className="flex flex-col justify-center max-w-md text-center md:text-left md:ml-12">
                    <h1 className="mb-5 text-2xl leading-tight md:text-4xl md:mb-10">
                        Si puedes pensarlo, <br />
                        <TypeAnimation
                            sequence={[
                                "puedes programarlo",
                                1000,
                                "puedes optimizarlo",
                                1000,
                                "puedes implementarlo",
                                1000,
                                "puedes desarrollarlo",
                                1000
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mb-8 text-xl md:mb-8">
                        Como desarrollador frontend me dedico a combinar diseño y funcionalidad para crear experiencias digitales impactantes y accesibles.
                    </p>

                    <div className="flex items-center justify-center gap-3 mb-32 md:justify-start md:gap-10 md:mb-8">
                        <Link href="/portfolio" className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </Link>

                        <a href="/cv.pdf" download className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary">
                            Descarga mi CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Introduction;