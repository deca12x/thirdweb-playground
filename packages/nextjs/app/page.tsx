import type { NextPage } from "next";
import ThirdwebButton from "~~/components/ThirdwebButton";
import ThirdwebWallet from "~~/components/ThirdwebWallet";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-4xl font-bold">Thirdweb test app</span>
          </h1>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <ThirdwebWallet />
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <ThirdwebButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
