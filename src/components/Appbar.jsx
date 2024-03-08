import Searchbar from "./Searchbar";

export default function Appbar()
{
    return (
        <div className="p-1 bg-white h-[60px] flex justify-between z-[10] sticky top-0">
            <div><img className="h-[40px] " src="youtube.png" alt="Youtube" /></div>
            <div><Searchbar/></div>
            <div className="border-[1px] border-blue-500 rounded-xl px-4 h-[30px] mt-2 cursor-pointer "><p className="text-blue-500">signin</p></div>
        </div>
    )
}