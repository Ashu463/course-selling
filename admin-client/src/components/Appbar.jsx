import {Typography, createTheme} from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { isUserLoading } from "../store/selectors/isUserLoading";
import {useSetRecoilState, useRecoilValue} from "recoil";
import { userState } from "../store/atoms/user.js";
import { userEmailState } from "../store/selectors/userEmail"
import { ThemeProvider } from "@emotion/react";
const theme = createTheme({
    palette: {
      lavender: {
        main: '#CF9FFF',
        contrastText: '#000',
      },
    },
  });
function Appbar({}) {
    const navigate = useNavigate()
    const userLoading = useRecoilValue(isUserLoading);
    const userEmail = useRecoilValue(userEmailState);
    const setUser = useSetRecoilState(userState);

    if (userLoading) {
        return <></>
    }

    if (userEmail) {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1
        }}>
            <div style={{marginLeft: 10, cursor: "pointer"}} onClick={() => {
                navigate("/")
            }}>
                <Typography variant={"h6"}>Coursera</Typography>
            </div>
    
            <div style={{display: "flex"}}>
                <div style={{marginRight: 10, display: "flex"}}>
                <div style={{marginRight: 10}}>
                    <ThemeProvider theme={theme}>
                        <Button
                        variant='text'
                        color="lavender"
                            onClick={() => {
                                navigate("/addcourse")
                            }}
                        >Add course</Button>
                        </ThemeProvider>
                    </div>

                    <div style={{marginRight: 10}}>
                    <ThemeProvider theme={theme}>
                        <Button
                        variant='text'
                        color="lavender"
                            onClick={() => {
                                navigate("/courses")
                            }}
                        >Courses</Button>
                        </ThemeProvider>
                    </div>
                    <ThemeProvider theme={theme}>
                    <Button
                        variant={"contained"}
                        color="lavender"
                        onClick={() => {
                            localStorage.setItem("token", null);
                            setUser({
                                isLoading: false,
                                userEmail: null
                            })
                        }}
                    >Logout</Button>
                    </ThemeProvider>

                </div>
            </div>
        </div>
    } else {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1
        }}>
            <div style={{marginLeft: 10, cursor: "pointer"}} onClick={() => {
                navigate("/")
            }}>
                <Typography variant={"h4"}>Coursera</Typography>
            </div>
    
            <div style={{display: "flex"}}>
                <div style={{marginRight: 10}}>
                <ThemeProvider theme={theme}>
                    <Button
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
                        color="lavender"
                        variant={"contained"}
                        onClick={() => {
                            navigate("/signin")
                        }}
                    >Signin</Button>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    }
}

export default Appbar;