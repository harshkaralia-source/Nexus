import { motion } from 'framer-motion'

const Marquee = () => {
    return (
        <div  className='bg-[#004D43] text-[#f1f1f1] py-20 mt-20 overflow-hidden font-roboto-condensed'>
            <motion.div className="marquee flex whitespace-nowrap border-y border-[#8f8f8fcf] leading-[190px] md:leading-[270px]">
                <motion.h1 initial={{x: '0%'}} animate={{x: '-100%'}} transition={{duration: 10, repeat: Infinity, repeatType: 'loop', ease: 'linear'}} className="font-[900] uppercase text-[230px] md:text-[340px] tracking-tight pr-10">we are nexus</motion.h1>
                <motion.h1 initial={{x: '0%'}} animate={{x: '-100%'}} transition={{duration: 10, repeat: Infinity, repeatType: 'loop', ease: 'linear'}} className="font-[900] uppercase text-[230px] md:text-[340px] tracking-tight pr-10">we are nexus</motion.h1>
                <motion.h1 initial={{x: '0%'}} animate={{x: '-100%'}} transition={{duration: 10, repeat: Infinity, repeatType: 'loop', ease: 'linear'}} className="font-[900] uppercase text-[230px] md:text-[340px] tracking-tight pr-10">we are nexus</motion.h1>

            </motion.div>
        </div>
    )
}

export default Marquee
