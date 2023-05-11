import React from "react";

export default function Cards (props) {
    let data = props.Data
    return (
        <div className="card-wraper">
        {data.map((userData, index) => (
        <div className="single-card" key={index}>
            <h4>#{index + 1}</h4>
            <figure>
                <img src={userData.owner.avatar_url} />
            </figure>
            <h2>{userData.name.toUpperCase()}</h2>
            <p className="user icon-text">
              <i className="fas fa-user"></i>
              {userData.owner.login}
            </p>
            <p className="star icon-text">
              <i className="fas fa-star"></i>
              {userData.stargazers_count} Stars
            </p>
            <p className="branch icon-text">
              <i className="fas fa-code-branch"></i>
              {userData.forks} Forks
            </p>
            <p className="issues icon-text">
            <i className="fa-solid fas fa-triangle-exclamation"></i>
              {userData.open_issues} Open Issues
            </p>
        </div>
    ))}
        </div>
    )

}

