"use client"

import { useState } from "react";

export default function Home() {
  const [menuOpened, setMenuOpened] = useState(undefined)
  const [submenuHovered, setSubmenuOpened] = useState(undefined)

  function closing() {
    setMenuOpened(undefined)
    setSubmenuOpened(undefined)
  }

  function opening(numberOpt) {
    setMenuOpened(numberOpt)
    setSubmenuOpened(undefined)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="bg-white fixed top-0 left-0 px-4 pt-4 w-full text-black">
        <nav onMouseLeave={() => closing()}>
          <ul className="flex gap-28 justify-center z-50 border-b pb-4 grid grid-cols-12 gap-x-4">
            <li className="col-span-2 col-start-4">
              <button onMouseEnter={() => opening("1")}>Option 1</button>
            </li>
            <li className="col-span-2 col-start-6">
              <button onMouseEnter={() => opening("2")}>Option 2</button>
            </li>
            <li className="col-span-2 col-start-8">
              <button onMouseEnter={() => opening("3")}>Option 3</button>
            </li>
          </ul>

          {menuOpened === "1" &&
            <nav className="h-[40vh] w-full bg-white z-0 grid grid-cols-12 gap-x-4 pt-14">
              <ul className="col-span-2 col-start-4">
                <li>
                  Link 1
                </li>
                <li onMouseEnter={() => setSubmenuOpened("hoveredItem")}>
                  <div className="flex justify-between items-center">
                    <p>Hover me</p>
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L6 5.32L1 10" stroke="#002391" />
                    </svg>
                  </div>
                </li>
                <li>
                  Link 2
                </li>
              </ul>
              {submenuHovered &&
                <ul className="col-span-2 col-start-6">
                  <li>
                    Link 1
                  </li>
                  <li onMouseEnter={() => setSubmenuOpened("hoveredItem")}>
                    Link 2
                  </li>
                </ul>
              }
            </nav>
          }

          {menuOpened === "2" &&
            <nav className="h-[40vh] w-full bg-white z-0 grid grid-cols-12 gap-x-4 pt-14">
              <ul className="col-span-2 col-start-6">
                <li>
                  Link 1
                </li>
                <li onMouseEnter={() => setSubmenuOpened("hoveredItem")}>
                  <div className="flex justify-between items-center">
                    <p>Hover me</p>
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L6 5.32L1 10" stroke="#002391" />
                    </svg>
                  </div>
                </li>
                <li>
                  Link 2
                </li>
              </ul>
              {submenuHovered &&
                <ul className="col-span-2 col-start-8 max-h-[60%] overflow-hidden overflow-y-auto">
                  <li>
                    Link 1
                  </li>
                  <li onMouseEnter={() => setSubmenuOpened("hoveredItem")}>
                    Link 2
                  </li>
                  <li>
                    Link 3
                  </li>
                  <li onMouseEnter={() => setSubmenuOpened("hoveredItem")}>
                    Link 4
                  </li>
                  <li>
                    Link 5
                  </li>
                  <li onMouseEnter={() => setSubmenuOpened("hoveredItem")}>
                    Link 6
                  </li>
                  <li>
                    Link 7
                  </li>
                  <li onMouseEnter={() => setSubmenuOpened("hoveredItem")}>
                    Link 8
                  </li>
                  <li>
                    Link 9
                  </li>
                  <li onMouseEnter={() => setSubmenuOpened("hoveredItem")}>
                    Link 10
                  </li>
                </ul>
              }
            </nav>
          }

          {menuOpened === "3" &&
            <nav className="h-[40vh] w-full bg-white z-0 grid grid-cols-12 gap-x-4 pt-14">
              <ul className="col-span-2 col-start-8">
                <li>
                  Link 1
                </li>
                <li onMouseEnter={() => setSubmenuOpened("hoveredItem")}>
                  <div className="flex justify-between items-center">
                    <p>Hover me</p>
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L6 5.32L1 10" stroke="#002391" />
                    </svg>
                  </div>
                </li>
                <li>
                  Link 2
                </li>
              </ul>
              {submenuHovered &&
                <ul className="col-span-2 col-start-10">
                  <li>
                    Link 1
                  </li>
                  <li onMouseEnter={() => setSubmenuOpened("hoveredItem")}>
                    Link 2
                  </li>
                </ul>
              }
            </nav>
          }
        </nav>
      </header>
    </main>
  );
}
