import React from "react";
import { Card, CardContent, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

class Cards extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Card
            style={{
              width: 600,
              height: 200,
              alignContent: "center",
              paddingLeft: "40px",
              paddingTop: "10px",
              marginTop: "40px",
            }}
          >
            <Typography>{this.props.children}</Typography>
            <div
              style={{
                color: "white",
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "row",
              }}
            >
              <Link
                to="../components/layouts/HomeSec"
                style={{ color: "#FFF" }}
              >
                <Button
                  color="inherit"
                  className="button"
                  style={{ height: 38, width: 500, background: "#1E4786",marginBottom: "50px"}}
                >
                  Read More 
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        <br></br>
      </div>
    );
  }
}

export default Cards;