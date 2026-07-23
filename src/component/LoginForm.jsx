import { useState } from "react";
import Dashboard from "./Dashboard";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    
    if (!email || !password) {
      setErrorMessage("All fields must be complete");
      return;
    };

    if (!email.includes('@')) {
      setErrorMessage("Your email must include the @");
      return;
    };

   setIsLoading(true);

    setTimeout(() => {
      setEmail("");
      setPassword("");
      setIsAgreed(false);

    setIsLoading(false);
    setIsLoggedIn(true);
    }, 1500);

    console.log("Login Successfull", {email, password, isAgreed});
  };

  if (isLoggedIn) {
    return <Dashboard onLogout={() => setIsLoggedIn(false)} />;
  };


  return (
    <form onSubmit={handleSubmit} className="flex justify-center h-screen items-center bg-gray-300 font-mono">
      <div className="bg-red-950 py-10 px-8 text-white rounded-2xl shadow-2xl ease-in-out transition duration-300 shadow-amber-200">
        <div className="text-4xl pb-2"><h1>Login</h1></div>
        <div className="pb-5"><p>Welcome back. Please login into your account.</p></div>

        {errorMessage && (
          <p style={{color: "yellow", font: "bold", fontFamily: "monospace", fontSize: "14px", paddingBottom: "10px"}}>{errorMessage}</p>
         )}

        <div className="mb-6"><input className="border border-amber-100 py-3 px-3 rounded-xl w-full"
        type="email"
        value={email}
        placeholder="Enter Your Email"
        onChange={(e) => setEmail(e.target.value)}
        
         /></div>
        <div className="mb-6"><input className="border border-amber-100 py-3 px-3 rounded-xl  w-full"
        type="password"
        value={password}
        placeholder="Enter Your Password"
        onChange={(e) => setPassword(e.target.value)}
        
         /></div>
         <div className="flex gap-3 mb-4"><input type="checkbox" checked={isAgreed} onChange={(e) => setIsAgreed(e.target.checked)} />
         Remeber me</div>
         <div><button className="bg-green-700 hover:bg-green-800 py-4 px-4 rounded-xl w-full mb-2 cursor-pointer" disabled={isLoading}>
          {isLoading ? "Login..." : "Login"}
          </button></div>

          <div className="flex justify-center"><p>Don't have an account? <span className="text-yellow-500 font-black">Sign up</span></p></div>
      </div>
    </form>
  );
};

export default Login;