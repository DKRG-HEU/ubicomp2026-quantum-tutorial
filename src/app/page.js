import Navbar               from '@/components/Navbar';
import Hero                 from '@/components/Hero';
import Overview             from '@/components/Overview';
import Topics               from '@/components/Topics';
import Speakers             from '@/components/Speakers';
import Schedule             from '@/components/Schedule';
// import ImportantDates       from '@/components/ImportantDates';
import Organizers           from '@/components/Organizers';
import CallForParticipation from '@/components/CallForParticipation';
import Venue                from '@/components/Venue';
import Contact              from '@/components/Contact';
import Footer               from '@/components/Footer';

const Divider = () => <div className="divider-quantum w-full" />;

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Overview />
        <Divider />
        <Topics />
        <Divider />
        <div className="bg-[#061428]/60 border-y border-[#00d4ff]/5">
          <Speakers />
        </div>
        <Divider />
        <Schedule />
        <Divider />
        {/* <div className="bg-[#061428]/60 border-y border-[#00d4ff]/5">
          <ImportantDates />
        </div> */}
        <Divider />
        <Organizers />
        <Divider />
        <CallForParticipation />
        <Divider />
        <Venue />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}