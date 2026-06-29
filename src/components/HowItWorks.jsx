const steps = [
  {
    num: '01',
    title: 'Choose Template',
    desc: 'Pick a pre-configured framework and pair it with the right GPU for your ML workload.',
    tags: [['PyTorch'], ['TensorFlow'], ['ComfyUI', 'purple'], ['Automatic1111', 'purple']],
  },
  {
    num: '02',
    title: 'Configure Resources',
    desc: 'Select GPU type, count, and storage. Scale from a single GPU to a multi-GPU cluster.',
    tags: [['H100'], ['A6000'], ['A100'], ['RTX 6000 Ada'], ['20GB–2TB', 'green']],
  },
  {
    num: '03',
    title: 'Launch Instance',
    desc: 'One click and your fully configured environment is ready in under 90 seconds.',
    tags: [['One-click launch', 'green'], ['Preconfigured env', 'green']],
  },
  {
    num: '04',
    title: 'Development Tools',
    desc: 'Multiple access methods to work your way. Install anything you need.',
    tags: [['JupyterLab'], ['VS Code Web'], ['SSH Access'], ['IDE Connect', 'purple']],
  },
  {
    num: '05',
    title: 'Deploy Apps',
    desc: 'Ship APIs, web apps, and ML models to production.',
    tags: [['Gradio', 'purple'], ['Streamlit', 'purple'], ['FastAPI'], ['Custom Endpoints', 'green']],
  },
];

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-label">How it works</div>
        <h2 className="section-title">Launch AI Workspaces<br />in Minutes</h2>
        <p className="section-desc">From template to production in five steps. No hardware hassles — just pure computational power on-demand.</p>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.num}>
              <div className="step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <div className="step-tags">
                {step.tags.map(([label, variant]) => (
                  <span className={`tag${variant ? ' ' + variant : ''}`} key={label}>{label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
