import Dashboard from "../Pages/Dashboard";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="px-6 py-5 border-b">Logo</div>
        {/* =========================================================== */}

        <nav className="flex-1 flex flex-col px-6 py-4 gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-3 py-2 rounded block ${
                isActive ? "font-semibold border" : ""
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              `px-3 py-2 rounded block ${
                isActive ? "font-semibold border" : ""
              }`
            }
          >
            Users
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `px-3 py-2 rounded block ${
                isActive ? "font-semibold border" : ""
              }`
            }
          >
            Settings
          </NavLink>
        </nav>

        {/* =========================================================== */}
        {/* <nav className="flex-1 flex flex-col px-6 py-4 gap-2">
          <button
            onClick={() => setCurrentPage("dashboard")}
            className={`text-left px-3 py-2 rounded block  ${
              currentPage === "dashboard" ? "font-semibold" : ""
            }`}
          >
            Dashboard
          </button>

          <button
            onClick={() => {
              setCurrentPage("user");
            }}
            className={`text-left px-3 py-2 rounded  block ${
              currentPage === "user" ? "font-semibold" : ""
            }`}
          >
            Users
          </button>

          <button
            onClick={() => setCurrentPage("settings")}
            className={`text-left px-3 py-2 rounded block  ${
              currentPage === "settings" ? "font-semibold" : ""
            }`}
          >
            Settings
          </button>
        </nav> */}

        <footer className="px-6 py-5 border-t">Footer</footer>
      </aside>

      {/* Main section */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="h-16 bg-white border-b">Navbar</header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
