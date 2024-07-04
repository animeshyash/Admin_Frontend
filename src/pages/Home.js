import React from "react";

const Home = () => {
  return (
    <div className="min-h-[88vh] flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-blue-600 text-white w-full py-4 text-center">
        <h1 className="text-4xl font-bold">Welcome to My Beautiful Homepage</h1>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <section className="bg-white p-8 rounded-lg shadow-lg m-4">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700">
            We are a company dedicated to creating amazing web experiences. Our
            mission is to deliver high-quality products and services that meet
            the needs of our customers.
          </p>
        </section>
        <section className="bg-white p-8 rounded-lg shadow-lg m-4">
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <ul className="list-disc list-inside">
            <li className="text-gray-700">Web Development</li>
            <li className="text-gray-700">Mobile App Development</li>
            <li className="text-gray-700">UI/UX Design</li>
          </ul>
        </section>
      </main>
      <footer className="bg-blue-600 text-white w-full py-4 text-center">
        <p>&copy; 2024 My Company</p>
      </footer>
    </div>
  );
};

export default Home;
