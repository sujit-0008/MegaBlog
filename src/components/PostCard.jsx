import React from "react";
import service from "../appwrite/conf";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <div>
      <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-200 rounded-xl p-4">
          <div className="w-full justify-center mb-4">
            <img
              src={service.getFilePreview(featuredImage)}
              alt={title}
              className="rounded-xl"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};
export default PostCard;
