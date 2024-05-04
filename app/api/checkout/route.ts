import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req:Request, res:Response) {
  const {title, price} = await req.json();

  try{
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
            price_data: {
                currency: "jpy",
                product_data: {
                name: title,
                },
                unit_amount: price,
            },
            quantity: 1,
            },
        ],
        mode: "payment",
        success_url: `http://localhost:3000/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: "http://localhost:3000",
        });
  }catch(err: any){
    return NextResponse.json(err.message)
  }
}