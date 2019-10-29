import React, {Fragment} from "react";
import { PropTypes } from "prop-types";

const RepoList = ({
  avatar,
  owner,
  name,
  forks,
  language,
  description,
  issues,
  stars,
  url,
  createdAt
}) => {
  return (
    <Fragment>
      <div className="repo-avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="repo-information">
        <h2 className="repo-name">
          <a href={url} target="_blank" rel="noreferrer noopener">
            {name}
          </a>
        </h2>
        <p className="repo-description">{description}</p>
        <div>
          <div className="repo-stars">
            <span>Stars {stars}</span>
          </div>
          <div className="repo-issues">
            <span>Issues {issues}</span>
          </div>
          <div className="repo-submitted">
            {`Submitted ${createdAt.split("T")[0]} by ${owner}`}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// type checking for our props via propTypes.
RepoList.propTypes = {
  avatar: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  issues: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};

export default RepoList;
