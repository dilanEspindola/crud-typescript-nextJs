import Head from "next/head";
import NavBar from "./NavBar";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Task App</title>
      </Head>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
