import Image from "next/legacy/image";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

export default function Embassies() {
  return (
    <div className="w-screen -mx-[calc((100vw-100%)/2)] font-sans">
  <div className="w-full px-4 pb-10 flex flex-col items-center">
    <h1 className="font-semibold text-lg text-white mb-2">Embassies</h1>

    {/* Flex row for the cards */}
    <div className="flex flex-wrap justify-center gap-4">
        <Card className="max-w-[400px] w-full sm:w-[400px]">
          <Image
            src="/KRembassy.png"
            alt="Blended Image"
            width={400}
            height={200}
            className="w-full h-48 object-cover rounded-t-lg"
            priority
          />

          <CardHeader>
            <div>
              <p className="text-md font-semibold text-center">
                Knowle Regions Embassy in KR
              </p>
            </div>
          </CardHeader>

          <Divider />

          <CardBody>
            <p className="font-semibold">Good to know:</p>
            <p>
              • This embassy does not accept walk-ins. Please schedule an appointment prior to visiting.
            </p>
            <p>
              • Mail service is strictly reserved for citizens residing within the Kemonomimi Republic.
            </p>
          </CardBody>

          <Divider />

          <CardFooter>
            <a href="https://forms.gle/XbgRQSJRDYaKNhRXA"><Button>Schedule an appointment</Button></a>
          </CardFooter>
        </Card>
    </div>
  </div>
</div>

  );
}
