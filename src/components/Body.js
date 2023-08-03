import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Body = () => {

  const sideBarItems = [
    {
      id: 1,
      link: '/',
      name: 'Portfolio'
    },
    {
      id: 2,
      link: '/nestedComments',
      name: 'Nested Comments'
    },
    {
      id: 3,
      link: '/modal',
      name: 'Modal Feature'
    },
    {
      id: 4,
      link: '/tab',
      name: 'Tab Feature'
    },
    {
      id: 5,
      link: '/toDo',
      name: 'Todo app'
    },
    {
      id: 6,
      link: '/carousel',
      name: 'Carousel'
    }
  ];

  const socialMediaLinks = [
    {
      id: 1,
      profileURL: "https://www.linkedin.com/in/preethipantangi/",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png",
      name: "LinkedIn"
    },
    {
      id: 2,
      profileURL: "https://www.linkedin.com/in/preethipantangi/",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
      name: "Git Hub"
    }
  ]

  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <div className="row-span-1 py-4 px-8 flex justify-between space-x-3 border-b-4 bg-[#363d69] text-white">
          {
            isSideBarOpen ?
            <img
              src="https://static.thenounproject.com/png/2416665-200.png"
              alt="Close side bar"
              className="w-8 h-8 cursor-pointer"
              onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            /> :
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
              alt="Sidebar"
              className="w-8 h-8 cursor-pointer"
              onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            />
          }
          <Link to="/">
            <p className="pt-1">Frontend Machine Coding</p>
          </Link>
          <p className="pt-1 float-right">Resume</p>
        </div>
        <div className="row-span-4 flex-grow p-2 grid grid-flow-col">
          {
            isSideBarOpen && 
            <div className="col-span-1 overflow-y-auto">
              <ul className="m-3">
                {
                  sideBarItems.map((item) => 
                    <>
                      <Link to={item.link}>
                        <li 
                          key={item.id} 
                          className="p-2 hover:bg-[#1d2657] hover:text-white"
                        >
                          {item.name}
                        </li>
                      </Link>
                      <hr/>
                    </>
                  )
                }
              </ul>
            </div>
          }
          <div className={"col-span-11 p-3" + (isSideBarOpen ? "border-l-4" : "")}>
            <Outlet/>
          </div>
        </div>

        <div className="row-span-1 py-2 border-t-2 bg-[#9498af] text-white font-semibold">
          <p className="text-center">© Sai Preethi Pantangi</p>
          <ul className="flex space-x-3 items-center justify-center mt-2">
            {
              socialMediaLinks.map((link) => 
                <li>
                  <a 
                    target="_blank"
                    href={link.profileURL}
                    key={link.id}
                  >
                    <img
                      src={link.image}
                      alt={link.name}
                      className="w-6 h-6"
                    />
                  </a>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Body;
