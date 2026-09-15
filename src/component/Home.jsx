import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";


function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            console.log("getting posts...")

            try {
                const responce = await fetch(`https://jsonplaceholder.typicode.com/posts`)
                const data = await responce.json()
                setPosts(data)
            } catch (err) {
                console.log("Error", err)
            }
        }
        getPosts()
    }, []);
    return (
        <>
            <Navbar />
            <Hero />
            <section className="py-4 bg-gray-100">

                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">latest Blogs</h2>
                    <div className=" grid grid-cols-3 gap-6">
                        {
                            posts.map((post) => (
                                <Card key={post.id}
                                    title={post.title}
                                    body={post.body}
                                />
                            ))
                        }
                    </div>
                </div>
                
            </section>
            <Footer />
        </>
    )
}

export default Home;