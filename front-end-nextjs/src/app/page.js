"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  const [url, setUrl] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:8000/generate-qr/?url=${encodeURIComponent(url)}`
      );

      setQrCodeUrl(response.data.qr_code_url);
      toast.success("QR Code generated successfully!", {
        description: "Your QR code is ready to use",
      });
    } catch (error) {
      console.error("Error generating QR Code:", error);
      toast.error("Generation failed", {
        description: error.response?.data?.message || "Please try again later",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!qrCodeUrl) return;

    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.info("Download started", {
      description: "Your QR code is being downloaded",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Toaster />

      <main className="flex-1">
        <div className="container relative pt-24 pb-8 md:py-24 flex flex-col items-center justify-center">
          <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                QR Code Generator
              </h1>
              <p className="mt-2 text-muted-foreground">
                Transform URLs into shareable QR codes instantly
              </p>
            </div>

            <Card className="p-6 space-y-4 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="hover:border-primary focus:border-primary"
                  required
                />
                <Button
                  type="submit"
                  className="w-full transition-all hover:shadow-md"
                  disabled={isLoading}
                >
                  {isLoading ? "Generating..." : "Generate QR Code"}
                </Button>
              </form>

              {qrCodeUrl && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex flex-col items-center space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Scan this QR Code
                    </p>
                    <div className="p-4 border rounded-lg bg-white shadow-sm">
                      <img
                        src={qrCodeUrl}
                        alt="Generated QR Code"
                        className="h-48 w-48"
                      />
                    </div>
                    <Button
                      variant="outline"
                      onClick={handleDownload}
                      className="mt-2"
                    >
                      Download Your QR Code
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
