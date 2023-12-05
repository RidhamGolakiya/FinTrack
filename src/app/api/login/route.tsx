import { NextResponse } from "next/server";
import connect from "../../../../connection";

const User = require("@/app/models/userModal");

connect();

export async function GET(){
    const users = await User.find().select("-password");
    return NextResponse.json({users});
}
