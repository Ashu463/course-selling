import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Card, createTheme} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import { BASE_URL } from "../config.js"
import { ThemeProvider } from "@emotion/react";
const theme = createTheme({
    palette: {
      lavender: {
        main: '#CF9FFF',
        contrastText: '#000',
      },
    }
  });
function AddCourse() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0)

    return <div style={{display: "flex", justifyContent: "center", minHeight: "80vh", flexDirection: "column"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card varint={"outlined"} style={{width: 400, padding: 20, marginTop: 30, height: "100%"}}>
                <TextField
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    fullWidth={true}
                    label="Title"
                    variant="outlined"
                />

                <TextField
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setDescription(e.target.value)
                    }}
                    fullWidth={true}
                    label="Description"
                    variant="outlined"
                />

                <TextField
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setImage(e.target.value)
                    }}
                    fullWidth={true}
                    label="Image link"
                    variant="outlined"
                />

                <TextField
                    style={{marginBottom: 10}}
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }}
                    fullWidth={true}
                    label="Price"
                    variant="outlined"
                />
                <ThemeProvider theme={theme}>
                <Button
                    size={"large"}
                    variant="contained"
                    color="lavender"
                    style={{display: 'flex', justifyContent: 'center', alignItems : 'center'}}
                    onClick={async () => {
                        await axios.post(`${BASE_URL}/admin/courses`, {
                            title: title,
                            description: description,
                            imageLink: image,
                            published: true,
                            price
                        }, {
                            headers: {
                                "Authorization": "Bearer " + localStorage.getItem("token")
                            }
                        });
                        alert("Added course!");
                    }}
                    > Add course</Button>
                    </ThemeProvider>
            </Card>
        </div>
    </div>
}

export default AddCourse;