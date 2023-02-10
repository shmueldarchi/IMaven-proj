import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';


function QuestionNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div >
      <Handle type="target" position={Position.Top} />
      <div style={{width:"30px", height:"30px"}}>
        <div contentEditable>try to yooooo{data.name? data.name : "fefdf" }</div>
        <div contentEditable>{data.icon? data.icon : "ererer" }</div>
        <input id="text" name="text" onChange={onChange} />
      </div>
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
} 

export default QuestionNode;
