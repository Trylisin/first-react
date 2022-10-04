import React, { Component } from "react";

class Table extends Component {
    render() {
        const { charactersData, removeCharacter } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody charactersData={charactersData} removeCharacter={removeCharacter}/>
                {/* <TableBody /> */}
            </table>
        );
    }
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
};

const TableBody = (props) => {
    const bodyRows = props.charactersData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        );
    });

    return <tbody>{bodyRows}</tbody>;
};


export default Table;
