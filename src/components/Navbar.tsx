import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dumbbell, Menu } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  // const token = localStorage.getItem("token");

  // useEffect(() => {
  //   if (!token) {
  //     // alert("You need to log in to view the community.");
  //     // window.location.href = "/login";
  //     navigate('/login')
  //     return;
  //   }
  // }, [token]);
  const handleLogOut = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-indigo-600">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Dumbbell className="w-8 h-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">Fitness Tracker</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              <Link to="/" className="px-3 py-2 text-white rounded-md hover:bg-indigo-500">Home</Link>
              <Link to="/dashboard" className="px-3 py-2 text-white rounded-md hover:bg-indigo-500">Dashboard</Link>
              <Link to="/nutrition" className="px-3 py-2 text-white rounded-md hover:bg-indigo-500">Nutrition</Link>
              <Link to="/progress" className="px-3 py-2 text-white rounded-md hover:bg-indigo-500">Progress</Link>
              <Link to="/exercise" className="px-3 py-2 text-white rounded-md hover:bg-indigo-500">Exercise</Link>
              <Link to="/community" className="px-3 py-2 text-white rounded-md hover:bg-indigo-500">Community</Link>
              <Link to="/blog" className="px-3 py-2 text-white rounded-md hover:bg-indigo-500">Blog</Link>
              <Link to="/about" className="px-3 py-2 text-white rounded-md hover:bg-indigo-500">About</Link>
              <Link to="/faq" className="px-3 py-2 text-white rounded-md hover:bg-indigo-500">FAQ</Link>
              <Link to={"/login"} onClick={handleLogOut} className="px-3 py-2 text-white rounded-md hover:bg-indigo-500">LogOut</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-white rounded-md hover:bg-indigo-500"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-white rounded-md hover:bg-indigo-500">Home</Link>
            <Link to="/nutrition" className="block px-3 py-2 text-white rounded-md hover:bg-indigo-500">Nutrition</Link>
            <Link to="/community" className="block px-3 py-2 text-white rounded-md hover:bg-indigo-500">Community</Link>
            <Link to="/blog" className="block px-3 py-2 text-white rounded-md hover:bg-indigo-500">Blog</Link>
            <Link to="/about" className="block px-3 py-2 text-white rounded-md hover:bg-indigo-500">About</Link>
            <Link to="/faq" className="block px-3 py-2 text-white rounded-md hover:bg-indigo-500">FAQ</Link>
          </div>
        </div>
      )}
    </nav>
  );
}