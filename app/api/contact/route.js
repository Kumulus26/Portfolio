import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request) {
  try {
    const body = await request.json()
    const { firstname, lastname, email, phonenumber, message } = body

    const contacts = await prisma.contacts.create({
      data: {
        firstname,
        lastname,
        email,
        phonenumber,
        message
      }
    })

    return NextResponse.json(contacts, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
} 