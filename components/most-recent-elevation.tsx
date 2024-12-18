type Props = {
  elevation: number|null;
}

export default function MostRecentElevation({elevation} : Props) {
  return (
    <h2>Last calculated elevation is: {elevation || "-"} meters</h2>
  )
}