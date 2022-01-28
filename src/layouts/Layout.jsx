import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

export default function Layout({ children }) {
  return (
    <>
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
    </>
  );
}
