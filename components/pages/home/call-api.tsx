'use client';

import { useState, useEffect } from 'react';
import client from "@/services/apiClient";
import {AxiosResponse} from "axios";

export default function CallApiPage() {

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response:AxiosResponse = await client.get('/users');
                console.log(response);
            } catch (err: any) {
                console.error("Failed to fetch users:", err);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>User List</h1>
        </div>
    );
}
