import {useSelector, } from 'react-redux';
import {user} from '../modules/legi'

export default function ShwoUser(){

    let userInfos:user[] = useSelector((state:any)=>{
        return state.legi;
    });

    let comp = userInfos&&userInfos.map((ele, inx)=>{
        return (
            <div key={inx} style={{margin:'1em', backgroundColor:'#e1e1e1'}}>
                이름 : {ele.name}
                <br />
                이메일 : {ele.email}
            </div>
        )
    })

    return(
        <>
        <h1>쇼페이지</h1>
        {comp}
        </>
    )
}