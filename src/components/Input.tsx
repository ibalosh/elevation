type Props = {
  coordinateType: "latitude" | "longitude";
  onChangeInput: (elevation: number, type: "latitude" | "longitude") => void;
  location: number;
}

export default function Input({coordinateType, location, onChangeInput}: Props) {
  return (
    <input
      name={coordinateType}
      value={location}
      onChange={(e) => onChangeInput(Number(e.target.value), coordinateType)}
      type="number"
      step="0.01"
    />
  )
}