import React from "react";
import Container from "./PricingCard.style";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import useTranslation from "@/app/hooks/useTranslation";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PricingCard = () => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <div className="pricing_card">
        <p className="pricing_card--label"> Enterprise Plus</p>
        <p className="pricing_card--title"> Custom Subscription</p>
        <Link href="" className="global_button pricing_card--btn">
          Get Start
        </Link>
        <p className="pricing_card--desc">
          {" "}
          Create a more efficient and effective workflow with our easy-to-use
          tools.
        </p>
        <div className="feature_list">
          <p className="feature_list--header">
            Enjoy our Free Edition and benefit from
          </p>
          <ul className="feature_list--items">
            <li>
              <CheckCircleIcon />
              30-Day free trial
            </li>
            <li>
              <CheckCircleIcon />
              Shared knowledge across all workspaces in the enterprise
            </li>
            <li>
              <CheckCircleIcon />
              30-Day free trial
            </li>
            <li>
              <CheckCircleIcon />
              30-Day free trial
            </li>
            <li>
              <CheckCircleIcon />
              30-Day free trial
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default PricingCard;
