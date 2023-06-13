import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="page-green">
    <Section yPadding="pt-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#Why">
            <a>Why</a>
          </Link>
        </li>
        <li>
          <Link href="#How">
            <a>How</a>
          </Link>
        </li>
        <li>
          <Link href="#Join">
            <a>Join</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pb-32">
      <img src="/assets/images/team-high-fives.svg" />
      <HeroOneButton
        title={
          <>
            {'Improve your team health\n'}
            <span>with PETALS</span>
          </>
        }
        description="A simple framework to help continuously improve professional team health"
        button={
          <Link href="#How">
            <a>
              <Button xl>Find out how</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
