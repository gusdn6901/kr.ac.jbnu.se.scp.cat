import React from 'react';

// core components
import BeforeLoginBanner from '../banner/BeforeLoginBanner';

// sections for this page
// import HeaderComponent from './sections/headercomponent';
// import BannerComponent from './sections/bannercomponent';
// import FormBannerComponent from './sections/formbannercomponent';
// import FeatureComponent from './sections/featurecomponent';
// import PortfolioComponent from './sections/portfoliocomponent';
// import PricingComponent from './sections/pricingcomponent';
// import TeamComponent from './sections/teamcomponent';
// import TestimonialComponent from './sections/testimonialcomponent';
// import BlogComponent from './sections/blogcomponent';
// import C2aComponent from './sections/c2acomponent';
// import ContactComponent from './sections/contactcomponent';
// import CallToAction from '../../components/call-to-action/CallToAction';
import Portfolio from './sections/beforelogin/portfoliocomponent';
import HelpInfoComponent from './sections/beforelogin/helpinfocomponent';

const CustomComponents = () => {
  return (
    <div>
      {/* <Banner2 /> */}
      <Portfolio />
      <HelpInfoComponent />
      {/* <TestimonialComponent /> */}
      {/* <HeaderComponent />
      <BannerComponent />
      <FormBannerComponent />
      <FeatureComponent />
      <PortfolioComponent />
      <PricingComponent />
      <TeamComponent />
      <BlogComponent />
      <C2aComponent />
      <ContactComponent />
      <CallToAction /> */}
    </div>
  );
};

export default CustomComponents;
