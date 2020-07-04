import React from "react";
import MaterialTable from "material-table";
import Utils from "../../common/utils";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  tableBase: {
    marginTop: "2rem"
  },
  tableBackground: {
    background: "rgba(255, 255, 255, 0.2)"
  }
});

const CasesTable = ({ data }) => {
  const icons = Utils.tableIcons();
  const classes = useStyles();
  const columns = [
    { title: "City", field: "admin2" },
    { title: "State", field: "provinceState" },
    { title: "Confirmed", field: "confirmed" },
    { title: "Recovered", field: "recovered" },
    { title: "Deaths", field: "deaths" }
  ];

  return (
    <div className={`animate__animated animate__fadeIn ${classes.tableBase}`}>
      <MaterialTable
        style={{ background: "rgba(255, 255, 255, 0.8)", fontFamily:  "Roboto, Helvetica, Arial sans-serif" }}
        data={data}
        columns={columns}
        icons={icons}
        title={"Local Cases:"}
      />
    </div>
  );
};

export default CasesTable;
