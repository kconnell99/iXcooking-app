import * as React from "react"
// import **main page**

class MyProfile extends React.Component {
    render() {
      return (
          <div>
              <div>NAVIGATION BAR
                  <div> 
                    <Link to ={"./home-page"} className = "home-page">
                        <button onClick={() => hashHistory.push("home-page")}>HOMEPAGE</button>
                    </Link>
                  </div>
                  <div>SEARCH</div>
                  <div></div>

              </div>
          </div>
      )
    }
}

export default MyProfile