import {video} from '../video'
import Videocomponent from './Videocomponent'
export default function Rendervideo(props)
{
    return (
        <div className={props.styl?props.styl:'grid grid-cols-1 gap-2 mx-2 md:grid-cols-2 lg:grid-cols-4'}>
            {video.map((v)=>{
                return (                   
                        <Videocomponent styl={props.styl} item={v} />                                      
                )
            })}
        </div>
    )
}