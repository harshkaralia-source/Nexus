
const Cards = () => {
    return (
        <div className='py-10 px-4 md:px-20 flex flex-wrap lg:flex-nowrap gap-4 justify-center items-center bg-[#F1F1F1]'>

            <div
                className="w-full col-span-1 bg-[#004D43] flex items-center justify-center h-96 rounded-xl relative">
                <svg width={65} height={65} id="logo-72" viewBox="0 0 53 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z"
                        fill='#CDEA68' className=''>Eyes
                    </path>
                </svg>

                <button className="border border-[#CDEA68] text-[#CDEA68] px-3 py-2 rounded-full absolute bottom-5 left-5 text-sm">&copy; 2025-2030</button>
            </div>

            <div className="w-full flex flex-col gap-4 sm:flex-row">
                <div
                    className="w-full col-span-1 bg-[#212121] flex items-center justify-center h-96 rounded-xl relative">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className='w-[140px]' alt="" />

                    <button className="border text-white px-3 py-2 rounded-full absolute bottom-5 left-5 uppercase text-sm">rating 5.0 on clutch</button>
                </div>

                <div
                    className="w-full col-span-1 bg-[#212121] flex items-center justify-center h-96 rounded-xl relative">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='w-[140px]' alt="" />

                    <button className="border text-white px-3 py-2 rounded-full absolute bottom-5 left-5 uppercase text-sm">businnes bootcamp alumni</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
