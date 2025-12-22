'use client'

import { useEffect, useRef, useState } from 'react'
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
  mode?: 'inline' | 'dropdown' // New prop to control display mode
}

const MultiSelectFilter = ({
  label,
  options,
  selected,
  onChange,
  placeholder = 'Select options',
  mode = 'inline'
}: MultiSelectFilterProps) => {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Ensure component only renders after client-side hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const toggleValue = (value: string) => {
    onChange(
      selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value]
    )
  }

  const clear = () => {
    onChange([])
  }

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
        {mode === 'inline' && (
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
        )}
      </div>
    )
  }

  // Dropdown mode
  if (mode === 'dropdown') {
    return (
      <div className="relative" ref={dropdownRef}>
        <div
          className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1">
              <p className="text-sm font-semibold text-[#333]">{label}</p>
              <p className="text-xs text-[#666]">
                {selected.length > 0
                  ? `${selected.length} selected`
                  : placeholder}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {selected.length > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    clear()
                  }}
                  className="text-xs font-medium text-[#007bff] hover:text-[#0056b3] transition-colors"
                >
                  Clear
                </button>
              )}
              <svg
                className={`w-5 h-5 text-[#666] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-64 overflow-y-auto">
            <div className="p-2">
              {options.map((option) => {
                const isChecked = selected.includes(option.value)
                return (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleValue(option.value)}
                      className="w-4 h-4 text-[#007bff] border-gray-300 rounded focus:ring-[#007bff] focus:ring-2"
                    />
                    <span className="text-sm text-[#333] flex-1">{option.label}</span>
                  </label>
                )
              })}
            </div>
          </div>
        )}
      </div>
    )
  }

  // Inline mode (original behavior)
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
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-all ${isActive
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

