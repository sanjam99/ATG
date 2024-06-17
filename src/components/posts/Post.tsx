import React from 'react';
import PropTypes from 'prop-types';
import dots from "../../assets/dots.jpg";
import share from "../../assets/share.jpg";

interface Post1Props {
  mainImage: string;
  mainAlt: string;
  profileImage: string;
  profileAlt: string;
  articleType: string;
  articleTitle: string;
  authorName: string;
  views: string;
  content: string;
}

const Post: React.FC<Post1Props> = ({ 
  mainImage, 
  mainAlt, 
  profileImage, 
  profileAlt, 
  articleType, 
  articleTitle, 
  authorName, 
  views, 
  content 
}) => {
  return (
    <div className="d-flex flex-column border border-1 rounded-2" style={{ maxWidth: "692px", borderColor: "rgb(224, 224, 224)" }}>
      <img src={mainImage} alt={mainAlt} className="imagePost" />
      <div className="p-4">
        <h3 className="d-flex">{articleType}</h3>
        <div className="d-flex gap-6 justify-content-between">
          <h4>{articleTitle}</h4>
          <div className="btn align-self-start">
            <div className="dropdown">
              <div data-bs-toggle="dropdown" aria-expanded="false">
                <img src={dots} alt="more details" height="28px" width="28px" />
              </div>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" type="button">Edit</button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">Report</button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">option 3</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="d-flex align-items-center gap-5 list-unstyled "></ul>
        <p>{content}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <img className="rounded-circle" alt={profileAlt} src={profileImage} width="48" height="48" />
            <div className="d-flex flex-column">
              <div className="text-wrapper">{authorName}</div>
              <div className="d-lg-none">
                <span>👁️‍🗨️{views} views</span>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-none d-lg-block pe-4">
              <span>👁️‍🗨️{views} views</span>
            </div>
            <button className="btn d-flex align-items-center gap-2" style={{ background: "rgb(237, 238, 240)" }}>
              <img src={share} alt="share" />
              <span className="d-lg-none">Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  mainImage: PropTypes.string.isRequired,
  mainAlt: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  profileAlt: PropTypes.string.isRequired,
  articleType: PropTypes.string.isRequired,
  articleTitle: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
