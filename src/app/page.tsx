import Hero from "@/components/Hero";
import About from "@/components/About";
import BookingCTA from "@/components/BookingCTA";
import Galleries from "@/components/Galleries";
import Activities from "@/components/Activities";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <BookingCTA />
      <Galleries />
      <Activities />
      <Reviews />
      <Location />
    </main>
  );
}
