"use client";

import { HeroImg } from "@/components/heroimg";
import { PageCard } from "@/components/card";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 py-2 min-h-screen w-full">

      <HeroImg></HeroImg>

      <div className="flex flex-row items-center justify-center pt-10 gap-5">
        <PageCard
          icon="WarningOutline"
          title="Travel Advisories"
          desc="Stay informed on the latest Travel Advisories issued by the Department of Travel."
          link="/advisories"
          buttonDesc="Visit the Travel Advisories page."
        />
        <PageCard
          icon="BonfireOutline"
          title="Visiting The Knowle Regions?"
          desc="Explore the multitiude of attractions and activites happening right now in the Knowle Regions."
          link="/visiting"
          buttonDesc="Learn more."
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-5">
        <PageCard
          icon="DocumentTextOutline"
          title="Visas"
          desc="With the SmartTraveller© program, you can easily check your eligibility for a Knowle Regions Visa in 3 easy steps."
          link="/visas"
          buttonDesc="Check your eligibility."
        />
        <PageCard
          icon="GlobeOutline"
          title="Obtaining Citizenship"
          desc="Citizenship is the first step to secure a more permanent life in The Knowle Regions. Start building your future today."
          link="/citizenship"
          buttonDesc="Learn more."
        />
      </div>
    </section>
  );
}
