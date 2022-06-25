import { FC } from "react";

interface Props {
  date: Date;
}

const Date: FC<Props> = ({ date }) => <>{date.toLocaleDateString()}</>;
export default Date;
