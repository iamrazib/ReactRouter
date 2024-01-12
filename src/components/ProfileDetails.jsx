
export const ProfileDetails = ({ singel }) => {
    const {id,brand,category,description,thumbnail,price,title,rating} = singel;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={thumbnail} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          ID: {id}, {title}
        </h2>
        <p>
          <span className="font-bold">Brand: </span> {brand}
        </p>
        <p>
          <span className="font-bold">Category: </span>
          {category}
        </p>
        <p>
          <span className="font-bold">Price: </span>
          {price}
        </p>
        <p>
          <span className="font-bold">Rating: </span>
          {rating}
        </p>
        <p>
          <span className="font-bold">Description: </span>
          {description}
        </p>
        
      </div>
    </div>
  );
};
