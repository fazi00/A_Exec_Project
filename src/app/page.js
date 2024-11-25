import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import EventTabs from "@/components/eventTab";
import EventFeature from "@/components/eventFeature";
import EventDetail from "@/components/eventDetail";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        {/* Outer Box Container */}
        <div
          className="flex w-full max-w-7xl m-10 bg-white border
         border-gray-300 rounded-2xl shadow-lg overflow-hidden"
        >
          <div>
            <Sidebar />
          </div>

          <div className="flex-1">
            <div className="pl-auto">
              <Header />
            </div>
            <div className="pl-auto">
              <EventTabs />
            </div>
            <div className="pl-auto">
              <EventFeature />
            </div>
            <div className="pl-auto">
              <EventDetail />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
