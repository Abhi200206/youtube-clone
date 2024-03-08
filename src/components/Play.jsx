import Description from "./Description";
import Rendervideo from "./Rendervideo";
import Videocomponent from "./Videocomponent";
import Appbar from "./Appbar";
import Comment from './Comments';

export default function Play() {
    return (
        <div>
            <Appbar />
            <div className="grid md:grid-cols-12 md:gap-2">
                <div className="md:col-span-9"><Videocomponent item={{
                    image: "image.jpg",
                    name: "Rahul yadav",
                    title: "How to learn coding by Rahul",
                    profileimg: "profile.png",
                    views: "30M",
                    date: "2 days ago"
                }} /> 
                <Description/>
                <div>
                    <p className="pl-2 font-black py-2 text-[20px] ">Comments</p>
                    <Comment name={"ramu1655"} comment={"hello very good video and explanation"} />
                    <Comment name={"rajesh4566"} comment={"super video keep it up."} />
                    <Comment name={"venu_king"} comment={"too good."} />
                    <Comment name={"ushekar-kodangal"} comment={"super undi video"} />
                    <Comment name={"balu"} comment={"manchi explanation"} />
                    <Comment name={"aggipetta_macha"} comment={"good one macha"} />
                </div>
                </div>
                <div className="md:col-span-3">
                    <Rendervideo styl={true} />
                </div>
            </div>
        </div>
    )
}