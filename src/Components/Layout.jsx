export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="px-6 py-5 border-b">Logo</div>
        <nav className="flex-1 px-6 py-5 space-y-2">
          <div>Dashboard</div>
          <div>Users</div>
          <div>Settings</div>
        </nav>
        <footer className="px-6 py-5 border-t">Footer</footer>
      </aside>

      {/* Main section */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="h-16 bg-white border-b">Navbar</header>

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
