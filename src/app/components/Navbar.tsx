// components/Navbar.tsx

export default function Navbar() {
    return (
        <nav className="w-full h-16 bg-[#0D0E43] text-white flex items-center justify-between px-8 relative">
            <div className="text-2xl font-bold">Hekto</div>

            <ul className="flex space-x-6">
                <li className="hover:text-[#FB2E86] cursor-pointer">Home</li>
                <li className="hover:text-[#FB2E86] cursor-pointer">Products</li>
                <li className="hover:text-[#FB2E86] cursor-pointer">Pages</li>
                <li className="hover:text-[#FB2E86] cursor-pointer">Shop</li>
                <li className="hover:text-[#FB2E86] cursor-pointer">Contact</li>
            </ul>

            <input
                type="text"
                placeholder="Search"
                className="w-60 h-10 p-2 rounded-md border-2 border-[#E7E6EF] focus:outline-none"
            />
        </nav>
    );
}
