import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Get free toolkits and advice to help your team improve"
      subtitle="Join the PETALS newsletter"
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <Button>Sign up</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
