import styled from "@emotion/styled";
import {TextField} from "@mui/material";

const StyledTextField = styled(TextField)({
    "& label": {
        color: "primary"
    },
    "& label.Mui-focused": {
        color: "primary"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "primary"
    },
    "& .MuiOutlinedInput-root": {
        color: "primary",
        "& fieldset": {
            borderColor: "primary"
        },
        "&:hover fieldset": {
            borderColor: "primary",
            borderWidth: 2
        },
        "&.Mui-focused fieldset": {
            borderColor: "primary"
        }
    }
});

export {
    StyledTextField
}
