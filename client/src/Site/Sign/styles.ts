export const styles = {
  root: {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "20px",
    marginTop: "30px",
    paddingTop: "70px",
    backdropFilter: "blur(20px)",
    border: "1px solid #FFFFFF",
    boxShadow: "0 0 30px rgba(0,0,0,.5)",
  },
  textField: {
    width: "290px",
    margin: "30px 0 10px 0",
    color: "red",
    "&:active": { background: "none" },
  },
  toogleBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: "30px",
  },
  font: {
    fontFamily: "Montserrat Alternates",
    fontSize: "20px",
    marginTop: "20px",
    color: "#202020",
    cursor: "pointer",
    borderBottom: "1px solid rgb(237 108 2 / 0%)",
    ":hover": {
      borderBottom: "1px solid rgb(237 108 2 / 80%)",
      color: "#FFFFFF",
    },
  },
  button: {
    width: "290px",
    borderRadius: "16px",
    ":hover": { backgroundColor: "#202020", color: "#FFFFFF" },
  },
} as any;
