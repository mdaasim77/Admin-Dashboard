import { useState } from "react";

export default function Layout({ children }) {
  const [currentpage, setCurrentpage] = useState("dashboard");

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="px-6 py-5 border-b">Logo</div>
        <nav className="flex-1 flex flex-col px-6 py-4 gap-2">
          <a
            href="#"
            onClick={() => setCurrentpage("dashboard")}
            className={`block px-3 py-2 rounded  ${
              currentpage === "dashboard" ? "font-semibold" : ""
            }`}
          >
            Dashboard
          </a>
          <a
            href="#"
            onClick={() => setCurrentpage("user")}
            className={`block px-3 py-2 rounded ${
              currentpage === "user" ? "font-semibold" : ""
            }`}
          >
            Users
          </a>
          <a
            href="#"
            onClick={() => setCurrentpage("settings")}
            className={`px-3 py-2 rounded block ${
              currentpage === "settings" ? "font-semibold" : ""
            }`}
          >
            Settings
          </a>
        </nav>
        <footer className="px-6 py-5 border-t">Footer</footer>
      </aside>

      {/* Main section */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="h-16 bg-white border-b">Navbar</header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {currentpage === "dashboard" && <h1>DashBoard Page</h1>}
          {currentpage === "user" && <h1>User Page</h1>}
          {currentpage === "settings" && <h1>Setting Page</h1>}
        </main>
      </div>
    </div>
  );
}
