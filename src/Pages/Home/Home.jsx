import React from 'react'
import useTitle from '../../Hooks/useTitle';
import HeadLine from '../HomePages/HeadLine';
import HomeBanner from '../HomePages/HomeBanner';
import CardsSlider from '../HomePages/CardsSlider';
import TaxCalculation from '../HomePages/TaxCalculation';
import WhatsNew from '../HomePages/WhatsNew';
import FinancialPlanning from '../HomePages/FinancialPlanning';
import Security from '../HomePages/Security';
import FinancialEducation from '../HomePages/FinancialEducation';
import DeveloperPages from '../HomePages/DeveloperPages';
import NeedHelp from '../HomePages/NeedHelp';

const Home = () => {
  useTitle('Home');
  return (
      <div>
          {/* <HeadLine /> */}
          <HomeBanner />
          <CardsSlider />
          <TaxCalculation />
          <WhatsNew />
          <FinancialPlanning />
          <Security />
          <FinancialEducation />
          <DeveloperPages />
          <NeedHelp /> 
      </div>
  );
};

export default Home
