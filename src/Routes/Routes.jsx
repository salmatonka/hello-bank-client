import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Shares/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/Forms/LogIn";
import Register from "../Pages/Forms/Register";
import AccountDetails from "../Pages/Details/AccountDetails";
import CardDetails from "../Pages/Details/CardDetails";
import LoanDetails from "../Pages/Details/LoanDetails";
import AccountsForm from "../Pages/AccForms/AccountsForm";
import AccountsProfile from "../Pages/Profiles/AccountsProfile";
import MyAccount from "../Pages/MyUsers/MyAccount/MyAccount";
import AccountDeposit from "../Pages/MyUsers/MyAccount/AccountDeposit";
// import DepositRequest from "../Pages/Dashboard/DepositRequest/DepositRequest";
import DashboardLayout from "./DashboardLayout";
import DepositRequest from "../Pages/Dashboard/Request/DepositRequest/DepositRequest";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AccountInfo from "../Pages/Dashboard/AccountInfo/AccountInfo";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/logIn',
                element:<LogIn /> 
            },
            {
                path: '/register',
                element:<Register /> 
            },
            {
                path: '/accountDetails/:accountType',
                element: <AccountDetails />
              },
              {
                path: '/cardDetails/:cardType',
                element: <CardDetails/>
              },
              {
                path: '/loanDetails/:loanType',
                element: <LoanDetails />
              },
              {
                path: '/accountsForm',
                element: <AccountsForm />
              },
              {
                path: '/accountsProfile',
                element: <AccountsProfile />
              },
              {
                path: '/myAccount',
                element: <MyAccount />
              },
              {
                path: '/accountDeposit/:id',
                element: <AccountDeposit />
              },
        ]
    },
    {
        path: "/dashboard",
        errorElement: <ErrorPage />,
        element: <DashboardLayout />,
        children: [
          {
            path: '/dashboard',
            element: <AccountInfo />
          },
        //   {
        //     path: '/dashboard/openAccountDetail/:id',
        //     element: <OpenAccountDetail />
        //   },
          {
            path: '/dashboard/depositRequest',
            element: <DepositRequest />
          },
        //   {
        //     path: "/dashboard/userCardRequest",
        //     element: <UserCardRequest />,
        //   },
        //   {
        //     path: "/dashboard/userLoanRequest",
        //     element: <UserLoanRequest />,
        //   },
          {
            path: "/dashboard/allUsers",
            element: <AllUsers />,
          },
        ]
      }
])
export default routes;