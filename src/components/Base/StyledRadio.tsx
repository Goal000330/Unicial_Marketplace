import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio, { RadioProps } from "@material-ui/core/Radio";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: "17px",
    height: "17px",
    backgroundColor: "#333B67",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#333B67",
    "&:before": {
      display: "block",
      width: "7px",
      height: "7px",
      marginLeft: "5px",
      marginTop: "5px",
      borderRadius: "10px",
      backgroundImage: "linear-gradient(90deg, #FF7C4C 20%, #FFB03A 101.82%)",
      content: '""',
    },
  },
});

// Inspired by blueprintjs

export default function StyledRadio(props: RadioProps) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

// export default function CustomizedRadios() {
//   return (
//     <FormControl component="fieldset">
//       <FormLabel component="legend">Gender</FormLabel>
//       <RadioGroup
//         defaultValue="female"
//         aria-label="gender"
//         name="customized-radios"
//       >
//         <FormControlLabel
//           value="female"
//           control={<StyledRadio />}
//           label="Female"
//         />
//         <FormControlLabel value="male" control={<StyledRadio />} label="Male" />
//         <FormControlLabel
//           value="other"
//           control={<StyledRadio />}
//           label="Other"
//         />
//         <FormControlLabel
//           value="disabled"
//           disabled
//           control={<StyledRadio />}
//           label="(Disabled option)"
//         />
//       </RadioGroup>
//     </FormControl>
//   );
// }
