import { configDotenv } from "dotenv";
import type { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { validatePassword } from "../util/customValidator.js";

configDotenv();

const saltRounds = parseInt(process.env.SALT_ROUNDS!);

export const hashPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const password = req.body.password;
    validatePassword(password);

    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);

    res.locals.hash = hash;
    next();
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("ERR_INVALID_FORMAT_", 0)) {
        res.status(400).json({ message: "Invalid formats of credentials." });
      }
    } else {
      console.error(error);
      res.status(500).json({ message: "Internal server error." });
    }
  }
};

export const verifyPassword = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const inputPassword = req.body.password;
    const dbHash = res.locals.hash;

    const isCorrectPassword = await bcrypt.compare(inputPassword, dbHash);

    if (isCorrectPassword) {
      next();
    } else {
      res.status(403).json({ message: "Incorrect credentials." });
    }
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes("ERR_INVALID_FORMAT_", 0)) {
        res.status(400).json({ message: "Invalid formats of credentials." });
      }
    } else {
      console.error(error);
      res.status(500).json({ message: "Internal server error." });
    }
  }
};