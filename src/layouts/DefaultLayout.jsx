import { Outlet } from "react-router-dom";

import Header from "../components/Header";

export default function DefaultLayout() {
  return (
    <>
      <div className="container">
        <Header></Header>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
}
