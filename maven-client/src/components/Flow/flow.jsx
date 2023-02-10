import { useState, useCallback, useEffect } from 'react';
import ReactFlow, { MiniMap, Controls, applyEdgeChanges, applyNodeChanges,updateEdge,addEdge } from 'react-flow-renderer';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {nodeTypes} from '../Nodes/nodes';
import { openpopup } from '../../features/popup-connector';

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Input Node' },
        position: { x: 250, y: 25 },
    },

    {
        id: '2',
        // you can also pass a React component as a label
        data: { label: <div>Default Node</div> },
        position: { x: 100, y: 125 },
    },
    {
        id: '3',
        type: 'output',
        data: { label: 'Output Node' },
        position: { x: 250, y: 250 },
    },
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3', animated: true },
];

function Flow() {

    useEffect(() => { initialFlow() }, [])

    //useEffect(() => { addCircleHandler}, [tamplatePopup])
    const dispatch = useDispatch()

    const location = useLocation();

    const queriesList = useSelector(((state) => state.queries.value));

    const tamplatePopup = useSelector(((state) => state.queries.value));

    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);
    const [rfInstance, setRfInstance] = useState(null);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );

    const handleNodeClick = nodeId => {
        console.log(`Node ${nodeId} was clicked!`);
      };
      
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );
    const connectHandler = (params) => {
        console.log('checking');
        dispatch(openpopup({ isOpen: true }));
        setEdges((prev) => addEdge(params, prev));
      };


    const onSave = useCallback(() => {
        if (rfInstance) {
          const flow = rfInstance.toObject();
          localStorage.setItem(nodes, JSON.stringify(flow));
        }
      }, [rfInstance]);

    const initialFlow = () => {
        debugger;
        const id = location?.state?.id;
        const query = queriesList.queries.map((query) => {
            if (query.id == id) return query;
        });
        if(query.length>0)
        {
            query[0]?.questions.map((question)=>{
              console.log(question.icon)  
            })
        }
        setNodes(query[0]?.questions);
    }
    return <ReactFlow
    nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        nodesDraggable={true}
        nodesConnectable={true}
     onConnect={connectHandler}
        elementsSelectable={true}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onInit={setRfInstance}
        onNodeClick={handleNodeClick} 
    >
        <MiniMap />
        <Controls />
        <div className="save__controls">
        <button onClick={onSave}>save</button>
      </div>
    </ReactFlow>;
}

export default Flow;