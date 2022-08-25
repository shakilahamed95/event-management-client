import React from 'react';
import PricingPlans from '../../Component/Service/PricingPlans/PricingPlans';
import ServiceBanner from '../../Component/Service/ServiceBanner';
import Specialists from '../../Component/Service/Specialists/Specialists';


const Services = () => {
    return (
        <div>
            <ServiceBanner/>
            <Specialists/>
            <PricingPlans/>
        </div>
    );
};

export default Services;