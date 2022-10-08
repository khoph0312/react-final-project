const questionPageStyle = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  background: `rgb(168, 168, 168)`,
  background: `radial-gradient(
    circle,
    rgba(168, 168, 168, 1) 0%,
    rgba(214, 214, 214, 1) 100%
  )`,
};

const questionStyle = {
  backgroundColor: "white",
  width: "100%",
  height: "150px",
  margin: "16px 0 8px",
  display: "flex",
  borderRadius: "16px",
  padding: "8px",
  borderStyle: "solid",
  borderWidth: "1px",
};

const selectionStyle = {
  backgroundColor: "white",
  width: "90%",
  height: "40px",
  display: "flex",
  borderRadius: "16px",
  borderStyle: "solid",
  borderWidth: "1px",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

export { questionStyle, selectionStyle, questionPageStyle };
