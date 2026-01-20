import jwt from "jsonwebtoken";
import User from "../models/User.js";
import "dotenv/config";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) return res.status(401).json({ message: "Not authorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) return res.status(401).json({ message: "Not authorized" });

    const user = await User.findById(decoded.userId);
    if (!user) return res.status(401).json({ message: "Not authorized" });
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
