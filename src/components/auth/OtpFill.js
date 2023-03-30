// import React, { useState } from "react";
// import { makeStyles } from "@mui/styles";
// import TextField from "@mui/material/TextField";

// const useStyles = makeStyles({
//   otpContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   otpBox: {
//     width: "2rem",
//     height: "2rem",
//     fontSize: "1.5rem",
//     fontWeight: "bold",
//     borderRadius: "0.25rem",
//     border: "1px solid gray",
//     textAlign: "center",
//     "& input": {
//       textAlign: "center",
//     },
//   },
// });

// const OtpInput = () => {
//   const classes = useStyles();
//   const [otp, setOtp] = useState(["", "", "", ""]);

//   const handleInputChange = (index) => (event) => {
//     const newOtp = [...otp];
//     newOtp[index] = event.target.value;
//     setOtp(newOtp);
//   };

//   return (
//     <div className={classes.otpContainer}>
//       {otp.map((value, index) => (
//         <TextField
//           key={index}
//           variant="outlined"
//           size="small"
//           type="number"
//           inputProps={{
//             min: 0,
//             max: 9,
//             maxLength: 1,
//           }}
//           value={value}
//           className={classes.otpBox}
//           onChange={handleInputChange(index)}
//         />
//       ))}
//     </div>
//   );
// };

// export default OtpInput;
