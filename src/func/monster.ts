//utöka så alla egenskaper för monstret skrivs ut

type Monster = {
	name:string;
	age:number;
	tentacles:number;
	eyes:number;
	hasWings:boolean;
}

let monsterId:number = 0;
export const prettyPrintMonster = (monster: Monster) => {
	console.log("--\n")
	monsterId ++
	return console.log(`${monsterId}: ${monster.name.toUpperCase()} är ${monster.age} år gammal.\nMed ${monster.tentacles} tentakler ${monster.eyes} och ögon.\n`)
};

// Funktion för att beräkna genomsnittlig ålder på monster
export const averageMonsterAge = (monsters: Monster[]): number => {
	const totalAge = monsters.reduce((sum, monster) => sum + monster.age, 0);
	return Math.floor(monsters.length > 0 ? totalAge / monsters.length : 0);
};

export const averageNumberOfTentacles = (monsters:Monster[]): number => {
	const totalTentacles = monsters.reduce((sum, monster) => sum + monster.tentacles, 0);
	return Math.floor(monsters.length > 0 ? totalTentacles / monsters.length : 0);
};

export const numberOfMonstersWithWings = (monsters: Monster[]): number => {
	return monsters.filter(monster => monster.hasWings).length;
};

export const getAllNoWingedMonster = (monsters: Monster[]) => {
	return monsters.filter(monster => !monster.hasWings).length;
};
