import React from "react";
import Container from "./PSMapTool_HowItWorks.style";
import { motion } from "framer-motion";
import CollectAnalyzeData from "@/app/assets/images/PSMapTool/CollectAnalyzeData.png";
import Image from "next/image";

const PSMapToolHowItWorks = () => {
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
          className="PSMapTool_HowItWorks"
        >
          <p className="PSMapTool_HowItWorks--title">How it Works?</p>
          <div className="HowItWorks_list">
            <div className="item">
              <div className="item_image">
                <Image src={CollectAnalyzeData} alt="CollectAnalyzeData" />
              </div>
              <div className="item_separator">
                <span className="item_separator--number">01</span>
              </div>
              <div className="item_content">
                <p className="item_content--title">Collect & Analyze Data</p>
                <p className="item_content--desc">
                  PSMap allows you to collect data from various sources,
                  including incident reports, safety observations, and near-miss
                  reports. You can then analyze the data to identify patterns of
                  problems.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item_image">
                <Image src={CollectAnalyzeData} alt="CollectAnalyzeData" />
              </div>
              <div className="item_separator">
                <span className="item_separator--number">02</span>
              </div>
              <div className="item_content">
                <p className="item_content--title">Collect & Analyze Data</p>
                <p className="item_content--desc">
                  PSMap allows you to collect data from various sources,
                  including incident reports, safety observations, and near-miss
                  reports. You can then analyze the data to identify patterns of
                  problems.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item_image">
                <Image src={CollectAnalyzeData} alt="CollectAnalyzeData" />
              </div>
              <div className="item_separator">
                <span className="item_separator--number">01</span>
              </div>
              <div className="item_content">
                <p className="item_content--title">Collect & Analyze Data</p>
                <p className="item_content--desc">
                  PSMap allows you to collect data from various sources,
                  including incident reports, safety observations, and near-miss
                  reports. You can then analyze the data to identify patterns of
                  problems.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="item_image">
                <Image src={CollectAnalyzeData} alt="CollectAnalyzeData" />
              </div>
              <div className="item_separator">
                <span className="item_separator--number">02</span>
              </div>
              <div className="item_content">
                <p className="item_content--title">Collect & Analyze Data</p>
                <p className="item_content--desc">
                  PSMap allows you to collect data from various sources,
                  including incident reports, safety observations, and near-miss
                  reports. You can then analyze the data to identify patterns of
                  problems.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default PSMapToolHowItWorks;
