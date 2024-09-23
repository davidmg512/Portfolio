import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import Avatar from "@/components/avatar";
import TimeLine from "@/components/time-line";

const PageAboutMe = () => {
    return ( 
        <>
            <TransitionPage/>
            <ContainerPage>
                <Avatar></Avatar>
                <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10 md:mb-0">Mi
                    <span className="font-bold text-secondary"> trayectoria</span>
                </h1>
                
                <TimeLine></TimeLine>
            </ContainerPage>
        </>
     );
}
 
export default PageAboutMe;