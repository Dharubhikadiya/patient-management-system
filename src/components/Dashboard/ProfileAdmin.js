import React, { useState } from "react";
import doctor from '../images/doctor.png';
import { MdEditSquare, MdPrivacyTip } from "react-icons/md";
import { Grid, TextField } from "@mui/material";
import { IoMdPerson } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoCamera, IoNewspaperSharp } from "react-icons/io5";
import { Button } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function ProfileAdmin() {

    const [isEditing, setIsEditing] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 
    const [isCpass, setIsCpass] = useState(false);
    const [activeMenu, setActiveMenu] = useState("Profile");

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    // Function to handle menu click and set active menu
    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <div className='justify-between align-items-center'>
            {/* Box-1 */}
            <div className='d-flex box-1' style={{
                width: "100%", height: "230px", position: "relative", background: "linear-gradient(107.38deg, #4C49ED 2.61%, #020067 101.2%)"
            }}>
                <h3 className="text-white" style={{ padding: "60px", paddingLeft: "110px" }}>Profile Setting</h3>
            </div>

            {/* Box-2 */}
            <div className="bg-white p-3 border box-2 rounded-lg" style={{
                zIndex: "9000",
                position: "absolute",
                top: "190px",
                left: "23.5%",
                width: "70%",
                height: "auto",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)"
            }}>
                <div className="row">
                    <div className="d-flex justify-center">

                        <div className="col-md-3 border-end pe-3">
                            <div className="d-flex justify-center">
                                <img src={doctor} alt="doctor" className="flex items-center" width="60%" />
                            </div>

                            {!isEditing ? (
                                <div>
                                    <h5 className="text-center mx-auto mt-3">Lincoln Philips</h5>
                                </div>
                            ) : (
                                <div className="flex items-center justify-center mt-3">
                                    <button className="flex bg-gray-100 text-[#4F4F4F] rounded py-2 px-3">
                                        <IoCamera className="mt-1 me-2 fs-5 text-[#4F4F4F]" />
                                        Change Profile
                                    </button>
                                </div>
                            )}
                            {!isEditing && (
                                <>
                                    <p className="fw-semibold mt-3 mb-0">Menu</p>
                                    <ul className="ps-0">
                                        <li
                                            className={`p-2 px-3 my-3 rounded flex ${activeMenu === 'Profile' ? 'bg-[#F6F8FB] text-[#00B7FE]' : 'bg-[#F6F8FB] text-[#4F4F4F] '}`}
                                            onClick={() => handleMenuClick('Profile')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <IoMdPerson className="mt-1 me-2" />Profile
                                        </li>
                                        <li
                                            className={`p-2 px-3 my-3 rounded flex ${activeMenu === 'ChangePassword' ? 'bg-[#F6F8FB] text-[#00B7FE]' : 'bg-[#F6F8FB] text-[#4F4F4F]'}`}
                                            onClick={() => handleMenuClick('ChangePassword')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <RiLockPasswordFill className="mt-1 me-2" />Change Password
                                        </li>
                                        <li
                                            className={`p-2 px-3 my-3 rounded flex ${activeMenu === 'TermsCondition' ? 'bg-[#F6F8FB] text-[#00B7FE]' : 'bg-[#F6F8FB] text-[#4F4F4F]'}`}
                                            onClick={() => handleMenuClick('TermsCondition')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <IoNewspaperSharp className="mt-1 me-2" />Terms & Condition
                                        </li>
                                        <li
                                            className={`p-2 px-3 my-3 rounded flex ${activeMenu === 'PrivacyPolicy' ? 'bg-[#F6F8FB] text-[#00B7FE]' : 'bg-[#F6F8FB] text-[#4F4F4F]'}`}
                                            onClick={() => handleMenuClick('PrivacyPolicy')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <MdPrivacyTip className="mt-1 me-2" />Privacy Policy
                                        </li>
                                    </ul>
                                </>
                            )}

                        </div>

                        <div className="col-md-9 bg-white px-4">

                            {activeMenu === 'Profile' && (

                                <div>
                                    <div className="d-flex justify-between align-items-center mb-4">
                                        <h3>{isEditing ? 'Edit Profile' : 'Profile'}</h3>
                                        {!isEditing && (
                                            <button className="px-2 fw-normal h-9 d-flex align-items-center rounded text-white" style={{ backgroundColor: "#0EABEB" }} onClick={handleEditClick}>
                                                <MdEditSquare className='me-2' />Edit Profile
                                            </button>
                                        )}
                                    </div>

                                    <Grid container spacing={2} sx={{ mb: 3 }}>
                                        <Grid item xs={4}>
                                            <TextField
                                                required
                                                id="first-name"
                                                label="First Name"
                                                placeholder="Enter your first name"
                                                fullWidth
                                                size="small"
                                                slotProps={{
                                                    inputLabel: {
                                                        shrink: true,
                                                        sx: { color: 'black', fontSize: "18px", }, // Bold black label
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
                                        <Grid item xs={4}>
                                            <TextField
                                                required
                                                id="last-name"
                                                label="Last Name"
                                                placeholder="Enter your last name"
                                                fullWidth
                                                size="small"
                                                slotProps={{
                                                    inputLabel: {
                                                        shrink: true,
                                                        sx: { color: 'black', fontSize: "18px", },
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
                                        <Grid item xs={4}>
                                            <TextField
                                                required
                                                id="email"
                                                label="Email Address"
                                                placeholder="xyz@gmail.com"
                                                fullWidth
                                                size="small"
                                                slotProps={{
                                                    inputLabel: {
                                                        shrink: true,
                                                        sx: { color: 'black', fontSize: "18px", },
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
                                    <Grid container spacing={2} sx={{ mb: 3 }}>
                                        <Grid item xs={4}>
                                            <TextField
                                                required
                                                id="first-name"
                                                label="Phone Number"
                                                placeholder="45678 34567"
                                                fullWidth
                                                size="small"
                                                slotProps={{
                                                    inputLabel: {
                                                        shrink: true,
                                                        sx: { color: 'black', fontSize: "18px", }, // Bold black label
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
                                        <Grid item xs={4}>
                                            <TextField
                                                required
                                                id="last-name"
                                                label="Hospital Name"
                                                placeholder="silver park medical center"
                                                fullWidth
                                                size="small"
                                                slotProps={{
                                                    inputLabel: {
                                                        shrink: true,
                                                        sx: { color: 'black', fontSize: "18px", },
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
                                        <Grid item xs={4}>
                                            <TextField
                                                required
                                                id="email"
                                                label="Gender"
                                                placeholder="Male"
                                                fullWidth
                                                size="small"
                                                slotProps={{
                                                    inputLabel: {
                                                        shrink: true,
                                                        sx: { color: 'black', fontSize: "18px", },
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
                                    <Grid container spacing={2} sx={{ mb: 3 }}>
                                        <Grid item xs={4}>
                                            <TextField
                                                required
                                                id="first-name"
                                                label="City"
                                                placeholder="Ahemdabad"
                                                fullWidth
                                                size="small"
                                                slotProps={{
                                                    inputLabel: {
                                                        shrink: true,
                                                        sx: { color: 'black', fontSize: "18px", }, // Bold black label
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
                                        <Grid item xs={4}>
                                            <TextField
                                                required
                                                id="last-name"
                                                label="State"
                                                placeholder="Gujarat"
                                                fullWidth
                                                size="small"
                                                slotProps={{
                                                    inputLabel: {
                                                        shrink: true,
                                                        sx: { color: 'black', fontSize: "18px", },
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
                                        <Grid item xs={4}>
                                            <TextField
                                                required
                                                id="email"
                                                label="Country"
                                                placeholder="India"
                                                fullWidth
                                                size="small"
                                                slotProps={{
                                                    inputLabel: {
                                                        shrink: true,
                                                        sx: { color: 'black', fontSize: "18px", },
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
                                    {isEditing && (

                                        <div className="d-flex justify-content-end mb-5">

                                            <div className="flex justify-between">
                                                <button
                                                    className="border-2 rounded px-5 py-1 mr-2 "
                                                    onClick={handleCancelClick}
                                                >
                                                    Cancel
                                                </button>
                                                <button className="bg-[#0EABEB] text-white rounded px-5 py-1">
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            )}

                            {activeMenu === 'ChangePassword' && (

                                <div>

                                    <div>
                                        <div className="justify-between align-items-center mb-4">
                                            <h3>Change Password</h3>
                                <p className="py-2 text-[#4F4F4F] text-sm">To change your password, please fill in the fields below. Your password must contain at least 8 characters, it must also include at least one upper case letter, one lower case letter, one number and one special  character.</p>
                                        </div>

                                        <Grid container spacing={2} sx={{ mb: 3 }}>
                                            <Grid item xs={12}>
                                            <TextField
                                            required
                                            id="pass"
                                            label="Current Password"
                                            type={showPassword ? "text" : "password"} // Toggle password visibility
                                            placeholder="Enter Current password"
                                            fullWidth
                                            size="small"
                                            sx={{ mb: 3 }}
                                            slotProps={{
                                                inputLabel: {
                                                    shrink: true,
                                                    sx: { color: 'black', fontSize: "20px", },
                                                },
                                            }}
                                            InputProps={{
                                                endAdornment: (
                                                    <span onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                                                        {showPassword ? <FaEye /> :  <FaEyeSlash />} {/* Eye icon */}
                                                    </span>
                                                ),
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
                                            <Grid item xs={12}>
                                            <TextField
                                            required
                                            id="pass"
                                            label="New Password"
                                            type={showPassword ? "text" : "password"} // Toggle password visibility
                                            placeholder="Enter New password"
                                            fullWidth
                                            size="small"
                                            sx={{ mb: 3 }}
                                            slotProps={{
                                                inputLabel: {
                                                    shrink: true,
                                                    sx: { color: 'black', fontSize: "20px", },
                                                },
                                            }}
                                            InputProps={{
                                                endAdornment: (
                                                    <span onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                                                        {showPassword ? <FaEye /> :  <FaEyeSlash />} {/* Eye icon */}
                                                    </span>
                                                ),
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
                                            <Grid item xs={12}>
                                            <TextField
                                            required
                                            id="pass"
                                            label="Confirm Password"
                                            type={showPassword ? "text" : "password"} // Toggle password visibility
                                            placeholder="Enter Confirm password"
                                            fullWidth
                                            size="small"
                                            sx={{ mb: 1 }}
                                            slotProps={{
                                                inputLabel: {
                                                    shrink: true,
                                                    sx: { color: 'black', fontSize: "20px", },
                                                },
                                            }}
                                            InputProps={{
                                                endAdornment: (
                                                    <span onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                                                        {showPassword ? <FaEye /> :  <FaEyeSlash />} {/* Eye icon */}
                                                    </span>
                                                ),
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
                                                        fontSize: 'small', 
                                                    },
                                                },
                                            }}
                                        />
                                            </Grid>
                                        </Grid>

                                        <button className="bg-[#0EABEB] text-white fw-semibold text-lg rounded px-5 py-2 w-full">
                                            Change Password
                                        </button>

                                    </div>

                                </div>)}

                                {activeMenu === 'TermsCondition' && (

                                    <div>
    
                                        <div>
                                            <div className="justify-between align-items-center mb-3">
                                                <h3>Terms & Condition</h3>
                                            </div>
    
                                            <div style={{ 
                                                height: '400px', 
                                                overflowY: 'scroll',
                                                scrollbarWidth: 'thin', 
                                                scrollbarColor: 'black transparent',
                                                borderRadius: '10px',
                                                border: '1px solid #C6C6C6'
                                              }} className="custom-scrollbar p-2 px-3">
                                            <p className="text-sm text-[#4F4F4F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet interdum sapien. Fusce ac augue erat. Suspendisse sodales est et laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.</p>

                                            <p className="text-sm text-[#4F4F4F]">Dolor sit amet, consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet interdum sapien. Fusce ac augue erat. Suspendisse sodales est et laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.</p>

                                            <p className="text-sm text-[#4F4F4F]">Consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet interdum sapien. Fusce ac augue erat. Suspendisse sodales est et laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.rat. Suspendisse sodales est et laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.</p>

                                            <p className="text-sm text-[#4F4F4F]">Consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet interdum sapien. Fusce ac augue erat. Suspendisse sodales est et laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.rat. Suspendisse sodales est et laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.</p>

                                            <p className="text-sm text-[#4F4F4F]">Consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet.</p>

                                            <p className="text-sm text-[#4F4F4F]">Consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet.</p>

                                            <p className="text-sm text-[#4F4F4F]">Consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel.</p>
                                           </div>
    
                                        </div>
    
                                    </div>)}

                                    {activeMenu === 'PrivacyPolicy' && (

                                        <div>
        
                                            <div>
                                                <div className="justify-between align-items-center mb-3">
                                                    <h3>Privacy Policy</h3>
                                                </div>
        
                                                <div style={{ 
                                                    height: '400px', 
                                                    overflowY: 'scroll',
                                                    scrollbarWidth: 'thin', 
                                                    scrollbarColor: 'black transparent',
                                                    borderRadius: '10px',
                                                    border: '1px solid #C6C6C6'
                                                  }} className="custom-scrollbar p-2 px-3">
                                                <p className="text-sm text-[#4F4F4F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet interdum sapien. Fusce ac augue erat. Suspendisse sodales est et laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.</p>
    
                                                <p className="text-sm text-[#4F4F4F]">Dolor sit amet, consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet interdum sapien. Fusce ac augue erat. Suspendisse sodales est et laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.</p>
    
                                                <p className="text-sm text-[#4F4F4F]">Consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet interdum sapien. Fusce ac augue erat. Suspendisse sodales est et laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.rat. Suspendisse sodales est et laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.</p>
    
                                                <p className="text-sm text-[#4F4F4F]">Consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet interdum sapien. Fusce ac augue erat. Suspendisse sodales est et laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.rat. Suspendisse sodales est et laoreet fringilla. Duis justo mauris, semper et justo eu, mollis porttitor eros.</p>
    
                                                <p className="text-sm text-[#4F4F4F]">Consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet.</p>
    
                                                <p className="text-sm text-[#4F4F4F]">Consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel blandit erat iaculis id. Etiam ut lectus vitae metus convallis condimentum quis cursus mi. Aenean non varius enim. Pellentesque sit amet.</p>
    
                                                <p className="text-sm text-[#4F4F4F]">Consectetur adipiscing elit. Fusce quis ante ornare, venenatis tortor sed, fringilla ante. Morbi nec semper justo. Cras eget rhoncus urna, eu fringilla nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pretium eleifend neque, vel.</p>
                                               </div>
        
                                            </div>
        
                                        </div>)}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
