import Daumpostcode from 'react-daum-postcode'


const Post = (props:any)=>{
    const postcodeCodeStyle={
      display:'block',
      position:'absolute' as 'absolute',
      top:'50%',
      left:'50%',
      transform:'translate(-50%, -50%)',
      width:"600px",
      height:"600px",
      padding:"7px",
      border: "2px solid #666"
    }

    const complate = (data:any)=>{
      let fullAddress = data.address;
      let extraAddress = '';

      if(data.addressType === 'R'){
        if(data.bname !== ''){
          extraAddress += data.bname;
        }

        if(data.buildingName !== ''){
          extraAddress += (extraAddress !== ''?`, ${data.buildingName}`:data.buildingName);
        }
        fullAddress += (extraAddress !== ''?`(${extraAddress})`:'');
      }
      props.setcompany({
        ...props.company,
        address:fullAddress
      })
    }

    const btnClose = ()=>{
      props.onClose(false);
    }

    return (
      <div style={postcodeCodeStyle}>
        <Daumpostcode
            onClose ={btnClose}
            onComplete={complate}/>
          <button onClick={btnClose}>닫기</button>
      </div>
    )
  }

  export default Post;