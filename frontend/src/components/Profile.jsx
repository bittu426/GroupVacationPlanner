import { useState } from 'react'


function Profile(props) {

  const [profileData, setProfileData] = useState(null)
 

  return (
    <div className="Profile">

        <p>To get your profile details: </p><button >Click me</button>
        <div>
              <p>Profile name:</p>
              <p>About me: </p>
            </div>
        

    </div>
  );
}

export default Profile;