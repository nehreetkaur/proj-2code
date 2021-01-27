




const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;      // it's in passport library

passport.serializeUser(function(user, done) {        //From the user take just the id (to minimize the cookie size) and just pass the id of the user to the done callback function
    
   
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {      //     not the user this function usually recives the id ,
    done(null, user); 
});                                               //then you use this id in selecting the user from the db and pass the user (obj) to the  callback function(done)
                                                                                                                                                    
                                                                     
    
    
    

passport.use(new GoogleStrategy({
    clientID:process.env.G_CLIENT_ID,
    clientSecret:process.env.G_CLIENT_SECRET,
    callbackURL:process.env.CALLBACK_URL,
    passReqToCallback:true
  },
  function(request, accessToken, refreshToken, profile, done) {      //refreshtoken after authentication, done is call back function
    console.table(profile)       // from document
    return done(null, profile);   // profile is object, in which we see differnt kind of information[dipalyname,email,profilepic]
  }
));

 