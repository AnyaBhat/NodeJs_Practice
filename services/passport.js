const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const keys=require('../config/keys')



//OAuth using passport strategy-Google-oauth20 and passport JS
passport.use(
    new GoogleStrategy(
    {
        clientID:keys.googleClientID,
        clientSecret:keys.googleClientSecret,
        callbackURL:'/auth/google/callback'
    },
    (accessToken,refreshToken,profile,done)=>{
        console.log('access Token : ',accessToken);
        console.log('refresh Token:',refreshToken);
        console.log('profile :',profile);
    })
);