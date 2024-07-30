import React from "react";
import AboutMe from "./components/aboutMe";

function App() {
  return (
    <main className="App font-sans h-full bg-indigo-700">
      <AboutMe />
      <div className="w-screen text-center flex justify-center items-center flex-col">
        <h1 className="text-2xl font-bold text-green-400">PROJECT</h1>
        <div className="text-green-950 text-2xl font-bold flex justify-evenly w-3/6">
          <h2 className="hover:text-green-400">FUN</h2>
          <h2 className="hover:text-green-400">PRO</h2>
        </div>
      </div>
    </main>
  );
}

export default App;
