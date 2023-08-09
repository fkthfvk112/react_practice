import {useNavigate} from 'react-router-dom';

export default function User(){
    const navi = useNavigate();

    function homeMove(){
        navi('/');
    }

    return(
        <div>
            <h3>User</h3>
            <button onClick={homeMove}>홈버튼</button>
        </div>
    )
}