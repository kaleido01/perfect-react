import React from "react";

import Person from "./Person/Person";
class Persons extends React.Component {
	render() {
		return this.props.persons.map((person, index) => {
			return (
				<Person
					click={() => this.props.clicked(index)}
					name={person.name}
					age={person.age}
					changed={event => this.props.changed(event, person.id)}
				/>
			);
		});
	}
}

export default Persons;
