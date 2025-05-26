import { Button } from '../ui/Button'

export function Main() {
	return (
		<section className="hero-pattern relative overflow-hidden bg-background py-20 md:py-32">
			{/* Abstract shapes for visual interest */}
			<div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-cloud-blue/10 blur-3xl" />
			<div className="absolute top-32 right-0 h-80 w-80 rounded-full bg-cloud-purple/10 blur-3xl" />

			<div className="container relative z-10">
				<div className="grid items-center gap-12 md:grid-cols-2">
					<div className="animate-fade-in">
						<h1 className="mb-6">
							<div>
								<span>Consultant Solutions</span>
							</div>
							<span className="gradient-text">Engineered well</span>
						</h1>
						<p className="mb-8 text-xl text-muted-foreground">
							Expert consultancy for Cloud, DevOps, Security/Compliance and
							Telmatics and IoT.
						</p>
						<div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
							<Button href="/services" size="lg">
								Get Started
							</Button>
							<Button href="/about" variant="outline" size="lg">
								Learn More
							</Button>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="relative animate-float">
							<img
								src="/opening-laptop.avif"
								alt="Cloud Computing"
								className="mx-auto h-[400px] w-[600px] rounded-xl object-cover shadow-xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
