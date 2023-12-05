import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../connection";
import bcryptjs from "bcryptjs";

const User = require("@/app/models/userModal");

connect();

export async function POST(request: NextRequest) {
  try {
    const { username, email, password } = await request.json();
    const isExists = await User.findOne({email});
    if(isExists){
        return NextResponse.json({
            success: false,
            message: "User already exists",
          });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const user = User({
      username,
      email,
      password: hashedPassword,
    });
    const newUser = await user.save();
    return NextResponse.json({
      success: true,
      message: "User sign uped successfully",
      user: newUser,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
