// import React, { useEffect } from "react";
// import Popup from "reactjs-popup";
// import { useContextProvider } from "../../context/Context";

// type VideoCallProps = {
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// };

// const VideoCallPopup = ({ open, setOpen }: VideoCallProps) => {
//   const { rtcConnection, rtcOffer, socketServer } = useContextProvider();

//   const createAnswer = async () => {
//     if (rtcConnection) {
//       try {
//         // Set the onicecandidate event handler before creating the answer
//         rtcConnection.onicecandidate = (event) => {
//           if (event.candidate) {
//             socketServer?.send(
//               JSON.stringify({
//                 type: "ice-candidate",
//                 candidate: event.candidate,
//                 receiver: rtcOffer?.sender,
//               }),
//             );
//             console.log("ICE candidate sent");
//           }
//         };

//         const answer = await rtcConnection.createAnswer();
//         await rtcConnection.setLocalDescription(
//           new RTCSessionDescription(answer),
//         );

//         socketServer?.send(
//           JSON.stringify({
//             type: "rtcAnswer",
//             sdp: answer,
//             receiver: rtcOffer?.sender,
//           }),
//         );
//       } catch (error) {
//         console.error("Error creating RTC answer:", error);
//       }
//     }
//   };

//   return (
//     <Popup open={open} onClose={() => setOpen(false)}>
//       <div style={{ textAlign: "center", padding: "20px" }}>
//         <h1 style={{ color: "#4CAF50" }}>Incoming Call...</h1>
//         <p style={{ fontSize: "18px", color: "#555" }}>
//           John Doe is calling you
//         </p>
//         <div style={{ marginTop: "20px" }}>
//           <button
//             style={{
//               backgroundColor: "#4CAF50",
//               color: "white",
//               border: "none",
//               padding: "10px 20px",
//               fontSize: "16px",
//               cursor: "pointer",
//               marginRight: "10px",
//             }}
//             onClick={createAnswer}
//           >
//             Accept
//           </button>
//           <button
//             style={{
//               backgroundColor: "#f44336",
//               color: "white",
//               border: "none",
//               padding: "10px 20px",
//               fontSize: "16px",
//               cursor: "pointer",
//             }}
//             onClick={() => setOpen(false)}
//           >
//             Decline
//           </button>
//         </div>
//       </div>
//     </Popup>
//   );
// };

// export default VideoCallPopup;
