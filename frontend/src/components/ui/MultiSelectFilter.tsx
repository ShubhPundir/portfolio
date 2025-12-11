'use client'

import { useEffect, useState } from 'react'
// This fixed the hydration mismatch error
// FIXME: Find a better solution for this
// FIXME: Make a common component for filters and pass in values as props
type Option = {
  label: string
  value: string
}

interface MultiSelectFilterProps {
  label: string
  options: Option[]
  selected: string[]
  onChange: (values: string[]) => void
  placeholder?: string
}

const MultiSelectFilter = ({
  label,
  options,
  selected,
  onChange,
  placeholder = 'Select options'
}: MultiSelectFilterProps) => {
  const [mounted, setMounted] = useState(false)

  // Ensure component only renders after client-side hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleValue = (value: string) => {
    onChange(
      selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value]
    )
  }

  const clear = () => onChange([])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[#333]">{label}</p>
            <p className="text-xs text-[#666]">{placeholder}</p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              disabled
              className="rounded-full border px-3 py-1 text-xs font-medium transition-all border-gray-200 bg-gray-50 text-[#555]"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[#333]">{label}</p>
          <p className="text-xs text-[#666]">
            {selected.length > 0
              ? `${selected.length} selected`
              : placeholder}
          </p>
        </div>
        {selected.length > 0 && (
          <button
            onClick={clear}
            className="text-xs font-medium text-[#007bff] hover:text-[#0056b3] transition-colors"
          >
            Clear
          </button>
        )}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = selected.includes(option.value)
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => toggleValue(option.value)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                isActive
                  ? 'border-[#007bff] bg-[#007bff]/10 text-[#007bff] shadow-sm'
                  : 'border-gray-200 bg-gray-50 text-[#555] hover:border-[#007bff]/40 hover:bg-[#007bff]/5'
              }`}
            >
              {option.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export type { Option }
export default MultiSelectFilter

