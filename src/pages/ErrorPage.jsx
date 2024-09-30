import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="w-[65rem] h-[30rem] flex flex-col items-center justify-center">
      <div className="text-center flex flex-col gap-12">
        <h1 className="flex flex-col gap-5">
          <span className="text-[#EF8354] text-7xl font-bold">ERROR 404</span>
          <span className="text-3xl">PAGE NOT FOUND</span>
        </h1>
        <Link to={"/"} className="text-[#EF8354] text-xl underline">
          Back Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
