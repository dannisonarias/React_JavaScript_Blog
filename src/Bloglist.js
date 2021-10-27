import { Link } from "react-router-dom";

const Bloglist = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`blog/${blog.id}`}>
            <h2 className="title">{blog.title}</h2>
            <p className="author">Written by : {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
