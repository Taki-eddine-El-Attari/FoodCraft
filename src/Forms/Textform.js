export default function Textform({labelname, inputname, children}) {
  return (
    <> 
      <label>{labelname}</label>
      <input type="text" name= {inputname} />
      <div>{children}</div>
    </>
  )
}