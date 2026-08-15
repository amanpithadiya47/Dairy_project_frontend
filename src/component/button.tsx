import React from 'react'

export default function Button() {
    return (
        <button type="button"
            className="text-sm text-red-700 dark:text-red-500 cursor-pointer hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
            aria-label="Delete John Doe">
            Delete
        </button>
    )
}
