import { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate, setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let mouseX = e.clientX
            let mouseY = e.clientY

            let deltaX = mouseX - window.innerWidth / 2
            let deltaY = mouseY - window.innerHeight / 2

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)

            setRotate(angle - 180)
        })
    })
    return (
        <div className='h-screen w-full overflow-hidden'>
            <div className="relative w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center">
                <div className="absolute flex items-center gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    
                    <div className="w-32 sm:w-40 lg:w-52 h-32 sm:h-40 lg:h-52 flex justify-center items-center bg-zinc-100 rounded-full">
                        <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-1/4">
                                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-32 sm:w-40 lg:w-52 h-32 sm:h-40 lg:h-52 flex justify-center items-center bg-zinc-100 rounded-full">
                        <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-1/4">
                                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
