import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

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
