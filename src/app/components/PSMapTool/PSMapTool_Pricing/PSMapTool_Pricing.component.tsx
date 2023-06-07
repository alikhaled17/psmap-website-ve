/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Container from "./PSMapTool_Pricing.style";
import { motion } from "framer-motion";
import PricingCard from "../../shared/PricingCard/PricingCard.component";

const PSMapToolPricing = () => {
  return (
    <Container>
      <div className="warped_container">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          }}
          className="PSMapTool_Pricing"
        >
          <p className="PSMapTool_Pricing--title">
            The best RCA, For the best Pricing{" "}
          </p>
          <div className="PSMapTool_Pricing--pricing_types">
            <PricingCard />
            <PricingCard />
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default PSMapToolPricing;
