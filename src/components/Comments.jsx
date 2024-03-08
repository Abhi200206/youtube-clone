export default function Comments({comment,name})
{
    return(
        <div className="pl-4 my-4">
            <div>
            <p className="font-bold text-[15px] ">@{name}</p>
            <p className="">{ comment}</p>
            </div>
        </div>
    )
}