interface Info {
	desc: string;
	isActive: boolean;
}

interface Tag {
	name: string;
	value: number;
}

interface Reaply {
	userId: number;
	id: number;
	title: string;
	info: Info;
	tags: Tag[];
}

