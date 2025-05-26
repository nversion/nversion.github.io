import { useState } from 'react'

export function ContactUs() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		message: '',
	})

	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
	}

	return (
		<section id="contact" className="py-20">
			<div className="container">
				<div className="mx-auto max-w-5xl">
					<div className="grid gap-8 rounded-lg bg-muted p-8 md:grid-cols-2">
						<div>
							<h2 className="mb-4">Get in Touch</h2>
							<p className="mb-6 text-muted-foreground">
								Need help on your next project? Our experts are here to help.
								Fill out the form, and we'll get back to you as soon as
								possible.
							</p>

							<div className="space-y-4">
								<div className="flex items-start">
									<div className="mr-3 rounded-md bg-primary/10 p-2">
										<svg
											className="h-6 w-6 text-primary"
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<title>Phone</title>
											<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
										</svg>
									</div>
									<div>
										<h3 className="text-lg font-medium">Phone</h3>
										<p className="text-muted-foreground">+45 51511838</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="mr-3 rounded-md bg-primary/10 p-2">
										<svg
											className="h-6 w-6 text-primary"
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<title>Email</title>
											<rect x="2" y="4" width="20" height="16" rx="2" />
											<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
										</svg>
									</div>
									<div>
										<h3 className="text-lg font-medium">Email</h3>
										<p className="text-muted-foreground">info@nversion.dk</p>
									</div>
								</div>

								<div className="flex items-start">
									<div className="mr-3 rounded-md bg-primary/10 p-2">
										<svg
											className="h-6 w-6 text-primary"
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<title>Location</title>
											<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
											<circle cx="12" cy="10" r="3" />
										</svg>
									</div>
									<div>
										<h3 className="text-lg font-medium">Location</h3>
										<p className="text-muted-foreground">
											NVersion ApS
											<br />
											CVR: 45564584
											<br />
											Peter Holms Vej 11, 3TV
											<br />
											2450 Copenhagen SV
											<br />
											Denmark
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
