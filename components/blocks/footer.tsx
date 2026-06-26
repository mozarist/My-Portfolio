"use client";
import { motion, useReducedMotion } from "motion/react";
import type React from "react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";

type FooterLink = {
	title: string;
	href: string;
	icon?: ReactNode;
};
type FooterLinkGroup = {
	label: string;
	links: FooterLink[];
};

export function StickyFooter() {
	return (
		<footer
			className="relative h-(--footer-height) w-full border-t [--footer-height:100vh]"
			style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
		>
			<div className="fixed bottom-0 h-(--footer-height) w-full">
				<div className="sticky top-[calc(100vh-var(--footer-height))] h-full overflow-y-auto">
					<div
						aria-hidden
						className="absolute inset-0 isolate z-0 opacity-50 contain-strict dark:opacity-60"
					>
						<div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)]" />
						<div className="absolute top-0 left-0 h-320 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] [translate:5%_-50%]" />
						<div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)]" />
					</div>
					<div className="relative mx-auto flex size-full p-6 flex-col justify-between">
						<div className="flex gap-8 pt-12">
							<AnimatedContainer className="w-full space-y-4 flex-2">
								<h2 className="text-2xl font-medium tracking-tight max-w-lg">Building projects that looks great on the outside and works just as well on the inside </h2>
								<p className="mt-8 text-muted-foreground text-2xl md:mt-0">
									azzammozarist@gmail.com
								</p>
							</AnimatedContainer>
							{footerLinkGroups.map((group, index) => (
								<AnimatedContainer
									className="w-full flex-1"
									delay={0.1 + index * 0.1}
									key={group.label}
								>
									<div className="mb-10 md:mb-0">
										<h3 className="text-sm uppercase">{group.label}</h3>
										<ul className="mt-4 space-y-2 text-muted-foreground text-sm md:text-xs lg:text-sm">
											{group.links.map((link) => (
												<li key={link.title}>
													<a
														className="inline-flex items-center hover:text-foreground [&_svg]:me-1 [&_svg]:size-4"
														href={link.href}
													>
														{link.icon}
														{link.title}
													</a>
												</li>
											))}
										</ul>
									</div>
								</AnimatedContainer>
							))}
						</div>
						<svg
							viewBox="0 0 1000 200"
							className="w-full h-auto block"
							preserveAspectRatio="none"
						>
							<text
								x="-25"
								y="195"
								textLength="1000"
								lengthAdjust="spacingAndGlyphs"
								style={{
									fontFamily: "Geist, serif",
									fontSize: "250px",
									fontWeight: 400,
									letterSpacing: "-0.07em",
								}}
							>
								mozarist
							</text>
						</svg>
					</div>
				</div>
			</div>
		</footer>
	);
}

const socialLinks = [
	{
		title: "Facebook",
		href: "#",
		icon: (
			<Circle />
		),
	},
	{
		title: "Instagram",
		href: "#",
		icon: (
			<Circle />
		),
	},
	{
		title: "Youtube",
		href: "#",
		icon: (
			<Circle />
		),
	},
	{
		title: "LinkedIn",
		href: "#",
		icon: (
			<Circle
			/>
		),
	},
];

const footerLinkGroups: FooterLinkGroup[] = [
	{
		label: "Product",
		links: [
			{ title: "Payments", href: "#" },
			{ title: "Cards & Issuing", href: "#" },
			{ title: "Lending & Credit", href: "#" },
			{ title: "Wealth Management", href: "#" },
			{ title: "Insurance", href: "#" },
		],
	},
	{
		label: "Company",
		links: [
			{ title: "About Us", href: "#" },
			{ title: "Leadership", href: "#" },
			{ title: "Careers", href: "#" },
			{ title: "Press", href: "#" },
			{ title: "Sustainability", href: "#" },
		],
	},
];

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
	children?: React.ReactNode;
	delay?: number;
};

function AnimatedContainer({
	delay = 0.1,
	children,
	...props
}: AnimatedContainerProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
			transition={{ delay, duration: 0.8 }}
			viewport={{ once: true }}
			whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
			{...props}
		>
			{children}
		</motion.div>
	);
}
