import Auth from "../model/auth.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndCookies from "../utils/setTokenAndCookies.js";

export const postSignup = async (request, response) => {
  try {
    const { username, password, fullname, email } = request.body;
    const userExists = await Auth.findOne({ username });

    if (userExists) {
      return response.status(400).json({ error: "Username is already taken" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      return response.status(400).json({ error: "Invalid email format" });
    }

    if (password.length < 6)
      return response
        .status(400)
        .json({ error: "Password must be atleast 6 characters long" });

    const emailExists = await Auth.findOne({ email });

    if (emailExists) {
      return response
        .status(400)
        .json({ error: "Email is already associated with a different " });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new Auth({
      username,
      password: hashedPassword,
      email,
      fullname,
    });
    
    if (newUser) {
      await newUser.save();

      return response.status(201).json({
        username: newUser.username,
        fullname: newUser.fullname,
        email: newUser.email,
      });
    } else {
      return response.status(400).json({ error: "Invalid signup credentials" });
    }
  } catch (error) {
    console.log("Error in the postSignup controllers", error);
    return response.status(500).json({ error: "Internal server error" });
  }
};


export const postLogin = async (request, response) => {
    try {
      const { username, password } = request.body;

      const userExists = await Auth.findOne({ username });
      if(password.length < 6){
        return response.status(400).json({error: "Password must be atleast 6 characters long"})
      }
  
      const isPasswordVerified = await bcrypt.compare(password, userExists.password);


      if(!isPasswordVerified){
        return response.status(400).json({error: "Invalid username and password"})
      }
  
      if (userExists && isPasswordVerified) {
        const user = await Auth.findOne({username})
        generateTokenAndCookies(user._id, response)
        return response.status(200).json({
            _id: user._id,
            username: user.username,
            fullname: user.fullname
        });
      }
  
     
    } catch (error) {
      console.log("Error in the postLogin controllers", error);
      return response.status(500).json({ error: "Internal server error" });
    }
  };
  