'use client';

import { useState } from 'react';
import { createCheckoutSession } from '@/actions/payment';

interface Props {
  planId: string;
  label: string;
  className?: string;
}

export default function PayButton({ planId, label, className }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = async () => {
    setLoading(true);
    setError('');

    const result = await createCheckoutSession(planId);

    if (result.url) {
      window.location.href = result.url;
    } else {
      setError(result.error || '支付初始化失败');
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={loading}
        className={className}
      >
        {loading ? (
          <><i className="fa-solid fa-spinner fa-spin mr-2" />跳转中…</>
        ) : (
          label
        )}
      </button>
      {error && (
        <p className="text-red-500 text-xs mt-2">{error}</p>
      )}
    </div>
  );
}
