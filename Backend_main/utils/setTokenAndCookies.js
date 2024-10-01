import jwt from 'jsonwebtoken';

const generateTokenAndCookies = (userId, response) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET_TOKEN, {
        expiresIn: '10d'
    });


    response.cookie("remember_me", token, {
        maxAge: 10*24*60*60*1000,
        httpOnly: true,
        samesite: "strict",
        secure: process.env.NODE_ENV !== "development"
    })
}

export default generateTokenAndCookies;