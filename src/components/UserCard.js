const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-nat">{user.nat}</div>
      <div className="user-card-body">
        <img className="user-pic" src={user.picture.medium} alt="pic" />
        <div className="user-details">
          <div className="user-name">{`${user.name.title} ${user.name.first} ${user.name.last} | ${user.dob.age}`}</div>
          <div className="user-email">{user.email}</div>
          <div className="user-address">{`${user.location.street.number} ${user.location.street.name}, ${user.location.city},  ${user.location.state}, ${user.location.country}, ${user.location.postcode}`}</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
