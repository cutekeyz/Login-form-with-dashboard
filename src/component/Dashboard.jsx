const Dashboard = ({ onLogout }) => {
  return (
    <div className="flex justify-center h-screen items-center bg-gray-300 font-mono">
      <div className="bg-red-950 py-10 px-8 text-white rounded-2xl shadow-2xl text-center max-w-md">
        {/* Success Checkmark */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-3xl font-bold">
            ✓
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-2">You've successfully Logged in!</h1>
        <p className="text-amber-200 text-lg mb-6">Welcome to your dashboard.</p>

        <button
          onClick={onLogout}
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-xl cursor-pointer transition"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;