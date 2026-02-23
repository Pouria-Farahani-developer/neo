"use client"
import React from 'react';
import useCounterStore from "@/lib/store/useCounterStore";

export default function CounterDisplay() {
    const count = useCounterStore(state => state.count);

    return (
        <div style={{
            border: '2px solid #10b981', // سبز
            padding: '20px',
            marginBottom: '25px',
            borderRadius: '10px',
            backgroundColor: '#ecfdf5'
        }}>
            <h2 style={{ color: '#065f46', margin: '0 0 10px 0' }}>نمایشگر شمارنده</h2>
            <p style={{ fontSize: '1.5em', margin: '0' }}>
                مقدار فعلی: <strong style={{ fontSize: '2em', color: '#065f46' }}>{count}</strong>
            </p>
        </div>
    );
}
