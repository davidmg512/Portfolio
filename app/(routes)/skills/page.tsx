import AvatarPortfolio from "@/components/avatar-portfolio";
import ContainerPage from "@/components/container";
import Skill from "@/components/skill";
import TransitionPage from "@/components/transition-page";
import { knowntec, learningtec, usedtec } from "@/data";


const SkillsPage = () => {
    return ( 
        <>
            <TransitionPage/>
            <ContainerPage>
                <div className="text-center text-4xl">
                    <h1>Habilidad
                        <span className="text-secondary  font-semibold">es</span>
                    </h1>
                </div>
                <div>
                    <h2 className="text-2xl  mt-10">Conocimientos solidos</h2>
                    <div className="flex flex-wrap gap-3 mt-4">
                        {knowntec.map((tec,index) => (
                           <Skill key={index} data={tec}/>
                            
                        ))}
                    </div>

                    <h2 className="text-2xl mt-20">Conocimientos intermedios/basicos</h2>
                    <div className="flex flex-wrap gap-3 mt-4">
                        {usedtec.map((tec,index) => (
                            <Skill key={index} data={tec}/>
                            
                        ))}
                    </div>

                    <h2 className="text-2xl mt-20">Tecnologias en aprendizaje</h2>
                    <div className="flex flex-wrap gap-3 mt-4">
                        {learningtec.map((tec,index) => (
                            <Skill key={index} data={tec}/>
                            
                        ))}
                    </div>
                    <p className="font-light mt-3 italic">Este portfolio fue desarrollado utilizando estas tecnologías.</p>
                </div>
                <AvatarPortfolio/>
            </ContainerPage>
            
        </>
     );
}
 
export default SkillsPage;