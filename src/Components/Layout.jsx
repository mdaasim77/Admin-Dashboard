import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Overlay (mobile only) */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white flex flex-col
          transform transition-transform duration-200
          -translate-x-full md:translate-x-0
          ${isSidebarOpen ? "translate-x-0" : ""}
        `}
      >
        <div className="px-6 py-5 border-b">Logo</div>

        <nav className="flex-1 flex flex-col px-6 py-4 gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-3 py-2 rounded block ${isActive ? "font-semibold" : ""}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              `px-3 py-2 rounded block ${isActive ? "font-semibold" : ""}`
            }
          >
            Users
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `px-3 py-2 rounded block ${isActive ? "font-semibold" : ""}`
            }
          >
            Settings
          </NavLink>
        </nav>

        <footer className="px-6 py-5 border-t">Footer</footer>
      </aside>

      {/* Main section */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Navbar */}
        <header className="h-16 bg-white border-b flex items-center">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden px-4 py-2"
          >
            Menu
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
