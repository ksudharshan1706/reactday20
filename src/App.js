import logo from "./logo.svg";
import "./App.css";

function App() {
  return <Welcome />;
}
function Welcome() {
  const pricecart = [
    {
      priceType: "Free",
      price: "0",
      ullist: [
        { liclass: "", iclass: "fas fa-check", desc: "Single User" },
        { liclass: "", iclass: "fas fa-check", desc: "5GB Storage" },
        {
          liclass: "",
          iclass: "fas fa-check",
          desc: "Unlimited Public Projects",
        },
        { liclass: "", iclass: "fas fa-check", desc: "Community Access" },
        {
          liclass: "text-muted",
          iclass: "fas fa-times",
          desc: "Unlimited Private Projects",
        },
        {
          liclass: "text-muted",
          iclass: "fas fa-times",
          desc: "Dedicated Phone Support",
        },
        {
          liclass: "text-muted",
          iclass: "fas fa-times",
          desc: "Free Subdomain",
        },
        {
          liclass: "text-muted",
          iclass: "fas fa-times",
          desc: "Monthly Status Reports",
        },
      ],
    },
    {
      priceType: "Med",
      price: "15",
      ullist: [
        { liclass: "", iclass: "fas fa-check", desc: "5 User" },
        { liclass: "", iclass: "fas fa-check", desc: "5GB Storage" },
        {
          liclass: "",
          iclass: "fas fa-check",
          desc: "Unlimited Public Projects",
        },
        { liclass: "", iclass: "fas fa-check", desc: "Community Access" },
        {
          liclass: "",
          iclass: "fas fa-check",
          desc: "Unlimited Private Projects",
        },
        {
          liclass: "",
          iclass: "fas fa-check",
          desc: "Dedicated Phone Support",
        },
        { liclass: "", iclass: "fas fa-check", desc: "Free Subdomain" },
        {
          liclass: "text-muted",
          iclass: "fas fa-times",
          desc: "Monthly Status Reports",
        },
      ],
    },
    {
      priceType: "Pro",
      price: "49",
      ullist: [
        { liclass: "", iclass: "fas fa-check", desc: "Single User" },
        { liclass: "", iclass: "fas fa-check", desc: "5GB Storage" },
        {
          liclass: "",
          iclass: "fas fa-check",
          desc: "Unlimited Public Projects",
        },
        { liclass: "", iclass: "fas fa-check", desc: "Community Access" },
        {
          liclass: "",
          iclass: "fas fa-check",
          desc: "Unlimited Private Projects",
        },
        {
          liclass: "",
          iclass: "fas fa-check",
          desc: "Dedicated Phone Support",
        },
        {
          liclass: "",
          iclass: "fas fa-check",
          desc: "Unlimited Free Subdomain",
        },
        { liclass: "", iclass: "fas fa-check", desc: "Monthly Status Reports" },
      ],
    },
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {pricecart.map((user) => (
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">
                    {user.priceType}
                  </h5>
                  <h6 className="card-price text-center">
                    ${user.price}
                    <span className="period">/month</span>
                  </h6>
                  <hr></hr>
                  <ul className="fa-ul">
                    {/* unordered list data iteration*/}
                    {user.ullist.map((listdata) => (
                      <InnerListData
                        liclass={listdata.liclass}
                        iclass={listdata.iclass}
                        desc={listdata.desc}
                      />
                    ))}
                  </ul>
                  <div className="btnhighlight">
                    <a href="#" className="btn btn-primary text-uppercase">
                      Button
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InnerListData({ liclass, iclass, desc }) {
  return (
    <li className={liclass}>
      <span className="fa-li">
        <i className={iclass}></i>
      </span>
      {desc}
    </li>
  );
}

export default App;
