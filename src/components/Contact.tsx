'use client';

import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
      <div className="max-w-4xl mx-auto space-y-8 backdrop-blur-md bg-black/20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Contact <span className="gradient-text-hosting">Us</span>
          </h1>
          <p className="text-white text-xl">
            For inquiries, please reach out to us through the following channels:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
            <CardHeader className="text-center">
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <CardTitle className="text-gray-100 text-xl">Email</CardTitle>
              <CardDescription className="text-gray-400">
                Send us a message directly
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center text-white">
              contact@neonnextgeneration.com
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
            <CardHeader className="text-center">
              <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <CardTitle className="text-gray-100 text-xl">Location</CardTitle>
              <CardDescription className="text-gray-400">
                Where we operate from
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-200 text-lg font-medium">Australia</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
            <CardHeader className="text-center">
              <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <CardTitle className="text-gray-100 text-xl">Community</CardTitle>
              <CardDescription className="text-gray-400">
                Join our Discord server
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild variant="link" className="text-green-400 hover:text-green-300 p-0 h-auto font-semibold text-lg">
                <a href="https://discord.gg/TCyUSF3dbH" target="_blank" rel="noopener noreferrer">
                  Discord Server
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-lg">
            We look forward to hearing from you!
          </p>
        </div>
      </div>
  );
}