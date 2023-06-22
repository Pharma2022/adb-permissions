import React, { useState } from 'react';




const CopyItem = ({ name,permission,className,packageName,type='pm grant',    adbVisible=false }) => {
const [isCopied,setIsCopied]=useState(false)

   

 
    const permissionText=permission? 
     type==='pm grant' ? `${adbVisible?"adb shell":""} ${type} ${packageName} ${permission}`:
     type==='am'&& `${adbVisible?"adb -d shell":""} ${type}  ${permission} ${packageName}`
     :packageName

  const copyItem = async () => {
    await navigator.clipboard.writeText(permissionText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };



  return (
    <>
        <p style={{wordBreak:'break-word'}} onClick={copyItem} className={`name ${className} copy-container`}>
           <span className='bold'>{name}</span>: <span className='pointer' permission>{permissionText}</span>
        {isCopied&& 
        <span className='copy-button' >Copied!</span>}
        </p>
    </>
    
  );
};

export default CopyItem