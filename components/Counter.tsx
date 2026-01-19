import React from 'react';

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({
  value,
  suffix = "",
  className = ""
}) => {
  const formattedValue = Intl.NumberFormat('en-US').format(value);

  return (
    <span className={className}>
      <span>{formattedValue}</span>
      {suffix}
    </span>
  );
};
