import React, { Component } from "react";
import "../../CSS/bootstrap.min.css";
import Logo from "../../Image/logo beauty.svg";
// export default ({children}) => {
//   return (
//     <div className="App d-flex flex-wrap">
//       <header className="App-header col-12">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//       {children}
//     </div>
//   );
// }

export default ({ children }) => {
  return (
    <div className="w-100">
      <header className="w-100 d-flex flex-wrap py-1">
        <div className="col-xl-2 col-lg-2 order-0 col-6 d-flex align-items-center">ثبت نام | ورود</div>
        <div className="col-xl-8 col-lg-8 col-12 order-xl-1 order-lg-1 order-2 d-flex align-items-center">
          <div className="col-12 box-search mx-auto d-flex flex-wrap px-0">
            <div className="col-3 h-100 city-box px-0">
              <select className="px-3 h-100">
                <option>تهران</option>
                <option>کرج</option>
                <option>قزوین</option>
              </select>
            </div>
            <div className="col-7 h-100 px-0">
              <input type="text" placeholder="جستجو کنید" />
            </div>
            <div className="col-2 h-100 px-0">
              <button>جستجو</button>
            </div>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-6 order-xl-2 order-lg-2 order-1">
          <img src={Logo} className="d-block mw-100 App-logo float-left" />
        </div>
      </header>
      {children}
    </div>
  );
};

// import React, { Component } from "react";
// import logo from "../../logo.svg";
// import "../../CSS/bootstrap.min.css";

// export default class LayoutMain extends Component {
//   render() {
//     return (
//       <div className="App d-flex flex-wrap">
//         <header className="App-header col-12">
//           <img src={logo} className="App-logo" alt="logo" />
//         </header>
//       </div>
//     );
//   }
// }
