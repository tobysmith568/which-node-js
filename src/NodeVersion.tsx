import { FC } from "react";
import Date from "./Date";

interface Props {
	version: string;
	codename?: string;
	until?: Date;
}

const NodeVersion: FC<Props> = ({ version, codename, until }) => {
	return <div>
		<>
			{version}{" "}
			{codename && <>({codename}){" "}</>}
			{until && <>until <Date date={until} /></>}
		</>
	</div>
}
export default NodeVersion;