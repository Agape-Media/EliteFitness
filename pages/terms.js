import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Terms () {


  return (
    <>
    <Header />
    <div className="relative pt-12 pb-32 px-6 sm:px-24 2xl:px-96 2xl:mx-32 content-center items-center justify-center bg-white text-black">

    <h2 className="text-2xl font-semibold mb-12">Elite Fitness, LLC Membership Terms And Conditions As Of 1 June 2017</h2>

<div className="mb-4 text-gray-700 text-lg tracking-wide">
  <p>
  <span className="text-red-600 font-semibold">Update 7/1/2020:</span> Governor Abbott issues <a className="text-gray-800 underline">executive order</a> requiring all Texans to wear face coverings in public spaces. 
  <span className="font-bold text-gray-800"> Please bring a mask with you and wear it inside the facility.</span> Guests are not required to wear masks while exercising outdoors on our 45 yards of turf.
  </p>
</div>

<div className="mb-4 text-gray-700 text-lg tracking-wide">
  <p>
  <span className="text-red-600 font-semibold">Update 6/4/2020:</span> Governor approves increase to 50% capacity, membership dues will resume Friday, June 5th. 
  June 4th is the last day session reservations will be required.
  </p>
</div>

<div className="mb-4 pt-12 pb-8 px-10 text-gray-700 text-lg tracking-wide">
  <p>
  Here are some details about how we plan to operate under the current circumstances caused by COVID-19. 
  </p>
</div>

<div className="mb-16 tracking-wide">
  <p className="text-yellow-600 font-semibold mb-6">THE FOLLOWING WAIVERS ARE REQUIRED FOR ALL NEW GUESTS:</p>
  <div className="flex items-center justify-center space-x-20 text-lg underline font-semibold">
  <a>Health Decleration</a>
  <a>Liability Waiver</a>
  </div>
</div>

<div className="p-1 mb-6 bg-black text-white text-xl tracking-wide capitalize">
  <p>What to expect when you're here </p>
</div>

<div className="text-gray-700 text-lg tracking-wide">
  <p className="font-semibold text-lg text-gray-800 mb-4">Sanitizing and Cleaning Protocols</p>
  <p className="mb-4">EPA registered disinfecting wipes and hand sanitizer will be stationed throughout the gym.</p>
  <ul className="pl-8 mb-4 list-disc">
    <li>Please sanitize upon entering the facility.</li>
    <li>We ask that you sanitize each piece of equipment before and after use.</li>
  </ul>
</div>

<div className="text-gray-700 mb-4 text-lg tracking-wide">
  <p className="font-semibold text-lg text-gray-800 mb-4">Services and Amenities</p>  
  <ul className="pl-8 mb-4 list-disc">
    <li><span className="font-semibold text-gray-800">Shared equipment</span> (i.e. mats, Hyperice products, sports balls) will not be offered.
If you have a <span className="font-semibold text-gray-800">mat</span> at home, you may bring it with you.</li>
    <li>The <span className="font-semibold text-gray-800">water fountain</span> will not be available.</li>
    <li><span className="font-semibold text-gray-800">Foam rollers</span> can be checked out from the front desk and will be thoroughly sanitized after use.</li>
    <li>The <span className="font-semibold text-gray-800">retail store</span> will be open. We ask that you please sanitize your hands prior to shopping.</li>
  </ul>
  <p className="pl-8">Trying on clothes will not be permitted at this time.<br />
Credit cards will be the only method of payment.</p>
</div>

<div className="text-gray-700 mb-12 text-lg tracking-wide">
  <p className="font-semibold text-lg text-gray-800 mb-4">Safety and Distancing</p>  
  <p className="mb-4">Our team members will be wearing masks and gloves at all times. Guests are encouraged wear a face mask when not exercising. Gloves are recommended, but not required.</p>
  <p>Please maintain a safe distance from other guests during your workout. The CDC recommends 6 ft distancing decreases the opportunity of spreading the virus.</p>
</div>

<div className="p-1 mb-6 bg-black text-white text-xl tracking-wide capitalize">
  <p>OTHER QUESTION(S)</p>
</div>

<div className="text-gray-700 mb-16 text-lg tracking-wide">
  <p className="font-semibold text-lg text-gray-800 mb-4">When will the gym allow full occupancy again?</p>  
  <p className="mb-4">We are currently at 50% occupancy and are keeping up with the federal, state, and local news daily to stay current on all developments with the government’s health and safety protocols during the reopening phases. We will be sure to keep you informed when the next phase is greenlit.</p>
</div>

<div className="text-gray-700 text-lg tracking-wide">
  <p className="font-semibold text-lg text-gray-800 mb-4">Helpful Information</p>  
  <p className="mb-2"><a className="mb-4 underline cursor-pointer hover:text-gray-500">How Covid Spreads</a></p>
  <p className="mb-2"><a className="mb-4 underline cursor-pointer hover:text-gray-500">Minimum Health Standards Checklist for Gyms</a></p>
  <p className="mb-2"><a className="mb-4 underline cursor-pointer hover:text-gray-500">Minimum Health Standards Checklist for Gym Patrons</a></p>  
</div>
    </div>
      
      <Footer />
    </>
  )
}