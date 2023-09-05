import profile from '../data/profile';

const Profile = () =>{
    const {profileImg, name, profession} = profile;
    return <div className="profile-container">
        <img src={profileImg} alt="Ibrahim Ansari" className="myimg" />
        <div className="myname">
            <span>{name}</span>
            <span>{profession}</span>
        </div>
    </div>
}

export default Profile;