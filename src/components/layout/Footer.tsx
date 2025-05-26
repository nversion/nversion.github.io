export function Footer() {
	return (
		<footer className="bg-muted py-12">
			<div className="container">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-12">
					<div className="md:col-span-5">
						<div className="flex items-center space-x-2">
							<span className="text-xl font-bold">NVersion</span>
						</div>
						<p className="mt-4 text-muted-foreground">
							Expert consultancy for Cloud, DevOps, Security/Compliance and
							Telmatics and IoT.
						</p>
					</div>
					<div className="md:col-span-7">
						<div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
							<div>
								<h3 className="text-lg font-medium">Services</h3>
								<ul className="mt-4 space-y-2">
									<li>
										<a
											href="/services#cloud-consulting"
											className="text-muted-foreground hover:text-foreground"
										>
											Cloud Consulting
										</a>
									</li>
									<li>
										<a
											href="/services#project-management"
											className="text-muted-foreground hover:text-foreground"
										>
											Project Management
										</a>
									</li>
									<li>
										<a
											href="/services#security-compliance"
											className="text-muted-foreground hover:text-foreground"
										>
											Security & Compliance
										</a>
									</li>
									<li>
										<a
											href="/services#telematics-iot"
											className="text-muted-foreground hover:text-foreground"
										>
											Telematics & IoT
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h3 className="text-lg font-medium">Company</h3>
								<ul className="mt-4 space-y-2">
									<li>
										<a
											href="/about"
											className="text-muted-foreground hover:text-foreground"
										>
											About Us
										</a>
									</li>
									<li>
										<a
											href="/contact"
											className="text-muted-foreground hover:text-foreground"
										>
											Contact Us
										</a>
									</li>
								</ul>
							</div>
							<div className="col-span-2 sm:col-span-1">
								<h3 className="text-lg font-medium">Legal</h3>
								<ul className="mt-4 space-y-2">
									<li>
										<a
											href="/privacy-policy"
											className="text-muted-foreground hover:text-foreground"
										>
											Privacy Policy
										</a>
									</li>
									<li>
										<a
											href="/terms-of-service"
											className="text-muted-foreground hover:text-foreground"
										>
											Terms of Service
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
					<p>
						&copy; {new Date().getFullYear()} NVersion. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}
