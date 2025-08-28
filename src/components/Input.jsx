import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">
                {label}
            </label>
            {textarea ? (
                <textarea
                    className="w-full rounded px-2 py-1 bg-stone-200"
                    ref={ref}
                    {...props}
                />
            ) : (
                <input
                    className="w-full rounded px-2 py-1 bg-stone-200"
                    ref={ref}
                    {...props}
                />
            )}
        </p>
    );
});

export default Input;
