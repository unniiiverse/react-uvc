import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  title: string,
}

const HeaderCard: React.FC<IProps> = (props) => {
  const { title } = props;

  return (
    <div className="w-[100%] border border-[#82868C] flex flex-col gap-[16px] px-[16px] py-[24px] rounded-[4px] flex-1 min-w-[292px]">
      <div className="w-[100%] h-[200px] overflow-hidden flex justify-center">
        <img src={`./img/${title}.png`} alt={`${title} preview`} className={`object-cover`} />
      </div>
      <p className="text-[24px]">{title}</p>
      <div className="flex flex-col gap-[8px]">
        <Link to={`/${title}`} className="w-[100%] border border-[#6C5CE7] bg-[#6C5CE7] py-[10px] text-center font-bold text-[16px] rounded-[2px] hover:bg-transparent duration-200">
          View
        </Link>
        <a href={`https://github.com/unniiiverse/uvc-${title}`} target={'_blank'} className="w-[100%] border border-[#6C5CE7] py-[10px] text-center font-bold text-[16px] rounded-[2px] hover:bg-[#6C5CE7] duration-200">GitHub Repo</a>
      </div>
    </div>
  );
}

export default HeaderCard;