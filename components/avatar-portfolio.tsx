

import Image from "next/image";
import MotionTransition from "./transition-component";

const AvatarPortfolio = () => {
    return ( 
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/estudiando.png" width={300} height={300} className="w-full h-full mb-8" alt="Avatar portfolio"/>
        </MotionTransition>
     );
}
 
export default AvatarPortfolio;