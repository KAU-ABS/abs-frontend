import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
    return (
        <>
            <nav className="w-full fixed">
                <div className="
                px-6 py-4 bg-zinc-900 bg-opacity-90 w-full
                flex flex-row gap-8 items-center transition duration-500
                ">
                    <img src="/abs_symbol.svg" alt="logo" className="h-12" />
                    <div className="flex-row ml-8 gap-7 hidden lg:flex">
                        <NavbarItem label="Home" />
                        <NavbarItem label="About" />
                        <NavbarItem label="Contact" />
                    </div>
                    <div className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                        <p className="text-white text-sm">Mobile</p>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navbar;