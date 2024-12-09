import Image from "next/image";
import heroImage from "@/app/assets/sofa promotional header.png"
import leftImage from "@/app/assets/image 32.png"

export default function HeroSection() {
    return (
        <div className="w-full h-[764px] flex justify-between items-center px-8 border border-accent">

            {/* Left Image */}
            <div className="w-[387px] h-[387px]">
                <Image src={leftImage} alt="Left Image" className="w-full h-full object-cover" />
            </div>

            {/* Text Box */}
            <div className="max-w-[644px] space-y-4 text-left">
                <h3 className="text-lg font-bold text-[#FB2E86]">Best Furniture For Your Castle....</h3>

                <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-black">
                    New Furniture Collection <br /> Trends in 2020
                </h1>

                <p className="text-base lg:text-lg font-semibold text-[#8A8FB9] leading-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
                    adipiscing in phasellus non in justo.
                </p>

                <button className="w-[163px] h-[50px] bg-[#FB2E86] text-white font-bold rounded-md hover:bg-[#E0227A]">
                    Shop Now
                </button>
            </div>

            {/* Right Image */}
            <div className="w-[706px] h-[689px]">
                <Image src={heroImage} alt="Hero Image" className="w-full h-full object-cover" />
            </div>

        </div>
    );
}  
