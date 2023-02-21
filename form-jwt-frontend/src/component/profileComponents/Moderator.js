import React, { useEffect, useState } from 'react'
import UserService from '../../services/user.service';

const Moderator = () => {
    const [content, setContent] = useState("");
    useEffect(()=>{
      UserService.getModeratorBoard().then((res)=> {
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
            <h1>Moderator page</h1>
            <h3>{content}</h3>
        </div>
    )
}

export default Moderator