import {motion} from "framer-motion";

function Box4() {

    return (
        <div className="pb-[10rem]">
            <motion.div
                className="w-[10rem] h-[10rem] bg-amber-500 flex flex-col items-center justify-center"
                animate={{
                    scale: [1, 1.4, 1.4, 1, 1],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    rotate: [0,0, 270, -270, 0]
                }}
                transition={{
                    duration: 4
                }}
            >

            </motion.div>
        </div>
    );
}

export default Box4;