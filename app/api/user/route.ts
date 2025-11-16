import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/configs/db";
import { usersTable } from "@/configs/schema";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
    try {
        const user = await currentUser();

        if (!user || !user.primaryEmailAddress?.emailAddress) {
            return NextResponse.json(
                { error: "Unauthorized or missing email address" },
                { status: 401 } 
            );
        }

        const email = user.primaryEmailAddress.emailAddress;

        // Return user data without database operations for now
        return NextResponse.json({
            id: user.id,
            name: user.fullName ?? "",
            email: email,
            message: "User authenticated successfully"
        });

    } catch (e: any) {
        console.error('User API Error:', e);
        return NextResponse.json({ error: e.message || "Server error" }, { status: 500 });
    }
}
