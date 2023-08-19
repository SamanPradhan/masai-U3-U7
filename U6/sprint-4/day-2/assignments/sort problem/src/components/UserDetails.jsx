import React from "react";
import styles from "./userDetails.module.css";

const UserDetails = (props) => {
  const {
    avatar,
    first_name,
    last_name,
    address,
    karma,
    followers,
    posts,
    isFollowing,
  } = props.user;

  return (
    <>
      <div className={styles.userContainer} data-testid="user-container">
        {/* user image */}
        <div>
          <img src={avatar} alt="User Avatar" />
        </div>
        <div>
          <div>
            <h3 data-testid="user-fname">{first_name}</h3>
            <h3 data-testid="user-lname">{last_name}</h3>
          </div>
          <div>
            <p data-testid="user-address">
              Address: {address.street}, {address.city}, {address.state}{" "}
              {address.zip}
            </p>
          </div>
        </div>
        <div>
          <h3 data-testid="user-karma">Karma (Points): {karma}</h3>
        </div>
        <div>
          <h3 data-testid="user-followers">Followers: {followers}</h3>
        </div>
        <div>
          <h3 data-testid="user-posts">Posts: {posts}</h3>
        </div>
        <button data-testid="follow-btn">
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
      </div>
    </>
  );
};

export default UserDetails;
