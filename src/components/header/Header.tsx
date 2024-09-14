import React from "react";
import { Layout, Space, Typography } from "antd";
import styles from "./styles/header.module.scss";
import {
  LoginOutlined,
  LogoutOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../assets/common/custom/CustomButton";
import { EXIT, LOGIN, REGISTER, STUFF } from "../../assets/common/vars";
import { ROUTES } from "../../routes/Routes.routes";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { logout } from "../../store/services/authSlice";

const Header: React.FC = () => {
  //------------------------------
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate(ROUTES.login);
  };
  //------------------------------

  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={ROUTES.home}>
          <CustomButton type="link">
            <Typography.Title
              style={{ marginBottom: "0px", color: "#fff" }}
              level={1}
            >
              {STUFF}
            </Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      <Space>
        {user ? (
          <CustomButton
            type="link"
            icon={<LogoutOutlined />}
            onClick={onLogoutClick}
          >
            {EXIT}
          </CustomButton>
        ) : (
          <>
            <Link to={ROUTES.register}>
              <CustomButton icon={<UserOutlined />} type="link">
                {REGISTER}
              </CustomButton>
            </Link>
            <Link to={ROUTES.login}>
              <CustomButton icon={<LoginOutlined />} type="link">
                {LOGIN}
              </CustomButton>
            </Link>
          </>
        )}
      </Space>
    </Layout.Header>
  );
};

export default Header;
