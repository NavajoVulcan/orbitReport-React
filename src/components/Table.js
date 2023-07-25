const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {sat.map((sat, index) => (
             <tr key={index}>
         <td>{sat.name}</td>
          <td>{sat.type}</td>
          <td>{sat.launchDate}</td>
          <td>{sat.operational ? "Active" : "Inactive" }</td>
          </tr>
          ))};
        </tbody>
      </table>
  );
};

export default Table;