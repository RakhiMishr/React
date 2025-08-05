
const App = () => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li><a href="/" classname="active">HOME</a></li>
            <li><a href="/">ABOUT</a></li>
            <li><a href="/">OUR ROOM</a></li>
            <li><a href="/">GALLERY</a></li>
            <li><a href="/">CONTACTUS</a></li>
            <li><a href="/">BLOG</a></li>

          </ul>
        </nav>
        <div id="container">
          <div id="logo">
            <h1>Login</h1>
            <input type="name" placeholder="name" id="username"  />
            <input type="email" placeholder="email" id="email"  />
            <input type="number" placeholder="phone" id="phone"  />
            <input type="password" placeholder="password" id="password" />
            <button type="submit" id="login_btn">login</button>
          </div>
        </div>
        <div id="footer">
          <p>Copyright © 2025 KETO. All rights reserved.</p>
        </div>

      </div>
    </>
  )
}

export default App
// This code defines a simple React component that renders a navigation bar, a login form, and a footer.