import Image from "next/image";
import productImage from "@/app/assets/image 1167.png"

export default function FeaturedProducts() {
    return (
        <div className="w-full py-16 bg-[#F6F7FB]">

            {/* Section Title */}
            <div className="text-left mb-8 mx-8">
                <h2 className="text-4xl font-extrabold text-[#1A0B5B]">Featured Products</h2>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">

                {/* Product Card 1 */}
                <div className="max-w-[270px] h-[361px] bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-full h-[236px] bg-[#F6F7FB]">
                        <Image src={productImage} alt="Product" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 text-left">
                        <h3 className="text-lg font-bold text-[#FB2E86]">Cantilever Chair</h3>
                        <div className="w-[52px] h-[4px] bg-[#FB2E86] rounded-full my-2"></div>
                        <p className="text-sm text-[#151875]">Code - Y523201</p>
                        <p className="text-lg font-bold text-[#FB2E86]">$42.00</p>
                    </div>
                </div>

                {/* Repeat the above card for additional products */}
                {/* Product Card 2 */}
                <div className="max-w-[270px] h-[361px] bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-full h-[236px] bg-[#F6F7FB]">
                        <Image src={productImage} alt="Product" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 text-left">
                        <h3 className="text-lg font-bold text-[#FB2E86]">Cantilever Chair</h3>
                        <div className="w-[52px] h-[4px] bg-[#FB2E86] rounded-full my-2"></div>
                        <p className="text-sm text-[#151875]">Code - Y523201</p>
                        <p className="text-lg font-bold text-[#FB2E86]">$42.00</p>
                    </div>
                </div>

                {/* Product Card 3 */}
                <div className="max-w-[270px] h-[361px] bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-full h-[236px] bg-[#F6F7FB]">
                        <Image src={productImage} alt="Product" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 text-left">
                        <h3 className="text-lg font-bold text-[#FB2E86]">Cantilever Chair</h3>
                        <div className="w-[52px] h-[4px] bg-[#FB2E86] rounded-full my-2"></div>
                        <p className="text-sm text-[#151875]">Code - Y523201</p>
                        <p className="text-lg font-bold text-[#FB2E86]">$42.00</p>
                    </div>
                </div>

                {/* Product Card 4 */}
                <div className="max-w-[270px] h-[361px] bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-full h-[236px] bg-[#F6F7FB]">
                        <Image src={productImage} alt="Product" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 text-left">
                        <h3 className="text-lg font-bold text-[#FB2E86]">Cantilever Chair</h3>
                        <div className="w-[52px] h-[4px] bg-[#FB2E86] rounded-full my-2"></div>
                        <p className="text-sm text-[#151875]">Code - Y523201</p>
                        <p className="text-lg font-bold text-[#FB2E86]">$42.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}  
