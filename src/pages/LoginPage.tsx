import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Paper,
  Typography,
  IconButton,
  InputAdornment,
  OutlinedInput,
  FormControl,
  InputLabel
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('Email: ', email);
    console.log('Password: ', password);

    setEmail('');
    setPassword('');
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Box
        sx={{
          height: '100vh',
          width: '80vw',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
        <Paper
          elevation={3}
          sx={{
            padding: '3rem',
            width: '25rem',
            margin: '2rem 2rem',
            borderRadius: 3,
            boxShadow: '0rem 0.25rem 0.9375rem rgba(0, 0, 0, 0.3)'
          }}>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            color="primary"
            sx={{
              fontSize: '2rem'
            }}>
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleLogin}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              marginBottom: '2rem'
            }}>
            <TextField
              id="email-input-field"
              label="Email"
              type="text"
              margin="normal"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="password-input-field"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                      id="password-visibility-button">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                fullWidth
                label="Password"
              />
            </FormControl>
            <Button
              id="login-button"
              variant="contained"
              color="primary"
              sx={{ marginTop: '1rem' }}
              type="submit">
              Login
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
export default LoginPage;
