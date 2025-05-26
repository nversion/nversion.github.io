import { Card } from '../ui/Card'

const expertise = [
	{
		title: 'Cloud Strategy & Advisory',
		description:
			'We help businesses plan and execute their cloud journeys with strategic roadmaps tailored to specific goals.',
	},
	{
		title: 'Migration & Modernization',
		description:
			'Our experts migrate your infrastructure and applications to and from the cloud while modernizing them for maximum efficiency.',
	},
	{
		title: 'Security & Compliance',
		description:
			'We help implement robust security measures and ensure compliance with industry regulations and standards.',
	},
	{
		title: 'DevOps & Automation',
		description:
			'Streamline your development and operations with our DevOps implementation and automation services.',
	},
	{
		title: 'Cost Optimization',
		description:
			'Maximize ROI with our cost optimization strategies, reducing cloud spend while improving performance.',
	},
	{
		title: 'Telematics and IoT',
		description:
			'Help with IoT device development with a focus on automotive and telematics solutions and embedded systems project management.',
	},
]

export function AboutUs() {
	return (
		<section id="about" className="py-20">
			<div className="container">
				<div className="mb-16 grid items-center gap-12 md:grid-cols-2">
					<div>
						<div className="relative">
							<div className="absolute -left-6 -top-6 h-24 w-24 rounded-lg bg-cloud-blue/20" />
							<div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-lg bg-cloud-purple/20" />
							<img
								src="/people-screens.avif"
								alt="Team Collaboration"
								className="relative z-10 rounded-lg object-cover shadow-lg"
							/>
						</div>
					</div>
					<div>
						<h2 className="mb-6">About NVersion</h2>
						<p className="mb-4 text-lg text-muted-foreground">
							We are passionate about technology and helping businesses achieve
							their goals through innovative solutions. We work with both small
							and large organizations to deliver tailored solutions that drive
							efficiency, scalability, and security.
						</p>
						<p className="mb-8 text-lg text-muted-foreground" />
					</div>
				</div>

				{/* Expertise */}
				<div className="mt-20">
					<div className="mx-auto mb-16 max-w-2xl text-center">
						<h2 className="mb-4">Our Expertise</h2>
						<p className="text-xl text-muted-foreground">
							Comprehensive services to address all your business needs
						</p>
					</div>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{expertise.map((item, index) => (
							<Card
								key={index}
								className="p-6 transition-shadow hover:shadow-md"
							>
								<h3 className="mb-3 text-xl font-medium">{item.title}</h3>
								<p className="text-muted-foreground">{item.description}</p>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
