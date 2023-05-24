import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="page-green text-white">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#How">
            <a>How</a>
          </Link>
        </li>
        <li>
          <Link href="#Newsletter">
            <a>Sign up</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Improve your team health\n'}
            <span className="text-primary-500">with PETALS</span>
          </>
        }
        description="A simple framework to help continuously improve professional teams"
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
