import classnames from 'classnames';

export default function TotalProperties({ numberOfProperty, className = '', strongClasses = '' }) {
  return (
    <div className={classnames('flex', [className])}>
      <strong className={classnames('text-blue text-6xl font-medium', [strongClasses])}>
        {numberOfProperty}
      </strong>
      <p className="text-sm text-gray">Total Properties</p>
    </div>
  );
}
