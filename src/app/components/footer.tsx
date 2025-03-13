"use client";
import Link from "next/link";
import { Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 py-10 md:py-16 border-t border-yellow-300 bg-[#09092f]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-yellow-600 text-sm mb-6 md:mb-0">
            © 2025 SynthOS. All rights reserved.
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Link 
              href="https://x.com/SynthOS__" 
              target="_blank"
              className="text-yellow-600 hover:text-yellow-700 transition-colors p-2"
            >
              <Twitter size={20} />
            </Link>
            
            <Link 
              href="https://thesynthos.notion.site/" 
              target="_blank"
              className="text-yellow-600 hover:text-yellow-700 transition-colors p-2"
            >
              Docs
            </Link>
            
            <Link 
              href="https://app.synthos.fun/" 
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
