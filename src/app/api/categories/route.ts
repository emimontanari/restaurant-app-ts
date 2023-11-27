import { prisma } from "@/utils/connect"
import { NextResponse } from "next/server"



export const GET = async () => {
    try {
        const categories = await prisma.category.findMany()

        return new NextResponse(JSON.stringify(categories), { status: 200 })

    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 200 })

    }

}

export const POST = () => {
    return new NextResponse('hOLA', { status: 200 })
}