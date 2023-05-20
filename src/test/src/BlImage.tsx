import React from "react";
import BlImageC from './components/BlImageC'

const BlImage: React.FC = (props) => {
  return (
    <div className="BlImage">
      <div className="relative w-[300px] h-[300px]">
        <BlImageC src="https://images.unsplash.com/photo-1568156341007-e87ac3d64580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
      </div>
    </div>
  );
}

export default BlImage;