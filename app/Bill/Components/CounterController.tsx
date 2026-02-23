"use client"
import React from 'react';
import useCounterStore from "@/lib/store/useCounterStore";

export default function CounterControls() {
    const { increment, decrement, reset } = useCounterStore((state) => ({
        increment: state.increment,
        decrement: state.decrement,
        reset: state.reset,
    }));

    const buttonBaseStyle: React.CSSProperties = {
        padding: '10px 15px',
        fontSize: '1em',
        cursor: 'pointer',
        borderRadius: '6px',
        border: 'none',
        transition: 'opacity 0.2s',
        color: 'white',
        fontWeight: 'bold'
    };

    return (
        <div style={{
            border: '2px solid #3b82f6', // آبی
            padding: '20px',
            borderRadius: '10px'
        }}>
            <h2 style={{ color: '#1e3a8a', margin: '0 0 15px 0' }}>کنترل‌ها</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', gap: '10px' }}>

                <button
                    onClick={increment}
                    style={{ ...buttonBaseStyle, backgroundColor: '#3b82f6' }} // آبی
                >
                    افزایش (+)
                </button>

                <button
                    onClick={decrement}
                    style={{ ...buttonBaseStyle, backgroundColor: '#f97316' }} // نارنجی
                >
                    کاهش (-)
                </button>

                <button
                    onClick={reset}
                    style={{ ...buttonBaseStyle, backgroundColor: '#dc2626' }} // قرمز
                >
                    بازنشانی (0)
                </button>
            </div>
        </div>
    );
}
