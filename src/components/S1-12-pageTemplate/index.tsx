import FooterContact from "../S1-10_footer";
import HeaderContact from "../S1-10_header";

interface iChildren {
  children: React.ReactNode;
}

const PageTemplate = ({ children }: iChildren) => {
  return (
    <>
      <HeaderContact />
      <main>{children}</main>
      <FooterContact />
    </>
  );
};

export default PageTemplate;
