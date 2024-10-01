// import { useEffect, useRef, useState } from "react";
// import { useContextProvider } from "../../../../context/Context";
// import { useSearchParams } from "react-router-dom";

// const VideoCall = () => {
//   const { rtcConnection, socketServer } = useContextProvider();
//   const videoRef = useRef<HTMLVideoElement | null>(null);

//   const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
//   const [searchParams] = useSearchParams();

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.srcObject = mediaStream;
//     }
//   }, [mediaStream]);

//   useEffect(() => {
//     const getMyStream = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//         });
//         stream
//           .getTracks()
//           .forEach((track) => rtcConnection?.addTrack(track, stream));
//         setMediaStream(stream);
//       } catch (error) {
//         console.error("Error accessing media devices.", error);
//       }
//     };

//     const init = async () => {
//       if (rtcConnection) {
//         rtcConnection.onicecandidate = (event) => {
//           if (event.candidate) {
//             socketServer?.send(
//               JSON.stringify({
//                 type: "ice-candidate",
//                 candidate: event.candidate,
//                 receiver: searchParams.get("user"),
//               }),
//             );
//             console.log("ICE candidate sent");
//           }
//         };

//         await getMyStream();
//         const offer = await rtcConnection?.createOffer();
//         await rtcConnection?.setLocalDescription(
//           new RTCSessionDescription(offer!),
//         );
//         socketServer?.send(
//           JSON.stringify({
//             type: "rtcOffer",
//             sdp: offer,
//             receiver: searchParams.get("user"),
//           }),
//         );
//       }
//     };

//     init();

//     const cleanUp = (event: BeforeUnloadEvent) => {
//       event.preventDefault();

//       if (socketServer) {
//         socketServer?.send(
//           JSON.stringify({
//             type: "rtcOffer",
//             sdp: null,
//             receiver: searchParams.get("user"),
//           }),
//         );
//       }
//     };

//     window.addEventListener("beforeunload", cleanUp);

//     return () => window.removeEventListener("beforeunload", cleanUp);
//   }, [rtcConnection]);

//   useEffect(() => {
//     if (socketServer && rtcConnection) {
//       const messageHandler = (info: any) => {
//         const serverData = JSON.parse(info.data);
//         if (serverData.type === "rtcAnswer") {
//           rtcConnection?.setRemoteDescription(
//             new RTCSessionDescription(serverData.sdp),
//           );
//           console.log("RTC Answer received and set");
//         } else if (serverData.type === "ice-candidate") {
//           console.log("ICE candidate added");
//           rtcConnection?.addIceCandidate(
//             new RTCIceCandidate(serverData.candidate),
//           );
//         }
//       };

//       socketServer.onmessage = messageHandler;

//       return () => {
//         socketServer.onmessage = null; // Cleanup
//       };
//     }
//   }, [rtcConnection]);

//   return (
//     <div className="flex justify-between">
//       <video className="h-[300px] w-[300px]" autoPlay ref={videoRef}></video>
//     </div>
//   );
// };

// export default VideoCall;
