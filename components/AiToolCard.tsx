import type { AiTool } from '@/lib/portfolio-data';

export function AiToolCard({ tool }: { tool: AiTool }) {
  return (
    <article className="card aiTool motionCard" data-reveal>
      <div className="toolMeta">
        <img src={tool.icon} alt={`${tool.name} logo`} />
        {'category' in tool ? <span>{tool.category}</span> : null}
      </div>
      <h3>{tool.name}</h3>
      <p>{tool.desc}</p>
    </article>
  );
}
