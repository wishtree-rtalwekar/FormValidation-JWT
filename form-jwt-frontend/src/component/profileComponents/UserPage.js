import React, { useEffect, useState } from 'react'
import UserService from "../../services/user.service"

const UserPage = () => {
    const [content, setContent] = useState("");
    useEffect(()=>{
      UserService.getUserBoard().then((res)=> {
        setContent(res.data)
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      })
    },[])
  return (
    <div className='page'>
        <h1>User Page</h1>
        <h3>{content}</h3>
    </div>
  )
}

export default UserPage