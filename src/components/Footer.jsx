import { Link } from 'react-router-dom'
import amazon_logo from '../assets/images/amazon.png'
const Footer = () => {
  return (
    <footer className="pt-10  h-fit">
        <div className="h-32 mb-6 border-t border-b flex justify-center items-center">
            <div className="w-[250px] text-center">
                <span className="text-sm">See personalized recommendations</span>
                <button className="btn">Sign in</button>
                <span className="text-xs">New customer? <span className="text-blue-700 cursor-pointer hover:text-orange-700">Start here.</span></span>
            </div>
        </div>
        <div>
            <a href="#nav-bar">
                <div className="bg-slate-700 hover:bg-slate-600 p-4 text-center text-white text-sm font-semibold">
                    Back to top
                </div>
            </a>
            <div className="bg-[#232F3E] text-white">
                <div className="flex justify-center gap-32 pt-10 pb-12">
                    <ul className="space-y-2">
                        <li>
                            <h2 className="font-bold mb-3">Get to Know Us</h2>
                        </li>
                        <li className="text-sm cursor-pointer hover:underline">About Us</li>
                        <li className="text-sm cursor-pointer hover:underline">Careers</li>
                        <li className="text-sm cursor-pointer hover:underline">Press Releases</li>
                        <li className="text-sm cursor-pointer hover:underline">Amazon Science</li>
                    </ul>
                    <ul className="space-y-2">
                        <li>
                            <h2 className="font-bold mb-3">Connect with Us</h2>
                        </li>
                        <li className="text-sm cursor-pointer hover:underline">Facebook</li>
                        <li className="text-sm cursor-pointer hover:underline">Twitter</li>
                        <li className="text-sm cursor-pointer hover:underline">Instagram</li>
                    </ul>
                    <ul className="space-y-2">
                        <li>
                            <h2 className="font-bold mb-3">Make Money with Us</h2>
                        </li>
                        <li className="text-sm cursor-pointer hover:underline">Sell on Amazon</li>
                        <li className="text-sm cursor-pointer hover:underline">Sell under Amazon Accelerator</li>
                        <li className="text-sm cursor-pointer hover:underline">Protect and Build Your Brand</li>
                        <li className="text-sm cursor-pointer hover:underline">Amazon Global Selling</li>
                        <li className="text-sm cursor-pointer hover:underline">Supply to Amazon</li>
                        <li className="text-sm cursor-pointer hover:underline">Become an Affiliate</li>
                        <li className="text-sm cursor-pointer hover:underline">Fulfilment by Amazon</li>
                        <li className="text-sm cursor-pointer hover:underline">Advertise Your Products</li>
                        <li className="text-sm cursor-pointer hover:underline">Amazon Pay on Merchants</li>
                    </ul>
                    <ul className="space-y-2">
                        <li>
                            <h2 className="font-bold mb-3">Let Us Help You</h2>
                        </li>
                        <li className="text-sm cursor-pointer hover:underline">Your Account</li>
                        <li className="text-sm cursor-pointer hover:underline">Returns Centre</li>
                        <li className="text-sm cursor-pointer hover:underline">Recalls and Product Safety Alerts</li>
                        <li className="text-sm cursor-pointer hover:underline">100% Purchase Protection</li>
                        <li className="text-sm cursor-pointer hover:underline">Amazon App Download</li>
                        <li className="text-sm cursor-pointer hover:underline">Help</li>
                    </ul>
                </div>
                <div className=" pt-7 pb-10 border-t border-gray-700 flex gap-28 justify-center items-center">
                    <Link to={"/"}>
                        <img className='w-20 mt-2' src={amazon_logo} alt="amazon_logo" />
                    </Link>
                    <div className='flex gap-2 text-sm text-gray-300'>
                        <div className='w-fit rounded py-1.5 px-8 border border-gray-400 cursor-pointer'>English</div>
                        <div className='w-fit rounded py-1.5 px-5 border border-gray-400 cursor-pointer'>India</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#131A22]">
                <div className="grid grid-rows-2 grid-cols-4 py-8 text-gray-300 text-xs gap-y-3 max-w-[900px] mx-auto">
                    <div className='cursor-pointer hover:underline'>AbeBooks<br />Books, art<br />& collectibles</div>
                    <div className='cursor-pointer hover:underline'>Amazon Web Services<br />Scalable Cloud<br />Computing Services</div>
                    <div className='cursor-pointer hover:underline'>Audible<br />Download<br />Audio Books</div>
                    <div className='cursor-pointer hover:underline'>IMDb<br />Movies, TV<br />& Celebrities</div>
                    <div className='cursor-pointer hover:underline'>Shopbop<br />Designer<br />Fashion Brands</div>
                    <div className='cursor-pointer hover:underline'>Amazon Business<br />Everything For<br />Your Business</div>
                    <div className='cursor-pointer hover:underline'>Prime Now<br />2-Hour Delivery<br />on Everyday Items</div>
                    <div className='cursor-pointer hover:underline'>Amazon Prime Music<br />100 million songs, ad-free<br />Over 15 million podcast episodes</div>
                </div>
                <div className='text-gray-300 text-xs text-center pb-8'>
                    <span className='cursor-pointer hover:underline'>Conditions of Use & Sale</span>
                    &nbsp; &nbsp;
                    <span className='cursor-pointer hover:underline'>Privacy Notice</span>
                    &nbsp; &nbsp;
                    <span className='cursor-pointer hover:underline'>Interest-Based Ads</span>
                    <br />
                    <span>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer