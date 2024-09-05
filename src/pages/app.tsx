import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Base } from '../templates/Base';

const AppPage = () => (
  <Base>
    <Background color="bg-amber-300">
      <Section id="Toolkits">
        <h1 className="text-4xl font-gaegu text-center mb-6">
          Sign up now for 6 months of free access to the PETALS web app!
        </h1>
        <p className="my-5 text-2xl">
          Enjoy exclusive early access to PETALS, a user-friendly app designed
          to streamline your team&apos;s health.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 content-stretch items-end">
          <div id="Features">
            <h2 className="text-xl my-5">What you&apos;ll get</h2>
            <ul>
              <li>Easy organization onboarding</li>
              <li>Invite team members of any size</li>
              <li>Live metrics and reports</li>
              <li>1-hour introductory consultancy session</li>
            </ul>
            <p className="my-8">
              Just share your details below to receive your personal invite link
              when the redesigned app launches in Q4 2024.
            </p>
            <form
              action="https://buttondown.email/api/emails/embed-subscribe/petalsteam"
              method="post"
              target="popupwindow"
              className="embeddable-buttondown-form"
            >
              <div>
                <div className="my-4">
                  <label htmlFor="bd-email">Your email address</label>
                  <input
                    type="email"
                    name="email"
                    id="bd-email"
                    className="block w-full rounded-md border-1 p-2 "
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="bd-first-name">Your first name</label>
                  <input
                    type="text"
                    name="metadata__first_name"
                    id="bd-first-name"
                    className="block w-full rounded-md border-1 p-2 "
                  />
                </div>
              </div>
              <div>
                <div className="my-4">
                  <label htmlFor="bd-organisaton">Your organisation name</label>
                  <input
                    type="text"
                    name="metadata__organisation"
                    id="bd-organisaton"
                    className="block w-full rounded-md border-1 p-2 "
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="bd-source">
                    How did you hear about PETALS?
                  </label>
                  <select
                    name="metadata__source"
                    id="bd-source"
                    className="block w-full rounded-md border-1 p-2 "
                  >
                    <option>Word of mouth</option>
                    <option>Social network</option>
                    <option>Search engine</option>
                    <option>Blog article</option>
                    <option>Event</option>
                    <optgroup>
                      <option>MKGN</option>
                      <option>MatchTech</option>
                    </optgroup>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="my-4 text-center">
                <input
                  type="submit"
                  value="Sign up"
                  className="rounded-md bg-slate-600 px-10 py-5 text-sm font-semibold text-white "
                />
                <input type="hidden" name="tag" value="App" />
              </div>
            </form>
          </div>
          <div id="MobileApp">
            <img
              src="/assets/images/petals-web-app-register-finger.png"
              alt="Register on the PETALS web app"
            />
          </div>
        </div>
      </Section>
    </Background>
  </Base>
);

export default AppPage;
