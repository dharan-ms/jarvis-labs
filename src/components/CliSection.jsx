const features = [
  {
    title: 'Instance Management',
    desc: 'Create, pause, resume, and destroy GPUs from the CLI or Python.',
    code: 'jl create --gpu A100',
  },
  {
    title: 'Managed Runs',
    desc: 'Upload code, install deps, run scripts, stream logs — one command.',
    code: 'jl run train.py --gpu A100',
  },
  {
    title: 'File Transfer & SSH',
    desc: 'Copy files and SSH into instances without leaving your terminal.',
    code: 'jl ssh <id>',
  },
  {
    title: 'Agent-Native',
    desc: 'Let Claude Code, Cursor, or Codex drive GPU experiments.',
    code: 'jl setup',
  },
];

export default function CliSection() {
  return (
    <section className="cli-section" id="cli">
      <div className="container">
        <div className="cli-layout">
          <div>
            <div className="section-label">CLI &amp; SDK</div>
            <h2 className="section-title">Your GPU,<br />Your Terminal</h2>
            <p className="section-desc" style={{ marginBottom: '2.5rem' }}>Manage your entire GPU lifecycle from the command line or Python code.</p>

            <div className="cli-features">
              {features.map((f) => (
                <div className="cli-feature" key={f.title}>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                  <div className="code-snippet">{f.code}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="terminal">
              <div className="term-header">
                <div className="cli-dot" style={{ background: '#ff5f57' }} />
                <div className="cli-dot" style={{ background: '#febc2e' }} />
                <div className="cli-dot" style={{ background: '#28c840' }} />
                <span className="term-title">~/project</span>
              </div>
              <div className="term-body">
                <div className="line"><span className="p">$</span> <span className="c">pip install jarvislabs</span></div>
                <div className="line"><span className="ok">✓</span> <span className="dim2">Collecting jarvislabs...</span></div>
                <div className="line dim2" style={{ color: '#64748b' }}>&nbsp;&nbsp;Installing packages...</div>
                <div className="line"><span className="ok">✓</span> <span className="dim2">Successfully installed</span></div>
                <div className="line">&nbsp;</div>
                <div className="line"><span className="p">$</span> <span className="c">jl create --gpu A100</span></div>
                <div className="line"><span className="dim2">Provisioning A100 instance...</span></div>
                <div className="line"><span className="ok">✓</span> <span className="s">Instance ready in 38s</span></div>
                <div className="line"><span className="s">  ID: inst-4f2a91</span></div>
                <div className="line"><span className="s">  GPU: NVIDIA A100 80GB</span></div>
                <div className="line">&nbsp;</div>
                <div className="line"><span className="p">$</span> <span className="c">jl run train.py --gpu A100</span></div>
                <div className="line"><span className="ok">⠋</span> <span className="dim2">Uploading code &amp; starting training...</span></div>
                <div className="line"><span className="dim2">  [████████░░░░] 67% epoch 3/5</span></div>
                <div className="line"><span className="dim2">  loss: 0.0312 | acc: 97.4%</span><span className="cli-cursor" /></div>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
              <a href="#" className="btn-ghost" style={{ display: 'inline-flex' }}>Explore the CLI →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
