import React, {Fragment} from "react";
import { PropTypes } from "prop-types";

const RepoList = ({
  // Define All Props
  avatar,
  owner,
  ownerProfile,
  name,
  forks,
  language,
  description,
  stars,
  url,
  createdAt
}) => {
  return (
    <Fragment>
      <div className="repo-avatar">
        <img className="repo-avatar-item" src={avatar} alt="avatar" />
      </div>
      <div className="repo-information">
        <h2 className="repo-name">
          <a className="repo-link" href={url} target="_blank" rel="noreferrer noopener">
            {name}
          </a>
        </h2>
        <p className="repo-description">{description}</p>
        <div>
          <div className="repo-stars">
            <span>Stars: {stars}</span>
          </div>
          <div className="repo-forks">
            <span>Forks: {forks}</span>
          </div>
          <div className="repo-lang">
            <span>Language: {language}</span>
          </div>
          <div className="repo-submitted">
            {`Submitted : ${createdAt.split("T")[0]} by `}
            <a className="repo-ownerProfile" rel="noopener noreferrer" href={ownerProfile} target="_blank">{owner}</a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// Type checking for all props via propTypes.
RepoList.propTypes = {
  avatar: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  ownerProfile: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  forks: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  language: PropTypes.string,
};

export default RepoList;
