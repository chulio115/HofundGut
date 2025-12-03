import { Link } from 'react-router-dom';

export default function Hotel() {
	return (
		<div className="relative min-h-screen bg-hof-cream pt-32 pb-24 overflow-hidden">
			{/* Background image with soft cream overlay */}
			<div className="pointer-events-none absolute inset-0">
				<img
					src="/images/hotel-26588xl.jpg"
					alt="Hof & Gut mit Reetdach im Winter"
					className="w-full h-full object-cover"
					style={{ filter: 'sepia(0.35)' }}
				/>
				<div className="absolute inset-0 bg-hof-cream/78" />
			</div>

			{/* Content */}
			<div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
				<span className="inline-block text-hof-bordeaux text-sm font-semibold tracking-[0.2em] uppercase mb-4">
					Hotel
				</span>
				<h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-hof-charcoal mb-6">
					Unser Hotelbereich entsteht gerade
				</h1>
				<p className="text-lg text-hof-charcoal/70 leading-relaxed mb-6 max-w-2xl mx-auto">
					Wir bauen diesen Bereich aktuell um. Bald finden Sie hier alle Informationen zu unseren Zimmern,
					Arrangements und Frühstück auf dem Hof.
				</p>
				<p className="text-base text-hof-charcoal/60 mb-10 max-w-2xl mx-auto">
					Bis dahin reservieren wir Ihnen gerne einen Tisch im Restaurant oder beantworten Ihre Fragen rund um
					Ihren Aufenthalt persönlich.
				</p>
				<div className="flex flex-wrap justify-center gap-4">
					<Link
						to="/kontakt"
						className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-hof-forest text-hof-cream font-semibold hover:bg-hof-forest-light transition-colors"
					>
						Kontakt aufnehmen
					</Link>
					<Link
						to="/"
						className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-hof-charcoal/10 text-hof-charcoal hover:bg-hof-cream/60 transition-colors"
					>
						Zur Startseite
					</Link>
				</div>
			</div>
		</div>
	);
}
