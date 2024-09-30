import React from "react";

function LoginPage() {
  return (
    <div className="bg-[#4F5D75] p-16 rounded-3xl overflow-hidden h-full w-[1000px] flex flex-col items-center gap-10 mt-16">
      <h1 className="text-5xl font-bold">HI, WELCOME BACK!</h1>

      <form name="login" className="flex flex-col gap-5">
        <input type="email" placeholder="Email" className="bg-[#2D3142] rounded-xl p-5 outline-none"/>
        <input type="password" placeholder="Password" className="bg-[#2D3142] rounded-xl p-5 outline-none"/>
      </form>

      <button
        form="login"
        className="self-center bg-[#EF8354] rounded-full text-2xl px-10 py-2 font-semibold"
      >
        LOGIN
      </button>
    </div>
  );
}

export default LoginPage;
