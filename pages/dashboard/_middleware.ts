import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
	const { token } = req.cookies;
	const login = req.nextUrl.clone();
	login.pathname = "/login";

	if (!token) {
		return NextResponse.redirect(login);
	}
}
