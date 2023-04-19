import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Dialog } from "@mui/material";
import { imgUrls } from "../../imgs/imgUrls";

export default function PathCard({ path }) {
  const [open, setOpen] = React.useState(false);
  const [afterM, setAfterM] = React.useState("");
  return (
    <Box sx={{ minWidth: 275 }} key={path.id}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {path.name}
          </Typography>

          {path.checkpoints.map((a) => (
            <Box sx={{ minWidth: 275, mt: 2 }} key={a.id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" component="div">
                    {a.loc}
                  </Typography>

                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <a href={a.locLink} target="__blank">
                      {a.locLink}
                    </a>
                  </Typography>
                  <Typography variant="body2">
                    Contact Person:
                    <br />
                    {a.contactPerson.name}
                    {"  ("}
                    {a.contactPerson.phone}
                    {`)`}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    style={{
                      color: "lightgrey",
                    }}
                  >
                    Started
                  </Button>
                  <Button
                    size="small"
                    style={{
                      color: "cyan",
                    }}
                    onClick={() => {
                      setOpen(true);
                      setAfterM(a.afterMsg);
                    }}
                  >
                    Reached
                  </Button>
                  <Dialog
                    variant="outlined"
                    fullWidth={true}
                    open={open}
                    onClose={(e, r) => {
                      if (r === "backdropClick") {
                        setOpen(!open);
                      } else {
                        setOpen(!open);
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
                      <img
                        style={{
                          borderRadius: "1rem",
                          backgroundColor: "rgb(0,0,0)",
                          opacity: "75%",
                        }}
                        src={imgUrls["travel"]}
                        alt="image"
                        height="150"
                        width="150"
                      />

                      <div
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        {afterM}
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
