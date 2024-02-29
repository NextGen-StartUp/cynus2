// middleware.js
import { NextResponse } from "next/server";

const lowercasePathMiddleware = (req) => {
  const requestedPath = req.nextUrl.pathname;
  const lowercasePath = requestedPath.toLowerCase();

  if (requestedPath === lowercasePath) {
    return NextResponse.next();
  }

  const lowercaseUrl = new URL(req.nextUrl.origin + lowercasePath);
  return NextResponse.redirect(lowercaseUrl);
};

export default lowercasePathMiddleware;
