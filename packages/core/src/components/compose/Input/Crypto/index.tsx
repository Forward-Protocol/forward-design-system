import React, {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@forward-protocol/ui-icons';
import clsx from 'clsx';
import NumberFormat, { NumberFormatValues } from 'react-number-format';

import { Input } from '../../../base';

import styles from './index.module.scss';

export interface IInputCryptoProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'size' | 'onChange' | 'value' | 'defaultValue' | 'max'
  > {
  className?: string;
  /**
   * L - 40px (desktop) / 48px (mobile)
   *
   * M - 32px (desktop) / 36px (mobile)
   *
   * S - 24px (desktop) / 36px (mobile)
   *
   * @default 'L'
   */
  size?: 'L' | 'M' | 'S';
  /**
   * @default 'crypto'
   */
  variant?: 'crypto' | 'fiat';
  currency?: string;
  symbol?: string;
  maxValue?: string;
  hasMax?: boolean;
  canChange?: boolean;
  decimal?: number;
  onSelectMax?: () => void;
  onChange?: (value: string) => void;
  onSelectChange?: (isExpanded: boolean) => void;
}

const Crypto = forwardRef<HTMLInputElement | null, IInputCryptoProps>(
  // eslint-disable-next-line complexity
  (
    {
      className,
      currency = '$',
      size = 'L',
      decimal = 2,
      symbol = 'BTC',
      variant = 'crypto',
      placeholder,
      maxValue,
      hasMax = false,
      canChange = false,
      onSelectChange,
      onSelectMax,
      onChange,
      ...props
    },
    ref
  ) => {
    const DEFAULT_PLACEHOLDER = `0.${'0'.repeat(decimal)}`;
    const DEFAULT_CRYPTO_PLACEHOLDER = `${DEFAULT_PLACEHOLDER} ${
      variant === 'crypto' && hasMax ? symbol : ''
    }`;

    const [value, setValue] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isExpanded, setExpanded] = useState<boolean>(false);

    const handleSelectMax = () => {
      setValue(maxValue ?? '');
      if (onSelectMax) onSelectMax();
    };

    const handleSelectChange = () => {
      setExpanded(!isExpanded);
    };

    const handleChange = (values: NumberFormatValues) => {
      setValue(values.value);
    };

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    useEffect(() => {
      if (onSelectChange) onSelectChange(isExpanded);
    }, [isExpanded, onSelectChange]);

    useEffect(() => {
      if (onChange) onChange(value);
    }, [value, onChange]);

    return (
      <NumberFormat
        thousandSeparator=","
        customInput={Input}
        decimalScale={decimal}
        fixedDecimalScale={true}
        allowNegative={false}
        getInputRef={ref}
        startAdornment={variant === 'fiat' ? currency : ''}
        size={size}
        value={value}
        onValueChange={handleChange}
        className={clsx(styles.input, className)}
        placeholder={
          placeholder ?? isFocused
            ? DEFAULT_PLACEHOLDER
            : DEFAULT_CRYPTO_PLACEHOLDER
        }
        onFocus={handleFocus}
        onBlur={handleBlur}
        endAdornment={
          <div className={styles.suffix}>
            <div
              className={clsx(styles.symbol, {
                [styles.not_focused]:
                  !isFocused && hasMax && variant === 'crypto',
              })}
            >
              {symbol}
            </div>
            {hasMax && (
              <button
                onClick={handleSelectMax}
                type="button"
                className={styles.max}
              >
                MAX
              </button>
            )}
            {canChange && (
              <button
                type="button"
                onClick={handleSelectChange}
                className={styles.change}
              >
                {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </button>
            )}
          </div>
        }
        {...props}
      />
    );
  }
);

Crypto.displayName = 'Crypto';

export default Crypto;
