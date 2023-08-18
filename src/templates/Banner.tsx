import Link from 'next/link';

import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section id="Join">
    <CTABanner
      title="Get your free toolkit to start improving your team health"
      subtitle="Join the PETALS newsletter with hundreds other users"
      button={
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/petalsteam"
          method="post"
          target="popupwindow"
          className="embeddable-buttondown-form"
        >
          <div className="mb-2">
            <label htmlFor="bd-email">Email address</label>
            <input
              type="email"
              name="email"
              id="bd-email"
              placeholder="you@website.com"
              className="text-xl py-2 px-4 border"
            />
          </div>
          <div>
            <p className="py-2 text-sm">
              I agree to the <Link href="/privacy">Privacy Policy</Link>
            </p>
            {` `}
            <input
              type="submit"
              value="Subscribe"
              className="inline-block rounded-md text-center text-lg font-semibold py-2 px-4 text-white bg-primary-500"
            />
          </div>
          <input type="hidden" name="tag" value="website" />
        </form>
      }
    />
  </Section>
);

export { Banner };
