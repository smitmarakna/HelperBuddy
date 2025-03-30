import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "700" });

const Logo = () => {
	return (
		<Link href="/" className="flex items-center space-x-6">
			<Image
				src="/logo.png"
				alt="HelperBuddy Logo"
				width={42}
				height={42}
				priority
			/>
			<span
				className={`${inter.className} hidden sm:block font-bold text-2xl text-slate-100`}
			>
				HelperBuddy
			</span>
		</Link>
	);
};

export default Logo;
