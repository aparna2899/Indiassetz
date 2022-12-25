import classnames from 'classnames';

export default function TotalProperties({ numberOfProperty, className = '' }) {
  return (
    <div className={classnames('my-8', [className])}>
      <strong className="text-blue text-6xl font-medium">{numberOfProperty}</strong>
      <p className="text-sm text-blue">Total Properties</p>
    </div>
  );
}
