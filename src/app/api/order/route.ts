const orders: any[] = [];

import Redis from "ioredis";
import { NextRequest } from "next/server";

const redis = new Redis();

export async function POST(request: NextRequest) {
  const body = await request.json();
  orders.push(body);
  return Response.json({});
}

export async function GET() {
  console.log("orders", orders);

  const xrders = await redis.lrange("orders", 0, -1); // Retrieve orders from Redis

  const yrders = xrders.map((x) => JSON.parse(x));

  return Response.json(orders?.length ? orders : yrders);
}
