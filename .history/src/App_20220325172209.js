import { useState } from "react";
import ProfileForm from "./components/ProfileForm";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [allProfiles, setAllProfiles] = useState([
    {
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      phone: "050-1234567",
    },
  ]);

  const updateProfiles = (profile) => {
    let arr = allProfiles;
    arr.push(profile);
    setAllProfiles([...arr]);
  };

  return (
    <div className="app">
      <h1> Profile Maker </h1>
      <div>
        <ProfileForm submit={updateProfiles} />
        <hr />
        <div className="list">
          {allProfiles.map((person, index) => (
            <ProfileCard key={index} card={person} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
