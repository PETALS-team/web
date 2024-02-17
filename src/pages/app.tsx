import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Banner } from '../templates/Banner';
import { Base } from '../templates/Base';

const AppPage = () => (
  <Base>
    <Background color="bg-amber-300">
      <Section id="Toolkits">
        <h1 className="text-4xl font-gaegu text-center mb-6">
          Get early access to the PETALS App
        </h1>
        <p className="my-12">
          Join our waiting list for exclusive early access to the bespoke
          PETALS, built to streamline your own PETALS discussions around your
          own schedule
        </p>
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/petalsteam"
          method="post"
          target="popupwindow"
          className="embeddable-buttondown-form"
        >
          <label htmlFor="bd-email">Your email address</label>
          <input type="email" name="email" id="bd-email" />
          <label htmlFor="bd-organisaton">Your organisation name</label>
          <input
            type="text"
            name="metadata__organisation"
            id="bd-organisation"
          />
          <label htmlFor="bd-first-name">Your first name</label>
          <input type="text" name="metadata__first_name" id="bd-first-name" />
          <input type="submit" value="Subscribe" />
          <input type="hidden" name="tag" value="App" />
          <p>
            <a href="https://buttondown.email/refer/petalsteam" target="_blank">
              Powered by Buttondown.
            </a>
          </p>
        </form>
        <Banner />
      </Section>
    </Background>
  </Base>
);

export default AppPage;
