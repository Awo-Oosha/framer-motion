import { motion } from "framer-motion";

function Box3() {
    const boxVariants = {
        hidden: {
            x: "-100vw",
        },
        visible: {
            x: 0,
            transition: {
                delay: 1,
                type: "spring",
                stiffness: 70,
                when: "beforeChildren",
            },
        },
    };

    const listVariants = {
        hidden: {
            x: -10,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            staggerChildren: 0.3,

            transition: {
                duration: 0.3
            }
        },
    };

    return (
        <div className="pb-[10rem]">
            <motion.div
                className="w-[10rem] h-[10rem] bg-amber-500 flex flex-col items-center justify-center"
                variants={boxVariants}
                animate="visible"
                initial="hidden"
            >
                <ul className="list-none">
                    {[1, 2, 3].map((item, index) => (
                        <motion.li
                            className="w-0.5 h-0.5 bg-white p-2 m-1.5"
                            key={index}
                            variants={listVariants}
                        ></motion.li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
}

export default Box3;
