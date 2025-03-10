"use client";
import Link from "next/link";
import { Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 py-16 border-t border-yellow-300 bg-[#09092f]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-yellow-600 text-sm">
            © 2025 SynthOS. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link 
              href="https://x.com/SynthOS__" 
              target="_blank"
              className="text-yellow-600 hover:text-yellow-700 transition-colors"
            >
              <Twitter size={20} />
            </Link>
            
            <Link 
              href="https://thesynthos.notion.site/" 
              target="_blank"
              className="text-yellow-600 hover:text-yellow-700 transition-colors"
            >
              Docs
            </Link>
            
            <Link 
              href="https://app.example.com" 
              target="_blank"
              className="px-4 py-2 bg-yellow-200 text-yellow-700 rounded-full hover:bg-yellow-300 transition-colors"
            >
              Launch App
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
