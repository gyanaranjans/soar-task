"use client";
import * as React from "react";
import { useState } from "react";
import { Menu } from "lucide-react";
import { navItems } from "@/constants/navItems";
import { NavItem } from "@/components/settings/NavItem";

const NavigationBar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden"
              onClick={toggleSidebar}
              aria-label="Toggle sidebar"
            >
              <Menu className="w-8 h-8" />
            </button>
            <div className="flex gap-2.5 items-center text-2xl font-extrabold lg:hidden">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/926b72f3953fc305456c77479fbbd9fe16e7f5630232abc43a7fbf0a412ee5f4?placeholderIfAbsent=true&apiKey=bdac07c799104a2a86b036aad3e22016"
                alt="Soar Task logo"
                className="object-contain shrink-0 aspect-square w-[35px]"
              />
              <h1>Soar Task</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <form
              role="search"
              className="flex gap-4 self-stretch px-6 py-4 my-auto shadow-lg bg-slate-100 rounded-[40px] max-md:px-5"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/30daee91696e50582b29f674a06dfce59ba7eb1915768c099051de743a91a554?placeholderIfAbsent=true&apiKey=bdac07c799104a2a86b036aad3e22016"
                alt=""
                className="object-contain shrink-0 w-5 aspect-square"
              />
              <label htmlFor="searchInput" className="sr-only">
                Search for something
              </label>
              <input
                type="search"
                id="searchInput"
                placeholder="Search for something"
                className="bg-transparent border-none outline-none text-slate-400 w-full"
              />
            </form>
            <div className="hidden lg:flex items-center gap-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1282d3e192feec94ae475ef73eb28b909a71ac3132d063d1c14a468cfb76ac82?placeholderIfAbsent=true&apiKey=bdac07c799104a2a86b036aad3e22016"
                alt="Messages"
                className="object-contain shrink-0 w-[30px] aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b212169921a6d4d1b84e58eacde65487c9a45d151a81e9bd37de90dd00de55b6?placeholderIfAbsent=true&apiKey=bdac07c799104a2a86b036aad3e22016"
                alt="Notifications"
                className="object-contain shrink-0 w-[30px] aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6df88ffd4bfeb2489999e47e6774b8f19c7c5010336baa904189b93bddbaaece?placeholderIfAbsent=true&apiKey=bdac07c799104a2a86b036aad3e22016"
                alt="User profile"
                className="object-contain shrink-0 w-[35px] aspect-square"
              />
            </div>
          </div>
        </div>
      </header>
      <nav
        className={`fixed top-0 left-0 h-full bg-white shadow-md z-20 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0 lg:w-[15%]`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex flex-col mt-3.5 pt-10 pl-5 text-lg font-medium">
          <div className="flex gap-2.5 items-center text-2xl font-extrabold lg:hidden">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/926b72f3953fc305456c77479fbbd9fe16e7f5630232abc43a7fbf0a412ee5f4?placeholderIfAbsent=true&apiKey=bdac07c799104a2a86b036aad3e22016"
              alt="Soar Task logo"
              className="object-contain shrink-0 aspect-square w-[35px]"
            />
            <h1>Soar Task</h1>
          </div>
          {navItems.map((item, index) => (
            <div key={index} className={index > 0 ? "mt-10" : ""}>
              <NavItem {...item} />
            </div>
          ))}
        </div>
      </nav>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default NavigationBar;
