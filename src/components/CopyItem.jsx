import React, { useState } from 'react';




const CopyItem = ({ name,permission,className,packageName,type='pm grant' }) => {
const [isCopied,setIsCopied]=useState(false)

   

 
    const permissionText=permission?  type==='pm grant' ? `${type} ${packageName} ${permission} :`:`${type} ${permission} ${packageName}`:
     packageName

  const copyItem = async () => {
    await navigator.clipboard.writeText(permissionText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };



  return (
    <>
        <p style={{wordBreak:'break-all'}} onClick={copyItem} className={`name ${className}`}>
           <span className='bold'>{name}</span>: <span className='pointer' permission>{permissionText}</span>
        </p>
        {isCopied&& 
        <span className='copy-button' >Copied!</span>}
    </>
    
  );
};

export default CopyItem