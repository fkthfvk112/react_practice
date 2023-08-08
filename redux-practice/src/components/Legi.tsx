import {useDispatch} from 'react-redux';
import {setNameEmail} from '../modules/legi'
import {useState} from 'react'

export default function Legi(){
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    let handleChangeName = (evt:any)=>{
        setName(evt.target.value);      
    }
    
    let handleChangeEmail = (evt:any)=>{
        setEmail(evt.target.value);      
    }

    const dispatch = useDispatch();

    let handleLegi =()=> dispatch(setNameEmail(name, email));

    return(
        <div>
            <input onChange={handleChangeName} type="text" placeholder="이름" />
            <br />
            <input onChange={handleChangeEmail} type="text" placeholder="이메일" />
            <br />
            <button onClick={handleLegi} >등록</button>
        </div>
    )
}