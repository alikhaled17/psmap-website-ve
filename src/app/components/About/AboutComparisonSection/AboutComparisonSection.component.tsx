/* eslint-disable react/no-unescaped-entities */
import useTranslation from "@/app/hooks/useTranslation";
import { motion } from "framer-motion";
import Container from "./AboutComparisonSection.style";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import Image from "next/image";
import CheckMark from "@/app/assets/images/About/Checkmark.png";
import CrossMark from "@/app/assets/images/About/Crossmark.png";

// const TableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: "#EEEEEE",
//     color: "#000",
//     textAlign: "center",
//     borderRight: "1px solid #CACACA",
//   },
//   "td, th": {
//     borderRight: "1px solid #CACACA",
//   },
// }));

const AboutComparisonSection = () => {
  const { t, locale, setLocale } = useTranslation();

  const createData = (name: string, calories: number, fat: number) => {
    return { name, calories, fat };
  };

  const rows = [
    createData("Frozen", 159, 40),
    createData("Frozen", 159, 40),
    createData("Frozen", 159, 40),
    createData("Frozen", 159, 40),
  ];

  return (
    <Container>
      <div className="warped_container">
        <div className="aboutcomparison_container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.1,
              },
            }}
            className="aboutcomparison_section"
          >
            <p className="primary_text aboutcomparison_section--title">
              {t("about_comparison").title}
            </p>

            <div className="aboutcomparison_section--table">
              <TableContainer
                className="table_container"
                component={Paper}
                sx={{ borderRadius: "8px" }}
              >
                <Table aria-label="customized table">
                  <TableHead>
                    <TableRow className="table_header">
                      <TableCell
                        className="table_header--cell"
                        align={locale === "en" ? "left" : "right"}
                      >
                        {t("about_comparison").table_header[0]}
                      </TableCell>
                      <TableCell className="table_header--cell" align="center">
                        {t("about_comparison").table_header[1]}
                      </TableCell>
                      <TableCell className="table_header--cell" align="center">
                        {t("about_comparison").table_header[2]}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {t("about_comparison").table_rows.map(
                      (row: any, i: number) => (
                        <TableRow key={i} className="table_body">
                          <TableCell
                            className="table_body--cell"
                            component="th"
                            scope="row"
                            sx={{ fontWeight: "bold", fontSize: "16px" }}
                            align={locale === "en" ? "left" : "right"}
                          >
                            {row[0]}
                          </TableCell>
                          <TableCell
                            className="table_body--cell"
                            align="center"
                          >
                            {row[1] ? (
                              <Image src={CheckMark} alt="check mark" />
                            ) : (
                              <Image src={CrossMark} alt="Cross mark" />
                            )}
                          </TableCell>
                          <TableCell
                            className="table_body--cell"
                            align="center"
                          >
                            {row[2] ? (
                              <Image src={CheckMark} alt="check mark" />
                            ) : (
                              <Image src={CrossMark} alt="Cross mark" />
                            )}
                          </TableCell>
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default AboutComparisonSection;
