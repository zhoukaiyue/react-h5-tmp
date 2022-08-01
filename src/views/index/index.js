/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2022-07-29 14:31:25
 * @LastEditors: zhoukai
 * @LastEditTime: 2022-08-01 20:07:55
 */

import { Button } from "antd-mobile";
import { useNavigate } from "react-router-dom";

const src = require("@/assets/img/data/no-data.png");
function Index() {
  let navigate = useNavigate();
  const goDevPage = () => {
    // navigate("/dev");
    console.log(process.env);
  };
  return (
    <div className="index">
      <Button color="primary" fill="solid" onClick={goDevPage}>
        进入开发者中心
      </Button>
      <img src={src} alt="" />
    </div>
  );
}

export default Index;
