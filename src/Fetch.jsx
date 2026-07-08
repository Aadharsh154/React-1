import { useState,useEffect } from "react";
import './index.css'


function Profile(){

  let [user, getUser] = useState([])

   function Users(username){
  
      
       let resp =  fetch(`https://api.github.com/users/${username}`)
    .then(resp => resp.json())

    .then(user =>{

      let Name = user.type;
      if(Name == "User"){
        getUser(user)
      }
      else{
        alert("Pease Enter a valid Username")
      }
    
    })
    .catch((resp)=>{
      alert("Not found")
    })
   
  }
     

   
 

  return(
    
    <>
    <form onSubmit={(e)=>{

    e.preventDefault();
    let username = (e.target[0].value)
    
    Users(username);

    }}>

      <small> Find Git profile Which u want..</small> <br /><br />
      <input type="text" placeholder="Search user" />
    </form>
     <div className="card">
      
        
      <div className="frame"><img src={user.avatar_url} alt="img"/></div>
      <div className="gitprofile"><h2>Userename: {user.login}</h2></div>
      <div className="follow">
        <button className="followers"><a href={`https://github.com/${user.login}?tab=following`} target="_blank">  Followers: {user.followers}</a></button>
      <button className="following"><a href={`https://github.com/${user.login}?tab=following`} target="_blank">  Following: {user.following}</a>  </button>
      </div>

      <div className="bi"> <p id="bio">Bio:</p> <p>{user.bio}</p></div>
     
      <div className="info">
  
        <pre>Repositories: {user.public_repos}</pre>
        <div id="gitprof"><p> <pre id="url">Git Url:</pre></p> <p> {user.url}</p></div>
        <pre>Go to Repo:  <a href={`https://github.com/${user.login}?tab=repositories`} target="_blank"> Check Repositories</a></pre> 
        
      
      </div>

    </div>
    </>
  )

}

export default Profile