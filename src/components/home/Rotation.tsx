
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const words = ["Developer", "Graphics Designer", "Cool dev", "Passionate for them codes"];

export default function Rotation() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => ((prevIndex + 1) % words.length))
        }, 3000);
        return () => clearInterval(interval)
    }
        , []);

    return (
        <div className="text-sm py-3">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{opacity:0, y: 7}}
                    animate={{opacity:1, y: 0}}
                    exit={{opacity:0, y: 7}}
                    transition={{duration: 0.5, ease:"easeInOut"
                    }}
                    >
                        {words[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}