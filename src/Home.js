import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    errorMsg,
    isLoading,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {errorMsg && <div>{errorMsg}</div>}
      {isLoading && <div>Is Loading..</div>}
      {blogs && <Bloglist blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
