import CarrouselSize   from "./../components/CarouselSize";
import TitlePage from "./../components/TitlePage";

export default function Home() {
  return (
    <div className="bg-primary text-white">
      <TitlePage/>

      <main className="bg-[url('/img/logo.png')] bg-center bg-no-repeat bg-[auto_250px] bg-center h-screen  w-screen ">
        <div className="absolute bottom-10 w-full flex items-center justify-center">
          <CarrouselSize/>
        </div>
      </main>
    </div>
  );
}
