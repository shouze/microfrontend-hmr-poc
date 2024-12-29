import ReactDOM from 'react-dom/client';
import HelloWorld from './HelloWorld';

if (__DEV__) {
  // @ts-expect-error TS2307
  const runtime = await import('/@react-refresh');
  runtime.default.injectIntoGlobalHook(window);
}

class HelloWorldElement extends HTMLElement {
  root?: ReactDOM.Root;

  connectedCallback() {
    this.root = ReactDOM.createRoot(this);
    this.root.render(<HelloWorld />);
  }

  disconnectedCallback() {
    this.root?.unmount();
  }
}

if (!customElements.get('hello-world')) {
  customElements.define('hello-world', HelloWorldElement);
}