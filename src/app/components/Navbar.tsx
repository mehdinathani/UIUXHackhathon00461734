import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full h-16 bg-[#0D0E43] text-white flex items-center justify-between px-8 relative">
            <div className="text-2xl font-bold">Hekto</div>

            <ul className="flex space-x-6">
                <li className="hover:text-[#FB2E86] cursor-pointer">
                    <Link href="/">Home</Link>
                </li>
                <li className="hover:text-[#FB2E86] cursor-pointer">
                    <Link href="/products">Products</Link>
                </li>
                <li className="hover:text-[#FB2E86] cursor-pointer">
                    <Link href="/pages">Pages</Link>
                </li>
                <li className="hover:text-[#FB2E86] cursor-pointer">
                    <Link href="/shop">Shop</Link>
                </li>
                <li className="hover:text-[#FB2E86] cursor-pointer">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>

            <input
                type="text"
                placeholder="Search"
                className="w-60 h-10 p-2 rounded-md border-2 border-[#E7E6EF] focus:outline-none"
            />
        </nav>
    );
}
