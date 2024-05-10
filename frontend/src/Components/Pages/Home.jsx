import React from 'react';
import HeadContent from '../HeadContent/HeadContent';
import Slider from '../Slider/Slider';
import Schedule from '../Schedule/Schedule';
import Features from '../Features/Features';
import FunFacts from '../FunFacts/FunFacts';
import Call from '../Call/Call';
import Services from '../Services/Services';
import PricingTable from '../PricingTable/PricingTable';
import Clients from '../Clients/Clients';
import BlogTable from '../BlogTable/BlogTable';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <HeadContent />
      <div>
        <Slider />
        {/*<Schedule />*/}
        <br></br>
        <Features />
        {/*<FunFacts />*/}
        {/*<Call />*/}
        <Services />
        <PricingTable />
        {/*<Clients />*/}
        {/*<BlogTable />*/}
        <Footer />
      </div>
    </>
  );
}

export default Home;
