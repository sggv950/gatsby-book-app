import { Link, navigate } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { FirebaseContext } from "./Firebase";
import { useContext } from "react";
import styled from "styled-components";

const LogoutLink = styled.span`
  cursor: pointer;
  color: #ffffff;
  &:hover {
    text-decoration: underline;
  }
`;

const HeaderWrapper = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  align-items: center;

  > h1 {
    margin: 0;
    flex-grow: 1;

    > a {
      text-decoration: none;
      color: #ffffff;
    }
  }
`;

const UserInfo = styled.div`
  text-align: right;
  color: #ffffff;
`;

const LoginLink = styled.div`
  a {
    color: #ffffff;
  }
`;

const Divider = styled.span`
  margin: 0 8px;
  padding-right: 1px;
  background: #ddd;
`;

const Header = ({ siteTitle }) => {
  const { firebase, user } = useContext(FirebaseContext);
  console.log(user);

  const handleLogoutClick = () => {
    firebase.logout().then(() => navigate("/login"));
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div>
          {!!user && !!user.email && (
            <UserInfo>
              Hello, {user.username || user.email}
              <div>
                <LogoutLink onClick={handleLogoutClick}>Logout</LogoutLink>
              </div>
            </UserInfo>
          )}
          {(!user || !user.email) && (
            <LoginLink>
              <Link to={"/login"}>Login</Link>
              <Divider />
              <Link to={"/register"}>Register</Link>
            </LoginLink>
          )}
        </div>
      </HeaderContent>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
