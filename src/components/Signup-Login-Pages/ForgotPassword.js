import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import registerimg from '../images/forgot.png';
import vector1 from '../images/Vector 1.png';
import vector2 from '../images/Vector 2.png';
import logo from '../images/logo.png';
import { useState } from 'react'; // Import useState
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [emailOrPhone, setEmailOrPhone] = useState(''); // State for email or phone

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Validation logic
        if (!emailOrPhone) {
            toast.error("Email or Phone is required."); // Show error toast
            return;
        }

        // If validation passes, show success message
        toast.success("OTP sent to your email or phone!"); // Show success toast
    };

    return (
        <Grid container style={{ height: '100vh' }}>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit} // Add onSubmit handler
                    sx={{
                        backgroundColor: 'white',
                        padding: '50px',
                        borderRadius: '8px',
                        width: '100%',
                        maxWidth: '650px',
                        boxShadow: 2,
                    }}
                >
                    <p className='fs-3 d-flex fw-medium mb-2'>Forgot Password</p>
                    <p className='pb-1 text-left'>Enter your email and we'll send you an OTP to reset your password</p>

                    <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Email"
                                label="Email or Phone"
                                placeholder="Enter Email or Phone Number"
                                fullWidth
                                size="small"
                                value={emailOrPhone} // Bind value to state
                                onChange={(e) => setEmailOrPhone(e.target.value)} // Update state on change
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                        sx: { color: 'black', fontSize: "20px" },
                                    },
                                }}
                                InputProps={{
                                    sx: {
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'gray',
                                        },
                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'gray',
                                        },
                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'gray',
                                        },
                                        '& input::placeholder': {
                                            fontSize: 'small', // Set placeholder font size to small
                                        },
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Button fullWidth style={{ backgroundColor: "#F6F8FB", color: "black" }} className='my-2 fw-bold' type="submit" // Change to submit
                        onMouseDown={(e) => (e.currentTarget.style.backgroundColor = "#0EABEB")}
                        onMouseUp={(e) => (e.currentTarget.style.backgroundColor = "#F6F8FB")}
                    >
                        Get OTP
                    </Button>
                    <Typography variant="body2" className='fs-6 mt-2'>
                        <Link className='text-decoration-none' to="/"> Back to Login</Link>
                    </Typography>
                    <ToastContainer /> {/* Add ToastContainer to render toasts */}
                </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#F6F8FB", height: '100vh' }}>
                <img
                    src={logo}
                    alt=''
                    style={{
                        position:'absolute',
                        width : '14%',
                        top:'13%'
                    }}
                />
                <img
                    src={vector2}
                    alt=''
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '50%',
                    }}
                />
                <img
                    src={registerimg}
                    alt="Dummy"
                    style={{
                        width: '70%',
                        top: '113px',
                        left: '1091px',
                        gap: '0px',
                        opacity: '0px'
                    }}
                />
                <img
                    src={vector1}
                    alt=''
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                    }}
                />
            </Grid>
        </Grid>
    );
}
export default ForgotPassword;