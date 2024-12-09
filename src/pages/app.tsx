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
            <iframe
              width="500"
              height="650"
              src="https://275970ae.sibforms.com/serve/MUIFAGQ76_yDEjIFiM33eEV5ekY00VeM3nwV1mHXiw6m5ejHDxX5BgmPX_rSMu5rC0DPEykP-jIm6vrTdddt9IatfMAtUZSgXGLZyzmpTNAg5u5CLkip2Rd3HzuOWFoOVHXu9ozxNU-gaTq50kbcyqElv_8CioKvScNrFdRFbcRDJBURrJ683frbXSLSBFxtVeE1K7kSp1FjIOuO"
            ></iframe>
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
