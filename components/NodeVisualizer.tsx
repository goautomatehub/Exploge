
import React, { useEffect, useState, useMemo } from 'react';
import { 
  Cpu, 
  Settings, 
  MessageSquare, 
  Workflow, 
  CreditCard, 
  Database, 
  Users, 
  FileText,
  LucideIcon
} from 'lucide-react';

interface Node {
  id: string;
  name: string;
  x: number;
  y: number;
  type: 'core' | 'app' | 'relay';
  icon: LucideIcon;
}

interface Link {
  source: string;
  target: string;
}

export const NodeVisualizer: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  const nodes: Node[] = useMemo(() => [
    { id: 'EXPLOGE', name: 'EXPLOGE', x: 50, y: 50, type: 'core', icon: Cpu },
    { id: 'PLANNING', name: 'STRATEGY', x: 15, y: 20, type: 'app', icon: Settings },
    { id: 'COMMUNICATION', name: 'SUPPORT', x: 85, y: 20, type: 'app', icon: MessageSquare },
    { id: 'WORKFLOW', name: 'MANAGEMENT', x: 10, y: 75, type: 'app', icon: Workflow },
    { id: 'FINANCE', name: 'ACCOUNTS', x: 90, y: 75, type: 'app', icon: CreditCard },
    { id: 'PROJECTS', name: 'OPERATIONS', x: 50, y: 88, type: 'app', icon: Database },
    { id: 'CRM', name: 'CLIENT LIST', x: 22, y: 45, type: 'relay', icon: Users },
    { id: 'DOCS', name: 'REPORTS', x: 78, y: 55, type: 'relay', icon: FileText },
  ], []);

  const links: Link[] = useMemo(() => [
    { source: 'PLANNING', target: 'EXPLOGE' },
    { source: 'COMMUNICATION', target: 'EXPLOGE' },
    { source: 'WORKFLOW', target: 'EXPLOGE' },
    { source: 'FINANCE', target: 'EXPLOGE' },
    { source: 'PROJECTS', target: 'EXPLOGE' },
    { source: 'CRM', target: 'PLANNING' },
    { source: 'DOCS', target: 'COMMUNICATION' },
    { source: 'CRM', target: 'EXPLOGE' },
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick(t => t + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getBoxyPath = (source: Node, target: Node) => {
    const midY = (source.y + target.y) / 2;
    return `M ${source.x} ${source.y} L ${source.x} ${midY} L ${target.x} ${midY} L ${target.x} ${target.y}`;
  };

  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-visible">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 blur-[100px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-black/5 blur-[120px] rounded-full"></div>
      </div>

      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible preserve-3d">
        {links.map((link, i) => {
          const source = nodes.find(n => n.id === link.source)!;
          const target = nodes.find(n => n.id === link.target)!;
          const pathData = getBoxyPath(source, target);
          const isRelated = hoveredNode === link.source || hoveredNode === link.target;
          
          return (
            <g key={`link-${i}`}>
              {/* Background Path */}
              <path
                d={pathData}
                fill="none"
                stroke={isRelated ? "rgba(32,188,97,0.15)" : "rgba(0,0,0,0.03)"}
                strokeWidth="0.4"
                className="transition-colors duration-500"
              />
              
              {/* Animated Line Segment (Streaming Lines) */}
              <path
                d={pathData}
                fill="none"
                stroke="#20bc61"
                strokeWidth="0.6"
                strokeDasharray="6, 24"
                strokeLinecap="round"
                className="filter drop-shadow-[0_0_2px_#20bc61]"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="30"
                  to="0"
                  dur={`${1.5 + (i % 2)}s`}
                  repeatCount="indefinite"
                />
              </path>

              <path
                d={pathData}
                fill="none"
                stroke="#20bc61"
                strokeWidth="0.6"
                strokeDasharray="4, 26"
                strokeLinecap="round"
                className="opacity-40"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="30"
                  dur={`${2 + (i % 2)}s`}
                  repeatCount="indefinite"
                />
              </path>
            </g>
          );
        })}

        {nodes.map((node) => {
          const isHovered = hoveredNode === node.id;
          const isCore = node.type === 'core';
          const Icon = node.icon;
          
          return (
            <g 
              key={node.id} 
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer group"
            >
              {isCore ? (
                <g>
                  <rect
                    x={node.x - 5}
                    y={node.y - 5}
                    width="10"
                    height="10"
                    rx="1"
                    ry="1"
                    fill="#20bc61"
                    className="transition-colors duration-300"
                  />
                  <foreignObject
                    x={node.x - 3}
                    y={node.y - 3}
                    width="6"
                    height="6"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Icon className="w-full h-full text-white" strokeWidth={2.5} />
                    </div>
                  </foreignObject>
                  <rect
                    x={node.x - 6}
                    y={node.y - 6}
                    width="12"
                    height="12"
                    rx="1.2"
                    ry="1.2"
                    fill="none"
                    stroke="#20bc61"
                    strokeWidth="0.3"
                    className="animate-pulse"
                  />
                </g>
              ) : (
                <g>
                  <rect
                    x={node.x - 4}
                    y={node.y - 4}
                    width="8"
                    height="8"
                    rx="0.8"
                    ry="0.8"
                    fill="#20bc61"
                    stroke="rgba(0,0,0,0.08)"
                    strokeWidth="0.2"
                    className="transition-all duration-300"
                  />
                  <foreignObject
                    x={node.x - 2}
                    y={node.y - 2}
                    width="4"
                    height="4"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Icon className="w-full h-full text-white" strokeWidth={2} />
                    </div>
                  </foreignObject>
                </g>
              )}

              <g className={`transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>
                <text
                  x={node.x}
                  y={node.y + (isCore ? 10 : 8)}
                  textAnchor="middle"
                  className="mono text-[2.5px] font-black uppercase tracking-widest fill-black"
                >
                  {node.name}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
