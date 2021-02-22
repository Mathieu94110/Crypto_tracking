import React, { FC } from "react";
import { IItems } from "./topSevenTrending";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    tableAndTitle: {
      height: "100%",
      width: "100%",
    },
    title: {
      height: "45px",
      lineHeight: "45px",
      fontSize: "1.2em",
      color: "#fff",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.7em",
        height: "15%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
    },
    table: {
      fontWeight: 600,
      height: "100%",
      width: "100%",
      [theme.breakpoints.up("md")]: {
        height: "80%",
      },
    },
    column: {
      color: "gold",
      paddingBottom: "10px",
    }, //look at this probleme for image vertical padding
    "@global": {
      "table tbody tr td:last-child ": {
        [theme.breakpoints.up("md")]: {
          padding: 0,
        },
      },
    },
  })
);

interface TableProps {
  title: string;
  tableData: IItems[];
  headingColumns: string[];
  breakOn?: string;
}

const TopSevenTrendingTable: FC<TableProps> = ({
  title,
  tableData,
  headingColumns,
}) => {
  const data = (tableData as Array<IItems>).map((row, index) => {
    let rowData: { key: string; val: string }[] = [];

    Object.entries(row).forEach((data, i) => {
      rowData.push({
        key: headingColumns[i],
        val: data[1],
      });
    });

    return (
      <tr key={index}>
        {rowData.map((data, index) => (
          <td key={index} data-heading={data.key}>
            {data.key == "Image" ? (
              <img src={data.val} width="30" height="30" />
            ) : (
              <span>{data.val}</span>
            )}
          </td>
        ))}
      </tr>
    );
  });
  const classes = useStyles();
  return (
    <div className={classes.tableAndTitle}>
      <h2 className={classes.title}>{title}</h2>

      <table className={classes.table}>
        <thead>
          <tr>
            {headingColumns.map((col, index) => (
              <th key={index} className={classes.column}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
};

export default TopSevenTrendingTable;
