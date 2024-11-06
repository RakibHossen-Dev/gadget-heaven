import { Link } from "react-router-dom";

const Blog = ({ item }) => {
  const { id, title, author, author_image, image_url, publish_date, tags } =
    item;
  return (
    <Link to={`/blogs/${id}`}>
      <div className=" shadow-md rounded-lg p-3 w-full">
        <img className="w-full rounded-lg h-[300px]" src={image_url} alt="" />
        <h1 className="text-2xl font-bold my-3">{title}</h1>
        <div className="flex items-center gap-2 mb-2">
          <img className="w-12 h-12 rounded-full" src={author_image} alt="" />
          <div>
            <h3 className="text-xl font-bold">{author}</h3>
            <p className="text-gray-500">Date: {publish_date}</p>
          </div>
        </div>

        {tags.map((tag, idx) => (
          <span className="text-gray-500 m-2" key={idx}>
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default Blog;
