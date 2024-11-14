import React, { useState } from 'react';
import { Button } from 'antd';
import type { UploadFile } from 'antd';

interface SaveProps {
  fileList: UploadFile[]
}
const Save: React.FC<SaveProps> = ({fileList}) => {
  const [displayData, setDisplayData] = useState("");

  const handelSave = () => 
    setDisplayData(JSON.stringify(fileList, null, 2));
  

  return (
    <>
      <Button onClick={handelSave} style={{marginTop:"40px"}}>save</Button>
      <p>结果输出：</p>
      <pre style={{ maxHeight: '40vh', overflow: 'auto' }}>{displayData}</pre>
    </>
  );
};

export default Save;
