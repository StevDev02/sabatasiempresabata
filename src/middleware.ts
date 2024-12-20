import { NextRequest, NextResponse } from "next/server";
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {

    const session = await getToken({req, secret: 'token'})

    if (!session) {
        const requestedPage = req.nextUrl.pathname
        const url = req.nextUrl.clone()
        url.pathname = `/`
        url.search = `p=${ requestedPage }`
        return NextResponse.redirect( url )
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/account', '/collection/zapatos/taco-bajo']
}