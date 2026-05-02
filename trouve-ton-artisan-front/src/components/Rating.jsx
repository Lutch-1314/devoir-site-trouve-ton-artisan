import Star from "./Star";

const Rating = ({ value, max = 5 }) => {
  return (
    <div className="rating">
      {Array.from({ length: max }).map((_, i) => {
        let fill = 0;
        if (value >= i + 1) fill = 100;
        else if (value > i) fill = (value - i) * 100;
        else fill = 0;

        return <Star key={i} fillPercentage={fill} />;
      })}
    </div>
  );
};

export default Rating;
