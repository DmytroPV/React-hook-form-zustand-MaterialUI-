import React, { useState } from "react"
import { useForm, Controller, } from "react-hook-form"

import Typography from '@mui/material/Typography'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'

import {
    ValidationName,
    ValidationEmail,
    ValidationPassword
} from './ValidForm'
import Copyright from '../CopyrightBlockBottom'

import {
    BoxGlobalAuthForm,
    IconsAuthForm,
    FormBoxAuthForm,
    InputNameEmailAuthForm,
    FormControlPasswordAuthForm,
    ButtonAuthForm,
    SignUp
} from './StyledFormMaterial'
import {
    ERROR_FORM_RED,
    MAIN_BACKGROUND
} from '../../assets/themes/colors'



function AuthForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show)
    const {
        handleSubmit,
        control,
        formState: { isValid },
        getValues,
        reset
    } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
        }
    })

    const onSubmit = data => { console.log(data); reset() }

    return (
        <>
            <BoxGlobalAuthForm>
                <Typography variant="h5" component="div" >
                    Sign up
                </Typography>
                <IconsAuthForm iconvalid={isValid} />
                <FormBoxAuthForm >
                    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'contents' }} >
                        <Controller
                            name="name"
                            control={control}
                            rules={ValidationName}
                            render={({ field, fieldState }) =>
                                <InputNameEmailAuthForm {...field} fullWidth variant="outlined" size="small"
                                    label={fieldState.error ? fieldState.error?.message : "Name *"}
                                    error={fieldState.error}
                                />
                            }
                        />
                        <Controller
                            name="email"
                            control={control}
                            rules={ValidationEmail}
                            render={({ field, fieldState }) =>
                                <InputNameEmailAuthForm {...field} fullWidth variant="outlined" size="small"
                                    label={fieldState.error ? fieldState.error?.message : "Email *"}
                                    error={fieldState.error}
                                />
                            }
                        />
                        <Controller
                            name="password"
                            control={control}
                            rules={ValidationPassword}
                            render={({ field, fieldState }) =>
                                <FormControlPasswordAuthForm fullWidth variant="outlined" size="small"
                                    sx={{ color: fieldState.error ? { '& .MuiInputLabel-outlined': { color: `${ERROR_FORM_RED}` } } : null }}
                                >
                                    <InputLabel >
                                        {fieldState.error ? fieldState.error?.message : "Password *"}
                                    </InputLabel>
                                    <OutlinedInput
                                        {...field}
                                        label={fieldState.error ? fieldState.error?.message : "Password *"}
                                        error={fieldState.error}
                                        onChange={(e) => {
                                            field.onChange(e.target.value.replace(/[~<>`&?:|;!${}'"]/g, ''))
                                        }}
                                        type={showPassword ? 'text' : 'password'}
                                        sx={{ backgroundColor: `${MAIN_BACKGROUND}` }}
                                        endAdornment={
                                            <InputAdornment position="end" >
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControlPasswordAuthForm>
                            }
                        />
                        <Controller
                            name="passwordConfirm"
                            control={control}
                            rules={{ validate: (value) => (value !== getValues("password") ? 'Passwords do not match' : true) }}
                            render={({ field, fieldState }) =>
                                <FormControlPasswordAuthForm fullWidth variant="outlined" size="small"
                                    sx={{ color: fieldState.error ? { '& .MuiInputLabel-outlined': { color: `${ERROR_FORM_RED}` } } : null }}
                                >
                                    <InputLabel >
                                        {fieldState.error ? fieldState.error?.message : "Password *"}
                                    </InputLabel>
                                    <OutlinedInput
                                        {...field}
                                        label={fieldState.error ? fieldState.error?.message : "Password *"}
                                        error={fieldState.error}
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        sx={{ backgroundColor: `${MAIN_BACKGROUND}` }}
                                        endAdornment={
                                            <InputAdornment position="end" >
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowConfirmPassword}
                                                    edge="end"
                                                >
                                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControlPasswordAuthForm>
                            }
                        />
                        <ButtonAuthForm type="submit" fullWidth variant="contained" disabled={!isValid} >
                            Sign Up
                        </ButtonAuthForm>
                        <SignUp />
                    </form>
                </FormBoxAuthForm>
            </BoxGlobalAuthForm >
            <Copyright />
        </>
    )
}

export default AuthForm
