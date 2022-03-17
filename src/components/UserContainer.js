import UserCard from "./UserCard";
import { useState, useEffect } from "react";
import "./stylesheets/usercontainer.css";

const UserContainer = ({ users, query }) => {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    const items = document.querySelectorAll(".user-card");
    setFlag(false);
    items.forEach((item) => {
      if (item.innerText.toLowerCase().includes(query.toLowerCase())) {
        item.style.display = "block";
        setFlag(true);
      } else item.style.display = "none";
    });
  }, [query]);
  return (
    <>
      {flag ? "" : <div className="center">No Data Found</div>}
      <div className="users-container">
        {users.map((user) => (
          <UserCard user={user} key={user.login.uuid} />
        ))}
      </div>
    </>
  );
};

export default UserContainer;
