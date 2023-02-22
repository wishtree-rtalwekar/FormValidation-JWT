import React, { useEffect, useState } from 'react';
import git_img from "../../assests/gitLogo.jpeg";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { login_schema } from '../validations/validations';
import AuthService from '../../services/auth.service';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(login_schema), });
    const [showPassword, setShowPassword] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    let navigate = useNavigate();
    useEffect(()=>{
        AuthService.logout();
    },[])

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmitBtn = (data) => {
        console.log("Data", data);
        console.log("LoginData", loginData)
        setMessage("")
        setLoading(false)
        if(data){
            AuthService.login(loginData).then(
                () => {
                  navigate("/mainPage");
                }).catch((error) => {
                  const resMessage =
                    (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                    error.message ||
                    error.toString();
        
                  setLoading(true);
                  setMessage(resMessage);
                  setTimeout(()=>{
                    window.location.reload();
                  },5000)
                }
              );
        }
    }
    const handleToSignUp = () => {
        navigate('/signUp');
    }
    
    return (

        <div className='login_wrapper'>
            <div className='login_flex'>
                <div className='img_div' >
                    <img src={git_img} style={{ width: "130px", height: "130px" }} />
                    <h2 className={message ? "danger" : ""}>{message ? message : "Welcome"}</h2>
                </div>
                <div style={{ width: "95%" }}>
                    <hr />
                </div>
                <div className='signIn'>
                    {!loading && (<form onSubmit={handleSubmit(handleSubmitBtn)}>
                        <div className='sign_field'>
                            <TextField
                                id="outlined-basic"
                                label="Email address"
                                variant="outlined"
                                type="email"
                                size='small'
                                style={{ width: "100%" }}
                                value={loginData.email}
                                {...register("email")}
                                onChange={(e) => setLoginData({
                                    ...loginData,
                                    email: e.target.value
                                })}
                                error={!!errors.email?.message}
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
                                    value={loginData.password}
                                    {...register("password")}
                                    onChange={(e) => setLoginData({
                                        ...loginData,
                                        password: e.target.value
                                    })}
                                />
                            </FormControl>
                            <p className={errors.password?.message ? 'error_msg error_msg-visible' : 'error_msg'}>{errors.password?.message}</p>
                            <a className="forget_password" style={{ cursor: "pointer" }}> Forget Possword?</a>
                        </div>
                        <div className='sign_field'>
                            <Button
                                variant="contained"
                                className='success-btn'
                                type="submit"
                            // onClick={()=>console.log("clicked")}
                            >
                                Sign In
                            </Button>
                        </div>
                    </form>
                    )}
                </div>
            </div>
            {!loading && (<div className='new_account'>
                New Member ?
                <a className='create_link' onClick={handleToSignUp}>Create an account.</a>
            </div>)}
        </div>

    )
}

export default LoginPage