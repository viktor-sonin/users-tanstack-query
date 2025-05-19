interface IProps {
	className?: string;
}

export const SVG_Edit = ({ className }: IProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className={className}>
			<path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
		</svg>
	);
};

export const SVG_Trash = ({ className }: IProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className={className}>
			<path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
		</svg>
	);
};

export const SVG_Back = ({ className }: IProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className={className}>
			<path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" />
		</svg>
	);
};

export const SVG_ArrowDown = ({ className }: IProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className={className}>
			<path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
		</svg>
	);
};

export const SVG_Loading = ({ className }: IProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className={className}>
			<path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z" />
		</svg>
	);
};
