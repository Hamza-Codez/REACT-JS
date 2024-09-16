//Conditional Rendering
import React from 'react'
import PropTypes from 'prop-types';


const User = (props) => {


  const style1 = 'border-[1px] border-blue-600 min-w-fit px-3 py-1 rounded-md bg-blue-600 bg-opacity-70';
  const style2 = 'border-[1px] border-red-600 min-w-fit px-3 py-1 rounded-md bg-red-600 bg-opacity-70';

  const welcome = <h1 className={style1}>You're Welcome Mr. {props.userName} </h1>;
  const LoginMesge = <h1 className={style2}>Mr. {props.userName} Please Login To proceed Further</h1>;
  return (
    props.isLoggedin ? welcome : LoginMesge
  )
    // props.isLoggedin ? <h1 className={style1}>You're Welcome Mr. {props.userName} </h1> : 
    // <h1 className={style2}>Mr. {props.userName} Please Login To proceed Further</h1>


    // if(props.isLoggedin){
      //   return <h1>You're Welcome Sir</h1>
    // } else{
    //     return <h1>Please Login in to Proceed</h1>
    // }
    
  }
  User.PropTypes = {
    isLoggedin: PropTypes.bool,
    userName: PropTypes.string,
  }
  User.defaltprops = {
    isLoggedin: false,
    userName: 'Guest'
  }
export default User