"use client"
import React, { useState } from 'react';
import {useUserMutations} from "@/services/src/hooks/bill/post-user-list/post-user-list";


function UserCreationForm() {
    const { mutate , isPending , isError , isSuccess , error} = useUserMutations();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        mutate(formData, {
            onSuccess: (data) => {
                console.log("User created successfully (from component):", data);
            },
            onError: (err) => {
                console.error("Failed to create user (from component):", err);
            }
        });
    };


    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>ایجاد کاربر جدید</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    disabled={isPending}
                />
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    type="email"
                    required
                    disabled={isPending}
                />
                <input
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    required
                    disabled={isPending}
                />

                <button
                    type="submit"
                    disabled={isPending}
                    style={{ padding: '10px', backgroundColor: isPending ? '#aaa' : 'blue', color: 'white', border: 'none', cursor: isPending ? 'not-allowed' : 'pointer' }}
                >
                    {isPending ? 'در حال ارسال...' : 'ارسال به API'}
                </button>
            </form>

            <div style={{ marginTop: '15px' }}>
                {isError && <p style={{ color: 'red' }}>خطا در ارسال: {error?.message}</p>}
                {isSuccess && <p style={{ color: 'green' }}>✅ کاربر با موفقیت اضافه شد و لیست رفرش شد.</p>}
            </div>
        </div>
    );
}

export default UserCreationForm;
