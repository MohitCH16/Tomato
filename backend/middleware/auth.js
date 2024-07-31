import jwt from "jsonwebtoken"

const authMiddleware = async (req,res,next) => {
    // const authHeader = req.headers['authorization'];

    // // Log the Authorization header for debugging
    // console.log("Authorization Header:", authHeader);

    // if (!authHeader) {
    //     return res.status(401).json({ success: false, message: "Not Authorized. Login Again." });
    // }

    // const token = authHeader.split(' ')[1]; // Extract the token from "Bearer <token>"

    // // Log the extracted token for debugging
    // console.log("Extracted Token:", token);

    // if (!token) {
    //     return res.status(401).json({ success: false, message: "Not Authorized. Login Again." });
    // }

    // try {
    //     const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        
    //     // Log the decoded token for debugging
    //     console.log("Decoded Token:", token_decode);

    //     req.body.userId = token_decode.id;
    //     next();
    // } catch (error) {
    //     console.log("Token verification error:", error);
    //     res.status(403).json({ success: false, message: "Token verification failed." });
    // }

    const {token} = req.headers;
    if(!token){
        return res.json({success:false,message:"Not Authorized Login Again"})
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log("error",error)
        res.json({success:false,message:"Error"})
    }
}

export default authMiddleware;      // this decoded the token and convert into userID