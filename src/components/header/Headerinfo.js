import React from "react"
import "./headerinfo.scss"

function Headerinfo() {
  return (
    <div className="header-info">
      <div className="header-socialmedia">
        <div>
          <i class="fab fa-facebook-f social" />
        </div>
        <div>
          <i class="fab fa-instagram social" />
        </div>
        <div>
          <i class="fab fa-twitter social" />
        </div>
      </div>
      <div className="header-contact">GIVE US A CALL : +66666666</div>
      <div className="header-auth">
        <div>Login</div>
        <div>|</div>
        <div>Register</div>
      </div>
    </div>
  )
}
export default Headerinfo
