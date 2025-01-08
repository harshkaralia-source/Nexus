

const About = () => {
    return (
        <div className='bg-[#CDEA68] py-10'>
            <h2 className="font-medium text-xl md:text-5xl md:leading-[60px] tracking-wide pb-20 px-4 md:px-20">Nexus is a strategic presentation agency for forward-thinking businesses that need to <u>raise funds</u>, <u>sell prod­ucts</u>, <u>ex­plain com­plex ideas</u>, and <u>hire great peo­ple</u>.</h2>

            <div className="border-t border-zinc-600 px-4 md:px-20 py-5
            md:flex">
                <div className="w-full md:w-1/2">
                    <h2 className='font-medium text-2xl md:text-5xl pb-4'>Our Approach:</h2>
                    <button className="uppercase px-5 py-3 md:px-6 md:py-4 bg-zinc-900 text-white rounded-full flex items-center gap-2 cursor-pointer">
                        Read More
                        <div className="h-3 w-3 rounded-full bg-white"></div>
                    </button>
                </div>

                <div className="w-full md:w-1/2 flex items-center pt-10 md:pt-0">
                    <img src="https://images.pexels.com/photos/6234991/pexels-photo-6234991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='rounded-xl filter brightness-200' alt="" />
                </div>
            </div>
        </div>
    )
}

export default About