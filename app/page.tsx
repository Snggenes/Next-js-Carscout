import { Car } from "lucide-react";
import Container from "./components/container";
import Search from "./components/search/search";
import SearchAccordion from "./components/search/search-acoordion";
import SellComp from "./components/main-page/sell-comp";
import Reels from "./components/main-page/reels";
import Advice from "./components/main-page/advice";
import NewOffers from "./components/main-page/new-offers";
import Brief from "./components/main-page/brief";

import { auth } from "@/auth";
import NewOffersCars from "./components/main-page/new-offers-cars";
import dbConnect from "@/lib/dbConnect";
import UserInfoModel, { TUserInfo } from "@/lib/models/userinfo-model";

export default async function Home({ params, searchParams }: any) {
  // const session = await auth();
  // const user = session?.user;

  await dbConnect();
  // const userInfo: TUserInfo | null = await UserInfoModel.findOne({ userId: user?.id });
  // const safeUserInfo = JSON.parse(JSON.stringify(userInfo));

  const newOffersPageLimit = searchParams.newOffersLimit || 4;
  return (
    <div className="">
      <div className="relative w-full h-56 md:h-[470px] lg:h-[510px] bg-[url('https://www.autoscout24.nl/assets/as24-home/images/brandboxes/nl-NL/leasing-v2/size_xl.jpg.webp')] bg-cover bg-center bg-no-repeat">
        <Container className="text-white hidden md:block pt-48 lg:pt-56">
          <div className="bg-white text-black w-20 h-10 rounded-t-sm flex items-center justify-center">
            <Car className="w-8 h-8 m-1" />
          </div>
          <Search
            params={params}
            searchParams={searchParams}
            className="grid-cols-3"
          />
        </Container>
      </div>
      <SearchAccordion>
        <Search
          params={params}
          searchParams={searchParams}
          className="grid-cols-2"
        />
      </SearchAccordion>

      <Container className="pt-4 flex flex-col md:flex-row gap-4 items-center">
        <Reels />
        <SellComp />
      </Container>

      <Container className="pt-4">
        <NewOffers>
          <NewOffersCars limit={newOffersPageLimit}/>
        </NewOffers>
      </Container>

      <Container className="pt-4 flex flex-col md:flex-row gap-4">
        <Advice />
      </Container>

      <Container className="pt-4">
        <NewOffers>
          <NewOffersCars limit={newOffersPageLimit}/>
        </NewOffers>
      </Container>

      <Container>
        <Brief />
      </Container>
    </div>
  );
}
