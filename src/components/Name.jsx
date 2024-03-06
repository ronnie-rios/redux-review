import { useDispatch, useSelector } from "react-redux"
import { nameActions } from "../store/nameSlice"

const Name = () => {
  const nameSlice = useSelector(state => state.nameSlice)
  const dispatch = useDispatch()

  const submitHandler =(e) => {
    e.preventDefault()
    dispatch(nameActions.getFullName()) //looks very java-y
  }


  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>first name</label>
         <input 
          type="text" 
          value={nameSlice.firstName} 
          onChange={e => dispatch(nameActions.getFirstName(e.target.value))} 
        />
        <label>last name</label>
        <input 
          type="text" 
          value={nameSlice.lastName} 
          onChange={e => dispatch(nameActions.getLastName(e.target.value))} 
        />
       <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Name