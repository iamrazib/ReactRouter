import { Link } from "react-router-dom";

export const Card = ({ prodInfo }) => {
  const { id, brand, description, thumbnail } = prodInfo;

  return (
    <div>
      <div className="card w-72 max-h-96 bg-base-100 shadow-xl m-3 p-3 flex justify-center border border-black">
        <div className=" flex justify-center m-2 p-5 gap-2">
          <div >
            <img src={thumbnail}  className="max-h-40" />
          </div>
        </div>

        <div className="card-body p-0">
          <h2 className="card-title">{brand}</h2>
          <p className="max-h-20">{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/profileDetails/${id}`}>
              <button className="btn btn-primary h-8 min-h-0">
                More Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
