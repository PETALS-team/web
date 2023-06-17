import { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
<div className="text-center mt-5">
  <h2 id="Who">Who</h2>
  <p>Si Jobling is an Engineering Manager, former Agile Delivery Manager and Web Engineer. He has worked across a variety of organisations at different scales and context, from the UK to USA and China, always driving for healthy open cultures in tech.</p>
  <p>With over 20 years experience of hands on software engineering and leadership, he knows what makes for healthy engineering teams and software engineers. He originally designed PETALS as a personal framework to regularly reflect on his working week. As he extended the model to the teams he led, it quickly grew in popularity for its simplicity and power for both teams and leadership, gaining attention from popular publications and big name brands.</p> 
</div>
<div className="text-center">
    {props.logo}

    <nav>
      <ul className="navbar mt-5 flex flex-row justify-center font-medium text-xl text-gray-800">
        {props.children}
      </ul>
    </nav>

    <div className="mt-8 flex justify-center">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>

    <div className="mt-8 text-sm">
      <FooterCopyright />
    </div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
