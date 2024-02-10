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
import ContactUs from "../Pages/ExtraPages/ContactUs";
import OurOffers from "../Pages/ExtraPages/OurOffers";
import MyCard from "../Pages/MyUsers/MyCard/MyCard";
import CardRequest from "../Pages/Dashboard/Request/CardRequest/CardRequest";
import UserCardRequest from "../Pages/Dashboard/Request/CardRequest/UserCardRequest";
import MyLoan from "../Pages/MyUsers/MyLoan/MyLoan";
import LoanDeposit from "../Pages/MyUsers/MyLoan/LoanDeposit";
import LoanRequest from "../Pages/Dashboard/Request/LoanRequest/LoanRequest";
import UserLoanRequest from "../Pages/Dashboard/Request/LoanRequest/UserLoanRequest";
import OpenAccountDetails from "../Pages/Dashboard/OpenAccountDetails/OpenAccountDetails";
import UserLoanDetails from "../Pages/Dashboard/Request/LoanRequest/UserLoanDetails";
import SingleAccDetails from "../Pages/userRoutes/SingleAccDetails";
import Terms from "../Shares/ExtraPages/Terms";
import Faq from "../Shares/ExtraPages/Faq";
import Privacy from "../Shares/ExtraPages/Privacy";
import Careers from "../Shares/ExtraPages/Careers";
import CustomerReviews from "../Shares/ExtraPages/CustomerReviews";
import SecurityInformation from "../Shares/ExtraPages/SecurityInformation";
import Accessibility from "../Shares/ExtraPages/Accessibility";
import LegalInformation from "../Shares/ExtraPages/LegalInformation";
import Aboutus from "../Shares/ExtraPages/Aboutus";

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
        element: <LogIn />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/accountDetails/:accountType',
        element: <AccountDetails />
      },
      {
        path: '/cardDetails/:cardType',
        element: <CardDetails />
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
      {
        path: '/myCard',
        element: <MyCard />
      },
      {
        path: '/cardRequest/:id',
        element: <CardRequest />
      },
      {
        path: '/myLoan',
        element: <MyLoan />
      },
      {
        path: '/loanDeposit/:id',
        element: <LoanDeposit />
      },
      {
        path: '/loanRequest/:id',
        element: <LoanRequest />
      },
      {
        path: "/singleLoanDetail/:id",
        element: <UserLoanDetails />,
      },
      // {
      //   path: '/debtRepay/:id',
      //   element: <DebtRepay />
      // },
      {
        path: '/contactUs',
        element: <ContactUs />
      },
      {
        path: '/ourOffers',
        element: <OurOffers />
      },
      {
        path: "/terms&Conditions",
        element: <Terms />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      // {
      //   path: "/moneyTrans/:id",
      //   element: <MoneyTrans />,
      // },
      {
        path: "/customerReviews",
        element: <CustomerReviews />,
      },
      {
        path: "/securityInformation",
        element: <SecurityInformation />,
      },
      {
        path: "/accessibility",
        element: <Accessibility />,
      },
      {
        path: "/legalInformation",
        element: <LegalInformation />,
      },
      {
        path: "/aboutus",
        element: <Aboutus />,
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
      {
        path: "/dashboard/singleAccDetails/:id",
        element: <SingleAccDetails />,
      },
        {
          path: '/dashboard/openAccDetails/:id',
          element: <OpenAccountDetails />
        },
      {
        path: '/dashboard/depositRequest',
        element: <DepositRequest />
      },
      {
        path: "/dashboard/userCardRequest",
        element: <UserCardRequest />,
      },
      {
        path: "/dashboard/userLoanRequest",
        element: <UserLoanRequest />,
      },
      {
        path: "/dashboard/allUsers",
        element: <AllUsers />,
      },
    ]
  }
])
export default routes;