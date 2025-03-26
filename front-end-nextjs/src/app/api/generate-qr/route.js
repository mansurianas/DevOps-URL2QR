import { NextResponse } from "next/server";
import axios from "axios";

// Determine the API base URL dynamically
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  (process.env.NODE_ENV === "production"
    ? "http://qr-backend-service" // Kubernetes Service
    : "http://backend:8000"); // Docker Compose

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const response = await axios.post(
      `${API_BASE_URL}/generate-qr/?url=${encodeURIComponent(url)}`
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error generating QR Code:", error);
    return NextResponse.json(
      { error: "Failed to generate QR Code" },
      { status: 500 }
    );
  }
}
