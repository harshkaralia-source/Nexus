
const Footer = () => {
  return (
    <div className='py-10 bg-[#e4e4e4] px-4 md:px-20'>
      <div className="max-w-7xl pb-10 md:flex gap-8 md:gap-20">
        <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li>Platform</li>
            <li>Design</li>
            <li>Edit mode</li>
            <li>Interactions</li>
            <li>Page building</li>
            <li>CMS</li>
            <li>Hosting</li>
            <li>Localization</li>
            <li>Security</li>
            <li>Ecommerce</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mt-7 md:mt-0 mb-4">Community</h3>
          <ul className="space-y-2">
            <li>Discover the community</li>
            <li>Partner with us</li>
            <li>Certified Partners</li>
            <li>Become a template designer</li>
            <li>Become an affiliate</li>
            <li>Find a meetup near you</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <p className="">Made by <a href="https://instagram.com/_harshkaralia" className='text-slate-700 font-medium'>Harsh Karalia</a></p>
      </div>
    </div>
  )
}

export default Footer
