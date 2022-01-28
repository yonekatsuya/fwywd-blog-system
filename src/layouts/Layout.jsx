import PageHeader from './PageHeader';

export default function Layout({ children }) {
  return (
    <>
      <PageHeader />
      <main>{children}</main>
    </>
  );
}
