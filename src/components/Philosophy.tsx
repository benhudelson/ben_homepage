import { Section } from './layout'

export function Philosophy() {
    return (
        <Section id="philosophy">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
                Leadership Philosophy
            </h2>
            <div className="max-w-3xl">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                    Leadership is a craft I study deliberately and then teach to the people around me. People come first: I lead through one-on-ones, a close working partnership with product, and feedback that moves in both directions, because I can't coach anyone well if I'm not coachable myself. Strong teams disagree openly and work their way to consensus, and I protect that by starting hard conversations early, so no one learns where they stand for the first time in a review. Systems thinking belongs to the whole team, not to the manager; once a team is asking the right questions on its own, it no longer needs me in the room to ask them. AI follows the same pattern. My team adopted it together and iteratively, grounded in spec-driven development where specs and tests get the same scrutiny as the code, and I still use it daily in my own work so that I'm teaching from practice, not theory. In the end, the measure of my leadership is what the team can do without me.
                </p>
            </div>
        </Section>
    )
}
