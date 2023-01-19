import React from 'react'

import Box from '@mui/material/Box'
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles'

import {
    FORM_BORDER,
    FORM_BOX,
    FORM_SHADOW,
    MAIN_BACKGROUND,
    FORM_BUTTON_BACK,
    FORM_BUTTON_HOW1,
    FORM_BUTTON_HOW2,
    FORM_BUTTON_HOW3,
    FORM_BUTTON_HOW4
} from '../../assets/themes/colors'

export const BoxGlobalAuthForm = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px; 
`;

const BoxIconsAuthForm = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px; 
`;

export const FormBoxAuthForm = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    border: 5px ${FORM_BORDER} solid;
    background-color: ${FORM_BOX};
    border-radius: 20px;
    padding: 20px 15px 15px 15px;
    max-width: 420px;
    min-width: 160px;
    &:hover{
      box-shadow: ${FORM_SHADOW} 0px 8px 12px;
    }
`;

export const InputNameEmailAuthForm = styled(TextField)`
    margin: 5px; 
    margin-bottom: 10px;
    max-width: 400px;
    min-width: 140px; 
    background-color: ${MAIN_BACKGROUND};
`;

export const FormControlPasswordAuthForm = styled(FormControl)`
    margin: 5px; 
    margin-bottom: 10px;
    max-width: 400px;
    min-width: 140px; 
`;

export const ButtonAuthForm = styled(Button)`
    margin: 20px 5px;
    max-width: 400px;
    min-width: 140px; 
    background-color: ${FORM_BUTTON_BACK};
    &:hover{
        background-image: linear-gradient(to right, 
            ${FORM_BUTTON_HOW2} 0%, 
            ${FORM_BUTTON_HOW3} 51%, 
            ${FORM_BUTTON_HOW4} 114%);
        transform: perspective(10px);
        color: ${FORM_BUTTON_HOW1};
      }
`;

export const IconsAuthForm = ({ iconvalid }) => {
    return (
        <BoxIconsAuthForm>
            <AppRegistrationIcon color="primary" sx={{ m: 1, fontSize: 40 }} alt="Icon ` - ` fill out the form" />
            <HowToRegRoundedIcon sx={{ m: 1, fontSize: 40, }} alt="Successful form completion icon"
                color={iconvalid ? 'primary' : 'disabled'}
            />
        </BoxIconsAuthForm>
    )
}

export const IconsLoginForm = ({ iconvalid }) => {
    return (
        <BoxIconsAuthForm>
            <LoginIcon sx={{ m: 1, fontSize: 40, }} alt="Icon login"
                color={iconvalid ? 'primary' : 'disabled'}
            />
        </BoxIconsAuthForm>
    )
}

export const LabelPassword = () => {
    return (
        <InputLabel htmlFor="outlined-adornment-password">
            Password *
        </InputLabel>)
}

export const SignUp = () => {
    return (
        <Grid container sx={{ marginRight: '15px' }} justifyContent="flex-end">
            <Grid item>
                <Link href="#" variant="body2">
                    Already have an account? Sign in
                </Link>
            </Grid>
        </Grid>
    )
}

export const SignIn = () => {
    return (
        <Grid container sx={{ maxWidth: '360px' }}>
            <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
            </Grid>
            <Grid item>
                <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
            </Grid>
        </Grid>
    )
}