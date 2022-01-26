export default function ColorSelector(props) {
  const {
    setBoxBackgroundColor
  } = props

  return (
    <div>
      <input
        className="input-color" 
        type="color" 
        id="head" 
        name="head"
        defaultValue={'#ff0000'}
        onChange={(e) => {
          setBoxBackgroundColor(e.target.value)
        }}
      />
    </div>
  )
}