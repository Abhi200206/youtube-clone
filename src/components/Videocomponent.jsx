import { useNavigate } from "react-router-dom"

export default function Videocomponent(props) {
    let navigate=useNavigate();
    return (
        <div>
            <img onClick={()=>navigate('/video')} className="rounded-xl cursor-pointer" src={props.item.image} alt="error" />
            <div className="flex gap-2">
                <div>
                <img className="w-[50px] rounded-full cursor-pointer" src={props.item.profileimg} alt="no img" />
                </div>

                <div >
                    
                    <p className="font-bold text-[18px] ">{props.item.title} </p>
                    <p className="text-[12px] text-slate-800 ">{props.item.name} </p>
                    <div className="flex gap-2"> 
                        <div><p className="text-[12px] text-slate-800 ">{props.item.views} </p> </div>
                        <div><p className="text-[12px] text-slate-800 ">{props.item.date} </p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}