import {motion} from "framer-motion";
import {useState} from "react";

function Box1() {
    const [isAnimating, setIsAnimating] = useState(false)

    return (
        <div className="pb-[10rem]">
            <motion.div
                className="w-[10rem] h-[10rem] bg-amber-500 flex flex-col items-center justify-center"
                animate={{
                    x: isAnimating ? 1150 : 0,
                    opacity: isAnimating ? 1 : 0.5,
                    rotate: isAnimating ? 360 : 0
                }}
                initial={{
                    opacity: 0.2
                }}
                transition={{
                    type: "tween",
                    // stiffness: 60,
                    duration: 1,
                }}

                onClick={() => setIsAnimating(!isAnimating)}
            >

            </motion.div>
        </div>
    );
}

export default Box1;