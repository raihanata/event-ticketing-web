import Select from "react-dropdown-select"



const CustomDropdown = ({ options, onChange }) => {

  const handleChange = (values) => {
    onChange()
    this.setValues(values)
  }

  return (
   <Select 
   options={options} 
   onChange={handleChange}
   style={{ background: 'red', borderRadius: 10, padding: '20px 30px'}} 
   />
  )
}

export default CustomDropdown