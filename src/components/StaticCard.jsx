import PropTypes from "prop-types";

const ListCircle = () => (
  <svg
    width="9"
    height="10"
    viewBox="0 0 9 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4.77865" cy="4.82712" r="4.20907" fill="#D9D9D9" />
  </svg>
);

const StaticCard = ({
  tags,
  gradient1,
  gradient2,
  textColor,
  title,
  activeBulletsNum,
  attentionText,
  toDo,
}) => {
  const bullets = new Array(20).fill(null);
  const activeBullets = new Array(activeBulletsNum).fill(null);

  return (
    <div
      className="w-[162px] h-auto rounded-[12px] overflow-hidden py-[12px] pl-[12px] flex flex-col gap-[9px] mb-[10px]"
      style={{
        color: textColor,
        background: `linear-gradient(to bottom left, ${gradient1}, ${gradient2})`,
      }}
    >
      <div className="flex gap-[5px]">
        {tags?.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] px-[3.21px] py-[6.42px] rounded-[12px]"
          >
            <p className="text-[11px] text-[#F77E7E]">{item}</p>
          </div>
        ))}
      </div>

      <h3 className="text-[11px] leading-[14px]">{title || 'Untitled'}</h3>

      <div className="flex flex-col">
        <p className="text-[8.42px] leading-[10.19px]">Progress</p>
        <div className="flex mt-[8px] relative">
          <div className="flex absolute">
            {bullets.map((_, index) => (
              <div
                key={index}
                className="w-[8px] h-[8px] rounded-full bg-[#D9D9D9]"
              ></div>
            ))}
          </div>

          <div className="flex absolute">
            {activeBullets.map((_, index) => (
              <div
                key={index}
                className="w-[8px] h-[8px] rounded-full bg-[#FFFFFF]"
              ></div>
            ))}
          </div>
        </div>
      </div>

      {attentionText && (
        <p className="mt-[9px] text-[8px] leading-[10px]">{attentionText}</p>
      )}

      {toDo && toDo.length > 0 && (
        <div>
          <p className="text-[11px] leading-[14px]">To Do</p>
          <ul className="list-disc list-outside">
            {toDo.map((item, index) => (
              <li key={index} className="flex gap-[3px] items-center">
                <ListCircle />
                <p className="text-[8px] leading-[10px]">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

StaticCard.propTypes = {
  tags: PropTypes.array,
  gradient1: PropTypes.string,
  gradient2: PropTypes.string,
  textColor: PropTypes.string,
  title: PropTypes.string,
  activeBulletsNum: PropTypes.number,
  attentionText: PropTypes.string,
  toDo: PropTypes.array, 
};

StaticCard.defaultProps = {
  tags: [],
  gradient1: '#FFFFFF',
  gradient2: '#FFFFFF',
  textColor: '#000000',
  title: 'Untitled',
  activeBulletsNum: 0,
  attentionText: '',
  toDo: [],
};

export default StaticCard;
