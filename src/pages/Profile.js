import {useParams} from "react-router-dom";

const data = {
    user1: {
        name: "name1",
        description: "desc1",
    },
    user2: {
        name: "name2",
        description: "desc2",
    },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return(
      <div>
          <h1>사용자 프로필</h1>
          {profile ? (
              <div>
                  <h2>{profile.name}</h2>
                  <p>{profile.description}</p>
              </div>
          ) : (
              <p>존재하지 않는 프로필</p>
          )}
      </div>
  );
};

export default Profile;