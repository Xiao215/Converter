import GlobalStyles from "@mui/material/GlobalStyles";

export default function Style() {
  return (
    <GlobalStyles
      styles={{ "&.test": { bgcolor: "#757ce8" }, h2: { color: "#3f50b5" } }}
    />
  );
}
