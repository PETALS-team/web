import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section id="Join">
    <CTABanner
      title="Get free toolkits and advice to help your team improve"
      subtitle="Join the PETALS newsletter with hundreds other users"
      button={
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/petalsteam"
          method="post"
          target="popupwindow"
          className="embeddable-buttondown-form"
        >
          <div className="mb-5">
            <label htmlFor="bd-email">Your email address</label>
            <input
              type="email"
              name="email"
              id="bd-email"
              placeholder="you@website.com"
              className="text-xl"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Subscribe"
              className="inline-block rounded-md text-center text-lg font-semibold py-2 px-4 text-white bg-primary-500"
            />
          </div>
          <input type="hidden" name="tag" value="website" />
          <p>
            <a
              href="https://buttondown.email/refer/petalsteam"
              target="_blank"
              rel="noreferrer"
            >
              Powered by Buttondown.
            </a>
          </p>
        </form>
      }
    />
  </Section>
);

export { Banner };
