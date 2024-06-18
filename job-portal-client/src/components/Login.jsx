import React, { useState, useEffect } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2 for notifications (optional)

import app from '../firebase/firebase.config'; // Import your Firebase configuration

const Login = () => {
  const [user, setUser] = useState(null); // State to store user data
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Get user's name for display
      const userName = user.displayName || user.email.split('@')[0]; // Use display name if available, fallback to email before "@"

      setUser(user); // Update user state
      navigate('/', { replace: true }); // Redirect to home page after login

      Swal.fire({
        icon: 'success',
        title: `Welcome, ${userName}!`,
        text: 'You have been successfully logged in.',
      });
    } catch (error) {
      const errorMessage = error.message;
      console.error('Login error:', errorMessage); // Log error for debugging
      // Handle errors as needed (e.g., display error message to user)
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear user state
      navigate('/', { replace: true }); // Redirect to home page after logout

      Swal.fire({
        icon: 'info',
        title: 'Logout Successful',
        text: 'You have been logged out.',
      });
    } catch (error) {
      const errorMessage = error.message;
      console.error('Logout error:', errorMessage);
      // Handle errors as needed (e.g., display error message to user)
    }
  };

  // Check for existing signed-in user on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const userName = currentUser.displayName || currentUser.email.split('@')[0];
        setUser(currentUser); // Update user state
      }
    });

    return unsubscribe; // Cleanup function to prevent memory leaks
  }, [auth]); // Dependency array to ensure effect runs only once on auth change

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      {user ? ( // Conditionally render logout button if user is logged in
        <div className="flex flex-col items-center">
          <p className="text-3xl font-bold mb-4 text-center">Logged in as: {user.displayName || user.email.split('@')[0]}</p>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <button className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleLogin}>
          Login with Google
        </button>
      )}
    </div>
  );
};

export default Login;
