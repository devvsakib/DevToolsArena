import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const EventTransform = ({ id, x, y, label, color }) => (
  <g transform={`translate(${x},${y})`} id={id}>
    <rect width="120" height="60" rx="5" fill={color} />
    <text x="60" y="30" textAnchor="middle" fill="white">{label}</text>
  </g>
);

const Trigger = ({ id, x, y, label, color }) => (
  <g transform={`translate(${x},${y})`} id={id}>
    <rect width="120" height="60" rx="5" fill={color} />
    <text x="60" y="30" textAnchor="middle" fill="white">{label}</text>
  </g>
);

const Connection = ({ startX, startY, endX, endY, gradientId }) => (
  <path
    d={`M${startX},${startY} C${(startX + endX) / 2},${startY} ${(startX + endX) / 2},${endY} ${endX},${endY}`}
    fill="none"
    stroke={`url(#${gradientId})`}
    strokeWidth="2"
  />
);

const Flow = () => {
  const [nodes, setNodes] = useState([
    { id: uuidv4(), type: 'eventTransform', x: 100, y: 50, label: 'Event', color: 'red' },
    { id: uuidv4(), type: 'eventTransform', x: 100, y: 200, label: 'Event', color: 'blue' },
    { id: uuidv4(), type: 'eventTransform', x: 100, y: 400, label: 'Event', color: 'green' },
    { id: uuidv4(), type: 'trigger', x: 400, y: 300, label: 'Trigger', color: 'orange' },
  ]);

  const [connections, setConnections] = useState([]);

  // Dynamically calculate the connections once the nodes are set up
  useEffect(() => {
    const newConnections = nodes.slice(0, nodes.length - 1).map((node, index) => ({
      start: node.id,
      end: nodes[index + 1].id,
      gradientId: `grad-${node.id}-${nodes[index + 1].id}`,
    }));

    setConnections(newConnections); // Update the state with new connections
  }, [nodes]); // Trigger this effect whenever nodes change

  return (
    <svg width="800" height="600" style={{ background: '#333' }}>
            {/* Render nodes */}
            {nodes.map(node =>
        node.type === 'eventTransform'
          ? <EventTransform key={node.id} {...node} />
          : <Trigger key={node.id} {...node} />
      )}
      <defs>
        {connections.map(conn => {
          const startNode = nodes.find(n => n.id === conn.start);
          const endNode = nodes.find(n => n.id === conn.end);

          return (
            <linearGradient key={conn.gradientId} id={conn.gradientId}>
              <stop offset="0%" stopColor={startNode.color} />
              <stop offset="100%" stopColor={endNode.color} />
            </linearGradient>
          );
        })}
      </defs>

      {/* Render connections before nodes */}
      {connections.map(conn => {
        const start = nodes.find(n => n.id === conn.start);
        const end = nodes.find(n => n.id === conn.end);
        return (
          <Connection
            key={`${conn.start}-${conn.end}`}
            startX={start.x + 60} startY={start.y + 30}
            endX={end.x + 60} endY={end.y + 30}
            gradientId={conn.gradientId}
          />
        );
      })}


    </svg>
  );
};

export default Flow;
