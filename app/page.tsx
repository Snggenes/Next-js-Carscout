import { Car } from "lucide-react";
import Container from "./components/container";
import Search from "./components/search/search";

export default function Home({params, searchParams}: any) {
  return (
    <div className="">
      <div className="relative w-full h-56 md:h-[470px] lg:h-[510px] bg-[url('https://www.autoscout24.nl/assets/as24-home/images/brandboxes/nl-NL/leasing-v2/size_xl.jpg.webp')] bg-cover bg-center bg-no-repeat">
        <Container className="text-white hidden md:block pt-48 lg:pt-56">
          <div className="bg-white text-black w-20 h-10 rounded-t-sm flex items-center justify-center">
            <Car className="w-8 h-8 m-1" />
          </div>
          <Search params={params} searchParams={searchParams}/>
        </Container>
      </div>
      <Container className="block md:hidden text-black">
        Zoekvenster openen
      </Container>
    </div>
  );
}
