import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function ChatCard({ c }) {
  const [isRespOpen, setIsRespOpen] = React.useState(false);
  const users = useSelector((state) => state?.users);
  const [afterMsg, setAfterMsg] = React.useState("Thanks for responding!");
  const [respType, setRespType] = React.useState("");
  const populateAfterMsg = (msg) => {
    setAfterMsg(msg);
  };
  return (
    <Box sx={{ minWidth: 275 }} key={c.id}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" component="div">
            {c.from}
          </Typography>

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {c.msg}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
