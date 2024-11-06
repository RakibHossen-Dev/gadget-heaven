import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { MdFavoriteBorder } from "react-icons/md";
import { addCard, addWhistList, getAllCard, getWishList } from "../utils";
import { toast } from "react-toastify";

const GadgetDetails = () => {
  const allGadget = useLoaderData();

  const handleAddToCard = (card) => {
    addCard(card);
  };

  const { id } = useParams();
  const [gadget, setGadget] = useState({});

  const [isFavorite, setFavorite] = useState(false);
  useEffect(() => {
    const findGadget = allGadget.find((gadget) => gadget.id === parseInt(id));
    setGadget(findGadget);
    const favorites = getWishList();
    const isExist = favorites.find((item) => item.id === gadget.id);
    if (isExist) {
      setFavorite(true);
    }
  }, [allGadget, id]);

  const handleAddToWhishList = (whishList) => {
    addWhistList(whishList);
    setFavorite(true);
  };
  const {
    product_image,
    product_title,
    price,
    description,
    specification,
    availability,
    rating,
  } = gadget;


  return (
    <div>
      <div className="bg-violet-500 pt-5 pb-40 ">
        <div className="text-center ">
          <h3 className="text-3xl font-bold text-white">Product Details</h3>
          <p className="text-white md:w-1/2 w-11/12 mx-auto mt-2">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className=" w-11/12 lg:w-9/12 mx-auto bg-white p-5 rounded-lg flex lg:flex-row flex-col gap-4 relative -top-32">
        <img className="lg:w-[400px] w-full" src={product_image} alt="" />
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{product_title}</h2>
          <p className="text-gray-500">Price: ${price}</p>
          <p>{description}</p>
          <button className="bg-green-200 border border-green-600 text-green-600 py-1 px-4 rounded-full cursor-default">
            {availability}
          </button>
          <div>
            <p className="font-bold mb-2">Specification:</p>
            {specification &&
              specification.map((speci, idx) => (
                <li className="list-decimal" key={idx}>
                  {speci}
                </li>
              ))}
          </div>
          <div className=" ">
            <p className="font-bold mb-2">Rating:</p>
            <div className="flex gap-2 items-center">
              <div>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>

              <p>{rating}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleAddToCard(gadget)}
              className="flex items-center gap-2 bg-violet-500 py-2 px-6 rounded-full text-white font-medium"
            >
              <p>Add To Card</p>
              <LuShoppingCart />
            </button>
            <button
              disabled={isFavorite}
              onClick={() => handleAddToWhishList(gadget)}
              className="bg-white shadow-sm rounded-full p-2 border text-lg"
            >
              <MdFavoriteBorder />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
