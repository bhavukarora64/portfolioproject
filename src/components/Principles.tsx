import {Crown, TabletSmartphoneIcon, Gamepad, Rocket, Stars} from 'lucide-react'

export default function Principles(){
    return(
        <>
            <div id='principles-section' className='col-span-12 text-5xl md:text-7xl font-bold flex justify-center my-24'>Principles</div>
            <div className="grid grid-cols-12 gap-4 mt-24 mx-24 group">
                <div className=' bg-blue-200 col-span-12 md:col-span-5 h-full md:h-96 w-full gap-4 md:gap-0 rounded-xl flex flex-col justify-between px-6 py-6 group-hover:scale-98 hover:!scale-102 transition-all duration-200 ease-in-out'>
                    <Crown className='size-16'/>
                    <h1 className='text-4xl font-light'>End-to-End Ownership</h1>
                    <p className='text-lg font-light'>I believe in taking full responsibility — from planning and designing to developing, deploying, and maintaining both frontend and backend systems.</p>
                </div>
                <div className=' bg-green-200 col-span-12 md:col-span-4 h-full md:h-96 w-full gap-4 md:gap-0 rounded-xl flex flex-col justify-between px-6 py-6 group-hover:scale-98 hover:!scale-102 transition-all duration-200 ease-in-out'>
                    <TabletSmartphoneIcon className='size-16'/>
                    <h1 className='text-4xl font-light'>Seamless Integration</h1>
                    <p className='text-lg font-light'>Building smooth communication between frontend and backend is essential. I ensure APIs are well-structured, secure, and scalable.</p>
                </div>
                <div className=' bg-orange-200 col-span-12 md:col-span-3 row-span-2 h-full w-full gap-4 md:gap-0 rounded-xl flex flex-col justify-between px-6 py-6 group-hover:scale-98 hover:!scale-102 transition-all duration-200 ease-in-out'>
                    <Gamepad className='size-16'/>
                    <h1 className='text-4xl font-light'>Beautiful UX</h1>
                    <p className='text-lg font-light'>Aesthetic designs that blend style with usability for a polished interface.</p>
                </div>
                <div className=' bg-yellow-200 col-span-12 md:col-span-4 h-full md:h-96 w-full gap-4 md:gap-0 rounded-xl flex flex-col justify-between px-6 py-6 group-hover:scale-98 hover:!scale-102 transition-all duration-200 ease-in-out'>
                    <Rocket className='size-16'/>
                    <h1 className='text-4xl font-light'>Maintainable & Scalable Code</h1>
                    <p className='text-lg font-light'>I follow clean code principles, use design patterns where appropriate, and structure projects to scale as the product grows.</p>
                </div>
                <div className=' bg-purple-200 col-span-12 md:col-span-5 h-full md:h-96 w-full gap-4 md:gap-0 rounded-xl flex flex-col justify-between px-6 py-6 group-hover:scale-98 hover:!scale-102 transition-all duration-200 ease-in-out'>
                    <Stars className='size-16'/>
                    <h1 className='text-4xl font-light'>Beautiful UI</h1>
                    <p className='text-lg font-light'>Optimized for speed and efficiency, delivering lightning-fast experiences.</p>
                </div>
            </div>
        </>
    )
}