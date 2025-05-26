import {
	Cloud,
	Cpu,
	Database,
	FolderKanban,
	Globe,
	Server,
	ShieldHalf,
} from 'lucide-react'
import { ServiceCard } from '../ui/ServiceCard'

// Astro does not support passing JSX elements as props, so we do it in tsx land instead

/* TODO:
 * Technical project management
 * Cloud architecture design
 * Security and compliance
 * Cost optimization
 * DevOps and CI/CD
 * Automotive reverse engineering
 * Hardware homologation
 * Embedded systems project management
 * Telematics and IoT
 * Automotive cybersecurity
 * Automotive software development
 * IoT Cellular connectivity
 * Google Workspace
 * Google Cloud Platform
 * Microsoft Azure
 * Amazon Web Services
 * Cloud migration
 * Terraform
 * Kubernetes
 * Docker
 */

export function ServiceList() {
	return (
		<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			<ServiceCard
				title="Cloud Consulting"
				description="Move to the cloud or migrate from one cloud vendor to another. Our experts provide tailored strategies for your business to avoid the pitfalls."
				icon={<Cloud className="h-6 w-6" />}
				features={[
					'GCP, AWS, and Azure',
					'Hetzner and OVH Cloud',
					'Heroku, Netlify, and Vercel',
					'Kubernetes, EKS, AKS, and GKE',
					'Terraform, Pulumi, and CDK',
					'Serverless Architectures',
					'Containerization with Docker',
					'Migration and Architecture',
					'Cost Optimization',
					'DevOps and CI/CD',
					'Security and Compliance',
				]}
				colorClass={'from-cloud-aws to-orange-600'}
				link="/contact"
			/>
			<ServiceCard
				title="Project management"
				description="Expert project management for technical projects, with understanding of the complexities of software development and architecture."
				icon={<FolderKanban className="h-6 w-6" />}
				features={[
					'Technical Project Management',
					'Architecture and Design',
					'Project Planning',
					'Agile Methodologies',
					'Stakeholder Communication',
					'Risk Management',
					'Resource Allocation',
					'Vendor Management',
					'Team Leadership',
					'Process Improvement',
				]}
				link="/contact"
				colorClass={'from-cloud-azure to-blue-700'}
			/>
			<ServiceCard
				title="Security and compliance"
				description="Expertise in security and compliance for cloud environments, ensuring your data is protected and meets regulatory standards."
				icon={<ShieldHalf className="h-6 w-6" />}
				features={[
					'Security Assessments',
					'Data Protection Strategies',
					'Incident Response Planning',
					'Identity and Access Management',
					'Vulnerability Management',
					'Security training',
					'ISO 27001, SOC 2, NIS2, UNECE R155 and TISAX',
					'GDPR compliance',
					'CIS controls',
				]}
				link="/contact"
				colorClass={'from-cloud-gcp to-blue-800'}
			/>
			<ServiceCard
				title="Telematics and IoT"
				description="Specialized in telematics and IoT solutions for the automotive industry, focusing on connectivity, data management, and security."
				icon={<Cpu className="h-6 w-6" />}
				features={[
					'Automotive Telematics',
					'IoT Connectivity',
					'Data Management',
					'Automotive Cybersecurity',
					'Embedded Systems',
					'Hardware Homologation',
					'Software Development',
					'Automotive Reverse Engineering',
					'Cybersecurity',
				]}
				link="/contact"
				colorClass={'from-cloud-blue to-cloud-purple'}
			/>
		</div>
	)
}
