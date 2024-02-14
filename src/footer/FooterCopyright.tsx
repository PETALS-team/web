import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright">
    &copy; <a href="https://sijobling.com/blog/pop-petals/" title="Original blog post by Si Jobling">2022</a>-{new Date().getFullYear()} {AppConfig.title}. Trademark pending{' '}
    <a href="https://sijobling.com/">Si Jobling</a>. Logo by{' '}
    <a href="https://blog.nocturnalmonkey.com/">Sam Hardacre</a>
    {/*
     * PLEASE READ THIS SECTION
     * We'll really appreciate if you could have a link to our website
     * The link doesn't need to appear on every pages, one link on one page is enough.
     * Thank you for your support it'll mean a lot for us.
     */}
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
