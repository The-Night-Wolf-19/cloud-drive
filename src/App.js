// import logo from "./logo.svg";
import "./App.css";
import IconAnimation from "./Components/iconAnimation/iconAnimation";
import LeftPane from "./Components/LeftPane/LeftPane";
import MiddlePane from "./Components/MiddlePane/MiddlePane";

// const LeftPane = () => {
//   return (
//     <div className="leftPane">
//       <h2>Sarvvid AI</h2>
//       <div className="leftPane_buttons">
//         <div className="leftPane_buttons_button">
//           <i class="fa fa-home" aria-hidden="true"></i>
//           &nbsp;Home
//         </div>
//         <div className="leftPane_buttons_button">
//           <i class="fa fa-folder-o" aria-hidden="true"></i>
//           &nbsp;My Files
//         </div>
//         <div className="leftPane_buttons_button">
//           <i class="fa fa-folder-open" aria-hidden="true"></i>
//           &nbsp;Recent Files
//         </div>
//         <div className="leftPane_buttons_button">
//           <i class="fa fa-users" aria-hidden="true"></i>
//           &nbsp;Shared Files
//         </div>
//         <div className="leftPane_buttons_button">
//           <i class="fa fa-upload" aria-hidden="true"></i>
//           &nbsp;File Request
//         </div>
//         <div className="leftPane_buttons_button">
//           <i class="fa fa-trash-o" aria-hidden="true"></i>
//           &nbsp;Recycle Bin
//         </div>
//       </div>
//       <div className="leftPane_new"></div>
//     </div>
//   );
// };

function App() {
  return (
    <div className="App">
      <IconAnimation className="icon_animation_bg" />
      <div className="Dashboard">
        <LeftPane />
        <MiddlePane />
        <div className="rightPane"></div>
      </div>
    </div>
  );
}

export default App;
