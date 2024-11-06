const AddToCard = ({ item }) => {
  const { product_title, product_image, description, price } = item;
  return (
    <div className="lg:w-9/12 mx-auto">
      <div className=" border rounded-lg my-4 p-4 flex items-center gap-3 bg-white">
        <img className="w-36 rounded-xl " src={product_image} alt="" />
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">{product_title}</h3>
          <p className="text-gray-500">{description}</p>
          <p className="font-bold">Price: ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default AddToCard;
