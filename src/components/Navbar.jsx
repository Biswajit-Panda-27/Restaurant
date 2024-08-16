import React from 'react';
import { FaCaretDown, FaUser } from "react-icons/fa";

const NavLinks = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "About", link: "/#" },
    { id: 3, name: "Contact", link: "/#" },
];

const DropdownLinks = [
    { id: 1, name: "Vegetables", link: "/#" },
    { id: 2, name: "Fruits", link: "/#" },
    { id: 3, name: "Grains", link: "/#" },
];

const Navbar = ({HandlePopup}) => {
    return (
        <div data-aos="fade" className='bg-white shadow-md'>
            <div className='container mx-auto flex justify-between py-4 sm:py-3 px-4'>
                <div className='font-bold text-3xl'>
                    logo
                </div>
                <div className='hidden md:flex items-center space-x-8'>
                    {NavLinks.map(link => (
                        <a key={link.id} href={link.link}>{link.name}</a>
                    ))}
                    <div className="relative group">
                        <button className='flex items-center space-x-2'>
                            <span>Shop</span>
                            <FaCaretDown />
                        </button>
                        <div className='hidden absolute top-full left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg group-hover:block'>
                            {DropdownLinks.map(link => (
                                <a key={link.id} href={link.link} className='block px-4 py-2 hover:bg-gray-200'>{link.name}</a>
                            ))}
                        </div>
                    </div>
                    <div className='cursor-pointer' onClick={HandlePopup}>
                        <FaUser />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
