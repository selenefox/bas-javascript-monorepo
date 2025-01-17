import {AppstoreOutlined, LockOutlined, WalletOutlined, GatewayOutlined} from "@ant-design/icons";
import {Menu, Typography} from "antd";
import {observer} from "mobx-react";
import {ReactElement, useState} from "react";

import {useBasStore} from "../stores";

import {GovernanceNav} from "./GovernanceNav/GovernanceNav";
import {StakingNav} from "./StakingNav/StakingNav";
import {ValidatorsNav} from "./ValidatorsNav/ValidatorNav";
import {BridgeNav} from "./BridgeNav/BridgeNav";


const HomePage = observer((): ReactElement => {
  const store = useBasStore();
  const [currentTab, setCurrentTab] = useState('validator');

  if (!store.isConnected) {
    return (
      <div className="centred">
        <Typography.Title level={1}>
          Connecting...
        </Typography.Title>
      </div>
    )
  }

  return (
    <div>
      <Menu
        mode="horizontal"
        selectedKeys={[currentTab]}
        onSelect={({selectedKeys}) => {
          setCurrentTab(selectedKeys[0])
        }}
      >
        <Menu.Item key="validator" icon={<LockOutlined translate="yes"/>}>
          全部节点
        </Menu.Item>
        <Menu.Item key="governance" icon={<AppstoreOutlined translate="yes"/>}>
          DAO治理
        </Menu.Item>
        <Menu.Item key="staking" icon={<WalletOutlined translate="yes"/>}>
          质押管理
        </Menu.Item>
        <Menu.Item key="bridge" icon={<GatewayOutlined translate="yes"/>}>
          跨链桥
        </Menu.Item>
      </Menu>
      <br/>

      {currentTab === 'validator' && <ValidatorsNav/>}
      {currentTab === 'governance' && <GovernanceNav/>}
      {currentTab === 'staking' && <StakingNav/>}
      {currentTab === 'bridge' && <BridgeNav/>}

    </div>
  );
});

export default HomePage
