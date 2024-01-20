import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(

    function middleware(request){
        console.log(request.nextUrl.pathname);
        // console.log(request.nextUrl.token);

        if(request.nextUrl.pathname.startsWith("/faq") &&
         request.nextauth.token?.role !== "admin") {
            return NextResponse.rewrite(
                new URL("/denied", request.url)
            )
        }
    },
    {
        callbacks: {
            authorized: ({token}) => !!token
        },
    }
)
export const config = { matcher: ["/faq", "/bar"] }