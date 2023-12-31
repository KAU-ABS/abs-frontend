import React from "react";

interface NavbarItemProps {
    label: string;
};

const NavbarItem = ({ label }: NavbarItemProps) => {
    return(
        <>
        <div className="text-white cursor-pointer mx-2 hover:text-gray-300 transition">
            <p>{label}</p>
        </div>
        </>
    )
};

export default NavbarItem;