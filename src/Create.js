import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setisPending] = useState(false);
  const history = useHistory();
  const handleSumbit = (e) => {
    e.preventDefault();
    setisPending(true);
    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setisPending(false);
      history.push("/"); // redirect to home page
    });
  };
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form
        onSubmit={(e) => {
          handleSumbit(e);
        }}
      >
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding</button>}
      </form>
    </div>
  );
};

export default Create;
