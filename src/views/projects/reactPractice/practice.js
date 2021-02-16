import {useState} from 'react';

const Home1 = () => {
    //let name = "mario";
    const [blogs, setBlogs] = useState([
        { title: "My website!", body: "lorem ipsum", author:"mario", id: 1 },
        { title: "your website!", body: "lorem ipsum", author:"luigi", id: 2 },
        { title: "our website!", body: "lorem ipsum", author:"yoshi", id: 3 }

    ])
    const [name, setName] = useState("mario");
    const handleClick = () => {
        setName("");
    }
    return(
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>
            ))}
            <p>{name}</p>
            <button onClick={() => setName("luigi")}>click me</button>
        </div>
    );
}
export default Home1