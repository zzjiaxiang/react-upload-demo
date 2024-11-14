import React from 'react';
import type { UploadFile } from 'antd';
import { fileToBlob } from '../../utils'

interface SaveProps {
  fileList: UploadFile[]
}
const Preview: React.FC<SaveProps> = ({ fileList }) =>
(<div>
  {fileList.map(({ uid, originFileObj, name }) => <img key={uid} src={fileToBlob(originFileObj!)} alt={name} style={{ width: '40vw', height: '100px' }} />)}
</div>)



export default Preview;
