interface FWButtonProps {
  width: number;
  bgOne: string;
  bgTwo: string;
  textOne: string;
  textTwo: string;
  borderColor: string;
  textContent: string;
}

export default function FWButtonComponent({
  width,
  bgOne,
  bgTwo,
  textOne,
  textTwo,
  borderColor,
  textContent,
}: FWButtonProps) {
  return (
    <div
      style={{ width: `${width}px`, border: `1px solid ${borderColor}` }}
      className={`overflow-hidden h-[45px] active:scale-95 group`}
    >
      <div
        style={{ backgroundColor: `${bgOne}`, color: `${textOne}` }}
        className={`group-hover:-translate-y-[45px] transition-all duration-500 ease-custom transform`}
      >
        <span className={`flex items-center h-[45px] justify-center`}>
          <p className={`text-sm uppercase font-bold`}>
            {textContent}
          </p>
        </span>
      </div>
      <div
        style={{ backgroundColor: `${bgTwo}`, color: `${textTwo}` }}
        className={`group-hover:-translate-y-[45px] transition-all duration-500 ease-custom transform`}
      >
        <span className={`flex h-[45px] items-center justify-center`}>
          <p className={`text-sm uppercase font-bold`}>
            {textContent}
          </p>
        </span>
      </div>
    </div>
  );
}
