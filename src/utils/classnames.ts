interface IClassDictionary {
	[name: string]: boolean | null | undefined;
}

type IClassValue = string | IClassDictionary;

export const classnames = (...args: IClassValue[]) => {
	let classNames = "";

	for (let i = 0; i < args.length; i++) {
		const name = args[i];

		if (!name) continue;

		if (typeof name === "string") {
			classNames += ` ${args[i]}`;
		}

		if (typeof name === "object") {
			const obj = args[i] as IClassDictionary;

			Object.keys(obj).forEach((name) => {
				if (obj[name]) {
					classNames += ` ${name}`;
				}
			});
		}
	}

	return classNames.trim();
};
