import CheckMark from "@/app/assets/images/PSMapTool/Checkmark.svg";
import useTranslation from "@/app/hooks/useTranslation";
import Image from "next/image";
import Link from "next/link";
import Container from "./PricingCard.style";

const PricingCard = ({ data }: any) => {
  const { t, locale, setLocale } = useTranslation();

  return (
    <Container>
      <div className="pricing_card">
        <p className="pricing_card--label"> {data.label}</p>
        <p className="pricing_card--title"> {data.price}</p>
        <Link
          href={{
            pathname: "/PSMapTool/register",
            query: { formType: data.formType },
          }}
          className="global_button pricing_card--btn"
        >
          {data.btn}
        </Link>
        <p className="pricing_card--desc">{data.desc}</p>
        <div className="feature_list">
          <p className="feature_list--header">{data.list_label}</p>
          <ul className="feature_list--items">
            {data.list.map((m: string) => (
              <li key={m}>
                <Image src={CheckMark} alt="check mark" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default PricingCard;
