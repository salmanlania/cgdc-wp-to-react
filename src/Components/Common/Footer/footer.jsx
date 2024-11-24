import Logo from "../../../assets/images/CGDC-Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            <footer className="bg-stone-200 body-font">
                <div className="container py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="md:w-96 sm:w-72 md:px-12 px-5 flex-shrink-0 md:mx-0 mx-auto text-left md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-start text-white">
                            <img src={Logo} alt="" />
                        </a>
                        <div className="my-5">
                            <h1 className="font-black uppercase text-lg font-arimo">Head Office</h1>
                            <p className="mt-2 text-sm text-gray-600 font-jost">
                                21-C, 5th Zamzama Commercial Lane, DHA Phase V, Karachi, Pakistan.
                            </p>
                            <div className="my-4">
                                <p className="my-2 text-sm text-gray-700 font-jost"><FontAwesomeIcon className="me-3" icon={faPhone} />+92 21 111 124 338</p>
                                <p className="my-2 text-sm text-gray-700 font-jost"><FontAwesomeIcon className="me-3" icon={faEnvelope} />info@cgdc.pk</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow md:items-start md:justify-start flex flex-wrap font-jost -mb-10 md:mt-0 mt-10 text-left md:space-x-12">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 lg:hidden sm:hidden md:block">
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold uppercase font-arimo tracking-widest text-sm mb-3">
                                Regional Offices
                            </h2>
                            <nav className="list-none mb-10">
                                <li className="mt-2">
                                    <a className="text-gray-600 text-sm hover:text-black">UAE</a>
                                </li>
                                <div className="my-3">
                                    {/* <h1 className="font-black uppercase text-lg font-arimo">Head Office</h1> */}
                                    <p className="mt-2 text-sm text-gray-600 font-jost">
                                        Office 212, second floor, Pyramid Center, Oud metha, Dubai.
                                    </p>
                                    <div className="my-4">
                                        <p className="my-2 text-sm text-gray-700 font-jost"><FontAwesomeIcon className="me-3" icon={faPhone} /><a href="tel:048719300">048719300</a></p>
                                        <p className="my-2 text-sm text-gray-700 font-jost"><FontAwesomeIcon className="me-3" icon={faEnvelope} /><a href="mailto:info@cgdc.ae">info@cgdc.ae</a></p>
                                    </div>
                                </div>
                                {/* <li className="mt-2">
                                    <a className="text-gray-600 text-sm hover:text-black">Saudi Arabia</a>
                                </li>
                                <li className="mt-2">
                                    <a className="text-gray-600 text-sm hover:text-black">Canada</a>
                                </li> */}
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold uppercase font-arimo tracking-widest text-sm mb-3">
                                Projects
                            </h2>
                            <nav className="list-none mb-10">
                                <li className="mt-2">
                                    <Link to={"/project/housing-and-urban-design"}>
                                        <a className="text-gray-600 text-sm cursor-pointer hover:text-black">Housing and Urban Design</a>
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link to={"/project/health-facility"}>
                                        <a className="text-gray-600 text-sm cursor-pointer hover:text-black">Health Facility</a>
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link to={"/project/industrial-projects"}>
                                        <a className="text-gray-600 text-sm cursor-pointer hover:text-black">Industrial Projects</a>
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link to={"/project/institutinal-buildings"}>
                                        <a className="text-gray-600 text-sm cursor-pointer hover:text-black">Institutional Buildings</a>
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link to={"/project/infrastructure"}>
                                        <a className="text-gray-600 text-sm cursor-pointer hover:text-black">Infrastructure</a>
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link to={"/project/mixed-use-projects"}>
                                        <a className="text-gray-600 text-sm cursor-pointer hover:text-black">Mixed-Use Projects</a>
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link to={"/project/recreational-tourism"}>
                                        <a className="text-gray-600 text-sm cursor-pointer hover:text-black">Recreational Tourism</a>
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link to={"/project/water-and-power"}>
                                        <a className="text-gray-600 text-sm cursor-pointer hover:text-black">Water and Power</a>
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold uppercase font-arimo tracking-widest text-sm mb-3">
                                Expertise
                            </h2>
                            <nav className="list-none mb-10">
                                <li className="mt-2">
                                    <Link to={"/services/architecture"}>
                                        <a className="text-gray-600 text-sm cursor-pointer hover:text-black">Architecture</a>
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link to={"/services/"}>
                                        <a className="text-gray-600 text-sm cursor-pointer hover:text-black">Environmental Engineering</a>
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link to={"/services/structure-engineering"}>
                                        <a className="text-gray-600 text-sm cursor-pointer hover:text-black">Structural Engineering</a>
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link to={"/services/"}>
                                        <a className="text-gray-600 text-sm cursor-pointer hover:text-black">Sustainability</a>
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link to={"/services/"}>
                                        <a className="text-gray-600 text-sm cursor-pointer hover:text-black">Urban Design and Landscape</a>
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link to={"/services/"}>
                                        <a className="text-gray-600 text-sm cursor-pointer hover:text-black">Industrial Design</a>
                                    </Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-white font-jost md:px-10 px-0">
                    <div className="container mx-auto py-4 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-400 text-sm text-center sm:text-left">
                            © Copyright 2023 CGD Consulting. All Rights Reserved.
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="ml-3 text-gray-400" href="https://www.instagram.com/cgdconsulting" target="_blank">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-400" href="https://www.linkedin.com/company/cgdconsulting/" target="_blank">
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={0}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="none"
                                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                    />
                                    <circle cx={4} cy={4} r={2} stroke="none" />
                                </svg>
                            </a>
                            <a className="text-gray-400" href="https://www.facebook.com/CGarchitectsandplanners" target="_blank">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="font-jost bg-neutral-600">
                    <div className="container mx-auto py-3 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-white text-sm text-center px-3">
                            <b>Disclamer:</b> The projects indicated in our company profile show hands-on experience of Hafeez {`Habibi's`} projects while being partner and co-owner of M/S Consultants Group and while working with NESPAK on various projects.
                        </p>
                    </div>
                </div>
            </footer >

        </>
    );
}


export default Footer;