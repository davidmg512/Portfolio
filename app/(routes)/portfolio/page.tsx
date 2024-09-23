import ContainerPage from "@/components/container";
import PortfolioBox from "@/components/portfolio-box";
import MotionTransition from "@/components/transition-component";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "@/data";

const Portfolio = () => {
    return ( 
        <ContainerPage>
            <TransitionPage/>
            <div className="flex flex-col justify-center h-full mb-32">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Mis ultimos
                    <span className="text-secondary font-bold"> trabajos realizados</span>
                </h1>

                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 w-full">
                    {dataPortfolio.map((data) => (
                        <MotionTransition key={data.id} position={data.id % 2 == 0 ? "right" : "left"}>
                            <PortfolioBox data={data}/>
                        </MotionTransition>
                        
                    ))}
                    
                </div>
            </div>
        </ContainerPage>
     );
}
 
export default Portfolio;