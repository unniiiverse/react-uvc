import React from "react";
// import BlImageC from './components/BlImageC'
import BlImageC from './API/blimage'

const BlImage: React.FC = (props) => {
  return (
    <div className="BlImage">
      <div className="relative w-[300px] h-[300px]">
        <BlImageC src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/32_Augur_logo_logos-256.png" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ut nesciunt labore optio pariatur vel, expedita minus. Laboriosam, maiores esse?</p>
      <div className="relative w-[300px] h-[300px]">
        <BlImageC src="https://images.unsplash.com/photo-1568156341007-e87ac3d64580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ut nesciunt labore optio pariatur vel, expedita minus. Laboriosam, maiores esse?</p>
    </div>
  );
}

export default BlImage;