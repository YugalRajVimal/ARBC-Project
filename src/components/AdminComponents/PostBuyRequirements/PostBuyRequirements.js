import React, { useEffect, useState } from "react";
import { getBuyRequirements } from "../../../api/AdminAPI/adminAPI";

const PostBuyRequirements = () => {
  const [buyRequirements, setBuyRequirements] = useState([]);

  useEffect(() => {
    getBuyRequirements().then(async (data) => {
      setBuyRequirements(await data.buyRequirements);
    });
  }, []);

  if (!buyRequirements.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 space-y-4 h-full overflow-y-auto">
      <h1 className="text-2xl font-bold">Buy Requirements</h1>
      {buyRequirements.map((requirement) => (
        <div key={requirement._id} className="border p-4 rounded-md shadow-md">
          <p>
            <strong>Looking For:</strong> {requirement.lookingFor}
          </p>
          <p>
            <strong>Email:</strong> {requirement.email}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(requirement.createdAt).toLocaleString()}
          </p>
          {/* <a href={`mailto:${requirement.email}`}>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md">
              Email
            </button>
          </a> */}
        </div>
      ))}
    </div>
  );
};

export default PostBuyRequirements;
