import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Dialog } from "@mui/material";
import { useSelector } from "react-redux";

export default function EventCard({ eve }) {
  const [isRespOpen, setIsRespOpen] = React.useState(false);
  const users = useSelector((state) => state?.users);
  const [afterMsg, setAfterMsg] = React.useState("Thanks for responding!");
  const [respType, setRespType] = React.useState("");
  const populateAfterMsg = (msg) => {
    setAfterMsg(msg);
  };
  return (
    <Box sx={{ minWidth: 275 }} key={eve.id}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {eve.name}
          </Typography>

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {eve.location}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <a href={eve.locationLink} target="__blank">
              {eve.locationLink}
            </a>
          </Typography>
          <Typography variant="body2">
            Starting:
            <br />
            {eve.timeOfStart}
          </Typography>
          <Typography
            variant="body2"
            style={{
              marginTop: ".5rem",
            }}
          >
            Started at :{eve.realTimeOfStart}
          </Typography>

          {eve.activities.map((a) => (
            <Box sx={{ minWidth: 275, mt: 2 }} key={a.id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" component="div">
                    {a.name}
                  </Typography>
                  <Typography variant="body2">
                    Starting:
                    <br />
                    {a.startTime}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      marginTop: ".5rem",
                    }}
                  >
                    Started at :{a.realTimeOfStart}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      setIsRespOpen(true);
                      populateAfterMsg(a.afterMessage);
                      setRespType(a.responseType);
                    }}
                  >
                    Done!
                  </Button>
                  <Dialog
                    variant="outlined"
                    fullWidth={true}
                    open={isRespOpen}
                    onClose={(e, r) => {
                      if (r === "backdropClick") {
                        setIsRespOpen(!isRespOpen);
                      } else {
                        setIsRespOpen(!isRespOpen);
                      }
                    }}
                    scroll={"body"}
                  >
                    <div
                      style={{
                        padding: "1rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      {respType === "selfie" && (
                        <img
                          style={{
                            borderRadius: "1rem",
                            backgroundColor: "rgb(0,0,0)",
                            opacity: "75%",
                          }}
                          src="/imgs/selfie.png"
                          alt="image"
                          height="150"
                          width="150"
                        />
                      )}
                      {respType === "food" && (
                        <img
                          style={{
                            borderRadius: "1rem",
                            backgroundColor: "rgb(0,0,0)",
                            opacity: "75%",
                          }}
                          src="/imgs/food.png"
                          alt="image"
                          height="150"
                          width="150"
                        />
                      )}
                      <div
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        {afterMsg}
                      </div>
                    </div>
                  </Dialog>
                </CardActions>
              </Card>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
}
