import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
	const url = req.nextUrl.clone();
	const { token } = req.cookies;
	console.log(token);
	console.log(req.nextUrl.origin);
	url.pathname = "/dashboard";
	if (token && req.url === `${req.nextUrl.origin}/login`) {
		return NextResponse.redirect(url);
	}
}
