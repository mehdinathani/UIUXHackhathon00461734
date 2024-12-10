// LatestProducts.tsx
import Image, { StaticImageData } from "next/image";

// Define Props Type
type ProductCardProps = {
    image: StaticImageData;
    title: string;
    price: string;
    oldPrice: string;
};

// Product Card Component
function ProductCard({ image, title, price, oldPrice }: ProductCardProps) {
    return (
        <div className="w-[370px] h-[314px] bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="w-full h-[236px] bg-[#F6F7FB] flex items-center justify-center">
                <Image
                    src={image}
                    alt={title}
                    className="w-[200px] h-[200px] object-contain"
                    width={200}
                    height={200}
                />
            </div>
            <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#151875]">{title}</h3>
                <p className="text-sm text-[#ACABC3] line-through">${oldPrice}</p>
                <p className="text-lg font-bold text-[#FB2E86]">${price}</p>
            </div>
        </div>
    );
}

export default ProductCard;
