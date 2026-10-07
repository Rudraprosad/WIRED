import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import styles from "../styles/VideoComponent.module.css"
import { Button, IconButton, TextField } from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext'

 function HomeComponent() {

  let navigate = useNavigate()
const [meetingCode, setMeetingCode] = useState("");
const {addToUserHistory} = useContext(AuthContext);
let handleJoinVideoCall = async () => {
  await addToUserHistory(meetingCode)
 navigate(`/${meetingCode}`)
}

  return (
   <>
   <div className={styles.navBar}>
   
<div style={{display: "flex", alignItems: "center"}}>

  <h3> my video call</h3>
</div>
<div style={{display: "flex", alignItems: "center", }}>
  <IconButton onClick={ () => {
    navigate("/history")
  }}>
    <RestoreIcon/>
  </IconButton>
  <p>History</p>
  <Button onClick={() => {
    localStorage.removeItem("token")
    navigate("/auth")
  }}>
    Logout
  </Button>
</div>
   </div>
   <div className={styles.meetContainer}>
<div className={styles.leftPanel}>
  <div>
    <h2>providing quality videocall</h2>
    <div style={{dispaly:'flex', gap:'20px'}}>
      <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="meet-code" varient="outlined" />
        <Button onClick={handleJoinVideoCall} varient='contained'>Join</Button>
    </div>
  </div>
</div>
<div className={styles.rigthtPanel}>
  <img srcSet='/logo.jpg' alt=''></img>
</div>
   </div>
   </>
  )
}

//we will not export this home component directly we are going to write a util function for it 
// home will not be accessed to everyone rigistered user can only be able to access it

export default withAuth(HomeComponent)