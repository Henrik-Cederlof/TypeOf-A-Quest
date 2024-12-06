import { User } from "../main";
export const personFinder = (allUsers:User[]): string => {
	let personId:number = 0;
	let names:string = '';
	allUsers.forEach((person) => {
		personId++

		const capitalizeCharAtHobby = person.hobby.map((hobbies) => {
			return hobbies.charAt(0).toUpperCase() + hobbies.slice(1);
		});

		console.log(`${personId}: ${person.name} är ${person.age} år gammal. \nHobbys: \n${capitalizeCharAtHobby.join(',\n')}`)
		
	});
	return names
}

export const averageAge = (allUsers: User[]): number => {
	let allAges:number = 0;
	allUsers.forEach((person) => {
		allAges += person.age;
	});
	return allAges / allUsers.length;
};

export const averageNumberOfHobbies = (allUsers: User[]): number => {
	let AllHobbies:number = 0;
	allUsers.forEach((person) => {
		AllHobbies += person.hobby.length;
	});
	return AllHobbies / allUsers.length;
};




