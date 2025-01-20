import React,{useContext} from 'react'
import UserContext from  '../context/UserContext'
function profile(){
    const{user}=useContext(UserContext)
    if(!user)return <div>please login</div>
    return <div>
        <h1>Welcome {user.username}</h1>
        </div>
}

export default profile