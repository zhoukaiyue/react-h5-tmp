/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 14:31:25
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-07-31 21:55:03
 */

import { Button } from "antd-mobile";
import { useNavigate } from "react-router-dom";

function Index() {
  let navigate = useNavigate();
  const goDevPage = () => {
    navigate("/dev");
  };
  return (
    <div className="index">
      <Button color="primary" fill="solid" onClick={goDevPage}>
        进入开发者中心
      </Button>
    </div>
  );
}

export default Index;
