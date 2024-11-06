import { useLoaderData } from "react-router-dom";
import Blog from "../components/Blog";

const Blogs = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="bg-violet-500 py-6 ">
        <div className="text-center ">
          <h3 className="text-3xl font-bold text-white">Blog </h3>
          <p className="text-white w-1/2 mx-auto mt-2">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5 w-11/12 mx-auto">
        {data.map((item) => (
          <Blog key={item.id} item={item}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
