import { create } from 'zustand'
import {Store} from "@/lib/store/types/types";


const useStore = create<Store>()((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
}))

export default useStore;