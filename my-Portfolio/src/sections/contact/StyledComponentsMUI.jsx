import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import LoadingButton from "@mui/lab/LoadingButton";
import { CircularProgress } from "@mui/material";
import { GiPartyPopper } from "react-icons/gi";

export function StyledTextField({ register, errors, name, label, id }) {
  return (
    <TextField
      {...register(name)}
      error={!!errors[name]}
      autoComplete="off"
      helperText={errors[name] ? errors[name].message : null}
      id={id}
      label={label}
      variant="outlined"
      color="secondary"
      name={name}
      fullWidth
      inputProps={{ style: { color: "black" } }}
      sx={{
        "& label.Mui-focused": {
          color: "black",
        },
        "& label": {
          color: "black",
          fontFamily: "sans-serif",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "black",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#190622",
          },
          "&:hover fieldset": {
            borderColor: "#dc90ff",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#a237d3",
          },
          "& .MuiInputBase-input": {
            fontFamily: "sans-serif",
          },
        },
      }}
    />
  );
}

StyledTextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export function StyledTextField2({ register, errors, name, label, id }) {
  return (
    <TextField
      {...register(name)}
      error={!!errors[name]}
      autoComplete="off"
      helperText={errors[name] ? errors[name].message : null}
      id={id}
      label={label}
      multiline
      minRows={4}
      maxRows={8}
      name={name}
      fullWidth
      inputProps={{ style: { color: "black" } }}
      sx={{
        "& label.Mui-focused": {
          color: "black",
        },
        "& label": {
          color: "black",
          fontFamily: "sans-serif",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "black",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#190622",
          },
          "&:hover fieldset": {
            borderColor: "#dc90ff",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#a237d3",
          },
          "& .MuiInputBase-input": {
            fontFamily: "sans-serif",
          },
        },
      }}
    />
  );
}

StyledTextField2.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export function StyledButton({ isSubmitting, isSubmitted }) {
  return (
    <LoadingButton
      loading={isSubmitted ? false : isSubmitting}
      variant="contained"
      type="submit"
      disabled={isSubmitted ? true : false}
      size="large"
      sx={{
        width: "100%",
        background: "#a237d3",
        borderRadius: "0.5rem",
        color: "white",
        fontFamily: "Tektur",
        fontSize: "1.2rem",
        "&:hover": {
          background: isSubmitted ? "#7000a3" : "#dc90ff",
        },
        ...(isSubmitted && {
          "&.Mui-disabled": {
            background: "#7000a3",
            color: "white",
            "&:hover": {
              background: "#7000a3",
            },
          },
        }),
      }}
      loadingIndicator={<CircularProgress color="primary" size={35} />}
    >
      {isSubmitted ? (
        <>
          <GiPartyPopper size={30} /> SUCCESS <GiPartyPopper size={35} />
        </>
      ) : (
        "SUBMIT"
      )}
    </LoadingButton>
  );
}

StyledButton.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};
