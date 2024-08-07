import Link from 'next/link';

import { Logo } from './Logo';
import { Background } from '../background/Background';
import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Hero = () => (
  <Background color="">
    <Section yPadding="">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/#Why">Why</Link>
        </li>
        <li>
          <Link href="/#How">How</Link>
        </li>
        <li>
          <Link href="/snapshots">Snapshots</Link>
        </li>
        <li>
          <Link href="/#Join">Join</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pb-4">
      <VerticalFeatureRow
        title="Improve your team health & culture with PETALS"
        description="A simple framework to help continuously improve tech team's health"
        image="/assets/images/team-high-fives.svg"
        imageAlt="Team high fiving"
      />
    </Section>
  </Background>
);

export { Hero };
