import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import { accountList, dashboardList } from "./constaints/sidebarList";
import { Menu } from "lucide-react";
import { useContextProvider } from "../../context/Context";
import VideoCallPopup from "../components/VideoCallPopup";
import { useEffect } from "react";

const SellerLayout = () => {
  const {
    setSidebar,
    open,
    setOpen,
    rtcOffer,
    socketServer,
    rtcConnection,
    setRtcOffer,
  } = useContextProvider();

  // useEffect(() => {
  //   if (rtcOffer?.sdp) {
  //     setOpen(rtcOffer?.sdp ? true : false);
  //   }
  // }, [rtcOffer]);

  useEffect(() => {
    const messageHandler = async (info: MessageEvent) => {
      const serverData = JSON.parse(info.data);
      if (serverData.type == "rtcOffer") {
        await rtcConnection?.setRemoteDescription(
          new RTCSessionDescription(serverData.sdp),
        );
        setOpen(true);
        // setRtcOffer(serverData);
        console.log("offer is send", rtcConnection?.remoteDescription);
      }
    };

    socketServer?.addEventListener("message", messageHandler);
  }, []);

  return (
    <div className="flex max-h-fit">
      <SideBar accountList={accountList} dashboardList={dashboardList} />
      <div className="sm:px-7 px-3 py-3 w-full bg-gray-50">
        <Menu
          onClick={() => setSidebar(true)}
          className="cursor-pointer md:hidden"
        />
        <Outlet />
        <VideoCallPopup open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default SellerLayout;
