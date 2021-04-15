import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'

const ContactsList = (props)=>{
      const isToken  = useSelector(state=>state.token )

      useEffect(() => {
        props.setTokenInState(isToken)
      }, []);
    return(
        <>
        </>
    )
}
export default ContactsList