'use client'

import { Divider } from "@heroui/divider";
import { AdvisoryCard } from "@/components/advisory";
import { CircularProgress } from "@heroui/progress";
import { useEffect, useState } from "react";

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

export default function AdvisoriesPage() {
  const [advisoryData, setAdvisoryData] = useState<AdvisoryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdvisories = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_ADVISORY_GIST}`);
        if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
        const data = await res.json();
        setAdvisoryData(data);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchAdvisories();
  }, []);

  if (loading) return <CircularProgress className="font-sans" label="Loading advisory data..." />;;
  if (error) return <p className="font-sans p-4 text-red-600">Something went horribly wrong and I can&apos;t seem to fix it! {error}</p>;
  if (!advisoryData) return null;

  const { all, status } = advisoryData;

  return (
    <div className="w-screen -mx-[calc((100vw-100%)/2)] font-sans">
      <div className="px-4 py-1">
        <p className="bg-yellow-500 text-black text-lg p-2">
          <strong>NOTICE</strong>: Advisories posted on this page may be out-of-date. Please visit the Minecraft Announcement Thread for the latest.
        </p>
        <div className="space-y-2.5">
          <Divider className='my-2' />
          {all.map((item) => (
            <AdvisoryCard
              key={item.name}
              title={item.name}
              desc={status[item.status]}
              extendedDesc={item.msg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
