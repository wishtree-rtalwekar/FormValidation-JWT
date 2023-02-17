import React, { useState } from 'react'
import git_img from "../../assests/gitLogo.jpeg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import {schema} from '../validations/validations';


const RegisterPage = (props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema), });
    const [showPassword, setShowPassword] = useState(false);
    const [signUp, setSignUp] = useState(false);
    let navigate = useNavigate();

    const roles = ["user", "moderator", "admin"]
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmitForm = () => {
        navigate("/signIn")
    }
    const handleToSignIn = () => {
        navigate('/signIn');
    }
    return (
        <div className='login_wrapper'>
            <div className='login_flex'>
                <div className='img_div' >
                    <img src={git_img} style={{ width: "80px", height: "80px" }} />
                    <h2 className='heading_2'>Register</h2>
                </div>
                <div style={{ width: "95%" }}>
                    <hr />
                </div>
                <div className='signIn'>
                    <form onSubmit={handleSubmit(handleSubmitForm)}>
                        <div className='sign_field'>
                            <TextField
                                id="outlined-basic"
                                label="First name"
                                variant="outlined"
                                type="text"
                                size='small'
                                style={{ width: "100%" }}
                                {...register("firstName")}
                                error={errors.firstName?.message}
                            />
                            <p className={errors.firstName?.message ? 'error_msg error_msg-visible' : 'error_msg'}>{errors.firstName?.message}</p>
                        </div>
                        <div className='sign_field'>
                            <TextField
                                id="outlined-basic"
                                label="Last name"
                                variant="outlined"
                                type="text"
                                size='small'
                                style={{ width: "100%" }}
                                {...register("lastName")}
                                error={errors.lastName?.message}
                            />
                            <p className={errors.lastName?.message ? 'error_msg error_msg-visible' : 'error_msg'}>{errors.lastName?.message}</p>
                        </div>
                        <div className='sign_field'>
                            <FormControl
                                fullWidth
                                size='small'
                                error={errors.role?.message}
                            >
                                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Role"
                                    {...register("role")}
                                // onChange={handleChange}
                                >
                                    {roles.map((role, index) =>
                                        <MenuItem key={index} value={role}>{role.charAt(0).toUpperCase() + role.slice(1)}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                            <p className={errors.role?.message ? 'error_msg error_msg-visible' : 'error_msg'}>{errors.role?.message}</p>
                        </div>
                        <div className='sign_field'>
                            <TextField
                                id="outlined-basic"
                                label="Email address"
                                variant="outlined"
                                type="text"
                                size='small'
                                style={{ width: "100%" }}
                                {...register("email")}
                                error={errors.email?.message}
                            />
                            <p className={errors.email?.message ? 'error_msg error_msg-visible' : 'error_msg'}>{errors.email?.message}</p>
                        </div>

                        <div className='sign_field'>
                            <FormControl
                                sx={{ width: "100%" }}
                                variant="outlined"
                                size='small'
                                error={errors.password?.message}
                            >
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }

                                    label="Password"
                                    {...register("password")}
                                />
                            </FormControl>
                            <p className={errors.password?.message ? 'error_msg error_msg-visible' : 'error_msg'}>{errors.password?.message}</p>
                        </div>
                        <div className='sign_field'>
                            <Button
                                variant="contained"
                                className='success-btn'
                                type="submit"
                            // onClick={handleSubmitForm}
                            >
                                Sign Up
                            </Button>
                        </div>
                    </form>
                </div>
                <a className='create_link' onClick={handleToSignIn}>Back to Sign In</a>
            </div>
        </div>
    )
}

export default RegisterPage