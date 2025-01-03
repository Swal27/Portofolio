import { useState } from "react";
import profil from "../../assets/static/profil.jpg"
import { useNavigate } from "react-router";


export function Sidebar(){
    const [darkMode] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={`h-screen w-64 bg-white ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
            {/* Profile Section */}
            <div className="p-6 border-b border-gray-200">
            <div className="flex items-center">
                <img
                src={profil}
                alt="Profile"
                className="w-16 h-16 rounded-full"
                />
                <div className="ml-4">
                <h2 className="text-lg font-semibold">Kukuh Prakoso</h2>
                <p className="text-sm text-gray-500">@Swal27</p>
                </div>
            </div>
            <button
                className="mt-4 w-full text-blue-500 border border-blue-500 py-1 px-2 rounded-md hover:bg-blue-100"
                onClick={() => alert("Login action")}
            >
                Sign in
            </button>
            </div>
    
            {/* Menu Items */}
            <nav className="flex flex-col p-4 space-y-2">
            {[
                { name: "Home", icon: "🏠", path: "/" },
                { name: "Career", icon: "📄", path: "/career"  },
                { name: "Projects", icon: "🛠️", path: "/about"  },
                { name: "Blogs", icon: "📡", path: "/about"  },
                { name: "Contacts", icon: "📞", path: "/about"  },
                { name: "Chats", icon: "💬", path: "/about"  },
            ].map((item, index) => (
                <button
                key={index}
                className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => navigate(item.path)}
                >
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
                </button>
            ))}
            </nav>

        </div>
    );
}