import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section id="Join">
    <CTABanner
      title="Get free toolkits and advice to help your team improve"
      subtitle="Join the PETALS newsletter with hundreds other users"
      button={
        <Link href="https://buttondown.email/petalsteam?tag=website">
          <a>
            <Button xl>Sign up</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
