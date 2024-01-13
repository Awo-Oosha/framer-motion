import {motion} from "framer-motion";

function Box2() {
    return (
        <div className="pb-[10rem]">
            <motion.div
                className="w-[10rem] h-[10rem] bg-amber-500 flex flex-col items-center justify-center"
                drag="x"
                dragConstraints={{
                    right: 20,
                    left: 0,
                    top: 20,
                    bottom: 0
                }}
                whileHover={{
                    scale: 1.1,
                }}
                whileTap={{
                    scale: 0.9
                }}
            >

            </motion.div>
        </div>
    );
}

export default Box2;