export default function SensorCheckboxGroup({ ids, onCheck }) {
	return (
	  <div className="flex flex-col gap-2">
		{ids.map(id => (
		  <label key={id}>
			<input
			  type="checkbox"
			  id={id}
			  onChange={onCheck}
			  className="mr-2"
			/>
			Sensor {id}
		  </label>
		))}
	  </div>
	);
  }
  