import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Home(){
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        const getPosts = async ()=>{
            console.log("getting posts...")

            try{
                const responce = await fetch(`https://jsonplaceholder.typicode.com/posts`)
                const data = await responce.json()
                setPosts(data)
            }catch(err){
                console.log("Error",err)
            }
        }
        getPosts()
    },[]);
    return (
        <section>
            <Navbar />

            <div>
                {
                    posts.map((post)=>(
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    ))
                }
            </div>

            <Footer />
        </section>
    )
}

export default Home;