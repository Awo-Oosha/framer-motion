import { motion, useAnimation } from "framer-motion";

function Box5() {

    const control = useAnimation()
    return (
        <div className="pb-[10rem]">
            <button onClick={() => {
                control.start({
                    x: 1150,
                    transition: {
                        duration: 2
                    }
                })
            }}>Right</button>
            <button
                onClick={() => {
                    control.start({
                        x: 0,
                        transition: {
                            duration: 2
                        }
                    })
                }}>Left</button>
            <button
                onClick={() => {
                    control.start({
                        borderRadius: "50%",
                        transition: {
                            duration: 2
                        }
                    })
                }}>Circle</button>
            <button
                onClick={() => {
                    control.start({
                        borderRadius: 0,
                        transition: {
                            duration: 2
                        }
                    })
                }}>Square</button>
            <button
                onClick={() => {
                    control.stop()
                }}>Stop</button>


            <motion.div
                className="w-[10rem] h-[10rem] bg-amber-500 flex flex-col items-center justify-center"
                animate = {control}
               >

            </motion.div>
        </div>
    );
}

export default Box5;