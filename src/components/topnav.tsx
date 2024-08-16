import React from "react";

export default function TopNav() {
  return (
    <div className="bg-gray-700/25 backdrop-filter backdrop-blur-sm w-full fixed top-0 flex justify-between items-center px-10 md:px-20 py-4 max-w-5xl">
      <h1 className="font-kenyan text-5xl">KENYAN</h1>
      <li className="flex text-md">
        <ul>SUPORTE</ul>
        <ul>CURSOS</ul>
        <ul>PLANOS</ul>
      </li>
    </div>
  );
}
