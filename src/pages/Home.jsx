const Home = () => {
  return (
    <div>
      <div className="bg-violet-500 pt-7   pb-56 rounded-xl">
        <div className="  text-center w-11/12 lg:w-9/12 mx-auto lg:space-y-7 space-y-3">
          <h2 className="lg:text-5xl text-3xl font-bold text-white">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h2>
          <p className="text-white w-9/12 mx-auto ">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="bg-white py-2 px-6 rounded-full font-bold ">
            Shop Now
          </button>
        </div>
      </div>
      <div className="w-11/12 md:w-9/12 mx-auto border lg:p-4 p-1  rounded-md blur-bg relative -top-44 ">
        <img
          className="rounded-xl lg:h-[450px] w-full"
          src="/src/assets/banner.jpg"
          alt=""
        />
      </div>

      <h3 className="text-3xl font-bold text-center pb-5">
        Explore Cutting-Edge Gadgets
      </h3>
      <div className="lg:flex gap-6">
        <div className="lg:w-1/5 bg-white flex flex-col gap-3 p-5 rounded-lg">
          <button className="py-3 px-6 bg-gray-200 hover:bg-violet-500 rounded-full ">
            All Product
          </button>
          <button className="py-3 px-6 bg-gray-200 rounded-full">
            Laptops{" "}
          </button>
          <button className="py-3 px-6 bg-gray-200 rounded-full">
            Phones{" "}
          </button>
          <button className="py-3 px-6 bg-gray-200 rounded-full">
            Accessories{" "}
          </button>
          <button className="py-3 px-6 bg-gray-200 rounded-full">
            Smart Watches
          </button>
          <button className="py-3 px-6 bg-gray-200 rounded-full">
            Macbook
          </button>
          <button className="py-3 px-6 bg-gray-200 rounded-full">Iphone</button>
        </div>
        <div className="lg:w-4/5 bg-green-300"></div>
      </div>
    </div>
  );
};

export default Home;
