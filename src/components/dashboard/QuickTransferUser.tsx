"use client";

import { Send } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

const users = [
  {
    name: "Livia Bator",
    role: "CEO",
    image: "/images/4.jpg",
  },
  {
    name: "Randy Press",
    role: "Director",
    image: "/images/2.jpg",
  },
  {
    name: "Workman",
    role: "Designer",
    image: "/images/3.jpg",
  },
  {
    name: "Randy Press",
    role: "Director",
    image: "/images/2.jpg",
  },
  {
    name: "Workman",
    role: "Designer",
    image: "/images/3.jpg",
  },
];

export function QuickTransfer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % (users.length - itemsPerPage + 1);
      if (containerRef.current) {
        containerRef.current.scrollTo({
          left: newIndex * (containerRef.current.scrollWidth / users.length),
          behavior: "smooth",
        });
      }
      return newIndex;
    });
  };

  return (
    <div className="w-full">
      <h2 className="text-[22px] font-semibold text-[#27364B] mb-4">
        Quick Transfer
      </h2>
      <div className="bg-white rounded-[20px] p-8 h-[280px] flex flex-col justify-between">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            ref={containerRef}
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
              width: `${(users.length / itemsPerPage) * 100}%`,
            }}
          >
            {users.map((user, index) => (
              <div
                key={index}
                className="text-center flex-shrink-0"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="w-[68px] h-[68px] rounded-full mb-3 mx-auto overflow-hidden">
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={68}
                    height={68}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[15px] font-medium text-[#1A1D1F] mb-1">
                  {user.name}
                </div>
                <div className="text-[13px] text-[#2A85FF]">{user.role}</div>
              </div>
            ))}
          </div>
          {users.length > itemsPerPage && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
              <button
                onClick={nextSlide}
                className="w-8 h-8 bg-white rounded-full shadow-[0px_2px_6px_rgba(0,0,0,0.08)] flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="#1A1D1F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
        <div className="relative flex items-center">
          <span className="absolute text-[#6F767E] text-[15px] left-0">
            Write Amount
          </span>
          <div className="flex-1 flex items-center justify-between bg-[#F4F4F4] rounded-xl ml-[110px]">
            <span className="pl-4 text-[15px] text-[#1A1D1F]">525.50</span>
            <button className="h-[44px] px-5 bg-[#1A1D1F] text-[15px] text-white rounded-xl flex items-center gap-2 hover:bg-black/90 transition-colors m-1">
              Send
              <Send className="w-4 h-4 -rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
