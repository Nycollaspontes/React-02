import { ChangeEvent } from "react";
import { useTask } from "../../context/task.context";
import { Input } from "../../screens/ListView/ListView.styles"


export const SearchTerm = () => {
  const { searchTerm, setSearchTerm } = useTask()

  return (
    <Input
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      placeholder="Pesquise sua tarefa"
    />
  )
}

export default SearchTerm;