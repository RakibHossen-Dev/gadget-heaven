import { Link } from "react-router-dom";

const Card = ({ gadgets }) => {
  const { id, product_image, price, product_title } = gadgets;
  return (
    <div className="bg-white shadow-lg rounded-lg p-3">
      <img
        className="w-full lg:h-72  rounded-lg p-4"
        src={product_image}
        alt=""
      />
      <h2 className="text-2xl font-bold">{product_title}</h2>
      <p className="text-gray-500 mt-2">Price: {price}$</p>

      <Link to={`/gadgets/${id}`}>
        <button className="border border-violet-500 text-violet-500 py-2 mt-3 px-5 rounded-full font-bold">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Card;
