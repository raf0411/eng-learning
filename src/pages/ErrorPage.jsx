import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="w-[65rem] h-[30rem] flex flex-col items-center justify-center">
      <div className="text-center flex flex-col gap-12">
        <h1>
          <span className="text-red-300 text-7xl font-bold">ERROR 404</span>{" "}
        </h1>
        <Link to={"/"} className="text-[#EF8354] text-xl">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
