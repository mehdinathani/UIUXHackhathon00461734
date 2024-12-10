import Image from "next/image";

type ProductCardProps = {
    image: string;  // Supports both static imports and URLs
    title: string;
    code: string;
    price: number | string;  // Allows flexibility
};

function ProductCard({ image, title, code, price }: ProductCardProps) {
    return (
        <div className="w-[270px] h-[361px] bg-white shadow-lg rounded-lg overflow-hidden m-[1px]">
            <div className="w-full h-[236px] bg-[#F6F7FB]">
                <Image src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 text-left">
                <h3 className="text-lg font-bold text-[#FB2E86]">{title}</h3>
                <div className="w-[52px] h-[4px] bg-[#FB2E86] rounded-full my-2"></div>
                <p className="text-sm text-[#151875]">Code - {code}</p>
                <p className="text-lg font-bold text-[#FB2E86]">${price}</p>
            </div>
        </div>
    );
}

export default ProductCard;
