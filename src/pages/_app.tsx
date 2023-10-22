import { type AppType } from "next/app";

import { api } from "~/utils/api";

import Nav from "~/components/Nav";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Nav />
      <main className="mx-auto mt-16 bg-black px-4 pb-24 pt-2 text-white">
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default api.withTRPC(MyApp);
