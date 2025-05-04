'use client'

import {Form} from "@heroui/form";
import {Input} from "@heroui/input";
import { Button } from "@heroui/button";


/**
 * Note to self: 
 * Prefix stuff you want from .env to be publicly available in next.js with
 * NEXT_PUBLIC_[name]
 * 
 */

interface Advisory {
  name: string
  status: 'green' | 'yellow' | 'red'
  msg: string
}

interface AdvisoryData {
  all: Advisory[]
  status: {
    red: string
    yellow: string
    green: string
  }
}

export default function MailwindPage() {
  return (
    <div className="w-screen -mx-[calc((100vw-100%)/2)] font-sans">
      <div className="px-4 py-1">
        <p className="bg-gray-500 text-black text-lg p-2">
          <strong>NOTICE</strong>: Mailwind is not delivering packages at the time being. Please check back later!
        </p>
        
      </div>
    </div>
  );
}
