import { Link } from "react-router-dom";

function Signup(){
    return (
        <div className="flex items-center justify-center h-screen bg-slate-100">
        <div className="bg-white w-80 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-5 text-center">Signup</h2>
            <input type="text" placeholder="Usrename" className="w-full boder p-2 mb-4 rounded" />
            <input type="email" placeholder="Email" className="w-full boder p-2 mb-4 rounded" />
            <input type="password" placeholder="Password" className="w-full boder p-2 mb-4 rounded"/>
            <button className="bg-blue-600 text-white w-full rounded-md py-2 px-4 hover:bg-blue-900 transition duration-300 mb-4">Signup</button>
            <p className="text-center mt-3">Already Acount? {""} <Link className="text-blue-500 hover:underline" to="/login">Login</Link></p>
        </div>
    </div>
    )
}

export default Signup;