import type React from 'react'

export interface ButtonProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	variant?: 'outline'
	size?: 'sm' | 'lg' | 'icon'
}

export function Button({ className, variant, ...props }: ButtonProps) {
	let classes =
		'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'

	switch (variant) {
		case 'outline': {
			classes +=
				' border border-input bg-background hover:bg-accent hover:text-accent-foreground'
			break
		}
		default: {
			classes += ' bg-primary text-primary-foreground hover:bg-primary/90'
		}
	}
	switch (props.size) {
		case 'sm': {
			classes += ' h-9 rounded-md px-3'
			break
		}
		case 'lg': {
			classes += ' h-11 rounded-md px-8'
			break
		}
		case 'icon': {
			classes += ' h-10 w-10'
			break
		}
		default: {
			classes += ' h-10 px-4 py-2'
		}
	}

	return <a type="button" className={`${classes} ${className}`} {...props} />
}
