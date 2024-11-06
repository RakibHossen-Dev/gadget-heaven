import { useEffect, useState } from "react";
import { getAllCard, getWishList } from "../utils";
import AddToCard from "../components/AddToCard";
import AddToWishList from "../components/AddToWishList";
import { useLoaderData, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const data = useLoaderData();
  const [price, setPrice] = useState(0);

  const [card, setCard] = useState([]);
  useEffect(() => {
    const addToCard = getAllCard();
    setCard(addToCard);
  }, []);

  const [wish, setWish] = useState([]);
  useEffect(() => {
    const addToWish = getWishList();
    setWish(addToWish);
  }, []);

  const [isActive, setIsActive] = useState(true);

  const showCart = () => setIsActive(true);
  const showWishlist = () => setIsActive(false);

  useEffect(() => {
    let total = 0;
    card.forEach((item) => {
      total += item.price;
    });
    setPrice(total.toFixed(2));
  }, [card]);

  const handleSort = (sortBy) => {
    if (sortBy == "price") {
      const sotred = [...card].sort((a, b) => b.price - a.price);
      setCard(sotred);
    }
  };

  // Modal

  // Modal

  const navigate = useNavigate();
  // const handleGoBack = () => {
  //   // navigate("/");
  //   setCard([]);
  //   localStorage.setItem("card", JSON.stringify([]));
  // };

  const openModal = () => {
    document.getElementById("my_modal_1").showModal();
    // handleGoBack();
  };

  const goTohome = () => {
    navigate("/");
    setCard([]);
    localStorage.setItem("card", JSON.stringify([]));
  };

  return (
    <div>
      <div className="bg-violet-500 py-6 ">
        <div className="text-center ">
          <h3 className="text-3xl font-bold text-white">Dashboard </h3>
          <p className="text-white w-1/2 mx-auto mt-2">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex items-center gap-2 justify-center mt-5">
            <button
              onClick={showCart}
              className={`${
                isActive
                  ? "border bg-white text-violet-500 py-2 px-10 rounded-full  font-bold"
                  : "border text-white border-white py-2 px-10 rounded-full  font-bold"
              }`}
            >
              Cart
            </button>
            <button
              onClick={showWishlist}
              className={`${
                isActive
                  ? "border text-white border-white py-2 px-10 rounded-full  font-bold"
                  : "border bg-white text-violet-500 py-2 px-10 rounded-full  font-bold"
              }`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Mdaol */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button> */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col justify-center items-center ">
          <img className="mb-4" src="/Group.png" alt="" />
          <h3 className="font-bold text-2xl">Payment Successfully </h3>
          <p className="pt-4 pb-2">Thanks for purchasing.</p>
          <p>Total: ${price}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={goTohome}
                className="bg-violet-500 py-2 w-48 text-white rounded-xl"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
      {/* Mdaol */}
      {/* gkhofghogifuh */}

      {isActive ? (
        <div>
          <div className="lg:w-9/12 mx-auto flex justify-between items-center my-5">
            <h2 className="text-2xl font-bold">Cart</h2>
            <div className="flex items-center gap-3">
              <h3 className="font-bold">Total cost: $ {price}</h3>
              <button
                onClick={() => handleSort("price")}
                className="border border-violet-500 py-2 px-5 text-violet-500 rounded-full"
              >
                Sort by Price
              </button>
              <button
                onClick={openModal}
                className="bg-violet-500 py-2 px-5 text-white rounded-full"
              >
                Purchase
              </button>
            </div>
          </div>
          {card.map((item, idx) => (
            <AddToCard key={idx} item={item}></AddToCard>
          ))}
        </div>
      ) : (
        <div>
          <div className="lg:w-9/12 mx-auto mt-2">
            <h2 className="text-2xl font-bold">Wish list</h2>
          </div>
          {wish.map((item, idx) => (
            <AddToWishList key={idx} item={item}></AddToWishList>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
