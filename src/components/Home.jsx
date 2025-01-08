import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const Home = () => {
    return (
        <div className=' mt-8'>
            <div className="px-4 md:px-20 ">
                {['we create', 'eye-opening', 'presentations'].map((item, index) => (
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: .5, duration: .5 }}
                        className="flex flex-wrap items-end " key={index}>
                        <h1 className="font-roboto-condensed leading-[48px] font-[900] tracking-tighter text-5xl sm:text-7xl md:text-8xl uppercase">{item}</h1>
                    </motion.div>
                ))}
            </div>

            <div className="border-t border-gray-400 mt-44 block md:flex justify-between px-4 pt-2 md:px-20">
                {['For public and private companies', 'From the first pitch to IPO'].map((item, index) => (
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: .5 }}
                        className="py-2 md:text-lg" key={index}>{item}</motion.div>
                ))}

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: .5 }}
                    className="py-2 flex gap-1">
                    <button className="uppercase border-zinc-600 border rounded-full px-5 py-2">start your journey</button>
                    <div className="h-10 w-10 border-zinc-600 border rounded-full flex items-center justify-center">
                        <GoArrowUpRight className="w-7 h-7" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Home
