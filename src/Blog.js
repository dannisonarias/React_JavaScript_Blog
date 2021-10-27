import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useHistory } from "react-router";

const Blog = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    isLoading,
    errorMsg,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="blog">
      {blog && (
        <div className="blog-detail">
          <h2>{blog.title}</h2>
          <article>{blog.body}</article>
          <h5 className="author"> by {blog.author}</h5>
        </div>
      )}
      <button
        onClick={() => {
          handleDelete();
        }}
      >
        Delete
      </button>
      {isLoading && <p> is Loading...</p>}
      {errorMsg && <p> {errorMsg}</p>}
    </div>
  );
};

export default Blog;
