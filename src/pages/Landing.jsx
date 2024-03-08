import Appbar from '../components/Appbar'
import Rendervideo from '../components/Rendervideo';
export default function Landing() {
    return (
        <div>
            <Appbar />
            <div className='grid grid-cols-12 '>
                <div className=' hidden md:pt-[40px] md:block md:col-span-2  md:z-[1]'>
                <div className=' md:pt-[30px] md:pl-[30px] lg:pl-[40px] lg:pt-[40px] md:fixed md:bottom-0 md:left-0 md:top-[40px] md:h-screen'>
                    <p className='cursor-pointer my-16 font-bold text-[20px] text-center m-2'>Home</p>
                    <p className='cursor-pointer my-16 font-bold text-[20px] text-center m-2'>account</p>
                    <p className='cursor-pointer my-16 font-bold text-[20px] text-center m-2'>trending</p>
                    <p className='cursor-pointer my-16 font-bold text-[20px] text-center m-2'>music</p>
                </div>
                </div>
                <div className=' col-span-12 md:col-span-10  '>
                    <Rendervideo />
                </div>
            </div>
        </div>
    )
}