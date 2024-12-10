import Image, { StaticImageData } from "next/image";

type ProductCardProps = {
    image: string | StaticImageData;  // Supports both types
    title: string;
    price: number | string;
    oldPrice?: number | string;  // Optional
};

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
                <p className="text-lg font-bold text-[#FB2E86]">${price}</p>
                {oldPrice && (
                    <p className="text-sm line-through text-[#ACABC3]">${oldPrice}</p>
                )}
            </div>
        </div>
    );
}

export default ProductCard;
