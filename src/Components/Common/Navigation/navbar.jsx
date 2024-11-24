import { useState } from 'react';
import { Popover, Button, Dropdown } from 'antd';
import { MenuOutlined, DownOutlined, CaretDownOutlined } from '@ant-design/icons';
import Logo from "../../../assets/images/new-logo-banner.png";
import LogoGray from "../../../assets/images/CGDC-Logo.png";
import "../../../App.css";
import { Link, useLocation } from 'react-router-dom';

const useIsHome = () => {
    const location = useLocation();
    return location.pathname === "/";
};

const Navbar = () => {
    const isHome = useIsHome();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Adjusted services menu using items array
    const servicesMenu = [
        { key: '1', label: <Link to="/services/architecture">Architecture</Link> },
        { key: '2', label: <Link to="/services/town-planning">Town Planning</Link> },
        { key: '3', label: <Link to="/services/project-management">Project Management</Link> },
        { key: '4', label: <Link to="/services/mep-designing">MEP Designing</Link> },
        { key: '5', label: <Link to="/services/structure-engineering">Structure Engineering</Link> },
        { key: '6', label: <Link to="/services/building-economics">Building Economics</Link> },
        { key: '7', label: <Link to="/services/financial-feasibility">Financial Feasibility</Link> },
        { key: '8', label: <Link to="/services/interior-designing">Interior Designing</Link> },
    ];

    const content = (
        <div>
            {/* <Link to="/" className="block hover:text-red-800 hover:underline uppercase font-outfit tracking-widest leading-loose">Home</Link> */}
            <Link to="/about" className="block hover:text-red-800 hover:underline uppercase font-outfit tracking-widest leading-loose">About us</Link>
            <Dropdown menu={{ items: servicesMenu }} trigger={['click']}>
                <span className="block hover:text-red-800 hover:underline uppercase font-outfit tracking-widest leading-loose cursor-pointer">
                    Our Services <CaretDownOutlined />
                </span>
            </Dropdown>
            <Link to="/projects" className="block hover:text-red-800 hover:underline uppercase font-outfit tracking-widest leading-loose">Projects</Link>
            <Link to="/ourteam" className="block hover:text-red-800 hover:underline uppercase font-outfit tracking-widest leading-loose">Our Team</Link>
            <Link className="block hover:text-red-800 hover:underline uppercase font-outfit tracking-widest leading-loose">Careers</Link>
            <Link className="block hover:text-red-800 hover:underline uppercase font-outfit tracking-widest leading-loose">Affiliations</Link>
            <Link className="block hover:text-red-800 hover:underline uppercase font-outfit tracking-widest leading-loose">News</Link>
            <Link to="/contact" className="block hover:text-red-800 hover:underline uppercase font-outfit tracking-widest leading-loose">Contact us</Link>
        </div>
    );

    return (
        <header className={`${isHome ? "navbar" : "bg-white"} text-gray-600 body-font font-outfit relative z-50`}>
            <div className="container mx-auto flex justify-between items-center px-5 lg:px-8 py-2">
                {/* Logo */}
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    {isHome ? <img src={Logo} alt="Logo" /> : <img src={LogoGray} alt="Logo" />}
                </a>

                {/* Menu Button for Small Screens */}
                <Popover content={content} title=" " trigger="click" placement="bottom" onOpenChange={toggleMenu}>
                    <Button className="md:hidden p-2 -mt-5 text-gray-900">
                        <MenuOutlined />
                    </Button>
                </Popover>

                {/* Navigation for Desktop */}
                <nav className="hidden md:flex md:ml-auto font-outfit flex-wrap items-center text-base justify-center">
                    {/* <Link to="/" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer tracking-wider`}><span className="mr-5 py-5 text-xs">HOME</span></Link> */}
                    <Link to="/about" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer tracking-wider`}><span className="mr-5 py-5 text-xs" style={{fontSize : '14px'}}>ABOUT US</span></Link>
                    <Dropdown menu={{ items: servicesMenu }} trigger={['click']}>
                        <span className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer tracking-wider`}>
                            <span className="mr-5 py-5 text-xs" style={{fontSize : '14px'}}>OUR SERVICES <CaretDownOutlined /></span>
                        </span>
                    </Dropdown>
                    <Link to="/projects" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer tracking-wider`}><span className="mr-5 py-5 text-xs" style={{fontSize : '14px'}}>PROJECTS</span></Link>
                    <Link to="/ourteam" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer tracking-wider`}><span className="mr-5 py-5 text-xs" style={{fontSize : '14px'}}>OUR TEAM</span></Link>
                    <Link className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer tracking-wider`}><span className="mr-5 py-5 text-xs" style={{fontSize : '14px'}}>CAREERS</span></Link>
                    <Link className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer tracking-wider`}><span className="mr-5 py-5 text-xs" style={{fontSize : '14px'}}>AFFILIATIONS</span></Link>
                    <Link className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer tracking-wider`}><span className="mr-5 py-5 text-xs" style={{fontSize : '14px'}}>NEWS</span></Link>
                    <Link to="/contact" className={`${isHome ? "text-white" : "text-black"} hover:text-red-800 hover:underline underline-offset-8 cursor-pointer tracking-wider`}><span className="mr-5 py-5 text-xs" style={{fontSize : '14px'}}>CONTACT US</span></Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
