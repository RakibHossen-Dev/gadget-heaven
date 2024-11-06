import { toast } from "react-toastify";

// card

const getAllCard = () => {
  const all = localStorage.getItem("card");
  if (all) {
    const cards = JSON.parse(all);
    console.log(cards);
    return cards;
  } else {
    console.log([]);
    return [];
  }
};

const addCard = (gadget) => {
  const addToCard = getAllCard();
  const isExist = addToCard.find((item) => item.id === gadget.id);
  if (isExist) return alert("Already Exsist");
  toast.success("Added New Item");

  console.log(addToCard);
  addToCard.push(gadget);
  localStorage.setItem("card", JSON.stringify(addToCard));
};

// wishList

const getWishList = () => {
  const all = localStorage.getItem("wishList");
  if (all) {
    const cards = JSON.parse(all);
    console.log(cards);
    return cards;
  } else {
    console.log([]);
    return [];
  }
};

const addWhistList = (gadget) => {
  const addToWishList = getWishList();
  const isExist = addToWishList.find((item) => item.id === gadget.id);
  if (isExist) return alert("Already Exist");
  toast.success("Added New Item");

  console.log(addToWishList);
  addToWishList.push(gadget);
  localStorage.setItem("wishList", JSON.stringify(addToWishList));
};

export { addCard, getAllCard, getWishList, addWhistList };
