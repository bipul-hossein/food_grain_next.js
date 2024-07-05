import { NextResponse } from "next/server";
import { useSelector } from "react-redux";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  //   const { user } = useSelector((state) => state?.user);
  //   console.log(user, "admin");
  //   if (user?.username == null) {
  //     return redirect(new URL("/login", request.url));
  //   }
  //   return NextResponse.redirect(new URL("/login", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
};
