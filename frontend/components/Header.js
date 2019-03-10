import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => {
  NProgress.done()
}

const Header = () => (
  <header>
    <h1>BoilerPlate Rules Ya'll</h1>
    <span className="header__subtitle">(You should probably change this.)</span>
    {/* <p>Search</p> */}
  </header>
)

export default Header
