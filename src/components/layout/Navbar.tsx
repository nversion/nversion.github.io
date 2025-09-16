import { useState } from 'react'
import { Button } from '../ui/Button'

const NavLinks = ({ className }: { className?: string }) => {
	return (
		<div className={className}>
			<a href="/" className="text-foreground/80 hover:text-foreground">
				Home
			</a>
			<a href="/services" className="text-foreground/80 hover:text-foreground">
				Services
			</a>
			<a href="/about" className="text-foreground/80 hover:text-foreground">
				About
			</a>
			<a href="/contact" className="text-foreground/80 hover:text-foreground">
				Contact
			</a>
		</div>
	)
}

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
			<div className="container flex h-16 items-center justify-between">
				<div className="flex items-center">
					<a href="/" className="flex items-center space-x-2">
						<span className="text-xl font-bold sm:inline-block">
							<img src="/nversion-logo.svg" alt="Logo" width="140px" />
						</span>
					</a>
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex md:items-center md:gap-6">
					<NavLinks className="flex gap-6" />
				</div>

				{/* Mobile Menu Button */}
				<button
					type="button"
					className="inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:bg-accent hover:text-foreground md:hidden"
					onClick={toggleMenu}
					aria-expanded={isMenuOpen}
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<title>Menu</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d={
								isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
							}
						/>
					</svg>
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden ${isMenuOpen ? 'animate-in slide-in-from-top' : 'animate-out slide-out-to-top hidden'} `}
			>
				<div className="space-y-1 pb-3 pt-2 shadow-lg">
					<NavLinks className="flex flex-col space-y-3 px-4" />
					<div className="px-4 pt-2">
						<Button className="w-full">Contact Us</Button>
					</div>
				</div>
			</div>
		</nav>
	)
}
