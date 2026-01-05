import Layout from "./Components/Layout";
// import Dashboard from "./Pages/Dashboard";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Dashboard Page</h1>} />
          <Route path="/users" element={<h1>User Page</h1>} />
          <Route path="/settings" element={<h1>Settings Page</h1>} />
        </Routes>
      </Layout>
    </>
  );
}
