import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section id="Join">
    <CTABanner
      title="Get your free toolkit to start improving your team health"
      subtitle="Join the PETALS newsletter with hundreds other users"
      button={
        <iframe
          width="335"
          height="310"
          src="https://275970ae.sibforms.com/serve/MUIFAO5bUiWjOyQAArfA7zFnzFkYIZ3WRhZtVWdR0XdFKarGcDnfOvHXWG_yFMTs7V2vVdA4n3WgO1Tm5Y9ZnOpusweI2vY9DxhlCDPUiw5OrPzltbnSBqeeE0iQbTEP4Nq3axt9RFVEfN4wCTizPGYsM7owfd9cQkz1ds8P4IBwJ5oQFmhlOMHSypsr8qxETBl9UU7qo0H-Bokn"
        ></iframe>
      }
    />
  </Section>
);

export { Banner };
