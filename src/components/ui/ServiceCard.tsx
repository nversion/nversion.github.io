import { Cloud, Database, Globe, Server } from 'lucide-react'
import { Button } from './Button'
import { Card, CardContent, CardFooter, CardHeader } from './Card'

export interface ServiceCardPropsNoIcon
	extends Omit<ServiceCardProps, 'icon'> {}

export interface ServiceCardProps {
	title: string
	description: string
	icon: React.ReactNode
	features: string[]
	link: string
	colorClass?: string
}

export function ServiceCard({
	title,
	description,
	icon,
	features,
	link,
	colorClass = 'from-cloud-blue to-cloud-purple',
}: ServiceCardProps) {
	return (
		<Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
			<CardHeader className={`bg-gradient-to-br ${colorClass} text-white`}>
				<div className="flex items-center space-x-3">
					{icon}
					<h3 className="text-lg font-bold">{title}</h3>
				</div>
			</CardHeader>
			<CardContent className="flex-1 pt-6">
				<p className="mb-6 text-muted-foreground">{description}</p>
				<ul className="space-y-2">
					{features.map((feature, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<li key={index} className="flex items-start">
							<svg
								className={'mr-2 mt-1 h-5 w-5'}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<title>Check</title>
								<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
								<path d="M22 4 12 14.01l-3-3" />
							</svg>
							<span>{feature}</span>
						</li>
					))}
				</ul>
			</CardContent>
			<CardFooter>
				<Button href={link} variant="outline" className="w-full">
					Contact Us
				</Button>
			</CardFooter>
		</Card>
	)
}
