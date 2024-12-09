// components/TopHeader.tsx

import Image from "next/image";
import env from "@/app/assets/uil_envelope-alt.png";

export default function TopHeader() {
    return (
        <div className="w-full h-11 bg-[#7E33E0] text-white flex justify-center items-center space-x-2 px-4">

            {/* Envelope Icon */}
            <div className="w-[13.33px] h-[10.67px] relative">
                <Image src={env} alt="Envelope Icon" layout="fill" objectFit="contain" />
            </div>

            {/* Email Text */}
            <span className="text-sm font-medium">mhhasanul@gmail.com</span>
        </div>
    );
}
