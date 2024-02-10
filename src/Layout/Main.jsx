import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { FaHome, FaBloggerB } from "react-icons/fa";
import { GiBank, GiReceiveMoney } from "react-icons/gi";
import { AiFillContacts } from "react-icons/ai";
import { BsCardText } from "react-icons/bs";
import { MdOutlineManageAccounts, MdDashboardCustomize } from "react-icons/md";
import { BsBoxArrowInRight, BsBoxArrowInLeft } from "react-icons/bs";
import { toast } from "react-toastify";
import { useEffect, useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Footer from "../Shares/Footer/Footer";
import HeadLine from "../Pages/HomePages/HeadLine";
import HomeBanner from "../Pages/HomePages/HomeBanner";

const Main = () => {
    // logOut
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const [open, setOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);

    const [openCard, setOpenCard] = useState(false);
    const [cards, setCards] = useState([]);

    const [openLoan, setOpenLoan] = useState(false);
    const [loans, setLoans] = useState([]);


    const { isLoading, refetch, data: types = [] } = useQuery({
        queryKey: ["/accountsTypes"],
        queryFn: async () => {
            const res = await fetch(
                "https://hello-bank-server.vercel.app/accountType"
            );
            const data = await res.json();
            return data;
        },
    });
    // console.log(types)

    useEffect(() => {
        fetch('https://hello-bank-server.vercel.app/cardTypes')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);


    useEffect(() => {
        fetch('https://hello-bank-server.vercel.app/loanTypes')
            .then(res => res.json())
            .then(data => setLoans(data))
    }, [])

    // handleLogOut
    const handleLogOut = () => {
        logOut(user?.email)
            .then(toast.warning('user logOut...!'))
            .catch(error => toast.error(error.message))
    }

    return (
        <div className='bg-gray-800'>
            {/* <button  data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button> */}


            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {/* responsive */}


                            <a href="https://flowbite.com/" className="flex items-center pl-2.5 mb-5">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Hello_bank%21_Logo.png" className="h-6 mr-3 sm:h-7" alt="logo" />
                                <span
                                    className="font-extrabold text-3xl text-center text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-sky-500 self-center whitespace-nowrap">Hello Bank</span>
                            </a>
                            <hr className="w-84 border border-sky-500 mb-6" />


                            {/* home */}
                            <li className='pb-4 px-4'>
                                <Link to="/" className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                    <FaHome />
                                    <span className="ml-3">Home</span>
                                </Link>
                            </li>


                            {/* ContactUs */}
                            <li className='pb-4 px-4'>
                                <Link to="/contactUs" className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                    <AiFillContacts />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Contact Us</span>
                                </Link>
                            </li>

                            {/* our offer */}
                            <li className='pb-4 px-4'>
                                <Link to="/ourOffers" className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                    <FaBloggerB />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Our Offers</span>
                                </Link>
                            </li>

                            {
                                user?.email ? (<>

                                    {/* AccountApi */}
                                    <li className='pb-4 px-4'
                                    >
                                        <button
                                            onClick={() => setAccountOpen(!accountOpen)}
                                            className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-800 shadow-md shadow-sky-400"
                                        >
                                            <div className="flex items-center">
                                                <MdOutlineManageAccounts className="mr-2" />
                                                <span className='mr-10'>Accounts</span>
                                            </div>
                                            {accountOpen ? (
                                                <HiChevronUp className="text-xl " />
                                            ) : (
                                                <HiChevronDown className="text-xl " />
                                            )}
                                        </button>
                                        {accountOpen && (
                                            <ul className="group ease-linear duration-700 z-40 rounded-lg shadow-inner shadow-gray-700 hover:shadow-lg hover:shadow-primary p-2 bg-sky-300 w-full text-gray-800">
                                                {types?.map(type =>
                                                    <li
                                                        onClick={() => setOpen(!open)}
                                                        key={type?._id}
                                                        className="group-hover:scale-90 hover:!scale-110 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-gray-800 hover:bg-pink-200 hover:text-gray-800  duration-700"
                                                    >
                                                        <Link
                                                            to={`/accountDetails/${type?.accountType}`}
                                                            className="space-x-3 block w-full hover:ml-2 duration-300 rounded-md py-2"
                                                        >
                                                            {type?.name}
                                                        </Link>
                                                    </li>

                                                )}
                                            </ul>
                                        )}
                                    </li>

                                    {/* CardApi */}
                                    <li className='pb-4 px-4'
                                    >
                                        <button
                                            onClick={() => setOpenCard(!openCard)}
                                            className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-800 shadow-md shadow-sky-400"
                                        >
                                            <div className="flex items-center">
                                                <BsCardText className="mr-2" />
                                                <span className='mr-14'>Cards</span>
                                            </div>
                                            {openCard ? (
                                                <HiChevronUp className="text-xl " />
                                            ) : (
                                                <HiChevronDown className="text-xl " />
                                            )}
                                        </button>
                                        {openCard && (
                                            <ul className="group ease-linear duration-700 z-40 rounded-lg shadow-inner shadow-gray-700 hover:shadow-lg hover:shadow-primary p-2 bg-sky-300 w-full text-gray-800">
                                                {cards?.map(card =>
                                                    <li
                                                        onClick={() => setOpen(!open)}
                                                        key={card._id}
                                                        className="group-hover:scale-90 hover:!scale-110 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-gray-800 hover:bg-pink-200 hover:text-gray-800  duration-700"
                                                    >
                                                        <Link
                                                            to={`/cardDetails/${card.cardType}`}
                                                            className="space-x-3 block w-full hover:ml-2 duration-300 rounded-md py-2"
                                                        >
                                                            {card?.name}
                                                        </Link>
                                                    </li>

                                                )}
                                            </ul>
                                        )}
                                    </li>

                                    {/* LoanApi */}
                                    <li className='pb-4 px-4'
                                    >
                                        <button
                                            onClick={() => setOpenLoan(!openLoan)}
                                            className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-800 shadow-md shadow-sky-400"
                                        >
                                            <div className="flex items-center">
                                                <GiReceiveMoney className="mr-2" />
                                                <span className='mr-14'>Loans</span>
                                            </div>
                                            {openLoan ? (
                                                <HiChevronUp className="text-xl " />
                                            ) : (
                                                <HiChevronDown className="text-xl " />
                                            )}
                                        </button>
                                        {openLoan && (
                                            <ul className="group ease-linear duration-700 z-40 rounded-lg shadow-inner shadow-gray-700 hover:shadow-lg hover:shadow-primary p-2 bg-sky-300 w-full text-gray-800">
                                                {loans?.map(loan =>
                                                    <li
                                                        onClick={() => setOpen(!open)}
                                                        key={loan._id}
                                                        className="group-hover:scale-90 hover:!scale-110 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-gray-800 hover:bg-pink-200 hover:text-gray-800  duration-700"
                                                    >
                                                        <Link
                                                            to={`/loanDetails/${loan.loanType}`}
                                                            className="space-x-3 block w-full hover:ml-2 duration-300 rounded-md py-2"
                                                        >
                                                            {loan?.name}
                                                        </Link>
                                                    </li>

                                                )}
                                            </ul>
                                        )}
                                    </li>

                                    {/* Dashboard */}
                                    <li className='pb-4 px-4'>
                                        <a href="/dashboard" className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                            <MdDashboardCustomize />
                                            <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                                        </a>
                                    </li>

                                    {/* LogOut */}
                                    <li className='pb-4 px-4'>
                                        <button onClick={handleLogOut} className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                            <BsBoxArrowInLeft />
                                            <span className=" ml-3 ">LogOut</span>
                                        </button>
                                    </li>

                                    {/* updateProfile */}
                                    <div className=" pb-4 px-4">
                                        <div className="bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 rounded-lg shadow-md shadow-sky-400 py-2 px-4">
                                            <div className="flex  ">
                                                <img alt="" className="w-12 h-12 rounded-full  dark:bg-gray-500 " src={user?.photoURL} />
                                                <h2 className='text-gray-900 text-xl font-bold pl-2'>{user?.displayName}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </>) : (<>

                                    {/* Login */}
                                    <li className='pb-4 px-4'>
                                        <a href="/logIn" className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                            <BsBoxArrowInRight />
                                            <span className="flex-1 ml-3 whitespace-nowrap">LogIn</span>
                                        </a>
                                    </li>

                                </>)
                            }

                        </ul>


                    </div>
                    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                </div>


                <div className="navbar-center  hidden lg:flex">

                    <HeadLine />

                </div>

            </div>


            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-900 ">
                    <a href="https://flowbite.com/" className="flex items-center pl-2.5 mb-5">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Hello_bank%21_Logo.png" className="h-6 mr-3 sm:h-7" alt="logo" />
                        <span
                            className="font-extrabold text-3xl text-center text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-sky-500 self-center whitespace-nowrap">Hello Bank</span>
                    </a>
                    <hr className="w-84 border border-sky-500 mb-6" />

                    <ul class="space-y-2 font-medium">
                        {/* home */}
                        <li className='pb-4 px-4'>
                            <Link to="/" className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                <FaHome />
                                <span className="ml-3">Home</span>
                            </Link>
                        </li>


                        {/* ContactUs */}
                        <li className='pb-4 px-4'>
                            <Link to="/contactUs" className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                <AiFillContacts />
                                <span className="flex-1 ml-3 whitespace-nowrap">Contact Us</span>
                            </Link>
                        </li>

                        {/* AboutUs */}
                        {/* <li className='pb-4 px-4'>
                          <Link to="/ourOffers" className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                              <GiBank />
                              <span className="flex-1 ml-3 whitespace-nowrap">OurOffers</span>
                          </Link>
                      </li> */}

                        {/* our offer */}
                        <li className='pb-4 px-4'>
                            <Link to="/ourOffers" className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                <FaBloggerB />
                                <span className="flex-1 ml-3 whitespace-nowrap">Our Offers</span>
                            </Link>
                        </li>

                        {
                            user?.email ? (<>

                                {/* AccountApi */}
                                <li className='pb-4 px-4'
                                >
                                    <button
                                        onClick={() => setAccountOpen(!accountOpen)}
                                        className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-800 shadow-md shadow-sky-400"
                                    >
                                        <div className="flex items-center">
                                            <MdOutlineManageAccounts className="mr-2" />
                                            <span className='mr-10'>Accounts</span>
                                        </div>
                                        {accountOpen ? (
                                            <HiChevronUp className="text-xl " />
                                        ) : (
                                            <HiChevronDown className="text-xl " />
                                        )}
                                    </button>
                                    {accountOpen && (
                                        <ul className="group ease-linear duration-700 z-40 rounded-lg shadow-inner shadow-gray-700 hover:shadow-lg hover:shadow-primary p-2 bg-sky-300 w-full text-gray-800">
                                            {types?.map(type =>
                                                <li
                                                    onClick={() => setOpen(!open)}
                                                    key={type?._id}
                                                    className="group-hover:scale-90 hover:!scale-110 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-gray-800 hover:bg-pink-200 hover:text-gray-800  duration-700"
                                                >
                                                    <Link
                                                        to={`/accountDetails/${type?.accountType}`}
                                                        className="space-x-3 block w-full hover:ml-2 duration-300 rounded-md py-2"
                                                    >
                                                        {type?.name}
                                                    </Link>
                                                </li>

                                            )}
                                        </ul>
                                    )}
                                </li>

                                {/* CardApi */}
                                <li className='pb-4 px-4'
                                >
                                    <button
                                        onClick={() => setOpenCard(!openCard)}
                                        className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-800 shadow-md shadow-sky-400"
                                    >
                                        <div className="flex items-center">
                                            <BsCardText className="mr-2" />
                                            <span className='mr-14'>Cards</span>
                                        </div>
                                        {openCard ? (
                                            <HiChevronUp className="text-xl " />
                                        ) : (
                                            <HiChevronDown className="text-xl " />
                                        )}
                                    </button>
                                    {openCard && (
                                        <ul className="group ease-linear duration-700 z-40 rounded-lg shadow-inner shadow-gray-700 hover:shadow-lg hover:shadow-primary p-2 bg-sky-300 w-full text-gray-800">
                                            {cards?.map(card =>
                                                <li
                                                    onClick={() => setOpen(!open)}
                                                    key={card._id}
                                                    className="group-hover:scale-90 hover:!scale-110 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-gray-800 hover:bg-pink-200 hover:text-gray-800  duration-700"
                                                >
                                                    <Link
                                                        to={`/cardDetails/${card.cardType}`}
                                                        className="space-x-3 block w-full hover:ml-2 duration-300 rounded-md py-2"
                                                    >
                                                        {card?.name}
                                                    </Link>
                                                </li>

                                            )}
                                        </ul>
                                    )}
                                </li>

                                {/* LoanApi */}
                                <li className='pb-4 px-4'
                                >
                                    <button
                                        onClick={() => setOpenLoan(!openLoan)}
                                        className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-800 shadow-md shadow-sky-400"
                                    >
                                        <div className="flex items-center">
                                            <GiReceiveMoney className="mr-2" />
                                            <span className='mr-14'>Loans</span>
                                        </div>
                                        {openLoan ? (
                                            <HiChevronUp className="text-xl " />
                                        ) : (
                                            <HiChevronDown className="text-xl " />
                                        )}
                                    </button>
                                    {openLoan && (
                                        <ul className="group ease-linear duration-700 z-40 rounded-lg shadow-inner shadow-gray-700 hover:shadow-lg hover:shadow-primary p-2 bg-sky-300 w-full text-gray-800">
                                            {loans?.map(loan =>
                                                <li
                                                    onClick={() => setOpen(!open)}
                                                    key={loan._id}
                                                    className="group-hover:scale-90 hover:!scale-110 hover:shadow-lg hover:shadow-gray-700 hover:text-center hover:duration-500 rounded-lg font-semibold text-gray-800 hover:bg-pink-200 hover:text-gray-800  duration-700"
                                                >
                                                    <Link
                                                        to={`/loanDetails/${loan.loanType}`}
                                                        className="space-x-3 block w-full hover:ml-2 duration-300 rounded-md py-2"
                                                    >
                                                        {loan?.name}
                                                    </Link>
                                                </li>

                                            )}
                                        </ul>
                                    )}
                                </li>

                                {/* Dashboard */}
                                <li className='pb-4 px-4'>
                                    <a href="/dashboard" className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                        <MdDashboardCustomize />
                                        <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                                    </a>
                                </li>

                                {/* LogOut */}
                                <li className='pb-4 px-4'>
                                    <button onClick={handleLogOut} className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                        <BsBoxArrowInLeft />
                                        <span className=" ml-3 ">LogOut</span>
                                    </button>
                                </li>

                                {/* updateProfile */}
                                <div className=" pb-4 px-4">
                                    <div className="bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 rounded-lg shadow-md shadow-sky-400 py-2 px-4">
                                        <div className="flex  ">
                                            <img alt="" className="w-12 h-12 rounded-full  dark:bg-gray-500 " src={user?.photoURL} />
                                            <h2 className='text-gray-900 text-xl font-bold pl-2'>{user?.displayName}</h2>
                                        </div>
                                    </div>
                                </div>
                            </>) : (<>

                                {/* Login */}
                                <li className='pb-4 px-4'>
                                    <a href="/logIn" className="flex items-center p-2 rounded-lg  group w-full bg-gray-700 hover:bg-gray-100  bg-gradient-to-r from-sky-300 to-pink-300 hover:scale-110 duration-500 hover:text-gray-100 shadow-md shadow-sky-400">
                                        <BsBoxArrowInRight />
                                        <span className="flex-1 ml-3 whitespace-nowrap">LogIn</span>
                                    </a>
                                </li>

                            </>)
                        }

                    </ul>


                </div>
            </aside>



            <div class="lg:pl-4 sm:ml-64">
                <div class="">
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </div>



        // <div>


        //     <div className="navbar bg-base-100">
        //         <div className="navbar-start">
        //             <div className="dropdown">
        //                 <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //                 </div>
        //                 <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        //                     responsive



        //                 </ul>
        //             </div>
        //             <a className="btn btn-ghost text-xl">daisyUI</a>
        //         </div>
        //         <div className="navbar-center hidden lg:flex">
        //             <ul className="menu menu-horizontal px-1">
        //                 {/* <li><a>Item 1</a></li>

        //   <li><a>Item 3</a></li> */}
        //                 ffff
        //             </ul>
        //         </div>

        //     </div>

        //     <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        //         <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        //             <ul class="space-y-2 font-medium">
        //                 <li>
        //                     <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        //                         <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
        //                             <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
        //                             <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
        //                         </svg>
        //                         <span class="ms-3">Dashboard</span>
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        //                         <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
        //                             <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
        //                         </svg>
        //                         <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
        //                         <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        //                         <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        //                             <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
        //                         </svg>
        //                         <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
        //                         <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        //                         <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
        //                             <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
        //                         </svg>
        //                         <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        //                         <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
        //                             <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
        //                         </svg>
        //                         <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        //                         <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
        //                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
        //                         </svg>
        //                         <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        //                         <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        //                             <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
        //                             <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
        //                             <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
        //                         </svg>
        //                         <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
        //                     </a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </aside>

        //     <div class="p-4 sm:ml-64">
        //         grr
        //     </div>

        // </div>

    );
};

export default Main
