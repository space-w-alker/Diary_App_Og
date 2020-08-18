import React from 'react';
import { Card, CardTitle, CardHeader, CardBody, Button } from "shards-react";
import { TextField, CssBaseline } from "@material-ui/core"

import BackgroundImage from '../images/diary-image.jpg'

import './login.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";


function LoginPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className='login-page'>
        <div className='background'>
          <img src={BackgroundImage} className='background-image' />
        </div>
        <div className='overlay'>
          <div className='round-card'>
            <div className='page-1'>
              <div className='sign-in-title'>
                Sign in to Account
              </div>
              <div className='third-party'>

              </div>
              <div>
                sign in with email
              </div>
              <div>
                <TextField label="Email" variant='outlined' size='small' className='mat-input'/>
              </div>
              <div>
                <TextField label="password" variant='outlined' size='small' className='mat-input' />
              </div>
              <div className='forgot-password'>

              </div>
              <div>
                <Button pill theme='info' className='action-button' size='lg'>
                  Sign In
                </Button>
              </div>
            </div>
            <div className='page-2'>

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginPage;