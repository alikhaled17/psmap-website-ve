import React from "react";
import Container from "./Footer.style";
import { motion } from "framer-motion";
import Image from "next/image";
import psmapLogo from "@/app/assets/images/global/logo-lg-white.svg";
import Gmail from "@/app/assets/images/global/footer_gmail.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { Youtube, Call, Sms, Whatsapp } from "iconsax-react";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {
  return (
    <Container>
      <div className="warped_container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              delay: 0.1,
            },
          }}
          className="footer"
        >
          <div className="footer--body">
            <div className="content">
              <Image src={psmapLogo} alt="psmap_logo" className="psmap_logo" />
              <p className="content--desc">
                PSmap is a cutting-edge collaborative <br /> problem-solving
                tool that connects departments to <br /> improve collaboration
                and efficiency.
              </p>
              <div className="content--icons">
                <p className="primary_text">Follow us on</p>
                <div className="content--icons_list">
                  <Link
                    href="https://network.psmap.io/"
                    target="blank"
                    className="social_icon"
                  >
                    <Image src={Gmail} alt="community" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/psmap/"
                    target="blank"
                    className="social_icon"
                  >
                    <LinkedInIcon />
                  </Link>
                  <Link
                    href="https://twitter.com/PSMap_"
                    target="blank"
                    className="social_icon"
                  >
                    <TwitterIcon />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@psmap"
                    target="blank"
                    className="social_icon"
                  >
                    <Youtube variant="Bold" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="links">
              <span className="primary_text links--label">Company</span>
              <span className="primary_text">
                <Link href="/" className="links--route">
                  Home
                </Link>
              </span>
              <span className="primary_text">
                <Link href="PSMapTool" className="links--route">
                  PSMap Tool
                </Link>
              </span>
              <span className="primary_text">
                <Link href="" className="links--route">
                  Training
                </Link>
              </span>
              <span className="primary_text">
                <Link href="" className="links--route">
                  About
                </Link>
              </span>
              <span className="primary_text">
                <Link href="" className="links--route">
                  Resources
                </Link>
              </span>
              <span className="primary_text">
                <Link href="" className="links--route">
                  Contact
                </Link>
              </span>
              <span className="primary_text">
                <Link href="" className="links--route">
                  Join community
                </Link>
              </span>
            </div>
            <div className="contacts">
              <span className="primary_text contacts--label">
                Contact PSMap
              </span>
              <span className="primary_text contacts--item">
                <Call variant="Bold" />
                <small>+966500928211</small>
              </span>
              <span className="primary_text contacts--item">
                <Sms variant="Bold" />
                <small>Info@psmap.io</small>
              </span>
              {/* <span className="primary_text contacts--item">
                <Whatsapp variant="Bold" />
                <small>+966500928211</small>
              </span> */}
            </div>
          </div>
          <div className="footer--tail">
            <span className="copyrights">
              Copyright © 2023 PSMap. All rights reserved
            </span>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Footer;
