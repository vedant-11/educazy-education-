import { ChakraProvider } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { parseCookies } from "nookies";
import logo2 from "../assets/logo2.png";
import { authRoutes, unAuthRoutes } from "../constants/routes";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <header className="w-screen h-20  flex items-center fixed z-10 top-0 bg-white drop-shadow-sm ">
        <div className="text-blue text-5xl w-40 ml-12 cursor-pointer ">
          <Link href="/">
            <Image src={logo2} layout="responsive" />
          </Link>
        </div>
      </header>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

MyApp.getInitialProps = ({ Component, ctx }) => {
  const { accessToken } = parseCookies(ctx);

  if (!accessToken && authRoutes.includes(ctx.asPath)) {
    ctx.res.writeHead(302, { Location: "/signup" });
    ctx.res.end();
    return { props: {} };
  } else if (!!accessToken && unAuthRoutes.includes(ctx.asPath)) {
    ctx.res.writeHead(302, { Location: "/" });
    ctx.res.end();
  }

  return { loggedIn: !!accessToken };
};

export default MyApp;
