
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function FreeCourse({ course }) {
    return (
        <div>
            <h2 className="text-3xl font-bold to-green-500 mb-6">Free Course</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
                {course.map((c) => (
                    <div className="bg-white shadow-lg rounded-xl p-5 border hover:shadow-xl" key={c.id}
                    >
                        <span className="bg-blue-100 text-green-600 px-3 py-1 rounded-full">FREE</span>
                        <h3 className="text-lg font-semibold mt-4 ">{c.title}</h3>
                        {/* <p className="text-gray-600 mt-2 ">$99</p> */}
                        <button className="bg-green-500 text-white mt-5 px-4 py-2 rounded-lg">Enroll Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

function PaidCourse({ course }) {
    return (
        <div>
            <h2 className="text-3xl font-bold to-blue-500 mb-6 mt-30">Paid Course</h2>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
                {course.map((c) => (
                    <div className="bg-white shadow-lg rounded-xl p-5 border hover:shadow-xl" key={c.id}
                    >
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">PREMIUM</span>
                        <h3 className="text-lg font-semibold mt-4 ">{c.title}</h3>
                        <p className="text-gray-600 mt-2 ">$99</p>
                        <button className="bg-blue-500 text-white mt-5 px-4 py-2 rounded-lg">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>

    )
}

function Course() {
    const [course, setCourses] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            console.log("getting posts...")

            try {
                const responce = await fetch(`https://jsonplaceholder.typicode.com/todos`)
                const data = await responce.json()
                setCourses(data.slice(0, 20))
            } catch (err) {
                console.log("Error", err)
            }
        }
        getPosts()
    }, []);

    const freeCourse = course.filter((course) => !course.completed)
    const paidCourse = course.filter((course) => course.completed)

    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-10">
                <FreeCourse course={freeCourse} />

                <PaidCourse course={paidCourse} />
            </div>

            <Footer />
        </>
    )
}

export default Course;