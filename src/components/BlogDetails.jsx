import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  const alldata = useLoaderData();
  const { id } = useParams();
  const [gadget, setGadget] = useState({});
  useEffect(() => {
    const findGadget = alldata.find((blog) => blog.id === parseInt(id));
    setGadget(findGadget);
  }, [alldata, id]);
  const {
    title,
    author,
    author_image,
    image_url,
    publish_date,
    tags,
    content_preview,
    category,
  } = gadget;
  return (
    <div>
      <div className="bg-violet-500 pt-6  pb-40">
        <div className="text-center ">
          <h3 className="text-3xl font-bold text-white">Blog Details </h3>
          <p className="text-white w-1/2 mx-auto mt-2">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="flex gap-5 w-9/12 mx-auto border rounded-xl p-4 bg-white relative -top-32">
        <img className="rounded-lg " src={image_url} alt="" />
        <div>
          <h3 className="text-3xl font-bold text-violet-500">{title}</h3>
          <p className="text-gray-600 my-3">
            <span className="font-bold">Description: </span>
            {content_preview}
          </p>
          <p className="mb-2 font-bold">Category Type: {category}</p>

          <div className="flex items-center gap-2 mb-2">
            <img className="w-12 h-12 rounded-full" src={author_image} alt="" />
            <div>
              <h3 className="text-xl font-bold">{author}</h3>
              <p className="text-gray-500">Date: {publish_date}</p>
            </div>
          </div>
          <div>
            {tags &&
              tags.map((t, idx) => (
                <span className="text-gray-500 m-2" key={idx}>
                  #{t}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
