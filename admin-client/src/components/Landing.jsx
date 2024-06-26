import {Grid, Typography, createTheme} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import { userEmailState } from "../store/selectors/userEmail"
import {isUserLoading} from "../store/selectors/isUserLoading.js";
import bgWall from "../assets/bg-wallpaper.png"
import { ThemeProvider } from "@emotion/react";
const theme = createTheme({
    palette: {
      lavender: {
        main: '#CF9FFF',
        contrastText: '#000',
      },
    },
  });
export const Landing = () => {
    const navigate = useNavigate()
    const userEmail = useRecoilValue(userEmailState);
    const userLoading = useRecoilValue(isUserLoading);
    return <div>
        <Grid container style={{padding: "5vw"}}>
            <Grid item xs={12} md={6} lg={6}>
                <div style={{marginTop: 100}}>
                    <Typography variant={"h2"}>
                        Coursera Admin
                    </Typography>
                    <Typography variant={"h5"}>
                        A place to learn, earn and grow.
                    </Typography>
                    <Typography variant={"h5"}>
                        DashBoard of a Course Selling App for Admin.
                    </Typography>
                    {!userLoading && !userEmail && <div style={{display: "flex", marginTop: 20}}>
                        <div style={{marginRight: 10}}>
                        <ThemeProvider theme={theme}>
                            <Button
                                size={"large"}
                                color="lavender"
                                variant={"contained"}
                                onClick={() => {
                                    navigate("/signup")
                                }}
                            >Signup</Button>
                            </ThemeProvider>
                        </div>
                        <div>
                        <ThemeProvider theme={theme}>
                            <Button
                                size={"large"}
                                color="lavender"
                                variant={"contained"}
                                onClick={() => {
                                    navigate("/signin")
                                }}
                            >Signin</Button>
                            </ThemeProvider>
                        </div>
                    </div>}
                </div>
                <div>
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}  style={{marginTop: 20}}>
                <img src={bgWall} width={"100%"} />
            </Grid>
        </Grid>
    </div>
}